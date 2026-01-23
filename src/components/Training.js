"use client";
import React from "react";
import dynamic from "next/dynamic";
import "./Training.css";

// Import Map dynamically (No SSR)
const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => <div style={{ height: "300px", background: "#333", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading Map...</div>
});

const Training = ({ data }) => {
  if (!data || !data.trainingSessions) {
    return <div style={{color:'white', textAlign:'center', marginTop: 50}}>Loading schedules...</div>;
  }

  return (
    <section id="training-section" className="training-section training-page">
      <div id="training-marker"></div>
      <h1 className="section-title">TRAINING</h1>
      <div className="training-container">

        {/* Dynamic Loop: Create a block for every session in the CMS */}
        {data.trainingSessions.map((session, index) => (
          <div className="training-item" key={index}>
            
            {/* 1. Editable Title */}
            <h3>{session.title}</h3>
            
            {/* 2. Editable Schedule Text */}
            <p style={{whiteSpace: 'pre-line'}}>{session.schedule}</p>
            
            {/* 3. Dynamic Map using CMS Coordinates */}
            <div className="map" style={{ height: "300px", width: "100%", marginBottom: "10px" }}>
              <LocationMap 
                  center={[session.latitude, session.longitude]} 
                  zoom={14} 
                  popupText={session.locationName || session.title} 
              />
            </div>

            {/* 4. Google Maps Button */}
            {session.googleMapsLink && (
              <a href={session.googleMapsLink} target="_blank" rel="noopener noreferrer" className="map-link">
                View {session.locationName || "Location"} on Google Maps
              </a>
            )}
          </div>
        ))}

        {data.trainingSessions.length === 0 && (
            <p style={{textAlign: 'center'}}>No training sessions scheduled.</p>
        )}

      </div>
    </section>
  );
};

export default Training;