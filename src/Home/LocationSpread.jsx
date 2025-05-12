import React from 'react';
import { Link } from 'react-router-dom';

const title = "More Than 60,000 Customers";

const desc = "Buy products on any device with our app & enjoy your time what you want. Just download & install & start shopping.";

const clientsList = [
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Client Avatar 1',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Client Avatar 2',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Client Avatar 3',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Client Avatar 4',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Client Avatar 5',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Client Avatar 6',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Client Avatar 7',
    text: 'Join with Us',
  },
];

const LocationSpread = () => {
  return (
    <div className="clients-section style-2 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>

        {/* Main content */}
        <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((val) => (
              <div key={val.text} className="client-list">
                <Link to="/sign-up" className="client-content">
                  <span>{val.text}</span>
                </Link>
                <div className="client-thumb">
                  <img src={val.imgUrl} alt={val.imgAlt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSpread;
