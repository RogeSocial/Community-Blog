import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreatePostPage from './pages/CreatePostPage';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import { AuthProvider } from './GlobalContext'


function App() {

    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
        </AuthProvider>
    );
}

export default App;