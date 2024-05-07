import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//this is where you buy your tickets


const BuyTickets = () => {

    let navigate = useNavigate()

    const [newTicket, setNewTicket] = useState({
        name: '',
        date: '',
        age: '',
        pass: '',

    })



    const handleChange = async (e) => {
        setNewTicket({ ...newTicket, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Name</h3><input type='text' placeholder='name' name={'name'} onChange={handleChange} />
                <h3>Date</h3><input type='date' placeholder='Date' name={'date'} onChange={handleChange} />
                <h3>Age</h3><input type='number' placeholder='Age' name={'age'} onChange={handleChange} />
                <h3>Pass Type</h3>
                <select name={'pass'} onChange={handleChange}>
                    <option>Jan Pass</option>
                    <option>Jan Premium Pass</option>
                    <option>Jan Ultimate Pass</option>
                </select>
                <br />
                <br />

                <div>
                    <button>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default BuyTickets
