import { client } from "../../sanity/client";
import Contact from "../../components/Contact";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await client.fetch(`*[_type == "contactPage"][0]`);
  return <Contact data={data} />;
}