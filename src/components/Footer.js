"use client";

import React from 'react';
import { usePathname } from 'next/navigation'; // Changed from react-router-dom for Next.js
import './Footer.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// REMOVED: import { sponsors, transformCloudinaryUrl } from './SponsorData';
// We no longer need the local data file because we are getting sponsors directly from the CMS!

/* 
  Accepting 'sponsors' as a prop. 
  This data trickles down from layout.tsx -> ClientLayout.js -> Footer.js 
*/
const Footer = ({ sponsors = [] }) => {
  // Get the current URL path using Next.js hook
  const pathname = usePathname();
  
  // Check which page we are on
  const isTeamPage = pathname === '/team';
  const isHomePage = pathname === '/';

  const slides = [];
  
  // Ensure we actually have sponsors from the CMS before trying to loop through them
  if (sponsors && sponsors.length > 0) {
    sponsors.forEach((sponsor, index) => {
      
      // Instead of hardcoding "Lindos" to not show up, we check the CMS boolean 'showInFooter'
      // This gives the board members control over which logos go in the carousel vs the grid.
      if (sponsor.logoUrl && sponsor.showInFooter !== false) {
          slides.push(
            // Use the Sanity document _id as the key to prevent React rendering errors
            <SwiperSlide key={sponsor._id || index} className="sponsor-logo-slide">
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer" title={`Visit ${sponsor.name}`}>
                <img src={sponsor.logoUrl} alt={sponsor.name} className="sponsor-carousel-image" />
              </a>
            </SwiperSlide>
          );
      }
      
      // Only add the "Scroll down for all of our sponsors!" text slide on the home page.
      // The math here injects the text slide evenly amongst the logos.
      if (isHomePage && ((index + 1) % 4 === 0 || (index === sponsors.length -1 && slides.filter(s => s.props.className === "sponsor-text-slide").length === 0 ) ) ) {
        slides.push(
          <SwiperSlide key={`text-${index}`} className="sponsor-text-slide">
            <p>Scroll down for all of our sponsors!</p>
          </SwiperSlide>
        );
      }
    });
  }

  return (
    <section className={`sponsor-carousel-banner-section ${isTeamPage ? 'team-page-variant' : ''}`}>
      <div className="sponsor-carousel-banner-content">
        {slides.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={'auto'}
            loop={slides.length > 1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="sponsor-carousel-swiper"
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {slides}
          </Swiper>
        ) : (
          <p style={{color: 'grey', textAlign: 'center', width: '100%'}}>Sponsors not available.</p>
        )}
      </div>
    </section>
  );
};

export default Footer;