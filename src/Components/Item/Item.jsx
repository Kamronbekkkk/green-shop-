import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Item = () => {
  return (
    <>
     <li className="plant-card">
            <div className="plant-image">
                <img src='img1.png' alt='' />
            </div>
            <h3 className="plant-name">Barberton Daisy</h3>
            <p className="plant-price">$119.00</p>
            <div className="icons">
                <Link to={'/single-shop'} className="icon-btn"><FaCartPlus /></Link>
                <button className="icon-btn"><CiHeart /></button>
                <button className="icon-btn"><CiSearch /></button>
            </div>
        </li>
    </>
  )
}

export default Item