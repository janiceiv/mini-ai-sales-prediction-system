import React from "react";
import "../css/header.css";

export default function Header({ onLogout }) {
  return (
    <header className="header">
      <h1>Sales Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </header>
  );
}