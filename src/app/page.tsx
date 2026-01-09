import { client } from "../sanity/client";

// This is a "Server Component". It runs on the server to be super fast.
export default async function HomePage() {
  
  // 1. Fetch the data from Sanity
  // We ask for the _id, opponent, date, and score
  const fixtures = await client.fetch(`*[_type == "fixture"]{
    _id,
    opponent,
    date,
    score
  }`);

  // 2. Display the data
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Shamrocks RC - Upcoming Fixtures</h1>
      
      {/* If there are no fixtures, say so */}
      {fixtures.length === 0 && <p>No fixtures found. Go to /studio to add one!</p>}

      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {fixtures.map((match: any) => (
          <div key={match._id} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
            <h2 style={{ margin: 0 }}>Vs. {match.opponent}</h2>
            {match.date && <p style={{ color: "gray" }}>{new Date(match.date).toDateString()}</p>}
            <h3 style={{ color: "green" }}>Score: {match.score}</h3>
          </div>
        ))}
      </div>

    </main>
  );
}