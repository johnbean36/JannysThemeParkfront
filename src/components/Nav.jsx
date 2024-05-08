import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({user}) => {
    return (
        <div>
            <NavLink to='/'><div className='link'>HOME</div></NavLink>
            <NavLink to='/buytickets'><div className='link'>BUY TICKETS</div></NavLink>
            <NavLink to="/ticket"><div className='link'>VIEW TICKETS</div></NavLink>
            <NavLink to='/about'><div className='link'>ABOUT US</div></NavLink>
            {user ? (null) : (<NavLink to="/signup"><div className='link'>SIGN UP</div></NavLink>)}
            {user ? (null) : (<NavLink to="/signin"><div className='link'>SIGN IN</div></NavLink>)}
        </div>
    )
}

export default Nav
