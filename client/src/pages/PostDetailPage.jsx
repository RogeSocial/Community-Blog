// PostDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../styling/postpage.css';

function PostDetailPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch the specific blog post by ID
        fetch(`http://localhost:8080/api/blog/${postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            mode: 'cors',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching blog post', error));
    }, [postId]);

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div className="post-detail-page">
            <h1 className='post-title'>{post.title}</h1>
            <p className='post-content'>{post.content}</p>
            <p className='post-content'>Posted on: {post.date}</p>
        </div>
    );
}

export default PostDetailPage;
