// src/Components/Footer.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css'; // Correct: CSS for this component

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Correct: Importing from SponsorData.js in the same directory
import { sponsors, transformCloudinaryUrl } from './SponsorData';

const Footer = () => {
  const location = useLocation();
  const isTeamPage = location.pathname === '/team';
  const isHomePage = location.pathname === '/';

  const slides = [];
  if (sponsors && sponsors.length > 0) {
    sponsors.forEach((sponsor, index) => {
      if (sponsor.logoBaseUrl && sponsor.logoBaseUrl !== 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091454/Lindos_srvg8h.png') {
          const logoUrl = transformCloudinaryUrl(sponsor.logoBaseUrl, 'h_50,f_auto,q_auto,c_limit');
          slides.push(
            <SwiperSlide key={sponsor.id} className="sponsor-logo-slide">
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer" title={`Visit ${sponsor.name}`}>
                <img src={logoUrl} alt={sponsor.name} className="sponsor-carousel-image" />
              </a>
            </SwiperSlide>
          );
      }
      // Only add scroll text on home page
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