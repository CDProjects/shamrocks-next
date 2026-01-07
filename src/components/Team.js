// src/Components/Team.js
import React from 'react';
import './Team.css';

const teamPicture = "https://res.cloudinary.com/dscbso60s/image/upload/v1751479070/Team_2025_kneel_nvbb70.jpg";

const Team = () => {
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
        <div className="forwards">
          <h3>Forwards</h3>
          <p>AKSELI PELTONIEMI (VC)</p>
          <p>ALEJANDRO RUIZ</p>
          <p>CASEY DENT</p>
          <p>ERIC NYBLOM</p>
          <p>GLENN KRISTJANKROON</p>
          <p>JAY ROBERTSON</p>
          <p>JOHN HELENIUS</p>
          <p>JUUSO KATAJA</p>
          <p>MARKO SALLERT</p>
          <p>OTTO ÅKERBERG</p>
          <p>PETTER LARSEN</p>
          <p>ROBERT GRÖN</p>
          <p>STEFAN ROGERS</p>
          <p>TOBIAS WECKSTRÖM</p>
          <p>TOMMI PAAVILAINEN</p>
          <p>TUOMAS UURINMÄKI</p>
        </div>

        <div className="backs">
          <h3>Backs</h3>
          <p>ALEXANDER BANNATYNE</p>
          <p>ARI GALI VALLS</p>
          <p>AVEA AVEA</p>
          <p>DANIEL KERR</p>
          <p>JARKKO TUORESMÄKI</p>
          <p>JAY ROBINSON</p>
          <p>JEMI OLANDER</p>
          <p>JIM HELENIUS</p>
          <p>MARKUS WINBERG</p>
          <p>NICO LAURLA</p>
          <p>SAMU-PETTERI PÄÄKKÖ (C)</p>
          <p>SHANE BREEN</p>
          <p>TOMMASO CANOVA</p>
          <p>TOMMI GALI VALLS</p>
          <p>TOMMI KOSKI</p>
          <p>WIREMU RAHUI</p>
        </div>
      </div>

      <div className="coaches">
        <p>Marko Sallert <strong>HEAD COACH</strong></p>
        <p>Linus Backman <strong>BACKS COACH</strong></p>
      </div>
    </section>
  );
};

export default React.memo(Team);
