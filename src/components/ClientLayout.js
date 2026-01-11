"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import SponsorGrid from './SponsorGrid';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="App">
      {/* The Black Box (70% width) containing Navbar and Page Content */}
      <div className="content-container">
        <Navbar />
        {children}
      </div>

      {/* The Footer (Full Width) - appears AFTER the black box */}
      <Footer />

      {/* The Sponsor Grid (Full Width) - appears AFTER the footer, ONLY on Home */}
      {isHomePage && <SponsorGrid />}
    </div>
  );
}