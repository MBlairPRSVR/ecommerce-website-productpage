import React from 'react'
import PageHeader from '../components/PageHeader'
import './Blog.css';  // Adjust the path if necessary

const ProductCard = ({ title, price, imgSrc, imgAlt, description }) => (
  <div>
    <h3 className="text-xl font-bold">{title} – {price}</h3>
    <img className="my-2 rounded-xl" src={imgSrc} alt={imgAlt} />
    <p>{description}</p>
  </div>
);

const Blog = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <PageHeader title="Blog Page" curPage="Blogs" />

      <h1 className="text-3xl font-bold mt-8 mb-4">🔥 Step Into Style: The Hottest Men's Adidas Sneakers & Pants of the Season</h1>
      <p className="mb-4">Adidas continues to dominate in both fashion and function. Whether you're after comfort, performance, or style, this season’s lineup is packed with essentials for every wardrobe.</p>

      {/* Sneaker Section */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">👟 Top Men's Sneakers You Can’t Miss</h2>

      <div className="space-y-6">
        <ProductCard
          title="ULTRABOOST 22 Shoes"
          price="$420"
          imgSrc="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"
          imgAlt="Ultraboost 22"
          description="With over 3,700 reviews and top-tier performance, this is a must-have sneaker."
        />

        <ProductCard
          title="Lunar New Year Ultraboost DNA"
          price="$196"
          imgSrc="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg"
          imgAlt="Lunar New Year Ultraboost"
          description="Celebrate in style. A beautiful, vibrant twist on the classic Ultraboost DNA."
        />
        
        {/* Add more ProductCards */}
      </div>

      {/* Pants Section */}
      <h2 className="text-2xl font-semibold mt-10 mb-2">👖 Matching It Up: Track Pants for The Win</h2>
      <div>
        <h3 className="text-xl font-bold">TIRO 21 Track Pants – $109–$146</h3>
        <p>Classic, sleek, and athletic. These pants are the go-to for comfort and movement.</p>
      </div>

      {/* Final Thoughts */}
      <h2 className="text-2xl font-semibold mt-10 mb-2">🛍️ Final Thoughts</h2>
      <p>Whether you're curating a streetwear look or showcasing these in your frontend project, Adidas’ 2025 drops are versatile, stylish, and ready for any platform or sidewalk.</p>
    </div>
  )
}

export default Blog
