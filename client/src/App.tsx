import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import { ThemeProvider } from "@/components/theme-provider";
import Landing from "@/pages/landing";
import Dashboard from "@/pages/dashboard";
import SiteBuilder from "@/pages/site-builder";
import SiteEditor from "@/pages/site-editor";
import SitePreview from "@/pages/site-preview";
import SiteAnalytics from "@/pages/site-analytics";
import SitePublic from "@/pages/site-public";
import Orders from "@/pages/orders";
import Analytics from "@/pages/analytics";
import NotFound from "@/pages/not-found";

// Componente de Debug para identificar problemas
function DebugRota() {
  const [location] = useLocation();
  return (
    <div style={{ 
      position: "fixed", 
      top: "10px", 
      right: "10px", 
      background: "rgba(0,0,0,0.8)", 
      color: "white", 
      padding: "8px 12px", 
      borderRadius: "6px",
      fontSize: "12px",
      fontFamily: "monospace",
      zIndex: 1000
    }}>
      ROTA: {location} | AUTH: {useAuth().isAuthenticated ? 'OK' : 'NO'}
    </div>
  );
}

function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  
  // 🔧 CORREÇÃO: Aguarda o carregamento da autenticação
  if (isLoading) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh",
        fontSize: "18px",
        color: "#666"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ 
            width: "40px", 
            height: "40px", 
            border: "4px solid #f3f3f3", 
            borderTop: "4px solid #3498db",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 20px auto"
          }}></div>
          <p>Carregando...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <DebugRota />
      <Switch>
        {/* Public routes - sempre disponíveis */}
        <Route path="/s/:slug" component={SitePublic} />
        <Route path="/preview/:id" component={SitePublic} />
        
        {/* 🔧 CORREÇÃO: Lógica de autenticação simplificada */}
        {!isAuthenticated ? (
          // Usuário NÃO autenticado - só pode ver a Landing
          <Route path="*" component={Landing} />
        ) : (
          // Usuário AUTENTICADO - acesso a todas as páginas
          <>
            <Route path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/builder" component={SiteBuilder} />
            <Route path="/editor/:siteId" component={SiteEditor} />
            <Route path="/site-preview/:id" component={SitePreview} />
            <Route path="/site-analytics/:id" component={SiteAnalytics} />
            <Route path="/orders/:siteId" component={Orders} />
            <Route path="/analytics/:siteId" component={Analytics} />
            <Route path="/landing" component={Landing} />
          </>
        )}
        
        {/* 404 - sempre no final */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
