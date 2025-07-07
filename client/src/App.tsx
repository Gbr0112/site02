import { Switch, Route, useLocation } from "wouter";

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

// Componente HOME ultra-simples
function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center", fontSize: "18px" }}>
      <h1 style={{ color: "green", fontSize: "32px" }}>
        🏠 HOME FUNCIONANDO!
      </h1>
      <p>Se você está vendo isso, o React está funcionando.</p>
      
      <div style={{ marginTop: "30px" }}>
        <p><strong>TESTE 1:</strong> Clique no botão abaixo</p>
        <button 
          onClick={() => window.location.href = '/entrar'}
          style={{ 
            padding: "15px 30px", 
            fontSize: "16px", 
            backgroundColor: "blue", 
            color: "white", 
            border: "none", 
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          IR PARA /entrar
        </button>
        
        <button 
          onClick={() => window.location.href = '/criar-site'}
          style={{ 
            padding: "15px 30px", 
            fontSize: "16px", 
            backgroundColor: "green", 
            color: "white", 
            border: "none", 
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          IR PARA /criar-site
        </button>
      </div>
      
      <div style={{ marginTop: "30px" }}>
        <p><strong>TESTE 2:</strong> Digite manualmente na URL:</p>
        <p style={{ fontFamily: "monospace", backgroundColor: "#f0f0f0", padding: "10px" }}>
          {window.location.origin}/entrar<br/>
          {window.location.origin}/criar-site
        </p>
      </div>
    </div>
  );
}

// Componente ENTRAR
function TesteEntrar() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "green", fontSize: "32px" }}>
        ✅ PÁGINA ENTRAR FUNCIONOU!
      </h1>
      <p>Rota /entrar está funcionando corretamente.</p>
      <button 
        onClick={() => window.location.href = '/'}
        style={{ 
          padding: "15px 30px", 
          fontSize: "16px", 
          backgroundColor: "blue", 
          color: "white", 
          border: "none", 
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        VOLTAR PARA HOME
      </button>
    </div>
  );
}

// Componente CRIAR-SITE
function TesteCriarSite() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "green", fontSize: "32px" }}>
        ✅ PÁGINA CRIAR SITE FUNCIONOU!
      </h1>
      <p>Rota /criar-site está funcionando corretamente.</p>
      <button 
        onClick={() => window.location.href = '/'}
        style={{ 
          padding: "15px 30px", 
          fontSize: "16px", 
          backgroundColor: "blue", 
          color: "white", 
          border: "none", 
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        VOLTAR PARA HOME
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Switch>
        <DebugRota />
        <Route path="/" component={Home} />
        <Route path="/entrar" component={TesteEntrar} />
        <Route path="/criar-site" component={TesteCriarSite} />
        <Route>
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h1 style={{ color: "red", fontSize: "32px" }}>
              ❌ 404 - PÁGINA NÃO ENCONTRADA
            </h1>
            <p>A página que você está procurando não existe.</p>
            <p><strong>Rota atual:</strong> {window.location.pathname}</p>
            <button 
              onClick={() => window.location.href = '/'}
              style={{ 
                padding: "15px 30px", 
                fontSize: "16px", 
                backgroundColor: "blue", 
                color: "white", 
                border: "none", 
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              VOLTAR PARA HOME
            </button>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
