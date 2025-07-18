import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { useUserContext } from './UserContext';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const { postsArr } = useUserContext();

    // Helper function to robustly render paragraphs from various content types
    const renderParagraphs = (content) => {
        if (!content) return null;
        // If array: handle array of strings or objects
        if (Array.isArray(content)) {
            return content.map((para, idx) => {
                // if (para.type === 'image') {
                //     return (
                //         <img
                //             key={idx}
                //             src={para.url}
                //             alt={para.alt || 'Post Image'}
                //             style={styles.postImage}
                //         />
                //     );
                // }
                if (para.type === 'text') {
                    return (
                        <div key={idx} style={{ marginBottom: 28 }}>
                            <h2 style={styles.paraHeader}>{para.header}</h2>
                            <p style={styles.postContent}>{para.content}</p>
                        </div>
                    );
                }
                return null;
            });
        }
        // If object: handle header/content or text
        if (typeof content === 'object') {
            if (content.header && content.content) {
                return (
                    <div style={{ marginBottom: 28 }}>
                        <h2 style={styles.paraHeader}>{content.header}</h2>
                        <p style={styles.postContent}>{content.content}</p>
                    </div>
                );
            }
            if (content.text) {
                return <p>{content.text}</p>;
            }
            if (content.content) {
                return <p>{content.content}</p>;
            }
        }
        // Otherwise, treat as string (legacy)
        return String(content)
            .split(/\r?\n\r?\n+/)
            .filter(para => para.trim() !== '')
            .map((para, idx) => (
                <p key={idx}>{para}</p>
            ));
    };
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        if (id) {
            setPost(postsArr[id]);
        }
    }, [id]);




    // Helper to format date as DD/MM/YYYY
    const formatDate = (dateStr) => {
        const date = new Date(dateStr + "T12:00:00");
        console.log(date);
        const day = String(date.getDate()).padStart(2, '0');
        console.log(day);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        console.log(`${day}/${month}/${year}`);
        return `${day}/${month}/${year}`;
    };

    return (
        !post ? (
            postsArr[id] === undefined ? (
                <div>Post not found.</div>
            ) : (
                <div>Loading...</div>
            )
        ) : (
            <div className="post-page" style={{
                minHeight: '100vh',
                background: 'linear-gradient(120deg, #e0f7fa 0%, #fff 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0',
            }}>
                <div style={{
                    maxWidth: 'none',
                    background: '#fff',
                    borderRadius: 18,
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)',
                    padding: '36px 22px 36px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                                    width: '100%',
                                    minHeight:'100vh',

                }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#19747e', marginBottom: 10, lineHeight: 1.1 }}>{post.title}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <span style={{ color: '#19747e', fontWeight: 600, fontSize: '1.1rem' }}>{post.author}</span>
                        <span style={{ color: '#b2ebf2', fontSize: 18 }}>|</span>
                        <span style={{ color: '#888', fontSize: '1.05rem' }}>{formatDate(post.date)}</span>
                    </div>
                    <div
                        className="post-content"
                        style={{ width: '100%', background: 'rgba(224,247,250,0.18)', borderRadius: 12, py: 28, marginBottom: 24, boxShadow: '0 2px 12px 0 rgba(33,203,243,0.06)' }}
                    >
                        {post.paragraphs ? (
                            post.paragraphs.map((para, index) => (
                                <div key={index} style={{ marginBottom: 32 }}>
                                    {para.header && (
                                        <h2 style={{ fontSize: '1.35rem', color: '#19747e', fontWeight: 700, margin: '0 0 12px 0', letterSpacing: '0.01em', textAlign: 'right', background: 'rgba(33,203,243,0.10)', borderRadius: 6, padding: '6px 12px' }}>{para.header}</h2>
                                    )}
                                    <p style={{ color: '#222', fontSize: '1.13rem', margin: 0, padding: 0, background: 'none', textAlign: 'right', lineHeight: 1.85 }}>{para.content}</p>
                                </div>
                            ))
                        ) : (
                            renderParagraphs(post.content)
                        )}

                        {/**comment Section */}
                        {post.comments && post.comments.length > 0 && (
                            <div style={{ marginTop: 36 }}>
                                <h3 style={{ color: '#19747e', fontWeight: 700, fontSize: '1.18rem', marginBottom: 18 }}>תגובות</h3>
                                {post.comments.map((comment, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            background: 'rgba(224,247,250,0.45)',
                                            borderRadius: 8,
                                            padding: '14px 18px',
                                            marginBottom: 16,
                                            boxShadow: '0 1px 6px 0 rgba(33,203,243,0.08)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                                            {/* <span style={{ color: '#19747e', fontWeight: 600 }}>{comment.author}</span> */}
                                            {/* <span style={{ color: '#b2ebf2', fontSize: 16 }}>|</span> */}
                                            <span style={{ color: '#888', fontSize: '0.98rem' }}>{formatDate(comment.date)}</span>
                                        </div>
                                        <div style={{ color: '#222', fontSize: '1.07rem', lineHeight: 1.7, textAlign: 'right' }}>
                                            {comment.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <textarea
                            placeholder='הוסף תגובה...'
                            style={{
                                width: '100%',
                                boxSizing: 'border-box',
                                marginTop: '32px',
                                borderRadius: '10px',
                                minHeight: '70px',
                                resize: 'vertical',
                                color: '#19747e',
                                fontFamily: 'inherit',
                                fontSize: '1.08rem',
                                boxShadow: '0 2px 8px 0 rgba(44,83,100,0.10)',
                                padding: '18px',
                                border: '1.5px solid #b2ebf2',
                                background: 'rgba(224,247,250,0.5)',
                                outline: 'none',
                            }}
                            onChange={(e) => console.log(e.target.value)}
                        />


                    </div>
                </div>
            </div>
        )
    );
};

export default PostPage;

const styles = {
    postPage: {
        padding: '20px',
        margin: '0 auto',
        justifyContent: 'center',
        boxShadow: '0 6px 32px 0 rgba(0,0,0,0.18)',
        color: '#000', // light teal for text
        fontFamily: 'Heebo, Rubik, Arial, sans-serif',
        transition: 'box-shadow 0.3s',
        minHeight: 400
    },
    postContent: {
        whiteSpace: 'pre-wrap',
        fontFamily: 'inherit',
        fontSize: '1.13rem',
        marginBottom: '20px',
        lineHeight: 1.85,
        color: '#000', // light teal for content
        letterSpacing: '0.01em',
        wordBreak: 'break-word',
        padding: '0 2px',
    },
    postTitle: {
        fontSize: '2.2rem',
        fontWeight: 800,
        marginBottom: 10,
        marginTop: 5,
        paddingRight: 12,
        color: '#000',
        letterSpacing: '0.04em',
    },
    postAuthor: {
        fontSize: '1.05rem',
        color: '#000', // light teal for content
        marginBottom: 18,
        fontStyle: 'italic',
        borderBottom: '1px solid #19747e',
        paddingBottom: 8,
        paddingRight: 12,
        marginTop: 10,

    },
    postHeader: {
        fontSize: '1.35rem',
        color: '#000',
        fontWeight: 700,
        margin: '0 0 8px 0',
        letterSpacing: '0.01em',
        textTransform: 'uppercase',
        borderLeft: '4px solid #21cbf3',
        paddingLeft: 12,
        background: 'rgba(33,203,243,0.07)'
    },
    postParagraph: {
        margin: 0
    },
    postImage: {
        width: 'auto',
        maxWidth: '100%',
        maxHeight: '400px',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        marginBottom: '20px'
    },
    paraHeader: {
        fontSize: '1.35rem',
        color: '#000',
        fontWeight: 700,
        margin: '0 0 8px 0',
        letterSpacing: '0.01em',
        textTransform: 'uppercase',
        paddingRight: 5,
        background: 'rgba(66, 95, 102, 0.25)',
        marginBottom: 10
    },
    textArea: {
        width: '100%', // Use 100% for full container width
        boxSizing: 'border-box', // Ensure padding is included in width
        marginTop: '20px',
        borderRadius: '8px',
        minHeight: '60px',
        resize: 'vertical',
        color: '#000',
        fontFamily: 'inherit',
        fontSize: '1.05rem',
        boxShadow: '0 2px 8px 0 rgba(44,83,100,0.18)',
        padding: '20px', // Padding inside the textarea
    }

};