function App() {
  return (
    <div style={{ 
      padding: "50px", 
      textAlign: "center", 
      backgroundColor: "white",
      minHeight: "100vh"
    }}>
      <h1 style={{ 
        color: "red", 
        fontSize: "48px",
        marginBottom: "20px"
      }}>
        🚨 TESTE BÁSICO DO REACT
      </h1>
      
      <p style={{ fontSize: "24px", marginBottom: "30px" }}>
        Se você está vendo isso, o React está funcionando!
      </p>
      
      <div style={{ 
        backgroundColor: "#f0f0f0", 
        padding: "20px", 
        borderRadius: "10px",
        marginBottom: "30px"
      }}>
        <h2>📍 INFORMAÇÕES:</h2>
        <p><strong>URL atual:</strong> {window.location.href}</p>
        <p><strong>Caminho:</strong> {window.location.pathname}</p>
        <p><strong>Horário:</strong> {new Date().toLocaleTimeString()}</p>
      </div>
      
      <button 
        onClick={() => alert('JAVASCRIPT FUNCIONANDO!')}
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
        CLIQUE PARA TESTAR
      </button>
    </div>
  );
}

export default App;
