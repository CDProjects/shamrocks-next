import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Lazy load image component
const LazyImage = lazy(() => import('./LazyImage'));

// Cloudinary Configuration
const CLOUDINARY_CLOUD_NAME = "dscbso60s";
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;
const CLOUDINARY_TRANSFORMATIONS = "w_1600,f_auto,q_auto"; // Width 1600px, auto format, auto quality

// Helper function to construct Cloudinary URLs from the provided full URLs
// It extracts the version/public_id.format part and prepends transformations
const constructCloudinaryUrl = (originalUrl) => {
  if (!originalUrl || typeof originalUrl !== 'string') {
    console.error("Invalid original URL provided:", originalUrl);
    return ""; // Or a placeholder image URL
  }
  // Example originalUrl: https://res.cloudinary.com/dscbso60s/image/upload/v1748937312/Akseli_4_jlbpzt.png
  // We need to extract "v1748937312/Akseli_4_jlbpzt.png"
  const parts = originalUrl.split("/image/upload/");
  if (parts.length < 2 || !parts[1]) {
    console.error("Cannot parse version/public_id from URL:", originalUrl);
    return originalUrl; // Fallback to original if parsing fails, though it won't have transformations
  }
  const versionAndPublicIdWithPath = parts[1];
  return `${CLOUDINARY_BASE_URL}/${CLOUDINARY_TRANSFORMATIONS}/${versionAndPublicIdWithPath}`;
};


// Original master list of images - mapping to Cloudinary URLs
// The 'originalSrc' is the direct Cloudinary URL you provided.
// The 'src' will be the transformed URL.
const masterImagesList = [
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937312/Akseli_4_jlbpzt.png", alt: "Akseli" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937327/Ale_2_x8pie7.png", alt: "Ale" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937365/Ari_GV2_cxtc8c.png", alt: "Ari" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937337/Allu_1_sbrlqw.png", alt: "Allu" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937376/Avea_2_rgc97s.png", alt: "Avea" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937395/Casey_2_k7wsvr.png", alt: "Casey" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937412/Dan_1_xlpsti.png", alt: "Dan" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937405/Eerik_2_qtloyu.png", alt: "Eerik" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937413/Glenn_2_pr2ba5.png", alt: "Glenn" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937444/Jaska_4_kxkuxc.png", alt: "Jaska" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937455/Jay_3_fht7yy.png", alt: "Jay" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937465/Jemi_2_qbahzp.png", alt: "Jemi" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937496/Jimm_2_vi6flz.png", alt: "Jimm" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937499/Jon_2_wbyudx.png", alt: "Jon" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937526/Linus_3_nuypnd.png", alt: "Linus" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937527/Juuso_2_dzwhsm.png", alt: "Juuso" }, // Note: Original import was Juuso 3, URL says Juuso_2. Using URL.
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937609/Markus_2_km2pvo.png", alt: "Markus" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937651/Niko_1_im7s8v.png", alt: "Niko" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937667/Otto_2_x0fxxj.png", alt: "Otto" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937725/Petu_3_rzqulw.png", alt: "Petu" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937834/Robert_3_efzxhu.png", alt: "Robert" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937888/Samu_3_hg8asp.png", alt: "Samu" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937926/Shane_2_zlo3bv.png", alt: "Shane" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748937964/Stefu_2_vpt80u.png", alt: "Stefu" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748938037/Tobias_2_dzj7sa.png", alt: "Tobias" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748938159/Tommi_3_zybzvh.png", alt: "Tommi" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748938165/Tommi_K_1_dparrq.png", alt: "Tommi K" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748938131/Tommi_P_2_zwo1du.png", alt: "Tommi P" }, // Note: Original import was Tommi P 3, URL says Tommi_P_2. Using URL.
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748938152/Tuomas_2_hb6q3z.png", alt: "Tuomas" },
  { originalSrc: "https://res.cloudinary.com/dscbso60s/image/upload/v1748938168/Widz_2_rg4qb9.png", alt: "Widz" },
].map(image => ({
  ...image,
  src: constructCloudinaryUrl(image.originalSrc) // Create the transformed URL
}));


// Fisher-Yates (Knuth) Shuffle algorithm
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Home = () => {
  const [shuffledImages, setShuffledImages] = useState(() =>
    masterImagesList.length > 0 ? shuffleArray(masterImagesList) : []
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (masterImagesList.length === 0) {
      return;
    }

    document.body.classList.add("home-page");

    const interval = setInterval(() => {
      setCurrentIndex((prevCurrentIndex) => {
        const nextIndexCandidate = prevCurrentIndex + 1;
        if (nextIndexCandidate >= shuffledImages.length) {
          const lastImageShown = shuffledImages[prevCurrentIndex];
          let newShuffledList = shuffleArray(masterImagesList);
          while (
            masterImagesList.length > 1 &&
            newShuffledList[0]?.src === lastImageShown?.src
          ) {
            newShuffledList = shuffleArray(masterImagesList);
          }
          setShuffledImages(newShuffledList);
          return 0;
        } else {
          return nextIndexCandidate;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      document.body.classList.remove("home-page");
    };
  }, [shuffledImages]);

  if (shuffledImages.length === 0) {
    return (
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="content-wrapper">
            <p>No images to display.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="home-section">
      <div id="home-marker"></div>
      <div className="carousel-container">
        <div className="carousel">
          {shuffledImages.map((image, index) => (
            <div
              key={image.src} // Cloudinary URLs will be unique and stable
              className={`carousel-item ${index === currentIndex ? "active" : ""}`}
            >
              <Suspense fallback={<div className="image-placeholder">Loading...</div>}>
                {/* Simplified: Pass the transformed Cloudinary URL directly to LazyImage */}
                {/* The f_auto in the URL will handle WebP/PNG format serving */}
                <LazyImage src={image.src} alt={image.alt} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
      <div className="home-content">
        <div className="content-wrapper">
          <h1 className="home-title">#wearerecruiting</h1>
          <p className="home-paragraph">
            We are on the hunt for new people and players of <br />
            all sizes to join our club - No experience needed!
          </p>
          <Link to="/media-recruitment#recruitment" className="about-us-btn">
            MORE ABOUT THIS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;