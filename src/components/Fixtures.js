"use client";
import React from "react";

const Fixtures = ({ data }) => {
  if (!data) return null;

  return (
    <section style={{ padding: "40px 20px", color: "white", textAlign: "center", fontFamily: "Oswald, sans-serif" }}>
      
      {/* 1. The Flyer Image */}
      {data.flyer && (
        <img 
          src={data.flyer} 
          alt="Season Flyer" 
          style={{ maxWidth: "800px", width: "100%", margin: "0 auto 40px", display: "block" }} 
        />
      )}

      {/* 2. Title */}
      <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "white" }}>{data.seasonTitle}</h2>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "30px", color: "#ddd" }}>OTS FIXTURES & RESULTS</h3>

      {/* 3. The Match Table */}
      <div style={{ maxWidth: "900px", margin: "0 auto", fontSize: "1.1rem" }}>
        
        {data.matches && data.matches.map((match, index) => (
          <div 
            key={index} 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr 3fr 1fr", 
              gap: "10px", 
              padding: "10px 0", 
              borderBottom: "1px solid #333",
              textAlign: "left",
              alignItems: "center"
            }}
          >
            {/* Date */}
            <div style={{ color: "#999" }}>{match.date}</div>
            
            {/* Time */}
            <div style={{ fontWeight: "bold" }}>{match.time}</div>
            
            {/* Teams */}
            <div style={{ fontWeight: "bold", textTransform: "uppercase" }}>
              <span style={{ color: match.homeTeam?.toLowerCase().includes('shamrocks') ? "#2e8b57" : "white" }}>
                {match.homeTeam}
              </span>
              <span style={{ margin: "0 10px", color: "#666" }}>-</span>
              <span style={{ color: match.awayTeam?.toLowerCase().includes('shamrocks') ? "#2e8b57" : "white" }}>
                {match.awayTeam}
              </span>
            </div>

            {/* Score */}
            <div style={{ textAlign: "right", fontWeight: "bold", fontSize: "1.2rem" }}>
              {match.score || "-"} <span style={{fontSize: "0.8rem"}}>{match.note}</span>
            </div>
          </div>
        ))}

        {(!data.matches || data.matches.length === 0) && <p>No fixtures found.</p>}

      </div>
    </section>
  );
};

export default Fixtures;