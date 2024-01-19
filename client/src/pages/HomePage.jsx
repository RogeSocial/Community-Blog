import { Link } from 'react-router-dom';
import '../styling/HomePage.css';

const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Lorem ipsum...', date: '2024-01-19' },
    { id: 2, title: 'Blog Post 2', content: 'Dolor sit amet...', date: '2024-01-20' },
    // Add more blog posts as needed
];

function HomePage() {
    return (
        <div className="home-page">
            {blogPosts.map((post) => (
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