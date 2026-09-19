"use client";

import { useState } from "react";

export default function Roulette() {
  const [result, setResult] = useState("—");
  const [message, setMessage] = useState("Choose a number");

  function spin() {
    const number = Math.floor(Math.random() * 37);
    setResult(String(number));
    setMessage(`Demo result: ${number}`);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#05070d",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>🎡 Roulette</h1>
      <p style={{ color: "#94a3b8" }}>DEMO MODE • VIRTUAL COINS ONLY</p>

      <div
        style={{
          margin: "40px auto",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #991b1b, #111827)",
          border: "8px solid #facc15",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "64px",
          fontWeight: "900",
        }}
      >
        {result}
      </div>

      <p style={{ color: "#cbd5e1" }}>{message}</p>

      <button
        onClick={spin}
        style={{
          padding: "15px 30px",
          borderRadius: "12px",
          border: "none",
          background: "#22c55e",
          color: "white",
          fontWeight: "900",
          fontSize: "16px",
        }}
      >
        SPIN DEMO
      </button>

      <br />
      <br />

      <a href="/" style={{ color: "#38bdf8" }}>
        ← Back to Home
      </a>
    </main>
  );
}
