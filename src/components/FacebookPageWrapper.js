"use client";

import React, { useEffect, useRef } from 'react';
import Script from 'next/script'; // Import Next.js Script component

const FacebookPageWrapper = ({ fbPageUrl, tabs, width, height }) => {
  const containerRef = useRef(null);

  // Function to tell Facebook to render the widget
  const parseXFBML = () => {
    if (window.FB && containerRef.current) {
      window.FB.XFBML.parse(containerRef.current);
    }
  };

  // Re-parse if the width changes (e.g. rotating a mobile phone)
  useEffect(() => {
    parseXFBML();
  }, [width, height, fbPageUrl]);

  return (
    <>
      {/* The Next.js way to safely load the Facebook SDK */}
      <Script 
        id="facebook-jssdk" 
        src="https://connect.facebook.net/en_GB/sdk.js" 
        strategy="lazyOnload" // Loads in the background so it doesn't slow down your site
        onLoad={() => {
          // Once the script downloads, initialize it and parse the widget
          if (window.FB) {
            window.FB.init({
              xfbml: true,
              version: 'v20.0'
            });
            parseXFBML();
          }
        }}
      />

      {/* The actual Facebook Widget HTML */}
      <div 
        ref={containerRef} 
        key={width} 
        style={{ display: 'flex', justifyContent: 'center', minHeight: height + 'px', width: '100%' }}
      >
        <div 
          className="fb-page" 
          data-href={fbPageUrl}
          data-tabs={tabs}
          data-width={width}
          data-height={height}
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote cite={fbPageUrl} className="fb-xfbml-parse-ignore">
            <a href={fbPageUrl}>Old Town Shamrocks Porvoo</a>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default FacebookPageWrapper;