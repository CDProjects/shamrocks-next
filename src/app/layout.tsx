import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Shamrocks RC",
  description: "Porvoo Rugby Club",
};

// This ensures mobile phones scale the site correctly
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Pass the page content into our smart ClientLayout */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}