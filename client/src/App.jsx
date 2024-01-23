import React, { useState } from 'react';
import Navbar from './components/Navbar';
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