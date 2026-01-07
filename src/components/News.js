// src/Components/News/News.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./News.css";
import FacebookPageWrapper from "./FacebookPageWrapper"; // Ensure path is correct
import ExpandableNewsArticle from "./ExpandNews"; // Ensure path is correct
import { articleData } from "./ArticleData"; // Ensure path is correct
import ErrorBoundary from "./ErrorBoundary"; // Ensure path is correct

const semiFinalImage = "https://res.cloudinary.com/dscbso60s/image/upload/v1751481998/Sponsors_2025_zb9onz.jpg";

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [containerWidth, setContainerWidth] = useState(500);
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const articleIdFromUrl = searchParams.get("article");
    setExpandedArticleId(articleIdFromUrl || null);

    // Initial width calculation
    const calculateWidth = () => {
      // 500 is the max width supported by the FB plugin
      const w = Math.min(500, window.innerWidth > 40 ? window.innerWidth - 40 : 500);
      setContainerWidth(w);
    };

    calculateWidth(); // Run immediately

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const handleResize = () => {
      calculateWidth();
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  // REMOVED: The generic useEffect that called window.FB.XFBML.parse()
  // The FacebookPageWrapper now handles this internally when it mounts.

  const handleExpandArticle = (articleIdToExpand) => {
    const newExpandedId = expandedArticleId === articleIdToExpand ? null : articleIdToExpand;
    setExpandedArticleId(newExpandedId);

    if (newExpandedId) {
      navigate(`/news?article=${newExpandedId}`, { replace: true });
    } else {
      navigate("/news", { replace: true });
    }
  };

  const getMetaTags = () => {
    return (
      <ErrorBoundary>
        <Helmet>
          <title>Shamrocks News</title>
          <meta property="og:title" content="Old Town Shamrocks - News" />
          <meta property="og:description" content="Latest news, updates, and articles from Old Town Shamrocks Rugby Club." />
          <meta property="og:url" content={`${window.location.origin}/#/news`} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${window.location.origin}/images/default-shamrocks-news-og-image.jpg`} />
        </Helmet>
      </ErrorBoundary>
    );
  };

  return (
    <div className="news-section">
      {getMetaTags()}
      <h1>NEWS</h1>

      {isLoading ? (
        <div className="custom-loader">
          <div className="spinner"></div>
          <p>Loading news feed...</p>
        </div>
      ) : (
        <>
          <div className="semi-final-image-container">
            <img src={semiFinalImage} alt="Shamrocks Rugby Action" className="semi-final-image" />
          </div>

          <div className="fb-page-container">
            <FacebookPageWrapper
              fbPageUrl="https://www.facebook.com/OldTownShamrocks/"
              tabs="timeline"
              width={String(containerWidth)}
              height="700"
            />
          </div>

          <div className="articles-container" style={{ maxWidth: '800px', margin: '32px auto', backgroundColor: '#000', padding: '16px', borderRadius: '8px' }}>
            <h2 style={{ color: '#ffffff', marginBottom: '24px', textAlign: 'center', fontSize: '2em' }}>ARTICLES</h2>
            {articleData && articleData.length > 0 ? (
              articleData.map(article => (
                <div key={article.id} className="expandable-article-item-wrapper">
                  <ExpandableNewsArticle
                    id={article.id}
                    title={article.title}
                    date={article.date}
                    content={article.content}
                    language="fi"
                    images={article.images}
                    isExpanded={expandedArticleId === article.id}
                    onExpand={() => handleExpandArticle(article.id)}
                  />
                </div>
              ))
            ) : (
              <p style={{ color: '#ccc', textAlign: 'center' }}>No articles available at the moment.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default News;