import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Shamrocks RC",
  description: "Porvoo Rugby Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* We pass the page content into our smart ClientLayout */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}