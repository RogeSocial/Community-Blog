import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreatePostPage from './pages/CreatePostPage';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';

function App() {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;