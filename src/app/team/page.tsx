import { client } from "../../sanity/client";
import Team from "../../components/Team";

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  // 1. Fetch the Page Settings (Photo + Title)
  const pageData = await client.fetch(`*[_type == "teamPage"][0]{
    seasonTitle,
    "teamPhoto": teamPhoto.asset->url
  }`);

  // 2. Fetch the Players List
  const players = await client.fetch(`*[_type == "player"] | order(name asc) {
    _id,
    name,
    category,
    role
  }`);

  return (
    <main>
      {/* Pass both pieces of data to the component */}
      <Team players={players} pageData={pageData} />
    </main>
  );
}