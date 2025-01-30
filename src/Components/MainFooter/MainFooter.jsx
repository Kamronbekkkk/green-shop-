import React from "react";
import "./MainFooter.css";

const MainFooter = () => {

  return (
    <div className="item-container">
      <h2>Our Blog Posts</h2>
      <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      <ul className="item-list">
          <li className="item" >
            <img src={'/15.png'}/>
            <div className="item-text">
              <p className="item-meta">
                September 12 | Read in 6 minutes
              </p>
              <h3>Cactus & Succulent 
              Care Tips</h3>
              <p>Cacti are succulents are easy care plants for any home or patio. </p>
              <a href="#">Read More →</a>
            </div>
          </li>
          <li className="item" >
            <img src={'/15.png'}/>
            <div className="item-text">
              <p className="item-meta">
                September 12 | Read in 6 minutes
              </p>
              <h3>Cactus & Succulent 
              Care Tips</h3>
              <p>Cacti are succulents are easy care plants for any home or patio. </p>
              <a href="#">Read More →</a>
            </div>
          </li>
          <li className="item" >
            <img src={'/15.png'}/>
            <div className="item-text">
              <p className="item-meta">
                September 12 | Read in 6 minutes
              </p>
              <h3>Cactus & Succulent 
              Care Tips</h3>
              <p>Cacti are succulents are easy care plants for any home or patio. </p>
              <a href="#">Read More →</a>
            </div>
          </li>
          <li className="item" >
            <img src={'/15.png'}/>
            <div className="item-text">
              <p className="item-meta">
                September 12 | Read in 6 minutes
              </p>
              <h3>Cactus & Succulent 
              Care Tips</h3>
              <p>Cacti are succulents are easy care plants for any home or patio. </p>
              <a href="#">Read More →</a>
            </div>
          </li>
      </ul>
    </div>
  );
};

export default MainFooter;
