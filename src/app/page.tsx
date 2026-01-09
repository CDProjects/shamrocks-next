import { client } from "../sanity/client";
import Home from "../components/Home"; // Your original Home component

export default async function HomePage() {
  
  // 1. Fetch the data (Fixtures)
  const fixtures = await client.fetch(`*[_type == "fixture"] | order(date asc) {
    _id,
    opponent,
    date,
    score,
    isHomeGame
  }`);

  // 2. Render the original design, passing the data down
  // Note: Pass 'fixtures' as a prop to the Home component
  return (
    <main>
      <Home fixtures={fixtures} />
    </main>
  );
}