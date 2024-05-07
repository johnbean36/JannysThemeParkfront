import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink to='/buytickets'>Buy Tickets</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink to="/ticket">View Tickets</NavLink>
        </div>
    )
}

export default Nav
