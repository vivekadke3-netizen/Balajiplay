export default function Register() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080b12",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        background: "#111827",
        padding: "30px",
        borderRadius: "18px",
        border: "1px solid #263248"
      }}>
        <h1 style={{ textAlign: "center" }}>🎮 BalajiPlay</h1>
        <h2 style={{ textAlign: "center" }}>Create Account</h2>

        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #334155"
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "12px",
            borderRadius: "10px",
            border: "1px solid #334155"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "12px",
            borderRadius: "10px",
            border: "1px solid #334155"
          }}
        />

        <button style={{
          width: "100%",
          marginTop: "20px",
          padding: "14px",
          border: 0,
          borderRadius: "10px",
          background: "#22c55e",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px"
        }}>
          CREATE ACCOUNT
        </button>
      </div>
    </main>
  );
}
