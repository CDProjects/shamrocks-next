import { client } from "../../sanity/client";
import Team from "../../components/Team";

// Force the page to re-fetch data on every request so updates are instant
export const dynamic = "force-dynamic";

export default async function TeamPage() {
  // Fetch all players sorted alphabetically by name
  const players = await client.fetch(`*[_type == "player"] | order(name asc) {
    _id,
    name,
    category,
    role,
    position, // Fetching for future use
    "imageUrl": image.asset->url // Fetching for future use
  }`);

  return (
    <main>
      <Team players={players} />
    </main>
  );
}