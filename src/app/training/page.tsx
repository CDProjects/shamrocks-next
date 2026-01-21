import { client } from "../../sanity/client";
import Training from "../../components/Training";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await client.fetch(`*[_type == "trainingPage"][0]`);
  return <Training data={data} />;
}