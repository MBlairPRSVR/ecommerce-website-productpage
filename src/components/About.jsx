import React from 'react';
import PageHeader from './PageHeader';
import './About.css';

const About = () => {
  return (
    <div className="about-page bg-white text-gray-900">
      <PageHeader title="About Us" curPage="About" />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-4">👋 Welcome to Our World</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            We're not just an eCommerce site — we're a movement of innovation, style, and technology. Built by passionate developers, creatives, and visionaries, we deliver digital experiences that feel personal and powerful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1600180758890-6a75879b1d5d?auto=format&fit=crop&w=800&q=80"
            alt="Team working together"
            className="rounded-xl shadow-lg w-full"
          />

          <div>
            <h2 className="text-2xl font-bold mb-3">💼 What We Do</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Build stunning and responsive web apps with React</li>
              <li>Design shopping experiences that feel intuitive and fast</li>
              <li>Craft clean, minimal UIs with Tailwind CSS and custom CSS</li>
              <li>Share powerful stories through every product page and blog</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-2">🌐 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe in simplicity, speed, and authenticity. Our mission is to help customers not just buy — but feel connected to their experience. Whether you're a sneakerhead, streetwear lover, or just browsing for something dope, we've got you.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-2">📬 Connect With Us</h2>
          <p className="text-gray-700 mb-4">We love collaborations, feedback, and helping others level up. Let’s build together.</p>
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-full text-lg hover:bg-gray-800 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
