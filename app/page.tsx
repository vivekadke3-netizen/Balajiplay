import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <div className="logo">
          🎮 <span>BalajiPlay</span>
        </div>

        <div className="navLinks">
          <a href="#games">Games</a>
          <a href="#leaderboard">Leaderboard</a>

          <Link className="loginBtn" href="/login">
            Login
          </Link>

          <a href="#games" className="registerBtn">
            Demo
          </a>
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
            Explore exciting games, collect virtual coins and climb the
            leaderboard.
          </p>

          <div className="heroButtons">
            <Link href="/login" className="primaryBtn">
              LOGIN TO PLAY
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

      <section className="stats">
        <div>
          <strong>25+</strong>
          <span>Games</span>
        </div>

        <div>
          <strong>10K+</strong>
          <span>Players</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Gaming</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Fun</span>
        </div>
      </section>

      <section id="games" className="games">
        <div className="sectionTitle">
          <div>
            <small>DISCOVER</small>
            <h2>Featured Games</h2>
          </div>

          <span>DEMO MODE</span>
        </div>

        <div className="gameGrid">
          <div className="gameCard red">
            <div className="gameIcon">⚔️</div>
            <div>
              <small>ACTION</small>
              <h3>Battle Arena</h3>
              <p>Compete & conquer</p>
            </div>
          </div>

          <div className="gameCard blue">
            <div className="gameIcon">🏎️</div>
            <div>
              <small>RACING</small>
              <h3>Speed Racer</h3>
              <p>Race to the top</p>
            </div>
          </div>

          <div className="gameCard purple">
            <div className="gameIcon">🧩</div>
            <div>
              <small>PUZZLE</small>
              <h3>Puzzle Rush</h3>
              <p>Challenge your mind</p>
            </div>
          </div>

          <div className="gameCard green">
            <div className="gameIcon">🎯</div>
            <div>
              <small>SKILL</small>
              <h3>Target Master</h3>
              <p>Test your skills</p>
            </div>
          </div>
        </div>
      </section>

      <section id="leaderboard" className="leaderboard">
        <div className="sectionTitle">
          <div>
            <small>TOP PLAYERS</small>
            <h2>Leaderboard</h2>
          </div>
        </div>

        <div className="players">
          <div>
            🥇 <b>ShadowX</b>
            <span>9,850 coins</span>
          </div>

          <div>
            🥈 <b>Raider07</b>
            <span>8,920 coins</span>
          </div>

          <div>
            🥉 <b>ProGamer</b>
            <span>8,450 coins</span>
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
