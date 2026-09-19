export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
        background: "#111",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>🎮 BalajiPlay</h1>

      <p style={{ fontSize: "20px" }}>
        Welcome to BalajiPlay Gaming
      </p>

      <button
        style={{
          background: "#00c853",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          margin: "20px",
        }}
      >
        Play Now
      </button>

      <h2>🎯 Featured Games</h2>

      <div style={{ fontSize: "20px", lineHeight: "2" }}>
        <p>⚔️ Battle Arena</p>
        <p>🏎️ Speed Racer</p>
        <p>🧩 Puzzle Rush</p>
      </div>
    </main>
  );
}
