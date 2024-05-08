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
            <NavLink to='/'><div className='link'>HOME</div></NavLink>
            <NavLink to='/buytickets'><div className='link'>BUY TICKETS</div></NavLink>
            <NavLink to="/ticket"><div className='link'>Purchased Tickets</div></NavLink>
            <NavLink to='/about'><div className='link'>About Us</div></NavLink>
            &nbsp;&nbsp;&nbsp;
            {user ? (null) : (<NavLink to="/signup">Sign Up</NavLink>)}
            &nbsp;&nbsp;&nbsp;
            {user ? (null) : (<NavLink to="/signin">Sign In</NavLink>)}

        </div>
    )
}

export default Nav
