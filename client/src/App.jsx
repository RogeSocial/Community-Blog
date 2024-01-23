import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreatePostPage from './pages/CreatePostPage';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <Navbar onSearchChange={handleSearchChange} />
            <HomePage searchQuery={searchQuery} />
        </>
    );
}

export default App;