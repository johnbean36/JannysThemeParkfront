import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//where u see the tickets you purchused
const Ticket = (props) => {

    const id = props.ticketId

    const [ticket, setTicket] = useState([])

    const showTicket = async () => {
        let response = await axios.get(`https://jannysthemepark-84d4689535be.herokuapp.com/tickets/${id}`)
        console.log(response.data)
        setTicket(response.data)
    }




    useEffect(() => {
        showTicket()
    }, [])





    return (


        <div>
            <h1>Tickets </h1>
            <div>
                <h3>{ticket.name}</h3>
                <h3>{ticket.date}</h3>
                <h3>{ticket.pass}</h3>

            </div>
        </div>




    )
}





export default Ticket
