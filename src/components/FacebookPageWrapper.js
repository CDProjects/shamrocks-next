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

    // 2. If the SDK is already loaded (from a previous page visit), just parse
    if (window.FB) {
      parseXFBML();
      return;
    }

    // 3. If SDK is not loaded, load it now
    if (!document.getElementById('facebook-jssdk')) {
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
      // REMOVED: script.crossOrigin = 'anonymous';  <-- This was causing the Blocked Error
      
      document.body.appendChild(script);
    }
  }, []); // Run on mount

  // 4. Re-parse if props change (width/url)
  useEffect(() => {
    if (window.FB && containerRef.current) {
      window.FB.XFBML.parse(containerRef.current);
    }
  }, [width, height, fbPageUrl]);

  return (
    <div ref={containerRef} key={width} style={{ display: 'flex', justifyContent: 'center', minHeight: height + 'px' }}>
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