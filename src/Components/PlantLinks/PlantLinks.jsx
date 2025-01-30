import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './PlantLinks'

const PlantLinks = () => {
    return (
        <>
            <div className='flowers-links'>
                <NavLink className={'nested-routes'} to={'/'}>All Plants</NavLink>
                <NavLink className={'nested-routes'} to={'newarrivals'}> New Arrivals</NavLink>
                <NavLink className={'nested-routes'} to={'/sale'}> Sale</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default PlantLinks