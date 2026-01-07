import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { articleData } from './ArticleData';

// Ensure News.css is imported if not globally available, or styles are in global scope
// import './News.css'; 

const Article = () => {
    const { articleId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const article = articleData.find(a => a.id === articleId);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const fromShare = searchParams.get('from') === 'share';

        if (fromShare && article) {
            navigate(`/news?article=${article.id}`, { replace: true });
        }
        window.scrollTo(0, 0);
    }, [location, articleId, navigate, article]);

    if (!article) {
        return (
            <div style={{ textAlign: 'center', padding: '50px', color: 'white' }}>
                <h2>Article Not Found</h2>
                <p>The article you are looking for does not exist.</p>
                <button 
                    onClick={() => navigate('/news')} 
                    style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}
                >
                    Back to News
                </button>
            </div>
        );
    }

    const shareOnFacebook = () => {
        const articleUrl = encodeURIComponent(`https://shamrocks.fi/#/news/${article.id}?from=share`);
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
        window.open(shareUrl, 'FacebookShare', 'width=626,height=436');
    };

    const mainImage = article.images && article.images.length > 0 ? article.images[0] : null;
    const fullImageUrlForOg = mainImage ? `${window.location.origin}${mainImage.src}` : `${window.location.origin}/images/default-shamrocks-news-og-image.jpg`; // UPDATE FALLBACK OG IMAGE PATH

    return (
        <div className="article"> {/* This existing class from News.css will apply its styles */}
            <Helmet>
                <title>{article.title}</title>
                <meta property="og:title" content={article.title} />
                <meta 
                    property="og:description" 
                    content={article.content ? article.content.replace(/\n+/g, ' ').slice(0, 200) + '...' : 'Read the latest from Old Town Shamrocks.'} 
                />
                <meta property="og:image" content={fullImageUrlForOg} />
                {mainImage && <meta property="og:image:alt" content={mainImage.alt} />}
                <meta property="og:url" content={`https://shamrocks.fi/#/news/${article.id}`} />
                <meta property="og:type" content="article" />
            </Helmet>

            {/* Article Title - uses <h1>, ensure News.css styles .article h1 as desired */}
            <h1>{article.title}</h1>
            
            {/* Main Image - minimal inline styles, relies on CSS or browser defaults */}
            {mainImage && (
                <img 
                    src={mainImage.src} 
                    alt={mainImage.alt} 
                    style={{ 
                        display: 'block', /* Good for centering with margin: auto if container is text-align: center */
                        maxWidth: '100%',  /* Responsive */
                        height: 'auto',   /* Maintain aspect ratio */
                        margin: '20px auto' /* Some vertical space, and centers if block */
                    }} 
                />
            )}
            
            {/* Article Content Block */}
            {/* We use 'article-body-content' class to specifically style paragraphs within it */}
            <div className="article-body-content" style={{ whiteSpace: 'pre-line' }}>
                {article.content}
            </div>

            {/* Additional Images - if you choose to display them */}
            {article.images && article.images.length > 1 && (
                <div className="article-additional-images" style={{ marginTop: '30px' }}>
                    <h3 style={{textAlign: 'center'}}>More Images</h3> {/* Or use .article h3 from your CSS */}
                    {article.images.slice(1).map((img, index) => (
                        <img 
                            key={index} 
                            src={img.src} 
                            alt={img.alt} 
                            style={{ 
                                display: 'block', 
                                maxWidth: '80%', /* Or another appropriate size */
                                height: 'auto', 
                                margin: '15px auto', 
                                borderRadius: '4px' /* Optional small radius */
                            }}
                        />
                    ))}
                </div>
            )}
            
            {/* Share Button - plain button, relies on browser default or general button CSS */}
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <button 
                    onClick={shareOnFacebook}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '1em', 
                        cursor: 'pointer',
                        backgroundColor: '#1877F2', /* FB Blue */
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    Share on Facebook
                </button>
            </div>

            {/* Optional: Back to News Button */}
            <div style={{ marginTop: '20px', textAlign: 'center', marginBottom: '20px' }}>
                <button 
                    onClick={() => navigate('/news')} 
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '1em', 
                        cursor: 'pointer',
                        backgroundColor: '#555',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    Back to All News
                </button>
            </div>
        </div>
    );
};

export default Article;