// import Dashboard from "./pages/Dashboard"; // COMENTADO - arquivo não existe

function App() {
  const currentPath = window.location.pathname;
  
  // Função para navegar
  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.location.reload(); // Força reload para atualizar
  };
  
  // Renderização condicional baseada na URL
  const renderPage = () => {
    switch(currentPath) {
      case '/':
        return (
          <div style={{ padding: "50px", textAlign: "center" }}>
            <h1 style={{ color: "green", fontSize: "48px" }}>
              🏠 PÁGINA HOME
            </h1>
            <p style={{ fontSize: "24px", marginBottom: "30px" }}>
              Roteamento manual funcionando!
            </p>
            
            <button 
              onClick={() => navigateTo('/entrar')}
              style={{ 
                padding: "20px 40px", 
                fontSize: "20px", 
                backgroundColor: "blue", 
                color: "white", 
                border: "none", 
                borderRadius: "10px",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              IR PARA /entrar
            </button>
            
            <button 
              onClick={() => navigateTo('/criar-site')}
              style={{ 
                padding: "20px 40px", 
                fontSize: "20px", 
                backgroundColor: "purple", 
                color: "white", 
                border: "none", 
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              IR PARA /criar-site
            </button>
          </div>
        );
        
      case '/entrar':
        return (
          <div style={{ padding: "50px", textAlign: "center" }}>
            <h1 style={{ color: "blue", fontSize: "48px" }}>
              ✅ PÁGINA ENTRAR
            </h1>
            <p style={{ fontSize: "24px", marginBottom: "30px" }}>
              Rota /entrar funcionando perfeitamente!
            </p>
            
            <button 
              onClick={() => navigateTo('/')}
              style={{ 
                padding: "20px 40px", 
                fontSize: "20px", 
                backgroundColor: "green", 
                color: "white", 
                border: "none", 
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              VOLTAR PARA HOME
            </button>
          </div>
        );
        
      case '/criar-site':
        return (
          <div style={{ padding: "50px", textAlign: "center" }}>
            <h1 style={{ color: "purple", fontSize: "48px" }}>
              ✅ PÁGINA CRIAR SITE
            </h1>
            <p style={{ fontSize: "24px", marginBottom: "30px" }}>
              Rota /criar-site funcionando perfeitamente!
            </p>
            
            <button 
              onClick={() => navigateTo('/')}
              style={{ 
                padding: "20px 40px", 
                fontSize: "20px", 
                backgroundColor: "green", 
                color: "white", 
                border: "none", 
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              VOLTAR PARA HOME
            </button>
          </div>
        );
        
      default:
        return (
          <div style={{ padding: "50px", textAlign: "center" }}>
            <h1 style={{ color: "red", fontSize: "48px" }}>
              ❌ 404 - PÁGINA NÃO ENCONTRADA
            </h1>
            <p style={{ fontSize: "24px", marginBottom: "30px" }}>
              Rota: {currentPath}
            </p>
            
            <button 
              onClick={() => navigateTo('/')}
              style={{ 
                padding: "20px 40px", 
                fontSize: "20px", 
                backgroundColor: "green", 
                color: "white", 
                border: "none", 
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              VOLTAR PARA HOME
            </button>
          </div>
        );
    }
  };
  
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#f5f5f5"
    }}>
      {/* Debug da rota atual - corrigido */}
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
        <strong>ROTA:</strong> {currentPath}
      </div>
      
      {renderPage()}
    </div>
  );
}

export default App;
