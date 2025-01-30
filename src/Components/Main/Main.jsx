import React from "react";
import "./Main.css"; // Stil uchun CSS fayl alohida yoziladi

const Main = () => {
  return (
    <div className="container">
    <div className="card">
      <img src="15.png" alt="" />
      <div className="text">
        <h3>SUMMER CACTUS & SUCCULENTS</h3>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        <button>Find More →</button>
      </div>
    </div>
    <div className="card">
      <img src="15.png" alt="" />
      <div className="text">
        <h3>STYLING TRENDS & MUCH MORE</h3>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        <button>Find More →</button>
      </div>
    </div>
  </div>
  );
};

export default Main;
