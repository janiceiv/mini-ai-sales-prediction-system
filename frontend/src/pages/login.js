import React, { useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import "../css/loginPage.css";

function Login (){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const token = await login(username, password);
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return(
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        <button onClick={handleLogin}>Login</button>  
      </div>
    </div>
  )
}

export default Login;