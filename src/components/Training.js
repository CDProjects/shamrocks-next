import React from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import LazyMap from "./LazyMap"; // Import LazyMap from the new file
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Training.css";

// Fix for default marker icon (same as before)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Training = () => {
  //const pormestariPosition = [60.38821658713419, 25.699862566589527]; // Kevätkumpu
  const tolkkinenPosition = [60.380506215958114, 25.650137416242696]; // Tolkinen
  const kanteletaloPosition = [60.38820023040421, 25.699402494474008]; // Kanteletalo B-Hall
  //const hamariPosition = [60.366146512050335, 25.641467413302312]; // Hamari

  return (
    <section id="training-section" className="training-section training-page">
      <div id="training-marker"></div>
      <h1 className="section-title">TRAINING</h1>
      <div className="training-container">

        {/* Juniors Section */}
        <div className="training-item">
          <h3>Juniors & Touch</h3>
          <p>THURSDAY 01.01.26 to 30.04.2026 @ KANTELETALO A-HALL</p>
          <LazyMap
            center={kanteletaloPosition}
            zoom={15}
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={kanteletaloPosition}>
              <Popup>Kanteletalo A-Hall</Popup>
            </Marker>
          </LazyMap>
          <a
            href="https://maps.app.goo.gl/Bjar5hh3X9AaSpA17"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            View Kanteletalo on Google Maps
          </a>
          </div>

        {/* Mens Section */}
        <div className="training-item">
          <h3>Mens</h3>
          <p>
            TUESDAY 06.01.26 to 28.04.2026 21:00 - 22:00 @ KOKONNIEMEN TEKONURMIKENTTIÄ <br />
            (NEXT DOOR TO UUSIMAA AREENA)<br />
            THURSDAY 08.01.26 to 30.04.2026 20:30 - 22:00 @ UUSIMAA AREENA, LAPINNIEMENTIE 27<br />
            (On most occasions we also have the running track booked 20:30 at Uusimaa Areena)

          </p>
          <LazyMap
            center={tolkkinenPosition}
            zoom={13}
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={tolkkinenPosition}>
              <Popup>Uusimaa Areena</Popup>
            </Marker>
          </LazyMap>
          <a
            href="https://maps.app.goo.gl/4rSsEfWw8eXcHYsm9"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            View Uusimaa Areena on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Training;
