"use client";
import React from 'react';
import './Juniors.css';

const Juniors = ({ data }) => {
  if (!data) return null;
  return (
  <section id="juniors-section" className="juniors-section">
    <div className="content-container">
      <h1 className="section-title">JUNIORS</h1>
    </div>

    <div className="two-up-row top-images-wrapper">
      {data.topImage1 && <img src={data.topImage1} alt="Junior 1" className="responsive-img" />}
      {data.topImage2 && <img src={data.topImage2} alt="Junior 2" className="responsive-img" />}
    </div>

    <div className="text-block">
      <div className="content-container">
        <p style={{whiteSpace: 'pre-line'}}>{data.contentFinnish}</p>
        <p className="juniors-english" style={{whiteSpace: 'pre-line'}}>{data.contentEnglish}</p>
      </div>
    </div>

    <div className="two-up-row play-images-wrapper">
      {data.bottomImage1 && <img src={data.bottomImage1} alt="Junior 3" className="responsive-img" />}
      {data.bottomImage2 && <img src={data.bottomImage2} alt="Junior 4" className="responsive-img" />}
    </div>
  </section>
  );
};
export default Juniors;