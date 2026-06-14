"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import SponsorGrid from './SponsorGrid';

// Accept the sponsors prop
export default function ClientLayout({ children, sponsors }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="App">
      <div className="content-container">
        <Navbar />
        {children}
      </div>

      {/* Pass sponsors down! */}
      <Footer sponsors={sponsors} />
      {isHomePage && <SponsorGrid sponsors={sponsors} />}
    </div>
  );
}