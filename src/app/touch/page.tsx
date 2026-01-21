import { client } from "../../sanity/client";
import Touch from "../../components/Touch";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await client.fetch(`*[_type == "touchPage"][0]{
    ...,
    "poster": poster.asset->url
  }`);
  return <Touch data={data} />;
}