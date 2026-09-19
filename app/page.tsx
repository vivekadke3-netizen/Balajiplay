import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <div className="logo">🎮 <span>BalajiPlay</span></div>

        <div className="navLinks">
          <Link href="/login">Login</Link>
          <a href="#games">Demo</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <div className="badge">🔥 PREMIUM GAMING PLATFORM</div>

          <h1>
            PLAY.
            <br />
            <span>COMPETE.</span>
            <br />
            HAVE FUN.
          </h1>

          <p>
            Explore exciting games and play in Demo Mode with virtual coins.
          </p>

          <div className="heroButtons">
            <Link href="/login" className="primaryBtn">
              LOGIN
            </Link>

            <a href="#games" className="secondaryBtn">
              TRY DEMO
            </a>
          </div>
        </div>

        <div className="heroCard">
          <div className="coin">🪙</div>
          <h3>Demo Coins</h3>
          <strong>10,000</strong>
          <p>Virtual Balance</p>
        </div>
      </section>

      <section id="games" className="games">
        <div className="sectionTitle">
          <div>
            <small>DEMO MODE</small>
            <h2>Featured Games</h2>
          </div>
        </div>

        <div className="gameGrid">
          <div className="gameCard red">
            <div className="gameIcon">⚔️</div>
            <div>
              <small>ACTION</small>
              <h3>Battle Arena</h3>
              <p>Demo Game</p>
            </div>
          </div>

          <div className="gameCard blue">
            <div className="gameIcon">🏎️</div>
            <div>
              <small>RACING</small>
              <h3>Speed Racer</h3>
              <p>Demo Game</p>
            </div>
          </div>

          <div className="gameCard purple">
            <div className="gameIcon">🧩</div>
            <div>
              <small>PUZZLE</small>
              <h3>Puzzle Rush</h3>
              <p>Demo Game</p>
            </div>
          </div>

          <div className="gameCard green">
            <div className="gameIcon">🎯</div>
            <div>
              <small>SKILL</small>
              <h3>Target Master</h3>
              <p>Demo Game</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <h2>🎮 BalajiPlay</h2>
        <p>Play • Compete • Have Fun</p>
        <small>© 2026 BalajiPlay</small>
      </footer>
    </main>
  );
}
