"use client";
import React from 'react';
import './Touch.css';
import Link from 'next/link';

export default function Touch({ data }) {
  if (!data) return null;

  return (
    <section className="touch-section touch-page">
      <div className="content-container">
        <h1 className="section-title">TOUCH RUGBY</h1>

        <div className="touch-poster-wrapper">
           {data.poster && <img src={data.poster} alt="Touch Poster" className="touch-poster" />}
        </div>

        <section className="touch-section text-left">
          <h2>Touch rugbysta yleisesti</h2>
          <p style={{whiteSpace: 'pre-line'}}>{data.introText}</p>
        </section>

        <section className="touch-section">
          <h2>Tärkeää tietoa</h2>
          {data.qaSection && data.qaSection.map((qa, i) => (
            <div className="touch-qa" key={i}>
                <p className="question">{qa.question}</p>
                <p style={{whiteSpace: 'pre-line'}}>{qa.answer}</p>
            </div>
          ))}
          {/* Keep the generic link logic or add it to the CMS for strict control */}
        </section>
      </div>
    </section>
  );
}