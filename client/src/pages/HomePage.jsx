import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styling/HomePage.css';

function HomePage({ searchQuery }) {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Hämta blogginlägg från API när komponenten monteras
        fetch('http://localhost:8080/api/blog')
            .then(response => response.json())
            .then(data => setBlogPosts(data))
            .catch(error => console.error('Error fetching blog posts', error));
    }, []);
    const [filteredBlogPosts, setFilteredBlogPosts] = useState(blogPosts);
    useEffect(() => {
        // Filter blog posts based on search query
        const filteredPosts = blogPosts.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBlogPosts(filteredPosts);
    }, [searchQuery]);
    
    

    return (
        <div className="home-page">
            {filteredBlogPosts.map((post) => (
                <div key={post.id} className="blog-post">
                    <Link to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.content}</p>
                    <p className="post-date">Posted on: {post.date}</p>
                </div>
            ))}
        </div>
    );
}

export default HomePage;