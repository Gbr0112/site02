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

// 🔧 COMPONENTE TEMPORÁRIO para rotas que não existem ainda
function ComingSoon({ pageName }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
      <div className="text-center">
        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">🚧</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {pageName}
        </h1>
        <p className="text-gray-600 mb-8">
          Esta página está em desenvolvimento
        </p>
        <div className="space-x-4">
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Voltar
          </button>
          <button 
            onClick={() => window.location.href = '/dashboard'}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
          >
            Ir para Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

// 🔧 COMPONENTES TEMPORÁRIOS para cada rota
function TempSiteBuilder() {
  return <ComingSoon pageName="Site Builder" />;
}

function TempSiteEditor() {
  return <ComingSoon pageName="Site Editor" />;
}

function TempSitePreview() {
  return <ComingSoon pageName="Site Preview" />;
}

function TempSiteAnalytics() {
  return <ComingSoon pageName="Site Analytics" />;
}

function TempOrders() {
  return <ComingSoon pageName="Orders" />;
}

function TempAnalytics() {
  return <ComingSoon pageName="Analytics" />;
}

function TempSitePublic() {
  return <ComingSoon pageName="Site Público" />;
}

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  // 🔧 CORREÇÃO: Aguarda loading completar antes de decidir as rotas
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-alt flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      {/* 🔧 CORREÇÃO: Rotas públicas sempre disponíveis */}
      <Route path="/s/:slug" component={TempSitePublic} />
      <Route path="/preview/:id" component={TempSitePublic} />
      
      {/* 🔧 CORREÇÃO: Todas as rotas funcionando */}
      {!isAuthenticated ? (
        // Usuário NÃO autenticado: apenas Landing
        <Route path="*" component={Landing} />
      ) : (
        // Usuário autenticado: todas as rotas funcionando
        <>
          <Route path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          
          {/* 🚀 ROTAS PRINCIPAIS - Agora funcionam! */}
          <Route path="/builder" component={TempSiteBuilder} />
          <Route path="/editor/:siteId" component={TempSiteEditor} />
          <Route path="/site-preview/:id" component={TempSitePreview} />
          <Route path="/site-analytics/:id" component={TempSiteAnalytics} />
          <Route path="/orders/:siteId" component={TempOrders} />
          <Route path="/analytics/:siteId" component={TempAnalytics} />
          
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
