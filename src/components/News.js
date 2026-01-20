"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // Next.js hooks
import "./News.css";
// NOTE: Ensure these files exist in src/components/
import FacebookPageWrapper from "./FacebookPageWrapper"; 
import ExpandableNewsArticle from "./ExpandNews"; 

const semiFinalImage = "https://res.cloudinary.com/dscbso60s/image/upload/v1751481998/Sponsors_2025_zb9onz.jpg";

const News = ({ cmsArticles = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [containerWidth, setContainerWidth] = useState(500);
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Check URL for expanded article
    const articleSlugFromUrl = searchParams.get("article");
    setExpandedArticleId(articleSlugFromUrl || null);

    // Initial width calculation for Facebook Plugin
    const calculateWidth = () => {
      const w = Math.min(500, window.innerWidth > 40 ? window.innerWidth - 40 : 500);
      setContainerWidth(w);
    };

    calculateWidth();
    
    // Simulate loading delay for effect (optional)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const handleResize = () => calculateWidth();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [searchParams]);

  const handleExpandArticle = (slug) => {
    const newExpandedId = expandedArticleId === slug ? null : slug;
    setExpandedArticleId(newExpandedId);

    // Update URL without reloading page
    if (newExpandedId) {
      router.push(`/news?article=${newExpandedId}`, { scroll: false });
    } else {
      router.push("/news", { scroll: false });
    }
  };

  return (
    <div className="news-section">
      <h1 style={{ color: 'white', fontSize: '2.5rem', marginTop: '20px' }}>NEWS</h1>

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

          {/* Facebook Plugin */}
          <div className="fb-page-container">
            <FacebookPageWrapper
              fbPageUrl="https://www.facebook.com/OldTownShamrocks/"
              tabs="timeline"
              width={String(containerWidth)}
              height="700"
            />
          </div>

          {/* CMS Articles List */}
          <div className="articles-container" style={{ maxWidth: '800px', margin: '32px auto', backgroundColor: '#000', padding: '16px', borderRadius: '8px' }}>
            <h2 style={{ color: '#ffffff', marginBottom: '24px', textAlign: 'center', fontSize: '2em' }}>ARTICLES</h2>
            
            {cmsArticles && cmsArticles.length > 0 ? (
              cmsArticles.map(article => (
                <div key={article._id} className="expandable-article-item-wrapper">
                  <ExpandableNewsArticle
                    id={article.slug} // Use slug as ID
                    title={article.title}
                    date={article.date}
                    content={article.content}
                    language="fi"
                    // Map Sanity image to the format your component expects
                    images={article.mainImage ? [{ src: article.mainImage, alt: article.title }] : []}
                    isExpanded={expandedArticleId === article.slug}
                    onExpand={() => handleExpandArticle(article.slug)}
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