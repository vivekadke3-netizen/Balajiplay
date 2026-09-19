import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <div className="logo">🎮 BalajiPlay</div>

        <div className="navLinks">
          <a href="#games">Games</a>
          <Link href="/login">Login</Link>
          <Link href="/register" className="registerBtn">
            Register
          </Link>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <div className="badge">🔥 PREMIUM GAMING</div>

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
            <Link href="/register" className="primaryBtn">
              CREATE ACCOUNT
            </Link>

            <a href="#games" className="secondaryBtn">
              EXPLORE GAMES
            </a>
          </div>
        </div>

        <div className="heroCard">
          <div className="coin">🪙</div>
          <h3>Virtual Coins</h3>
          <strong>10,000</strong>
          <p>Demo Balance</p>
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
          <small>DISCOVER</small>
          <h2>Featured Games</h2>
        </div>

        <div className="gameGrid">
          <div className="gameCard red">
            <div className="gameIcon">⚔️</div>
            <h3>Battle Arena</h3>
            <p>Action Game</p>
          </div>

          <div className="gameCard blue">
            <div className="gameIcon">🏎️</div>
            <h3>Speed Racer</h3>
            <p>Racing Game</p>
          </div>

          <div className="gameCard purple">
            <div className="gameIcon">🧩</div>
            <h3>Puzzle Rush</h3>
            <p>Puzzle Game</p>
          </div>

          <div className="gameCard green">
            <div className="gameIcon">🎯</div>
            <h3>Target Master</h3>
            <p>Skill Game</p>
          </div>
        </div>
      </section>

      <section id="leaderboard" className="leaderboard">
        <div className="sectionTitle">
          <small>TOP PLAYERS</small>
          <h2>Leaderboard</h2>
        </div>

        <div className="players">
          <div>🥇 ShadowX <span>9,850 coins</span></div>
          <div>🥈 Raider07 <span>8,920 coins</span></div>
          <div>🥉 ProGamer <span>8,450 coins</span></div>
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
