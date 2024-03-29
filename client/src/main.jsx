import React from 'react'
import ReactDOM from 'react-dom/client'
import CreatePostPage from './pages/CreatePostPage';
import App from './App';
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PostDetailPage from "./pages/PostDetailPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<HomePage/>}/>
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/api/blog/:postId" element={<PostDetailPage />} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)