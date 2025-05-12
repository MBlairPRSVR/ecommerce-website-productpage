import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const ProductCards = ({ GridList, products }) => {
  // Function to render the product item
  const renderProduct = (product) => (
    <div className="product-item">
      {/* Product Image */}
      <div className="product-thumb">
        <div className="pro-thumb">
          <img src={product.img} alt={product.name} />
        </div>

        {/* Product Action Links */}
        <div className="product-action-link">
          <Link to={`/shop/${product.id}`}><i className="icofont-eye"></i></Link>
          <a href="#"><i className="icofont-heart"></i></a>
          <Link to="/cart-page"><i className="icofont-cart-alt"></i></Link>
        </div>
      </div>

      {/* Product Content */}
      <div className="product-content">
        <h5>
          <Link to={`/shop/${product.id}`}>{product.name}</Link>
        </h5>
        <p className="product-rating">
          <Rating />
        </p>
        <h6>${product.price}</h6>
      </div>
    </div>
  );

  return (
    <div className={`shop-product-wrap ${GridList ? 'grid' : 'list'}`}>
      {products.map((product) => (
        <div key={product.id} className="col-lg-4 col-md-6 col-12">
          {renderProduct(product)}
        </div>
      ))}
    </div>
  );
};

ProductCards.propTypes = {
  GridList: PropTypes.bool,
  products: PropTypes.array.isRequired
};

export default ProductCards;
