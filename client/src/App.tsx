import { Switch, Route } from "wouter";
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

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  // 🔧 CORREÇÃO: Aguarda loading completar antes de decidir as rotas
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-alt flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      {/* 🔧 CORREÇÃO: Rotas públicas sempre disponíveis */}
      <Route path="/s/:slug" component={SitePublic} />
      <Route path="/preview/:id" component={SitePublic} />
      
      {/* 🔧 CORREÇÃO: Lógica de autenticação simplificada */}
      {!isAuthenticated ? (
        // Usuário NÃO autenticado: apenas Landing
        <Route path="*" component={Landing} />
      ) : (
        // Usuário autenticado: todas as rotas
        <>
          <Route path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/builder" component={SiteBuilder} />
          <Route path="/editor/:siteId" component={SiteEditor} />
          <Route path="/site-preview/:id" component={SitePreview} />
          <Route path="/site-analytics/:id" component={SiteAnalytics} />
          <Route path="/orders/:siteId" component={Orders} />
          <Route path="/analytics/:siteId" component={Analytics} />
          {/* Permite acesso ao Landing também */}
          <Route path="/landing" component={Landing} />
          <Route component={NotFound} />
        </>
      )}
    </Switch>
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
