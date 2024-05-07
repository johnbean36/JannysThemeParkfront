import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <NavLink to='/'><div className='link'>HOME</div></NavLink>
            <NavLink to='/buytickets'><div className='link'>BUY TICKETS</div></NavLink>
            <NavLink to="/ticket"><div className='link'>Purchased Tickets</div></NavLink>
        </div>
    )
}

export default Nav
