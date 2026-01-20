"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Article = ({ articleData }) => {
    const router = useRouter();

    if (!articleData) return null;

    const shareOnFacebook = () => {
        const articleUrl = encodeURIComponent(`${window.location.origin}/news/${articleData.slug}`);
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
        window.open(shareUrl, 'FacebookShare', 'width=626,height=436');
    };

    return (
        <div className="article"> 
            {/* Title */}
            <h1>{articleData.title}</h1>
            <p style={{color: 'gray', fontSize: '0.9em', marginBottom: '10px'}}>{articleData.date}</p>
            
            {/* Main Image */}
            {articleData.mainImage && (
                <img 
                    src={articleData.mainImage} 
                    alt={articleData.title} 
                    style={{ 
                        display: 'block', 
                        maxWidth: '100%', 
                        height: 'auto', 
                        margin: '20px auto'
                    }} 
                />
            )}
            
            {/* Content */}
            <div className="article-body-content" style={{ whiteSpace: 'pre-line', color: '#ddd' }}>
                {articleData.content}
            </div>

            {/* Gallery Images */}
            {articleData.additionalImages && articleData.additionalImages.length > 0 && (
                <div className="article-additional-images" style={{ marginTop: '30px' }}>
                    <h3 style={{textAlign: 'center'}}>More Images</h3>
                    {articleData.additionalImages.map((imgSrc, index) => (
                        <img 
                            key={index} 
                            src={imgSrc} 
                            alt={`Gallery ${index}`} 
                            style={{ 
                                display: 'block', 
                                maxWidth: '80%', 
                                height: 'auto', 
                                margin: '15px auto', 
                                borderRadius: '4px'
                            }}
                        />
                    ))}
                </div>
            )}
            
            {/* Buttons */}
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <button 
                    onClick={shareOnFacebook}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '1em', 
                        cursor: 'pointer',
                        backgroundColor: '#1877F2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        marginRight: '10px'
                    }}
                >
                    Share on Facebook
                </button>

                <Link 
                    href="/news"
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '1em', 
                        backgroundColor: '#555',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        display: 'inline-block'
                    }}
                >
                    Back to All News
                </Link>
            </div>
        </div>
    );
};

export default Article;