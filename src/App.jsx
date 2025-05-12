import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavItems from './components/navitems.jsx';
import Footer from './Home/Footer';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import Shop from './shop/Shop';  // Import Shop component

function App () {
  return (
    <div>
      <NavItems />
      <div className="min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} /> {/* Add the route for Shop here */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
