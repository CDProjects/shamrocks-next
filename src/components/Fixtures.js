import React, { useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import './Fixtures.css';

const Fixtures = () => {
   //const [competitionTable, setCompetitionTable] = useState('');
   //const [isLoading, setIsLoading] = useState(true);
   //const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/competitionTable.html')
      .then(response => response.text())
      .then(data => {
        // Parse the HTML string
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        // Modify the structure of the second column
        const cells = doc.querySelectorAll('td:nth-child(2)');
        cells.forEach(cell => {
          const img = cell.querySelector('img');
          const text = cell.textContent.trim();
          cell.innerHTML = `
            <div class="team-info">
              ${img ? img.outerHTML : ''}
              <span>${text}</span>
            </div>
          `;
        });

        // Convert back to string
         //setCompetitionTable(doc.body.innerHTML);
         //setIsLoading(false);
      })
      .catch(err => {
         //setError(err);
         //setIsLoading(false);
      });
  }, []);

  const fixturesData = [
    { date: "24.5", teams: "SHAMROCKS - EAGLES",    score: "43 - 0", time: "klo 13:00" },
    { date: "14.6", teams: "SHAMROCKS - KALEV",    score: "24 - 0 (F)",  time: "klo 13:00" },
    { date: "28.6", teams: "SHAMROCKS - TAMPERE",  score: "45 - 10",  time: "klo 12:00" },
    { date: "5.7",  teams: "EAGLES - SHAMROCKS",    score: "16 - 15",  time: "klo 13:00" },
    { date: "12.7", teams: "SHAMROCKS - WARRIORS", score: "10 - 32",  time: "klo 13:00" },
    { date: "26.7", teams: "KALEV - SHAMROCKS",    score: "33 - 22",  time: "klo 13:00" },
    { date: "9.8",  teams: "HELSINKI - SHAMROCKS", score: "50 - 0",  time: "klo 13:00" },
    { date: "16.8", teams: "TAMPERE - SHAMROCKS",  score: "14 - 5",  time: "klo 13:00" },
    { date: "30.8", teams: "WARRIORS - SHAMROCKS", score: "24 - 3",  time: "klo 13:00" },
    { date: "6.9",  teams: "SHAMROCKS - HELSINKI", score: "12 - 38",  time: "klo 13:00" },
    { date: "TBA",  teams: "SEMI-FINAL",         score: "0 - 0",  time: "N/A"      },
    { date: "TBA",  teams: "GRAND FINAL",        score: "0 - 0",  time: "N/A"      },
  ];

  return (
    <ErrorBoundary>
      <section id="fixtures-section" className="fixtures-section">
        {/* … your header, loading/status messages, etc. … */}

        {/*
          <div id="fixtures-marker"></div>
          <div className="content-container">
            <h1 className="section-title">RESULTS & FIXTURES</h1>
          </div>
          
          {isLoading && <p>Loading competition table...</p>}
          {error && <p>Error loading competition table: {error.message}</p>}
          {competitionTable && (
            <div className="competition-table-wrapper">
              <div 
                className="competition-table" 
                dangerouslySetInnerHTML={{ __html: competitionTable }} 
              />
            </div>
          )}
        */}

        <picture>
          <img
            src="https://res.cloudinary.com/dscbso60s/image/upload/v1762801666/Rugby_Kurssi_2025_rhv2dn.jpg"
            alt="Juniors and Beginners Rugby Course Poster"
            className="fixtures-picture"
          />
        </picture>
        
        <div className="content-container">
          <h2 className="fixtures-subtitle">2025 Championship</h2>
          <h3 className="fixtures-subtitle">OTS FIXTURES &amp; RESULTS</h3>
          
          {fixturesData.map((fixture, index) => (
            <p key={index} className="fixtures-text">
              <span className="date">{fixture.date}</span>

              {/* ← Inserted kickoff‐time span here */}
              <span className="time">{fixture.time}</span>

              <span className="teams">{fixture.teams}</span>
              <span className="score">
                <b>{fixture.score}</b>
                <br />
              </span>
            </p>
          ))}
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default React.memo(Fixtures);
