"use client";
import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // Use Next.js hooks
import './MedRec.css';

const LazyImage = lazy(() => import('./LazyImage'));

const MedRec = ({ data }) => {
  const recruitmentRef = useRef(null);
  const searchParams = useSearchParams();

  // Scroll logic for #recruitment hash
  useEffect(() => {
    if (window.location.hash === '#recruitment' && recruitmentRef.current) {
      recruitmentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  if (!data) return null;

  return (
    <div className="med-rec-container">
      <section id="media-section" className="media-section">
        <div className="content-container">
          <h1 className="section-title">MEDIA</h1>
        </div>
        <div className="media-icons">
          {/* You can map these from data if you want, or keep hardcoded with data URLs */}
          <a href={data.facebookUrl} target="_blank" rel="noopener noreferrer">
             <img src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479226/FB_Icon_zibv03.png" alt="FB" className="media-icon"/>
          </a>
          <a href={data.messengerUrl} target="_blank" rel="noopener noreferrer">
             <img src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479236/FB_Messenger_Icon_wq8bkd.png" alt="Messenger" className="media-icon"/>
          </a>
           <a href={data.instagramUrl} target="_blank" rel="noopener noreferrer">
             <img src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479250/IG_Icon_hdx7nt.png" alt="IG" className="media-icon"/>
          </a>
           <a href={data.youtubeUrl} target="_blank" rel="noopener noreferrer">
             <img src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479255/YT_Icon_wiqmwa.png" alt="YT" className="media-icon"/>
          </a>
        </div>
      </section>

      <section id="recruiting-section" className="recruiting-section" ref={recruitmentRef}>
        <h1 className="recruiting-section-title">RECRUITMENT</h1>

        <Suspense fallback={<div>Loading...</div>}>
          {data.recruitmentImage1 && <LazyImage src={data.recruitmentImage1} alt="Recruitment 1" className="recruiting-image" />}
        </Suspense>

        <div className="recruiting-content">
          <h2>NEW PEOPLE AND PLAYERS WELCOME</h2>
          <p style={{whiteSpace:'pre-line'}}>{data.welcomeText}</p>
          
          {/* HARDCODED LISTS (To save complexity in CMS for now) */}
          <ul>
            <li><b>TEAMWORK:</b> Rugby is a team sport...</li>
            <li><b>RESPECT:</b> Players are taught to respect...</li>
             {/* ... rest of your list ... */}
          </ul>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          {data.recruitmentImage2 && <LazyImage src={data.recruitmentImage2} alt="Recruitment 2" className="recruiting-image" />}
        </Suspense>
      </section>
    </div>
  );
};
export default MedRec;