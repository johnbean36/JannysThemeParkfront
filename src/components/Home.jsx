import React from 'react'
import { NavLink, Route } from 'react-router-dom'

//lovely home page
const Home = ({ ticketId }) => {
    return (
        <div>
            <h1>Welcome To Janny's </h1>
            <div>
                <div>Ticket Number: {ticketId !== '' ? (ticketId) : ('')}</div>
            </div>
        </div>


    )
}

export default Home
