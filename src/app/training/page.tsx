import { client } from "../../sanity/client";
import Training from "../../components/Training";

export const dynamic = "force-dynamic";

export default async function Page() {
  // We fetch the array of sessions
  const data = await client.fetch(`*[_type == "trainingPage"][0]{
    trainingSessions[]{
      title,
      schedule,
      locationName,
      googleMapsLink,
      latitude,
      longitude
    }
  }`);

  return <Training data={data} />;
}