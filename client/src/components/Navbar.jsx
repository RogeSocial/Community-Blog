import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/Navbar.css';
import { useAuth } from '../GlobalContext';

function Navbar() {
    const { token, logout } = useAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
        navigate(`/?search=${query}`);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-title">
                <h1>Rabbit</h1>
            </Link>
            <input
                type="text"
                className="nav-search"
                placeholder="Search Rabbit"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="nav-links">
                <Link to="/create-post" className="nav-links">
                    POST
                </Link>
                {token ? (
                    <button className="sign-out-button" onClick={logout}>
                        Sign Out
                    </button>
                ) : (
                    <>
                        <Link to="/login" className="nav-links">
                            Login
                        </Link>
                        <Link to="/register" className="nav-links">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
