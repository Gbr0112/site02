import { Switch, Route, useLocation } from "wouter";
// import { queryClient } from "./lib/queryClient"; // COMENTADO TEMPORARIAMENTE
// import { QueryClientProvider } from "@tanstack/react-query"; // COMENTADO TEMPORARIAMENTE
// import { Toaster } from "@/components/ui/toaster"; // COMENTADO TEMPORARIAMENTE
// import { TooltipProvider } from "@/components/ui/tooltip"; // COMENTADO TEMPORARIAMENTE

// DEBUG: Componente para mostrar a rota atual
function DebugRota() {
  const [location] = useLocation();
  return (
    <div style={{ 
      position: "fixed", 
      top: "10px", 
      right: "10px", 
      background: "black", 
      color: "white", 
      padding: "10px", 
      borderRadius: "5px",
      fontSize: "12px",
      zIndex: 1000
    }}>
      <strong>ROTA ATUAL:</strong> {location}
    </div>
  );
}

// Componente HOME simples
function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "green", fontSize: "24px" }}>
        🎉 ROTEADOR FUNCIONANDO!
      </h1>
      <p>Rota / está funcionando corretamente.</p>
      <div style={{ marginTop: "20px" }}>
        <a href="/entrar" style={{ 
          marginRight: "10px", 
          color: "blue", 
          textDecoration: "underline",
          padding: "10px",
          border: "1px solid blue",
          borderRadius: "5px",
          display: "inline-block"
        }}>
          Testar /entrar
        </a>
        <a href="/criar-site" style={{ 
          color: "blue", 
          textDecoration: "underline",
          padding: "10px",
          border: "1px solid blue",
          borderRadius: "5px",
          display: "inline-block"
        }}>
          Testar /criar-site
        </a>
      </div>
    </div>
  );
}
function TesteEntrar() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "green", fontSize: "24px" }}>
        ✅ PÁGINA ENTRAR FUNCIONOU!
      </h1>
      <p>Rota /entrar está funcionando corretamente.</p>
    </div>
  );
}

function TesteCriarSite() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "green", fontSize: "24px" }}>
        ✅ PÁGINA CRIAR SITE FUNCIONOU!
      </h1>
      <p>Rota /criar-site está funcionando corretamente.</p>
    </div>
  );
}

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <Switch>
            {/* Debug - mostra rota atual */}
            <DebugRota />
            
            {/* Rota principal */}
            <Route path="/" component={Home} />
            
            {/* Rotas de teste - SUBSTITUA depois que funcionar */}
            <Route path="/entrar" component={TesteEntrar} />
            <Route path="/criar-site" component={TesteCriarSite} />
            
            {/* NOVA ROTA PARA TESTAR O REDIRECIONAMENTO */}
            <Route path="/api/login">
              <div style={{ padding: "20px", textAlign: "center" }}>
                <h1 style={{ color: "orange", fontSize: "24px" }}>
                  ⚠️ REDIRECIONAMENTO DETECTADO!
                </h1>
                <p>Você foi redirecionado para /api/login</p>
                <p>Isso significa que algum código está fazendo redirecionamento automático.</p>
                <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
                  Tentar voltar ao início
                </a>
              </div>
            </Route>
            
            {/* Rota 404 - página não encontrada */}
            <Route>
              <div style={{ padding: "20px", textAlign: "center" }}>
                <h1 style={{ color: "red", fontSize: "24px" }}>
                  404 - Página não encontrada
                </h1>
                <p>A página que você está procurando não existe.</p>
                <p><strong>Rota atual:</strong> <span style={{color: "blue"}}>{window.location.pathname}</span></p>
                <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
                  Voltar ao início
                </a>
              </div>
            </Route>
          </Switch>
        </div>
        // <Toaster />
    //   </TooltipProvider>
    // </QueryClientProvider>
  );
}

export default App;
