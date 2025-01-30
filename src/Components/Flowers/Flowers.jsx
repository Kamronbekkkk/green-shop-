import React from 'react'
import './Flowers.css'
import AllPlants from '../AllPlants/AllPlants';
import Categories from '../Categories/Categories';
import PlantLinks from '../PlantLinks/PlantLinks';

const Flowers = () => {
    return (
        <> 
        <div className='components'>
         <Categories />
        <div><PlantLinks /></div>
        
        </div>
        
        </>
    )
}

export default Flowers