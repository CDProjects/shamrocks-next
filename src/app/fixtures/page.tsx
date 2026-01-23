import { client } from "../../sanity/client";
import Fixtures from "../../components/Fixtures";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await client.fetch(`*[_type == "fixturesPage"][0]{
    ...,
    "flyer": flyer.asset->url
  }`);
  return <Fixtures data={data} />;
}