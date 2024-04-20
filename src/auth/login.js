// Login.js
import React, { useState } from "react";
import { useAuth } from "../authContext/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userData, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // Validate the input fields here
    if (!username || !password) {
      alert("Please fill in both username and password.");
      return;
    }

    // Check if the user is registered (for demonstration, we're assuming username is the email)
    if (userData && userData.email === username) {
      login({ username, password });
      navigate("/dashboard");
      localStorage.setItem("user", username); // Login if registered
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username (Email):</label>
        <input
          type="email"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
