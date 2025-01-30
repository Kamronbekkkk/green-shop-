import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-card">
            <img src="/18.png" alt="" />
          <h3>Garden Care</h3>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="footer-card">
        <img src="/18.png" alt="" />
          <h3>Plant Renovation</h3>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="footer-card">
        <img src="/18.png" alt="" />
          <h3>Watering Garden</h3>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="newsletter">
          <h3>Would you like to join newsletters?</h3>
          <form>
            <input type="email" placeholder="Enter your email address..." />
            <button type="submit">Join</button>
          </form>
          <p>
            We usually post offers and challenges in newsletters. We’re your online houseplant
            destination. We offer a wide range of houseplants and accessories shipped directly from
            our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-brand">
          <h3>GREENSHOP</h3>
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          <p>contact@greenshop.com</p>
          <p>+88 01911 717 490</p>
        </div>
        <div className="footer-links">
          <h2>My Account</h2>
          <ul>
            <li>My Account</li>
            <li>Our Stores</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Specials</li>
          </ul>
        </div>
        <div className="footer-links">
          <h2>Help & Guide</h2>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
          </ul>
        </div>
        <div className="footer-links">
          <h2>Categories</h2>
          <ul>
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Social Media</h4>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedinIn className="social-icon" />
          </div>
          <h4>We accept</h4>
          <div className="payment-icons">
            <span>PayPal</span>
            <span>Visa</span>
            <span>MasterCard</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
