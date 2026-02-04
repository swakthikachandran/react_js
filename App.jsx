import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const containerStyle = {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#222" : "#fff",
    transition: "all 0.3s ease"
  };

  return (
    <div style={containerStyle}>
      <h1>Theme Toggle Example</h1>
      <h2>Click the button to switch between light and dark</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
