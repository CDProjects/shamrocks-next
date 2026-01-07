import React, { useState } from 'react';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon } from 'react-share';
import { FaShareAlt, FaCopy, FaInstagram } from 'react-icons/fa';
import './ExpandNews.css';

const ShareButtons = ({ url, title }) => {
  const [copied, setCopied] = useState(false);
  const iconSize = 24; 

  const handleCopyLink = (e) => {
    e.stopPropagation(); 
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleMobileShare = async (e) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({ title: title, url: url });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      handleCopyLink(e);
    }
  };

  const btnClass = "custom-share-btn"; 

  // Helper style to ensure SVGs behave like blocks (removes phantom vertical spacing)
  const iconStyle = { display: 'block' };

  return (
    <div className="share-buttons-container" onClick={(e) => e.stopPropagation()}>
      
      {/* FACEBOOK */}
      <FacebookShareButton url={url} quote={title} className="react-share-btn-fix">
        <FacebookIcon size={iconSize} borderRadius={0} />
      </FacebookShareButton>

      {/* WHATSAPP */}
      <WhatsappShareButton url={url} title={title} className="react-share-btn-fix">
        <WhatsappIcon size={iconSize} borderRadius={0} />
      </WhatsappShareButton>

      {/* INSTAGRAM (Custom) */}
      <a 
        href="https://www.instagram.com/oldtownshamrocks/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={btnClass} 
        style={{ backgroundColor: '#E1306C', width: iconSize, height: iconSize }}
      >
        <FaInstagram 
          size={iconSize * 0.85} 
          color="#fff" 
          // Added display:block and a tiny marginTop to optically center the camera lens
          style={{ display: 'block', marginTop: '1px' }} 
        />
      </a>

      {/* COPY LINK (Custom) */}
      <button 
        onClick={handleCopyLink} 
        className={btnClass} 
        style={{ backgroundColor: '#555', width: iconSize, height: iconSize }}
      >
        <FaCopy 
          size={iconSize * 0.75} 
          color="#fff" 
          style={iconStyle}
        />
      </button>

      {/* MOBILE NATIVE SHARE (Hidden on Desktop) */}
      <button 
        onClick={handleMobileShare} 
        className={`${btnClass} mobile-only`} 
        style={{ backgroundColor: '#007bff', width: iconSize, height: iconSize }}
      >
        <FaShareAlt 
          size={iconSize * 0.75} 
          color="#fff" 
          style={iconStyle}
        />
      </button>

      {copied && <span className="copied-message">Copied!</span>}
    </div>
  );
};

export default ShareButtons;