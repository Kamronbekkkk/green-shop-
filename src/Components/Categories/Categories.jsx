import React from 'react'
import './Catigories.css'

const Categories = () => {
  return (
   <>
 
    <div className="categories">
      <h3>Categories</h3>
      <ul>
        <li>House Plants (33)</li>
        <li>Potted Plants (21)</li>
        <li>Seeds (15)</li>
        <li>Small Plants (42)</li>
        <li>Big Plants (29)</li>
        <li>Succulents (37)</li>
        <li>Accessories (18)</li>
      </ul>
      <h3>Price Range</h3>
      <input type="range" min="39" max="1250" />
      <p>Price: <span>$39 - $1230</span></p>
      <h3>Size</h3>
      <ul>
        <li>Small (191)</li>
        <li>Medium (108)</li>
        <li>Large (74)</li>
      </ul>
    </div>
    {/* <div className='add-img'>
        <img src="./SuperSale.png" alt="" />
        <h3>UP TO 75% OFF</h3>
        <img src="./12.png" alt="" />
    </div> */}
   </>
  )
}

export default Categories