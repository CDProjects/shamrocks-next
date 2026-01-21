"use client";
import React, { useEffect } from 'react';
import './Contact.css';
const otsShieldLogo = 'https://res.cloudinary.com/dscbso60s/image/upload/v1751480257/OTS_Shield_Logo_udmj0y.webp';

const Contact = ({ data }) => {
  useEffect(() => {
    document.body.classList.add('contact-page');
    return () => document.body.classList.remove('contact-page');
  }, []);

  if (!data) return null;

  return (
    <section id="contact-section" className="contact-section">
      <div className="content-container">
        <h1 className="section-title">CONTACT</h1>
        <div className="contact-info">
          <h3><i>For new people/players, contact our Chairman directly</i></h3>
          <h3>Old Town Shamrocks Rugby Club ry</h3>
          <p>{data.addressLine1}</p>
          <p>{data.addressLine2}</p>
          <p><strong>Chairman:</strong> {data.chairmanName} <a href={`tel:${data.chairmanPhone}`}>{data.chairmanPhone}</a></p>
          <p><strong>Club Email:</strong> <a href={`mailto:${data.clubEmail}`}>{data.clubEmail}</a></p>
        </div>
        <picture>
          <img src={otsShieldLogo} alt="Shield" className="contact-image" />
        </picture>
      </div>
    </section>
  );
};
export default Contact;