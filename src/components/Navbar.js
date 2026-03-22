"use client"; 
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation';
import './Navbar.css';

const logo = 'https://res.cloudinary.com/dscbso60s/image/upload/v1751478600/OTS_Logo_black_anbwhw.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediumDevice, setIsMediumDevice] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setIsMediumDevice(window.innerWidth >= 768);
    const handleResize = () => setIsMediumDevice(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  if (!mounted) return null;

  return (
    <>
      {/* THE SPACER: Pushes the page content down so it doesn't hide behind the fixed navbar */}
      <div 
        className="navbar-spacer" 
        style={{ 
          height: isMediumDevice ? '54px' : '60px', /* Matches desktop and mobile navbar heights */
          width: '100%',
          display: 'block',
          flexShrink: 0
        }} 
      ></div>

      {!isMediumDevice && (
        <div className="nav-bar">
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

          <div className={`sub-menus ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.to} id={item.id} onClick={toggleMenu}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {isMediumDevice && (
        <>
          <div className="nav-bar-medium">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.to} id={item.id}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {pathname === '/' && (
            <div 
              className="home-club-medium"
              style={{ left: '6.3%', top: '150px' }} // Keep your perfect positioning here
            >
              <img src={logo} alt="Old Town Shamrocks Logo" className="home-image-medium" />
              <div className="title-container" style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
                
                {/* ULTIMATE OVERRIDE FOR H1 */}
                <h1 style={{ fontSize: '35px', margin: '0', lineHeight: '1', color: 'white' }}>
                  Old Town Shamrocks
                </h1>
                
                {/* ULTIMATE OVERRIDE FOR H2 */}
                <h2 className="subtitle" style={{ fontSize: '26px', margin: '0', color: '#ddd', fontWeight: 'normal' }}>
                  Porvoo Rugby Club
                </h2>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;