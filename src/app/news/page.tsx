import { client } from "../../sanity/client";
import News from "../../components/News";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  // Fetch Top Image
  const pageData = await client.fetch(`*[_type == "newsPage"][0]{
    "topImage": topImage.asset->url
  }`);

  // Fetch Articles
  const articles = await client.fetch(`*[_type == "news"] | order(date desc) {
    _id, title, "slug": slug.current, date, content,
    "mainImage": mainImage.asset->url, "additionalImages": additionalImages[].asset->url
  }`);

  return (
    <main>
      <News cmsArticles={articles} pageData={pageData} />
    </main>
  );
}