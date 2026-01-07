// src/Components/Touch.js
import React from 'react';
import './Touch.css';
import { Link } from 'react-router-dom';

const poster = "https://res.cloudinary.com/dscbso60s/image/upload/v1762797148/Touch_Poster_khryka.jpg";

export default function Touch() {
  return (
    <section className="touch-section touch-page">
      <div className="content-container">
        <h1 className="section-title">TOUCH RUGBY</h1>

        <div className="touch-poster-wrapper">
          <img
            src={poster}
            alt="Touch Rugby Poster"
            className="touch-poster"
          />
        </div>

        <section className="touch-section text-left">
          <h2>Touch rugbysta yleisesti</h2>
          <p>
            Touch rugby on kontaktiton ja nopea juoksu- ja syöttelylaji, jossa on
            kaksi neljäntoista henkilön joukkuetta, ja kentällä kerrallaan kuusi
            pelaajaa per joukkue. Joukkueet taistelevat rugby pallosta olemalla
            hyökkääjiä ja puolustajia vuorotellen. Kontakti rugbysta poiketen
            touch rugby on usein sekajoukkue-laji.
          </p>
          <ul>
            <li>
              Hyökkääjät yrittävät saada pallon puolustajien maaliviivan taakse
              juoksemalla ja syöttelemällä ennenkuin heiltä loppuu "touchit" tai
              tulee rike. Touch rugbyssa ei saa syöttää myöskään eteenpäin, vain
              sivuille ja taakse. Hyökkääjillä on 6 "elämää" eli touchia ennenkuin
              hyökkääjistä tulee puolustajia ja toisin päin.
            </li>
            <li>
              Puolustajat yrittävät tehdä toucheja pysäyttämällä hyökkäävä joukkue
              ennenkuin he saavat pallon maaliviivan taakse.
            </li>
            <li>
              Touch rugbyssa ei ole taklauksia ja "touchiksi" sanotaan kevyttä
              kosketusta yhdellä tai kahdella kädellä koskettamalla pallon kantajaa.
              Se pysäyttää hetkeksi hyökkäyksen ja hyökkääjät menettävät yhden
              kuudesta "elämistään".
            </li>
          </ul>
          <p>Touch rugbya pelataan 70m x 50m kokoisella nurmikentällä.</p>
        </section>

        <section className="touch-section">
          <h2>Tärkeää tietoa</h2>

          <div className="touch-qa">
            <p className="question">
              Missä ja milloin touch rugbya harrastetaan?
            </p>
            <p>
              Touch kausi alkaa <strong>04.12 sitten 01.01.26 - 30.04.26</strong> KANTELETALO A-SALISSA
              Treenit ajat löytyvät <Link to="/training" className="touch-link" style={{ color: '#00ffcc' }}>TRAINING</Link> linkin alta
            </p>
          </div>

          <div className="touch-qa">
            <p className="question">Onko tämä ympärivuotinen harrastus?</p>
            <p>
              Kyllä. Meillä on kauden lopussa nurmikenttien sulkeuduttua tauko,
              jonka jälkeen harjoittelemme sisällä.
            </p>
          </div>

          <div className="touch-qa">
            <p className="question">Kenelle touch rugby sopii?</p>
            <p>
              Touch Rugby sopii kaikille iästä tai sukupuolesta riippumatta.
              Shamrocksin touch-joukkue on sekajoukkue. Alle 13-vuotiaille
              suositellaan junioreihin tutustumista samaan aikaan eri kentällä.
            </p>
          </div>

          <div className="touch-qa">
            <p className="question">Mitä touch rugby maksaa?</p>
            <p>
              Alle 18-vuotiaille jäsenmaksu on ilmainen.
            </p>
          </div>

          <div className="touch-qa">
            <p className="question">
              Mitä varusteita pitäisi touch rugbyyn hankkia?
            </p>
            <p>
              Urheilulliset vaatteet, nappikset tai lenkkarit ja juomapullo.
            </p>
          </div>

          <div className="touch-qa">
            <p className="question">
              Kuka valmentaa ja keneltä voi kysyä lisää?
            </p>
            <p>
              Valmentaja: <strong>Nico Laurila</strong><br />
              Lisätietoa:{" "}
              <a href="mailto:nico.shamrocks@proton.me">nico.shamrocks@proton.me</a>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
