import { client } from "../../sanity/client";
import News from "../../components/News";

// Refresh data often
export const dynamic = "force-dynamic";

export default async function NewsPage() {
  // Fetch news sorted by newest date first
  const articles = await client.fetch(`*[_type == "news"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    content,
    "mainImage": mainImage.asset->url,
    "additionalImages": additionalImages[].asset->url
  }`);

  return (
    <main>
      <News cmsArticles={articles} />
    </main>
  );
}