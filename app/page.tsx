export default function Home() {
  return (
    <main className="home">
      <header className="navbar">
        <h1>🎮 BalajiPlay</h1>
        <button>Login</button>
      </header>

      <section className="hero">
        <p className="tag">🔥 PLAY • COMPETE • WIN</p>
        <h2>Your Gaming World Starts Here</h2>
        <p>Play exciting games, earn virtual coins and climb the leaderboard.</p>
        <button className="play">PLAY NOW</button>
      </section>

      <section className="games">
        <h2>🎯 Featured Games</h2>

        <div className="game-grid">
          <div className="game-card">⚔️<h3>Battle Arena</h3><p>Action Game</p></div>
          <div className="game-card">🏎️<h3>Speed Racer</h3><p>Racing Game</p></div>
          <div className="game-card">🧩<h3>Puzzle Rush</h3><p>Brain Game</p></div>
        </div>
      </section>

      <footer>© 2026 BalajiPlay • Gaming Platform</footer>
    </main>
  );
}
