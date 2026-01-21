"use client";
import React from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import LazyMap from "./LazyMap"; 
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Training.css";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
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
          <LazyMap center={kanteletaloPosition} zoom={15} scrollWheelZoom={false} className="map">
            <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={kanteletaloPosition}><Popup>Kanteletalo A-Hall</Popup></Marker>
          </LazyMap>
          <a href={data.juniorsMapLink} target="_blank" rel="noopener noreferrer" className="map-link">View Kanteletalo on Google Maps</a>
        </div>

        {/* Mens Section */}
        <div className="training-item">
          <h3>Mens</h3>
          <p style={{whiteSpace: 'pre-line'}}>{data.mensSchedule}</p>
          <LazyMap center={tolkkinenPosition} zoom={13} scrollWheelZoom={false} className="map">
            <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={tolkkinenPosition}><Popup>Uusimaa Areena</Popup></Marker>
          </LazyMap>
          <a href={data.mensMapLink} target="_blank" rel="noopener noreferrer" className="map-link">View Uusimaa Areena on Google Maps</a>
        </div>
      </div>
    </section>
  );
};
export default Training;