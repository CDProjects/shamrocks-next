"use client";
import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import './MedRec.css';

const LazyImage = lazy(() => import('./LazyImage'));

const MedRec = ({ data }) => {
  const recruitmentRef = useRef(null);
  const searchParams = useSearchParams();

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
        {/* HARDCODED SOCIAL ICONS (As requested) */}
        <div className="media-icons">
          <a href="https://www.facebook.com/OldTownShamrocks" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479226/FB_Icon_zibv03.png" alt="Facebook" className="media-icon"/>
          </a>
          <a href="https://m.me/OldTownShamrocks" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479236/FB_Messenger_Icon_wq8bkd.png" alt="Messenger" className="media-icon"/>
          </a>
          <a href="https://www.instagram.com/shamrocksrugby/" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479250/IG_Icon_hdx7nt.png" alt="Instagram" className="media-icon"/>
          </a>
          <a href="https://www.youtube.com/@OldTownShamrocks" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479255/YT_Icon_wiqmwa.png" alt="YouTube" className="media-icon"/>
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
          
          <ul>
            <li><b>TEAMWORK:</b> Rugby is a team sport, and success often hinges on the coordination, communication, and camaraderie of the players.</li>
            <li><b>RESPECT:</b> Players are taught to respect their opponents, referees, and the game itself. The referee's decision is final.</li>
            <li><b>DISCIPLINE:</b> Rugby demands a high level of discipline, both in terms of adhering to the rules and in training and preparation.</li>
            <li><b>INTEGRITY:</b> Fair play is essential. Players are taught to be honest in their actions on the field.</li>
            <li><b>PASSION:</b> The love for the game drives players to give their best during each match and training session.</li>
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