import { client } from "../../../sanity/client";
import Article from "../../../components/Article";

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  // Fetch the specific article matching the URL slug
  const article = await client.fetch(`*[_type == "news" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    date,
    content,
    "mainImage": mainImage.asset->url,
    "additionalImages": additionalImages[].asset->url
  }`, { slug: params.slug });

  if (!article) return <div style={{color:'white', textAlign:'center', marginTop: 50}}>Article not found</div>;

  return (
    <main>
      <Article articleData={article} />
    </main>
  );
}