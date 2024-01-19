import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)