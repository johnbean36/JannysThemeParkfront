import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <NavLink to='/'><div className='link'>HOME</div></NavLink>
            <NavLink to='/buytickets'><div className='link'>BUY TICKETS</div></NavLink>
            <NavLink to="/ticket"><div className='link'>VIEW TICKETS</div></NavLink>
            <NavLink to='/about'><div className='link'>ABOUT US</div></NavLink>
        </div>
    )
}

export default Nav
