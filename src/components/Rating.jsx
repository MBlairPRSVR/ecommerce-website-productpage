import React from 'react'

const Rating = ({ rating }) => {
  // Create an array of 5 stars, marking them as filled based on the rating
  const stars = Array(5).fill(false).map((_, index) => index < rating);

  return (
    <span className="rating">
      {stars.map((isFilled, index) => (
        <i key={index} className={`icofont-ui-rating ${isFilled ? 'filled' : ''}`}></i>
      ))}
    </span>
  );
};

export default Rating;
