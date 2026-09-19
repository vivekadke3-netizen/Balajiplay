import Link from "next/link";

const games = [
  ["🎡", "Roulette", "CLASSIC"],
  ["🃏", "Teen Patti", "CARD GAME"],
  ["♠️", "Blackjack", "CARD GAME"],
  ["🎰", "Slots", "ARCADE"],
  ["🎲", "Dice", "DICE"],
  ["🃏", "Andar Bahar", "CARD GAME"],
];

export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <div className="logo">
          🎮 <span>BalajiPlay</span>
        </div>

        <div className="navLinks">
          <a href="#games">Games</a>
          <Link href="/login">Login</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <div className="badge">🔥 PREMIUM DEMO PLATFORM</div>

          <h1>
            PLAY.
            <br />
            <span>SPIN.</span>
            <br />
            HAVE FUN.
          </h1>

          <p>
            Explore classic casino-style games in a safe Demo Mode using
            virtual coins only.
          </p>

          <div className="heroButtons">
            <Link href="/login" className="primaryBtn">
              LOGIN
            </Link>

            <a href="#games" className="secondaryBtn">
              EXPLORE GAMES
            </a>
          </div>
        </div>

        <div className="heroCard">
          <div className="coin">🪙</div>
          <h3>Demo Balance</h3>
          <strong>10,000</strong>
          <p>Virtual Coins</p>
        </div>
      </section>

      <section id="games" className="games">
        <div className="sectionTitle">
          <small>GAME LOBBY</small>
          <h2>Casino Classics</h2>
          <p>DEMO MODE • VIRTUAL COINS</p>
        </div>

        <div className="gameGrid">
          {games.map(([icon, name, type]) => (
            <div className="gameCard" key={name}>
              <div className="gameIcon">{icon}</div>

              <div>
                <small>{type}</small>
                <h3>{name}</h3>
                <p>Play Demo</p>
              </div>

              <button>PLAY DEMO</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <h2>🎮 BalajiPlay</h2>
        <p>Play • Spin • Have Fun</p>
        <small>Demo Mode • Virtual Coins Only</small>
      </footer>
    </main>
  );
}
