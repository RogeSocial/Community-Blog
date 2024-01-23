import React, { useState } from 'react';
import '../styling/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onSearchChange }) {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onSearchChange(e.target.value);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-title">Rabbit</Link>
            <input
                type="text"
                className="nav-search"
                placeholder="Search Rabbit"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="nav-links">
                <Link to="/create-post" className="nav-link">POST</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Signup</Link>
            </div>
        </nav>
    );
}

export default Navbar;