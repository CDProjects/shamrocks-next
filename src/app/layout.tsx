import "./globals.css"; // Keep your global styles
import Navbar from "../components/Navbar"; // Import your old Navbar
import Footer from "../components/Footer"; // Import your old Footer

export const metadata = {
  title: "Porvoo Old Town Shamrocks",
  description: "Official website of Porvoo Old Town Shamrocks Rugby Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* The Navbar sits at the top of every page */}
        <Navbar />
        
        {/* "children" is whatever page the user is currently looking at (e.g., Home) */}
        {children}

        {/* The Footer sits at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}