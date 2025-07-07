import { useState, useEffect } from 'react';

// Hook personalizado para gerenciar roteamento
function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    // Escuta mudanças no histórico do navegador
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };
  
  return { currentPath, navigateTo };
}

// Componente de Debug
function DebugRota({ currentPath }) {
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
      ROTA: {currentPath}
    </div>
  );
}

// Componente da Página Home
function HomePage({ navigateTo }) {
  return (
    <div style={{ 
      padding: "50px", 
      textAlign: "center", 
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ 
        color: "#2c3e50", 
        fontSize: "48px",
        marginBottom: "30px",
        fontWeight: "bold"
      }}>
        🏠 SISTEMA DE ROTEAMENTO
      </h1>
      
      <p style={{ 
        fontSize: "20px", 
        color: "#7f8c8d",
        marginBottom: "50px",
        maxWidth: "600px",
        margin: "0 auto 50px auto"
      }}>
        Navegação funcionando perfeitamente! Use os botões abaixo ou digite diretamente na URL.
      </p>
      
      <div style={{ 
        display: "flex", 
        gap: "20px", 
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        <button 
          onClick={() => navigateTo('/entrar')}
          style={{
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            minWidth: "160px"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#2980b9"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#3498db"}
        >
          🔐 ENTRAR
        </button>
        
        <button 
          onClick={() => navigateTo('/criar-site')}
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            minWidth: "160px"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#219a52"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#27ae60"}
        >
          ⚡ CRIAR SITE
        </button>
        
        <button 
          onClick={() => navigateTo('/dashboard')}
          style={{
            backgroundColor: "#9b59b6",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            minWidth: "160px"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#8e44ad"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#9b59b6"}
        >
          📊 DASHBOARD
        </button>
      </div>
      
      <div style={{ 
        marginTop: "50px", 
        padding: "20px", 
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        maxWidth: "500px",
        margin: "50px auto 0 auto"
      }}>
        <h3 style={{ color: "#2c3e50", marginBottom: "15px" }}>
          🧪 Teste Manual
        </h3>
        <p style={{ color: "#7f8c8d", fontSize: "14px" }}>
          Digite diretamente na barra de endereços:<br/>
          <code style={{ 
            backgroundColor: "#ecf0f1", 
            padding: "2px 6px", 
            borderRadius: "3px",
            fontSize: "12px"
          }}>
            /entrar | /criar-site | /dashboard
          </code>
        </p>
      </div>
    </div>
  );
}

// Componente da Página Entrar
function EntrarPage({ navigateTo }) {
  return (
    <div style={{ 
      padding: "50px", 
      textAlign: "center", 
      backgroundColor: "#e8f4f8",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ 
        color: "#2980b9", 
        fontSize: "48px",
        marginBottom: "30px"
      }}>
        🔐 PÁGINA DE LOGIN
      </h1>
      
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        margin: "0 auto 30px auto"
      }}>
        <form style={{ textAlign: "left" }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "8px", 
              color: "#2c3e50",
              fontWeight: "bold"
            }}>
              Email:
            </label>
            <input 
              type="email" 
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #bdc3c7",
                borderRadius: "6px",
                fontSize: "16px",
                boxSizing: "border-box"
              }}
              placeholder="seu@email.com"
            />
          </div>
          
          <div style={{ marginBottom: "30px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "8px", 
              color: "#2c3e50",
              fontWeight: "bold"
            }}>
              Senha:
            </label>
            <input 
              type="password" 
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #bdc3c7",
                borderRadius: "6px",
                fontSize: "16px",
                boxSizing: "border-box"
              }}
              placeholder="********"
            />
          </div>
          
          <button 
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              padding: "15px",
              fontSize: "18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#2980b9"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#3498db"}
          >
            ENTRAR
          </button>
        </form>
      </div>
      
      <button 
        onClick={() => navigateTo('/')}
        style={{
          backgroundColor: "#95a5a6",
          color: "white",
          border: "none",
          padding: "12px 25px",
          fontSize: "16px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#7f8c8d"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#95a5a6"}
      >
        🏠 VOLTAR PARA HOME
      </button>
    </div>
  );
}

// Componente da Página Criar Site
function CriarSitePage({ navigateTo }) {
  return (
    <div style={{ 
      padding: "50px", 
      textAlign: "center", 
      backgroundColor: "#e8f5e8",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ 
        color: "#27ae60", 
        fontSize: "48px",
        marginBottom: "30px"
      }}>
        ⚡ CRIAR NOVO SITE
      </h1>
      
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "0 auto 30px auto"
      }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}>
          <div style={{
            border: "2px solid #27ae60",
            padding: "20px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}>
            <h3 style={{ color: "#27ae60", marginBottom: "10px" }}>
              🚀 Site Rápido
            </h3>
            <p style={{ color: "#7f8c8d", fontSize: "14px" }}>
              Template pronto para usar em 5 minutos
            </p>
          </div>
          
          <div style={{
            border: "2px solid #f39c12",
            padding: "20px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}>
            <h3 style={{ color: "#f39c12", marginBottom: "10px" }}>
              🎨 Site Customizado
            </h3>
            <p style={{ color: "#7f8c8d", fontSize: "14px" }}>
              Crie do zero com nosso editor visual
            </p>
          </div>
        </div>
        
        <button 
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#219a52"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#27ae60"}
        >
          COMEÇAR AGORA
        </button>
      </div>
      
      <button 
        onClick={() => navigateTo('/')}
        style={{
          backgroundColor: "#95a5a6",
          color: "white",
          border: "none",
          padding: "12px 25px",
          fontSize: "16px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#7f8c8d"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#95a5a6"}
      >
        🏠 VOLTAR PARA HOME
      </button>
    </div>
  );
}

// Componente da Página Dashboard
function DashboardPage({ navigateTo }) {
  return (
    <div style={{ 
      padding: "50px", 
      textAlign: "center", 
      backgroundColor: "#f4f1f8",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ 
        color: "#8e44ad", 
        fontSize: "48px",
        marginBottom: "30px"
      }}>
        📊 DASHBOARD
      </h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto 30px auto"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ color: "#e74c3c", marginBottom: "15px" }}>
            🌐 Meus Sites
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "18px", marginBottom: "20px" }}>
            3 sites ativos
          </p>
          <button style={{
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Ver Todos
          </button>
        </div>
        
        <div style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ color: "#f39c12", marginBottom: "15px" }}>
            📈 Visitantes
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "18px", marginBottom: "20px" }}>
            1.2k este mês
          </p>
          <button style={{
            backgroundColor: "#f39c12",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Ver Relatório
          </button>
        </div>
        
        <div style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ color: "#27ae60", marginBottom: "15px" }}>
            ⚡ Performance
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "18px", marginBottom: "20px" }}>
            98% uptime
          </p>
          <button style={{
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Ver Detalhes
          </button>
        </div>
      </div>
      
      <button 
        onClick={() => navigateTo('/')}
        style={{
          backgroundColor: "#95a5a6",
          color: "white",
          border: "none",
          padding: "12px 25px",
          fontSize: "16px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#7f8c8d"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#95a5a6"}
      >
        🏠 VOLTAR PARA HOME
      </button>
    </div>
  );
}

// Componente da Página 404
function NotFoundPage({ navigateTo }) {
  return (
    <div style={{ 
      padding: "50px", 
      textAlign: "center", 
      backgroundColor: "#fff5f5",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ 
        color: "#e74c3c", 
        fontSize: "72px",
        marginBottom: "20px"
      }}>
        404
      </h1>
      
      <h2 style={{ 
        color: "#c0392b", 
        fontSize: "32px",
        marginBottom: "30px"
      }}>
        Página Não Encontrada
      </h2>
      
      <p style={{ 
        fontSize: "18px", 
        color: "#7f8c8d",
        marginBottom: "40px"
      }}>
        A página que você está procurando não existe ou foi movida.
      </p>
      
      <button 
        onClick={() => navigateTo('/')}
        style={{
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          padding: "15px 30px",
          fontSize: "18px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#c0392b"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#e74c3c"}
      >
        🏠 VOLTAR PARA HOME
      </button>
    </div>
  );
}

// Componente Principal da Aplicação
function App() {
  const { currentPath, navigateTo } = useRouter();
  
  // Função para renderizar a página atual
  const renderPage = () => {
    switch(currentPath) {
      case '/':
        return <HomePage navigateTo={navigateTo} />;
      case '/entrar':
        return <EntrarPage navigateTo={navigateTo} />;
      case '/criar-site':
        return <CriarSitePage navigateTo={navigateTo} />;
      case '/dashboard':
        return <DashboardPage navigateTo={navigateTo} />;
      default:
        return <NotFoundPage navigateTo={navigateTo} />;
    }
  };
  
  return (
    <div>
      <DebugRota currentPath={currentPath} />
      {renderPage()}
    </div>
  );
}

export default App;
