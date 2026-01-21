"use client";
import React from "react";
import dynamic from "next/dynamic"; // Import dynamic
import "./Training.css";

// 1. Import the map dynamically and turn OFF server-side rendering (ssr: false)
const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => <div style={{ height: "300px", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading Map...</div>
});

const Training = ({ data }) => {
  const tolkkinenPosition = [60.380506215958114, 25.650137416242696];
  const kanteletaloPosition = [60.38820023040421, 25.699402494474008];

  if (!data) return <div style={{color:'white', textAlign:'center', marginTop: 50}}>Loading...</div>;

  return (
    <section id="training-section" className="training-section training-page">
      <div id="training-marker"></div>
      <h1 className="section-title">TRAINING</h1>
      <div className="training-container">

        {/* Juniors Section */}
        <div className="training-item">
          <h3>Juniors & Touch</h3>
          <p style={{whiteSpace: 'pre-line'}}>{data.juniorsSchedule}</p>
          
          {/* Map Wrapper */}
          <div className="map" style={{ height: "300px", width: "100%", marginBottom: "10px" }}>
            <LocationMap 
                center={kanteletaloPosition} 
                zoom={15} 
                popupText="Kanteletalo A-Hall" 
            />
          </div>

          <a href={data.juniorsMapLink} target="_blank" rel="noopener noreferrer" className="map-link">
            View Kanteletalo on Google Maps
          </a>
        </div>

        {/* Mens Section */}
        <div className="training-item">
          <h3>Mens</h3>
          <p style={{whiteSpace: 'pre-line'}}>{data.mensSchedule}</p>
          
          {/* Map Wrapper */}
          <div className="map" style={{ height: "300px", width: "100%", marginBottom: "10px" }}>
            <LocationMap 
                center={tolkkinenPosition} 
                zoom={13} 
                popupText="Uusimaa Areena" 
            />
          </div>

          <a href={data.mensMapLink} target="_blank" rel="noopener noreferrer" className="map-link">
            View Uusimaa Areena on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Training;