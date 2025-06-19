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
                console.log("para", para.url);
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
                        <div style={{ marginBottom: 28 }}>
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
        console.log("PostPage mounted with id:", id);
        // Scroll to the top of the page when the component mounts
        if (id) {
            console.log("post", postsArr[id]);
            setPost(postsArr[id]);
        }
    }, [id]);




    return (
        !post ? (
            postsArr[id] === undefined ? (
                <div>Post not found.</div>
            ) : (
                <div>Loading...</div>
            )
        ) : (
            <div className="post-page" style={styles.postPage}>
                <h1 style={styles.postTitle}>{post.title}</h1>
                <p style={styles.postAuthor}>
                    <em>
                        By {post.author} on {new Date(post.date).toLocaleDateString()}
                    </em>
                </p>
                <div
                    className="post-content"
                    style={styles.postContent}
                >
                    {post.paragraphs ? (
                        post.paragraphs.map((para, index) => (
                            <div key={index} style={{ marginBottom: 28 }}>
                                {para.header && (
                                    <h2 style={styles.paraHeader}>{para.header}</h2>
                                )}
                                <p style={styles.postContent}>{para.content}</p>
                            </div>
                        ))
                    ) : (
                        renderParagraphs(post.content)
                    )}
                                    <textarea
                    placeholder='הוסף תגובה...'
                    style={styles.textArea}
                    onChange={(e) => console.log(e.target.value)}

                />
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
        padding: 12,
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
        paddingRight: 12,
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