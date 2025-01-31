// import React, { useState } from 'react'
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
// import './Checkout.css'

// const Checkout = () => {

//   return (
//     <>
//     <Header />
//    <div className="checkout-box">
//    <div className="billing-form">
//       <h2>Billing Address</h2>
//       <div className="form-grid">
//         <div>
//           <label>First Name *</label>
//           <input type="text" placeholder="Enter first name" required />
//         </div>
//         <div>
//           <label>Last Name *</label>
//           <input type="text" placeholder="Enter last name" required />
//         </div>
//         <div>
//           <label>Country / Region *</label>
//           <select>
//             <option>Select a country / region</option>
//             <option value="us">United States</option>
//             <option value="uk">United Kingdom</option>
//             <option value="sa">Saudi Arabia</option>
//           </select>
//         </div>
//         <div>
//           <label>Town / City *</label>
//           <input type="text" placeholder="Enter town or city" required />
//         </div>
//         <div>
//           <label>Street Address *</label>
//           <input type="text" placeholder="House number and street name" required />
//         </div>
//         <div>
//           <label>Apartment, suite, unit (optional)</label>
//           <input type="text" placeholder="Optional" />
//         </div>
//         <div>
//           <label>State *</label>
//           <select>
//             <option>Select a state</option>
//             <option value="ny">New York</option>
//             <option value="ca">California</option>
//             <option value="tx">Texas</option>
//           </select>
//         </div>
//         <div>
//           <label>Zip *</label>
//           <input type="text" placeholder="Enter ZIP code" required />
//         </div>
//         <div>
//           <label>Email Address *</label>
//           <input type="email" placeholder="Enter email" required />
//         </div>
//         <div>
//           <label>Phone Number *</label>
//           <input type="tel" placeholder="Enter phone number" required />
//         </div>
//       </div>
//       <div className="checkbox-group">
//         <input 
//           type="checkbox" 
//           id="ship-different" 
//         />
//         <label htmlFor="ship-different">Ship to a different address?</label>
//       </div>
//       <div className="order-notes">
//         <label>Order notes (optional)</label>
//         <textarea placeholder="Any additional details"></textarea>
//       </div>
//     </div>
//     <div className="order-summary">
//       <h2>Your Order</h2>
//       <div className="order-items">
//         <div className="order-item">
//           <img src="/img1.png" alt="Barberton Daisy" />
//           <div>
//             <p>Barberton Daisy</p>
//             <span>SKU: 199751877966</span>
//             <span>(x 2)</span>
//           </div>
//           <p className="price">$238.00</p>
//         </div>
//         <div className="order-item">
//           <img src="/img1.png" alt="Blushing Bromeliad" />
//           <div>
//             <p>Blushing Bromeliad</p>
//             <span>SKU: 199751875705</span>
//             <span>(x 6)</span>
//           </div>
//           <p className="price">$834.00</p>
//         </div>
//         <div className="order-item">
//           <img src="img1.png" alt="Aluminum Plant" />
//           <div>
//             <p>Aluminum Plant</p>
//             <span>SKU: 199751877786</span>
//             <span>(x 9)</span>
//           </div>
//           <p className="price">$1,611.00</p>
//         </div>
//       </div>
//       <div className="order-summary-details">
//         <p>Subtotal <span>$2,683.00</span></p>
//         <p>Coupon Discount <span>(-) 00.00</span></p>
//         <p>Shipping <span>$16.00</span></p>
//         <p className="total">Total <span>$2,699.00</span></p>
//       </div>
//       <h3>Payment Method</h3>
//       <div className="payment-methods">
//         <label><input type="radio" name="payment" /> PayPal, VISA, AMEX</label>
//         <label><input type="radio" name="payment" /> Direct bank transfer</label>
//         <label><input type="radio" name="payment" /> Cash on delivery</label>
//       </div>
//       <button className="place-order">Place Order</button>
//     </div>
//    </div>
//     <Footer />
//     </>
//   )
// }

// export default Checkout

import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Checkout.css';

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <div className="checkout-box">
        <div className="billing-form">
          <h2>Billing Address</h2>
          <div className="form-grid">
            <div>
              <label>First Name *</label>
              <input type="text" placeholder="Enter first name" required />
            </div>
            <div>
              <label>Last Name *</label>
              <input type="text" placeholder="Enter last name" required />
            </div>
            <div>
              <label>Country / Region *</label>
              <select>
                <option>Select a country / region</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="sa">Saudi Arabia</option>
              </select>
            </div>
            <div>
              <label>Town / City *</label>
              <input type="text" placeholder="Enter town or city" required />
            </div>
            <div>
              <label>Street Address *</label>
              <input type="text" placeholder="House number and street name" required />
            </div>
            <div>
              <label>Apartment, suite, unit (optional)</label>
              <input type="text" placeholder="Optional" />
            </div>
            <div>
              <label>State *</label>
              <select>
                <option>Select a state</option>
                <option value="ny">New York</option>
                <option value="ca">California</option>
                <option value="tx">Texas</option>
              </select>
            </div>
            <div>
              <label>Zip *</label>
              <input type="text" placeholder="Enter ZIP code" required />
            </div>
            <div>
              <label>Email Address *</label>
              <input type="email" placeholder="Enter email" required />
            </div>
            <div>
              <label>Phone Number *</label>
              <input type="tel" placeholder="Enter phone number" required />
            </div>
          </div>
        </div>
        <div className="order-summary">
          <h2>Your Order</h2>
          <div className="order-items">
            <div className="order-item">
              <img src="/img1.png" alt="Barberton Daisy" />
              <div>
                <p>Barberton Daisy</p>
                <span>SKU: 199751877966</span>
                <span>(x 2)</span>
              </div>
              <p className="price">$238.00</p>
            </div>
            <div className="order-item">
              <img src="/img1.png" alt="Blushing Bromeliad" />
              <div>
                <p>Blushing Bromeliad</p>
                <span>SKU: 199751875705</span>
                <span>(x 6)</span>
              </div>
              <p className="price">$834.00</p>
            </div>
            <div className="order-item">
              <img src="img1.png" alt="Aluminum Plant" />
              <div>
                <p>Aluminum Plant</p>
                <span>SKU: 199751877786</span>
                <span>(x 9)</span>
              </div>
              <p className="price">$1,611.00</p>
            </div>
          </div>
          <div className="order-summary-details">
            <p>Subtotal <span>$2,683.00</span></p>
            <p>Shipping <span>$16.00</span></p>
            <p className="total">Total <span>$2,699.00</span></p>
          </div>
          <button className="place-order" onClick={() => setIsModalOpen(true)}>
            Place Order
          </button>
        </div>
      </div>
      <Footer />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
            <img src="/thx.png" alt="Thank You" className="thank-you-img" />
            <h2>Your order has been received</h2>
            <div className="order-info">
              <p><strong>Order Number:</strong> 1958687</p>
              <p><strong>Date:</strong> 15 Sep, 2021</p>
              <p><strong>Total:</strong> $2,699.00</p>
              <p><strong>Payment Method:</strong> Cash on delivery</p>
            </div>
            <div className="order-items">
              <div className="order-item">
                <img src="/img1.png" alt="Barberton Daisy" />
                <div>
                  <p>Barberton Daisy</p>
                  <span>(x 2)</span>
                </div>
                <p className="price">$238.00</p>
              </div>
              <div className="order-item">
                <img src="/img1.png" alt="Blushing Bromeliad" />
                <div>
                  <p>Blushing Bromeliad</p>
                  <span>(x 6)</span>
                </div>
                <p className="price">$834.00</p>
              </div>
              <div className="order-item">
                <img src="/img1.png" alt="Aluminum Plant" />
                <div>
                  <p>Aluminum Plant</p>
                  <span>(x 9)</span>
                </div>
                <p className="price">$1,611.00</p>
              </div>
            </div>
            <p className="processing-message">
              Your order is being processed. You will receive an email confirmation soon.
            </p>
            <button className="track-order-btn">Track your order</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
