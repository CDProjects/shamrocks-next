"use client"; // Next.js Client Component
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // <--- FIXED: Uppercase 'L'
import { usePathname } from 'next/navigation';
import './Navbar.css';

const logo = 'https://res.cloudinary.com/dscbso60s/image/upload/v1751478600/OTS_Logo_black_anbwhw.jpg';

const Navbar = () => {
  // Check window size safely to avoid server-side rendering errors
  // We initialize to false/true based on a safe check
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediumDevice, setIsMediumDevice] = useState(false); // Start false to prevent hydration mismatch
  const pathname = usePathname();

  useEffect(() => {
    // Determine screen size once mounted on the client
    setIsMediumDevice(window.innerWidth >= 768);

    const handleResize = () => {
      setIsMediumDevice(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: '/', text: 'HOME', id: 'home-link' },
    { to: '/news', text: 'NEWS', id: 'news-link' },
    { to: '/team', text: 'TEAM', id: 'team-link' },
    { to: '/training', text: 'TRAINING', id: 'training-link' },
    { to: '/juniors', text: 'JUNIORS', id: 'juniors-link' },
    { to: '/touch', text: 'TOUCH', id: 'touch-link' },
    { to: '/fixtures', text: 'RESULTS & FIXTURES', id: 'fixtures-link' },
    { to: '/media-recruitment', text: 'MEDIA & RECRUITMENT', id: 'media-recruitment-link' },
    { to: '/contact', text: 'CONTACT', id: 'contact-link' },
  ];

  // Prevent rendering until we know the screen size (avoids flickering)
  // You can remove this check if you have CSS media queries handling display:none
  // but for this React logic, it's safer to wait for the client.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; 

  return (
    <>
      {!isMediumDevice && (
        <div className="nav-bar">
          <div className={`sub-menus ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  {/* FIXED: Changed 'to' to 'href' here too! */}
                  <Link href={item.to} id={item.id} onClick={toggleMenu}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="logo-title">
            <img src={logo} alt="Old Town Shamrocks Logo" className="logo" />
            <div className="title-container">
              <h1>Old Town Shamrocks</h1>
            </div>
          </div>
          <div className={`icon-burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      )}
      {isMediumDevice && (
        <>
          <div className="nav-bar-medium">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                   {/* This one was already correct in your screenshot */}
                  <Link href={item.to} id={item.id}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {pathname === '/' && (
            <div className="home-club-medium">
              <img src={logo} alt="Old Town Shamrocks Logo" className="home-image-medium" />
              <div className="title-container">
                <h1>Old Town Shamrocks</h1>
                <h2 className="subtitle">Porvoo Rugby Club</h2>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;