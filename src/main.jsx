import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Fonts and Styles
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

// Swiper
import Swiper from 'swiper';

// App Components
import App from './App.jsx';
import Home from './Home/Home.jsx';
import Blog from './Blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import NotFound from './NotFound.jsx';


// Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blog', element: <Blog /> },
      { path: '/shop', element: <Shop /> },
      { path: '*', element: <NotFound /> },  // Catch-all for 404
    ],
  },
]);

// Wait for DOM to be ready before initializing Swiper
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-container');
});

// Render Application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
