import { client } from "../../sanity/client";
import MedRec from "../../components/MedRec";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await client.fetch(`*[_type == "medRecPage"][0]{
    ...,
    "recruitmentImage1": recruitmentImage1.asset->url,
    "recruitmentImage2": recruitmentImage2.asset->url
  }`);
  return <MedRec data={data} />;
}