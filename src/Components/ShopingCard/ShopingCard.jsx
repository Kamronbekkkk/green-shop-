import React from 'react'
import Header from '../Header/Header'
import './ShopingCard.css'
import SinglePageBottomCard from '../SinglePageBottomCard/SinglePageBottomCard'
import Footer from '../Footer/Footer'
import { BiSolidTrash } from "react-icons/bi";
import { Link } from 'react-router-dom'


const ShopingCard = () => {
  return (
    <>
    <Header />
  <div className='shoping-card__box'>
  <div className="shopping-cart">
      <ul className="cart-list">
        <li className="cart-item">
          <div className="cart-product">
            <img src="/img1.png" alt="Barberton Daisy" className="cart-image" />
            <div className="cart-details">
              <p className="product-name">Barberton Daisy</p>
              <p className="product-sku">SKU: 1995751877966</p>
            </div>
          </div>
          <p className="cart-price">$119.00</p>
          <div className="cart-quantity">
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>
          <p className="cart-total">$238.00</p>
          <BiSolidTrash />
        </li>

        <li className="cart-item">
          <div className="cart-product">
            <img src="/img1.png" alt="Blushing Bromeliad" className="cart-image" />
            <div className="cart-details">
              <p className="product-name">Blushing Bromeliad</p>
              <p className="product-sku">SKU: 1995751877965</p>
            </div>
          </div>
          <p className="cart-price">$139.00</p> 
          <div className="cart-quantity">
            <button>-</button>
            <span>6</span>
            <button>+</button>
          </div>
          <p className="cart-total">$834.00</p>
          <BiSolidTrash />
        </li>

        <li className="cart-item">
          <div className="cart-product">
            <img src="/img1.png" alt="Aluminum Plant" className="cart-image" />
            <div className="cart-details">
              <p className="product-name">Aluminum Plant</p>
              <p className="product-sku">SKU: 1995751877964</p>
            </div>
          </div>
          <p className="cart-price">$179.00</p>
          <div className="cart-quantity">
            <button>-</button>
            <span>9</span>
            <button>+</button>
          </div>
          <p className="cart-total">$1,611.00</p>
          <BiSolidTrash />
        </li>
      </ul>
    </div>
    <div className="cart-totals">
      <h3>Cart Totals</h3>
      <div className="coupon-apply">
        <input
          type="text"
          placeholder="Enter coupon code here..."
          className="coupon-input"
        />
        <button className="apply-btn">Apply</button>
      </div>
      <div className="totals">
        <div className="totals-row">
          <span>Subtotal</span>
          <span>$2,683.00</span>
        </div>
        <div className="totals-row">
          <span>Coupon Discount</span>
          <span>(-) $0.00</span>
        </div>
        <div className="totals-row">
          <span>Shipping</span>
          <span>
            $16.00 <a href="#">View shipping charge</a>
          </span>
        </div>
        <div className="totals-row total">
          <span>Total</span>
          <span>$2,699.00</span>
        </div>
      </div>
      <button className="checkout-btn">Proceed To Checkout</button>
      <Link  className="continue-shopping">
        Continue Shopping
      </Link >
    </div>
  </div>
    <SinglePageBottomCard />
    <Footer />
    </>
  )
}

export default ShopingCard