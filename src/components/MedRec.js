import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import './MedRec.css';

const LazyImage = lazy(() => import('./LazyImage'));

const MedRec = () => {
  const location = useLocation();
  const recruitmentRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#recruitment' && recruitmentRef.current) {
      recruitmentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="med-rec-container">
      <section id="media-section" className="media-section">
        <div className="content-container">
          <h1 className="section-title">MEDIA</h1>
        </div>
        <div className="media-icons">
          <a href="https://www.facebook.com/OldTownShamrocks" target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479226/FB_Icon_zibv03.png"
              alt="Facebook"
              className="media-icon"
            />
          </a>
          <a href="https://m.me/OldTownShamrocks" target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479236/FB_Messenger_Icon_wq8bkd.png"
              alt="Messenger"
              className="media-icon"
            />
          </a>
          <a href="https://www.instagram.com/shamrocksrugby/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479250/IG_Icon_hdx7nt.png"
              alt="Instagram"
              className="media-icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UC8Ke7di1wTGBBPMgIQ3Gy_A" target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479255/YT_Icon_wiqmwa.png"
              alt="YouTube"
              className="media-icon"
            />
          </a>
        </div>
      </section>

      <section id="recruiting-section" className="recruiting-section" ref={recruitmentRef}>
        <h1 className="recruiting-section-title">RECRUITMENT</h1>

        <Suspense fallback={<div className="recruiting-image" style={{ height: '300px', background: '#ccc' }}>Loading image...</div>}>
          <LazyImage
            src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479275/Recruitment_1_gsedur.png"
            alt="Recruiting Image 1"
            className="recruiting-image"
          />
        </Suspense>

        <div className="recruiting-content">
          <h2>NEW PEOPLE AND PLAYERS WELCOME</h2>
          <p>
            Rugby is a sport with a rich history and tradition, and it has garnered a passionate following all over the world.
            Here are the core principles of rugby, both in terms of gameplay and its broader ethos, followed by reasons for its appeal both on and off the field:
          </p>
          <ul>
            <li><b>TEAMWORK:</b> Rugby is a team sport, and success often hinges on the coordination, communication, and camaraderie of the players.</li>
            <li><b>RESPECT:</b> Players are taught to respect their opponents, referees, and the game itself. The referee's decision is final, and players are expected to accept without dissent unlike many, many other sports</li>
            <li><b>DISCIPLINE:</b> Rugby demands a high level of discipline, both in terms of adhering to the rules and in training and preparation.</li>
            <li><b>INTEGRITY:</b> Fair play is essential. Players are taught to be honest in their actions on the field, and cheating is heavily discouraged.</li>
            <li><b>PASSION:</b> The love for the game drives players to give their best during each match and training session.</li>
          </ul>

          <h2>WE WANT YOU TO GET INVOLVED</h2>
          <p>
            We want you to get involved with us because Rugby is one of the most enjoyable sports in the world. But why is it?
          </p>
          <ul>
            <li><b>INCLUSIVITY:</b> Rugby has positions suited for various body types, fitness and skill sets. Whether you're tall, short, heavy, or light, there's a place for you in rugby.</li>
            <li><b>PHYSICALITY:</b> The game's physical nature offers an adrenaline rush to both players and spectators. Tackles, runs, and tries all add to the excitement.</li>
            <li><b>STRATEGY:</b> Behind the apparent chaos, there's a lot of strategy involved in rugby. Teams need to think several moves ahead and adjust their tactics based on the game's flow.</li>
            <li><b>POST MATCH CAMARADERIE:</b> One of the unique aspects of rugby culture is the post-match gathering where both teams come together to share a meal and drinks. It reinforces the spirit of respect and friendship.</li>
            <li><b>LOCAL AND GLOBAL COMMUNITY:</b> Rugby has a strong local community here in Porvoo and a strong global community. Major events like the Rugby World Cup bring local fans together, and fans from all over the world together, fostering a sense of unity and shared passion.</li>
          </ul>
          <p>
            If you want to to get involved with the Old Town Shamrocks, we'd love to have you! Please see the Contact section below and get in touch with us today!
          </p>
        </div>

        <Suspense fallback={<div className="recruiting-image" style={{ height: '300px', background: '#ccc' }}>Loading image...</div>}>
          <LazyImage
            src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479285/Recruitment_2_mvfz3p.png"
            alt="Recruiting Image 2"
            className="recruiting-image"
          />
        </Suspense>
      </section>
    </div>
  );
};

export default MedRec;
