import React from 'react'
import './SinglePageBottomCard.css'

const SinglePageBottomCard = () => {
  return (
    <>
     <div className="related-products">
        <h3>Related Products</h3>
        <div className="products-grid">
          <div className="product-item">
            <img src="/15.png" alt="" />
            <p>Beach Spider Lily</p>
            <p className="price">$129.00</p>
          </div>
          <div className="product-item">
            <img src="/15.png" alt="" />
            <p>Blushing Bromeliad</p>
            <p className="price">$159.00</p>
          </div>
          <div className="product-item">
            <img src="/15.png" alt="" />
            <p>Aluminum Plant</p>
            <p className="price">$179.00</p>
          </div>
          <div className="product-item">
            <img src="/15.png" alt="" />
            <p>Bird's Nest Fern</p>
            <p className="price">$99.00</p>
          </div>
          <div className="product-item">
            <img src="/15.png" alt="" />
            <p>Chinese Evergreen</p>
            <p className="price">$39.00</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePageBottomCard