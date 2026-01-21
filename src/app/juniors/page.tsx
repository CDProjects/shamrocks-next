import { client } from "../../sanity/client";
import Juniors from "../../components/Juniors";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await client.fetch(`*[_type == "juniorsPage"][0]{
    ...,
    "topImage1": topImage1.asset->url,
    "topImage2": topImage2.asset->url,
    "bottomImage1": bottomImage1.asset->url,
    "bottomImage2": bottomImage2.asset->url
  }`);
  return <Juniors data={data} />;
}