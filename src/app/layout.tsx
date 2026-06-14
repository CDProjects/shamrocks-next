// src/app/layout.tsx

// Using the @ alias instead of ./ to prevent VSCode from throwing "cannot find module" warnings
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import { client } from "../sanity/client";

export const metadata = {
  title: "Shamrocks RC",
  description: "Porvoo Rugby Club",
};

// Ensures mobile phones scale the site correctly
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Force dynamic rendering so that if we add a new sponsor in the CMS, 
// the website updates instantly without needing a full rebuild.
export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  
  // Fetch sponsors from Sanity Database
  // We grab the logoUrl directly and the 'showInFooter' boolean toggle
  const sponsors = await client.fetch(`*[_type == "sponsor"] | order(_createdAt asc) {
    _id,
    name,
    url,
    showInFooter,
    "logoUrl": logo.asset->url
  }`);

  return (
    <html lang="en">
      <body>
        {/* Pass the dynamic sponsors down into our custom client layout */}
        <ClientLayout sponsors={sponsors}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}