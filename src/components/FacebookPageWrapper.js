"use client";

import React, { useEffect, useRef } from 'react';

const FacebookPageWrapper = ({ fbPageUrl, tabs, width, height }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Function to parse the widget
    const parseXFBML = () => {
      if (window.FB && containerRef.current) {
        window.FB.XFBML.parse(containerRef.current);
      }
    };

    // 2. If the SDK is already loaded (e.g. navigating back from another page)
    if (window.FB) {
      parseXFBML();
      return;
    }

    // 3. If SDK is NOT loaded, inject it EXACTLY like your old React app did
    if (!document.getElementById('facebook-jssdk')) {
      // Set up the initialization callback BEFORE the script loads
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: 'v20.0'
        });
        parseXFBML();
      };

      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_GB/sdk.js';
      script.async = true;
      script.defer = true;
      
      document.body.appendChild(script);
    }
  }, []); // Run only on mount

  // 4. Re-parse if the screen width changes (so it resizes correctly)
  useEffect(() => {
    if (window.FB && containerRef.current) {
      window.FB.XFBML.parse(containerRef.current);
    }
  }, [width, height, fbPageUrl]);

  return (
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
  );
};

export default FacebookPageWrapper;