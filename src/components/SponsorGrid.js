"use client";
import React from 'react';
import './SponsorGrid.css';

// FIX: We removed the import for SponsorData.js. 
// The grid now receives 'sponsors' directly from the CMS via props!

const SponsorGrid = ({ sponsors = [] }) => {
  
  if (!sponsors || sponsors.length === 0) {
    return null;
  }

  return (
    <section className="full-sponsors-section" id="all-sponsors">
      <div className="container">
        <h2 className="full-sponsors-title">Our Generous Sponsors</h2>
        <div className="sponsors-grid">
          
          {/* Loop through the CMS sponsors */}
          {sponsors.map((sponsor, index) => (
            <div key={sponsor._id || index} className="sponsor-grid-item">
              <a 
                href={sponsor.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                title={`Visit ${sponsor.name}`}
              >
                {/* Use logoUrl from the CMS */}
                <img 
                  src={sponsor.logoUrl} 
                  alt={`${sponsor.name} logo`} 
                  className="sponsor-grid-image" 
                />
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SponsorGrid;