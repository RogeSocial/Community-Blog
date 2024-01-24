// PostDetailPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetailPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Hämta enskilt inlägg från API baserat på postId när komponenten monteras
        fetch(`http://localhost:8080/post/${postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            mode: "cors",
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
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>Posted on: {post.date}</p>
        </div>
    );
}

export default PostDetailPage;
