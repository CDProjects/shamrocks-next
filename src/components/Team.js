"use client";

import React from 'react';
import './Team.css';

const Team = ({ players = [], pageData }) => {
  
  // Filter the data coming from the CMS
  const forwards = players.filter(p => p.category === 'Forward');
  const backs = players.filter(p => p.category === 'Back');
  const coaches = players.filter(p => p.category === 'Coach');

  return (
    <section id="team-section" className="team-section">
      <div id="team-marker"></div>
      <h1 className="section-title">TEAM</h1>
      
      {/* Dynamic Team Picture */}
      {pageData && pageData.teamPhoto && (
        <picture>
          <img
            src={pageData.teamPhoto}
            alt="Team"
            className="team-picture"
          />
        </picture>
      )}
      
      {/* Dynamic Title */}
      <h2>{pageData ? pageData.seasonTitle : "Team Roster"}</h2>
      
      <div className="roster">
        
        {/* FORWARDS COLUMN */}
        <div className="forwards">
          <h3>Forwards</h3>
          {forwards.length > 0 ? (
            forwards.map(player => (
              <p key={player._id}>
                {player.name.toUpperCase()} {player.role && `(${player.role})`}
              </p>
            ))
          ) : (
            <p>Loading roster...</p>
          )}
        </div>

        {/* BACKS COLUMN */}
        <div className="backs">
          <h3>Backs</h3>
          {backs.length > 0 ? (
            backs.map(player => (
              <p key={player._id}>
                {player.name.toUpperCase()} {player.role && `(${player.role})`}
              </p>
            ))
          ) : (
            <p>Loading roster...</p>
          )}
        </div>
      </div>

      {/* COACHES SECTION */}
      <div className="coaches">
        {coaches.map(coach => (
          <p key={coach._id}>
            {coach.name} {coach.role && <strong>{coach.role.toUpperCase()}</strong>}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Team;