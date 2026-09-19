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
             
