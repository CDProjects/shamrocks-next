"use client";

import React from 'react';
import './Team.css';

const teamPicture = "https://res.cloudinary.com/dscbso60s/image/upload/v1751479070/Team_2025_kneel_nvbb70.jpg";

const Team = ({ players = [] }) => {
  
  // Filter the data coming from the CMS
  const forwards = players.filter(p => p.category === 'Forward');
  const backs = players.filter(p => p.category === 'Back');
  const coaches = players.filter(p => p.category === 'Coach');

  return (
    <section id="team-section" className="team-section">
      <div id="team-marker"></div>
      <h1 className="section-title">TEAM</h1>
      
      <picture>
        <source srcSet={teamPicture.replace('.jpg', '.webp')} type="image/webp" />
        <img
          src={teamPicture}
          alt="Team"
          className="team-picture"
        />
      </picture>
      
      <h2>2025 Team Roster</h2>
      
      <div className="roster content-container">
        
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