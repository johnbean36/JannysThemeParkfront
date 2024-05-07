import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/buytickets'>Buy Tickets</NavLink>
            <NavLink to="/ticket">Purchase Tickets</NavLink>
        </div>
    )
}

export default Nav
