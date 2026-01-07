import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet";
import ShareButtons from "./ShareButtons"; // Import the component
import "./ExpandNews.css";

const ExpandableNewsArticle = ({
  id,
  title,
  date,
  content,
  language,
  images,
  isExpanded,
  onExpand,
}) => {
  const [truncatedTitle, setTruncatedTitle] = useState(title);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const toggleExpand = () => {
    onExpand(id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `Published ${date.getDate().toString().padStart(2, "0")}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;
  };

  useEffect(() => {
    const truncateTitle = () => {
      const titleElement = titleRef.current;
      const containerElement = containerRef.current;
      if (titleElement && containerElement) {
        // Reduced buffer since we moved the icons
        const maxWidth = containerElement.offsetWidth - 50; 
        let text = title;
        titleElement.textContent = text;
        while (titleElement.offsetWidth > maxWidth && text.length > 0) {
          text = text.slice(0, -1);
          titleElement.textContent = text + "...";
        }
        setTruncatedTitle(titleElement.textContent);
      }
    };
    truncateTitle();
    window.addEventListener("resize", truncateTitle);
    return () => window.removeEventListener("resize", truncateTitle);
  }, [title]);

  // NEW: Auto-scroll to this article when it opens
  useEffect(() => {
    if (isExpanded && containerRef.current) {
      // Small timeout ensures the DOM is fully rendered/expanded before scrolling
      setTimeout(() => {
        containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [isExpanded]);

  const renderContent = () => {
    const contentParagraphs = content.split("\n\n");
    const result = [];
    contentParagraphs.forEach((paragraph, index) => {
      result.push(<p key={`p-${index}`}>{paragraph}</p>);
      if (images && images[Math.floor(index / 2)] && (index + 1) % 2 === 0) {
        const image = images[Math.floor(index / 2)];
        result.push(
          <img
            key={`img-${Math.floor(index / 2)}`}
            src={image.src}
            alt={image.alt}
            className="article-image"
          />
        );
      }
    });
    return result;
  };

  // We MUST include the /#/ so the Router knows where to go
  const articleUrl = `${window.location.origin}/#/news?article=${id}`;

  return (
    <div
      className={`expandable-article ${isExpanded ? "expanded" : ""}`}
      ref={containerRef}
    >
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content.substring(0, 200) + '...'} />
        <meta property="og:image" content={images[0]?.src} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <div className="article-header" onClick={toggleExpand}>
        <div className="title-section">
          <div className="icon">
            {isExpanded ? (
              <ChevronDown size={24} />
            ) : (
              <ChevronRight size={24} />
            )}
          </div>
          
          <div className="text-container">
            <h2 className="title" ref={titleRef}>
              {truncatedTitle}
            </h2>
            <span className="date">{formatDate(date)}</span>
            
            {/* MOVED HERE: Share buttons appear under date when expanded */}
            {isExpanded && (
               <div className="share-buttons-wrapper">
                 <ShareButtons url={articleUrl} title={title} />
               </div>
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="article-content">
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default ExpandableNewsArticle;