"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!username || !password) {
      alert("Username आणि Password टाका");
      return;
    }

    router.push("/");
  }

  return (
    <main className="loginPage">
      <div className="loginCard">
        <div className="loginLogo">🎮</div>

        <h1>BalajiPlay</h1>
        <p>Welcome back, Player</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>LOGIN</button>

        <a href="/">← Back to Home</a>
      </div>
    </main>
  );
}
