import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

const subTitle = "Choose Any Products";
const title = "Buy Everything With Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: 'src/assets/images/category/01.jpg',
    imgAlt: 'DSLR Camera category image',
    iconName: 'icofont-brand-windows',
    title: 'DSLR Camera',
  },
  {
    imgUrl: 'src/assets/images/category/02.jpg',
    imgAlt: 'Shoes category image',
    iconName: 'icofont-brand-windows',
    title: 'Shoes',
  },
  {
    imgUrl: 'src/assets/images/category/03.jpg',
    imgAlt: 'Photography category image',
    iconName: 'icofont-brand-windows',
    title: 'Photography',
  },
  {
    imgUrl: 'src/assets/images/category/04.jpg',
    imgAlt: 'Formal Dress category image',
    iconName: 'icofont-brand-windows',
    title: 'Formal Dress',
  },
  {
    imgUrl: 'src/assets/images/category/05.jpg',
    imgAlt: 'Colorful Bags category image',
    iconName: 'icofont-brand-windows',
    title: 'Colorful Bags',
  },
  {
    imgUrl: 'src/assets/images/category/06.jpg',
    imgAlt: 'Home Decor category image',
    iconName: 'icofont-brand-windows',
    title: 'Home Decor',
  },
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>

        {/* Section Cards */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((val) => (
              <div key={val.title} className="col">
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    {/* Image Thumbnail */}
                    <div className="category-thumb">
                      <img src={val.imgUrl} alt={val.imgAlt} />
                    </div>

                    {/* Content */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <h6>{val.title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="text-center mt-5">
            <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
