import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//where u see the tickets you purchused
const Ticket = () => {

    const { id } = useParams

    const [tickets, setTicket] = useState([])

    const showTicket = async () => {
        let response = await axios.get(`https://jannysthemepark-84d4689535be.herokuapp.com/tickets/${id}`)
        setTicket(response.data)
    }




    useEffect(() => {
        showTicket()
    })





    return (


        <div>
            <h1>Tickets </h1>
            <div>
                <h3>{tickets.name}</h3>
                <h3>{tickets.date}</h3>
                <h3>{tickets.pass}</h3>

            </div>
        </div>




    )
}





export default Ticket
