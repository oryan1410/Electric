import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const posts = {
        "1": {
            title: "First Post",
            author: "Admin",
            date: "2024-06-01",
            content: "This is the content of the first post.",
        },
        "2": {
            title: "Second Post",
            author: "Admin",
            date: "2024-06-02",
            content: "This is the content of the second post.",
        },
        "3": {
            title: "Third Post",
            author: "Admin",
            date: "2024-06-03",
            content: "This is the content of the third post.\n\nIt can contain multiple paragraphs.\n\nThis is the second paragraph of the third post.",       
        }
    };
    // Helper function to split content into paragraphs
    const renderParagraphs = (content) => {
        if (!content) return null;
        // Split by two or more newlines (handles \n\n or \r\n\r\n)
        return content.split(/\r?\n\r?\n+/).map((para, idx) => (
            <p key={idx}>{para}</p>
        ));
    };
useEffect(() => {
    console.log("PostPage mounted with id:", id);
    // Scroll to the top of the page when the component mounts
    if (id) {
        setPost(posts[id]);
    }
}, [id]);




    return (
        !post ? (
            posts[id] === undefined ? (
                <div>Post not found.</div>
            ) : (
                <div>Loading...</div>
            )
        ) : (
        <div className="post-page">
            <h1>{post.title}</h1>
            <p>
                <em>
                    By {post.author} on {new Date(post.date).toLocaleDateString()}
                </em>
            </p>
            <div
                className="post-content"
                style={{
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    marginBottom: '20px'
                }}
            >
                {post.content}
            </div>

            <textarea
                placeholder='Add a comment...'
                style={{ width: '100%', padding: '10px', marginTop: '20px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '60px', resize: 'vertical' }}
                onChange={(e) => console.log(e.target.value)}
            />
        </div>
        )
    );
};

export default PostPage;