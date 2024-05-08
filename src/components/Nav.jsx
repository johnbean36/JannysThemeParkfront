import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({user}) => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink to='/buytickets'>Buy Tickets</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink to="/ticket">View Tickets</NavLink>
            &nbsp;&nbsp;&nbsp;
            {user ? (null) : (<NavLink to="/signup">Sign Up</NavLink>)}
            &nbsp;&nbsp;&nbsp;
            {user ? (null) : (<NavLink to="/signin">Sign In</NavLink>)}
        </div>
    )
}

export default Nav
