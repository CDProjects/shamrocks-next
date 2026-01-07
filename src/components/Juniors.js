import React from 'react';
import './Juniors.css';

const Juniors = () => (
  <section id="juniors-section" className="juniors-section">
    <div className="content-container">
      <h1 className="section-title">JUNIORS</h1>
    </div>

    {/* ─── Top two flyers ───────────────────────────── */}
    <div className="two-up-row top-images-wrapper">
      <img
        src="https://res.cloudinary.com/dscbso60s/image/upload/v1751479185/Junior_Touch_2025_p6yx1y.jpg"
        alt="Junior Touch 2025"
        className="responsive-img"
      />
      <img
        src="https://res.cloudinary.com/dscbso60s/image/upload/v1751481257/Juniors_1_abkgr1.jpg"
        alt="Juniori Rugby Flyer"
        className="responsive-img"
      />
    </div>

    {/* ─── Text block under the top flyers ──────────── */}
    <div className="text-block">
      <div className="content-container">
        <p>
          Juniorit jatkavat harjoittelua 4.12. ja sitten uudelleen 1.1.2026–30.4.2026 @ KANTELETALO A-HALL Klo 18.0-19.00<br />
          Otamme avoimin käsin vastaan kaikki nuoret
          ja lajista kiinnostuneet mukaan. Tällä hetkellä seura kaavailee jo
          ensimmäisiä pelejä junioreille. Jos olet kiinnostunut, otathan yhteyttä
          suomeksi numeroon +358408326626 (Juniori koordinaattori/valmentaja) ja
          ruotsiksi +358401930772 (apuvalmentaja).<br />
          JUNIORIT PELAAVAT MYÖS MATSEJA YMPÄRI VUODEN
        </p>
        <p className="juniors-english">
          Juniors will resume training on 04.12, then will resume again on 01.01.26 to 30.04.2026 @ KANTELETALO A-HALL from 18.00-19.00<br />
          We welcome with open arms all youngsters
          and those interested in the sport. At the moment the club is already
          planning the first games for juniors. If you are interested, please
          contact us in Finnish at +358408326626 (Junior coordinator/coach) and
          in Swedish at +358401930772 (assistant coach).<br />
          JUNIORS ALSO PLAY MATCHES ALL YEAR ROUND
        </p>
      </div>
    </div>

    {/* ─── Bottom two play-shots ────────────────────── */}
    <div className="two-up-row play-images-wrapper">
      <img
        src="https://res.cloudinary.com/dscbso60s/image/upload/v1751481297/Juniors_3_g5mazm.png"
        alt="Juniors training"
        className="responsive-img"
      />
      <img
        src="https://res.cloudinary.com/dscbso60s/image/upload/v1751481329/Juniors_2_ndzyad.png"
        alt="Juniors match"
        className="responsive-img"
      />
    </div>
  </section>
);

export default React.memo(Juniors);
