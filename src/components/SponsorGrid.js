// src/Components/SponsorGrid/SponsorGrid.js
import React from 'react';
import './SponsorGrid.css';
// Assuming SponsorData.js is in the same directory: src/Components/SponsorData.js
import { sponsors, transformCloudinaryUrl } from './SponsorData';

const SponsorGrid = () => {
  const validSponsors = sponsors ? sponsors.filter( // Check if sponsors is defined
    sponsor => sponsor.logoBaseUrl && sponsor.logoBaseUrl !== 'YOUR_CLOUDINARY_URL_FOR_LINDOS_LOGO.png'
  ) : []; // Default to empty array if sponsors is not available

  if (!validSponsors || validSponsors.length === 0) {
    return null; // Don't render anything if no valid sponsors
  }

  return (
    <section className="full-sponsors-section" id="all-sponsors">
      <div className="container">
        <h2 className="full-sponsors-title">Our Generous Sponsors</h2>
        <div className="sponsors-grid">
          {validSponsors.map(sponsor => {
            const logoUrl = transformCloudinaryUrl(sponsor.logoBaseUrl, 'h_80,f_auto,q_auto,c_limit');
            return (
              <div key={sponsor.id} className="sponsor-grid-item">
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer" title={`Visit ${sponsor.name}`}>
                  <img src={logoUrl} alt={`${sponsor.name} logo`} className="sponsor-grid-image" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorGrid;