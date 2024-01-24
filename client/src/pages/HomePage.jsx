import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styling/HomePage.css';

function HomePage() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Hämta blogginlägg från API när komponenten monteras
        fetch('http://localhost:8080/api/blog', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers or authentication tokens if required
            },
            credentials: 'include', // Include credentials (cookies) in the request
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Sort the blog posts by date in descending order
            const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            setBlogPosts(sortedPosts);
        })
        .catch(error => console.error('Error fetching blog posts', error));
    }, []);

    const lessText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="home-page">
            {blogPosts.map((post) => (
                <div key={post.id} className="blog-post">
                    <Link to={`/api/blog/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{lessText(post.content, 150)}</p>
                    <Link to={`/post/${post.id}`} className="read-more-link">
                        Read More
                    </Link>
                    <p className="post-date">Posted on: {post.date}</p>
                </div>
            ))}
        </div>
    );
}

export default HomePage;