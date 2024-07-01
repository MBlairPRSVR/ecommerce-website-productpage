import React from 'react'
import ReactDOM from 'react-dom/client'
import Swiper from 'swiper';
// import for testing the router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './Home/Home.jsx'; // Import the 'Home' component from the appropriate file
import Blog from './Blog/Blog.jsx'; // Import the 'Blog' component from the appropriate file
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

//variables for the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { 
        path: "/Blog", 
        element: <Blog />}
    ]
  },
]);

const swiper = new Swiper('.swiper-container');

//for testing the router itself and its children components when the router is used in a browser context.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
