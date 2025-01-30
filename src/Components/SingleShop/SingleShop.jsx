import React, { useState } from 'react';
import Header from '../Header/Header';
import './SingleShop.css';
import Footer from '../Footer/Footer';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import SinglePageBottom from '../SinglePageBottom/SinglePageBottom';
import { Link } from 'react-router-dom';

const SingleShop = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <Header />
      <div className="product-card">
        <div className="product-card__images">
          <img
            src="/img1.png"
            alt="Product"
            className="product-card__image"
          />
          <img
            src="/img1.png"
            alt="Product"
            className="product-card__image"
          />
          <img
            src="/img1.png"
            alt="Product"
            className="product-card__image"
          />
          <img
            src="/img1.png"
            alt="Product"
            className="product-card__image"
          />
        </div>
        <div>
          <img
            src="/image1.png"
            alt="Product"
            className="product-card__image2"
          />
        </div>
        <div className="product-card__details">
          <h1 className="product-card__title">Barberton Daisy</h1>
          <p className="product-card__price">$119.00</p>
          <p className="product-card__description">
            The ceramic cylinder planters come with a wooden stand to help elevate
            your plants off the ground.
          </p>

          <div className="product-card__sizes">
            <label className={`size-label ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => handleSizeChange('S')}>
              S
            </label>
            <label className={`size-label ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => handleSizeChange('M')}>
              M
            </label>
            <label className={`size-label ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => handleSizeChange('L')}>
              L
            </label>
            <label className={`size-label ${selectedSize === 'XL' ? 'selected' : ''}`} onClick={() => handleSizeChange('XL')}>
              XL
            </label>
          </div>

          <div className="product-card__actions">
            <div className="quantity">
              <button className="quantity__btn" onClick={handleDecrease}>-</button>
              <span className="quantity__number">{quantity}</span>
              <button className="quantity__btn" onClick={handleIncrease}>+</button>
            </div>
            <Link to={'/checkout'} className="btn btn--buy">Buy Now</Link>
            <Link to={'shoping-card'} className="btn btn--add">Add to Cart</Link>
          </div>

          <div className="product-card__info">
            <p>SKU: 1995751877966</p>
            <p>Categories: Potter Plants</p>
            <p>Tags: Home, Garden, Plants</p>
          </div>

          <div className="product-card__share">
            <span>Share this product:</span>
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedinIn className="social-icon" />
          </div>
        </div>
      </div>
      <SinglePageBottom />
      <Footer />
    </>
  );
};

export default SingleShop;
