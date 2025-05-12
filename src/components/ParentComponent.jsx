import React, { useState } from 'react';
import SelectedCategory from './SelectedCategory';

const ParentComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log('Selected category:', category);
  };

  return (
    <div>
      <h1>Selected Category: {selectedCategory}</h1>
      <SelectedCategory onChange={handleCategoryChange} />
    </div>
  );
};

export default ParentComponent;
