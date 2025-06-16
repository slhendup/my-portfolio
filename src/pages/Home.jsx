import MyPhoto from "../assets/myPhoto.png";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to My Portfolio</h1>

      <img
        src={MyPhoto}
        alt="Screenshot"
        style={{
          width: "200px",
          height: "auto",
          borderRadius: "10px",
          marginTop: "1rem",
        }}
      />

      <p>This is the Home page.</p>
    </div>
  );
}

export default Home;
