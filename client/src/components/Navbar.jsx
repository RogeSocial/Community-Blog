import React, { useState } from 'react';
import '../styling/navbar.css';

function Navbar({ onSearchChange }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onSearchChange(e.target.value);
    };

    return (
        <nav className="navbar">
            <h1 className="nav-title">Rabbit</h1>
            <input
                type="text"
                className="nav-search"
                placeholder="Search Rabbit"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="nav-links">
                <a>POST</a>
                <a>Login</a>
                <a>Signup</a>
            </div>
        </nav>
    );
}

export default Navbar;