import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="page">
      <div className="login-card">
        <h1>Spotify</h1>
        <h2>Log in to Spotify</h2>

        <input
          type="text"
          placeholder="Email or username"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Log In</button>

        <p className="message">{message}</p>

        <p className="forgot">Forgot your password?</p>

        <hr />

        <p className="signup">
          Don&apos;t have an account? <span>Sign up for Spotify</span>
        </p>
      </div>
    </div>
  );
}

export default App;