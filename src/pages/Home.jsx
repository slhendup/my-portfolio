import MyPhoto from "../assets/myPhoto.png";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
        padding: "0 1rem",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1>Welcome to My Portfolio</h1>

      <img
        src={MyPhoto}
        alt="Kinley Rinzin"
        style={{
          width: "200px",
          height: "auto",
          borderRadius: "10px",
          marginTop: "1rem",
        }}
      />

      <p style={{ marginTop: "1.5rem", textAlign: "justify" }}>
        Greetings! My name is Kinley Rinzin, and I am currently in my fourth
        year at the Jigme Singye Wangchuck School of Law. I come from a country
        that has made significant efforts to achieve and maintain carbon
        neutrality. Uniquely, our Constitution enshrines environmental
        protection by mandating that at least 60% of our land remains under
        forest cover — a commitment that has deeply inspired me. I aspire to
        become an advocate at a time when climate change is no longer a distant
        concept but a present reality. My involvement with the Climate Change
        and Environmental Law Clinic — an experiential learning program offered
        by our law school — and my participation in the WYCJ Asian Front align
        perfectly with my vision and goals.
      </p>
    </div>
  );
}

export default Home;
