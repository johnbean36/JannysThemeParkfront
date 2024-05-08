import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ticket from './components/Ticket'
import Home from './components/Home'
import BuyTickets from './components/BuyTickets'
import Nav from './components/Nav'
import About from './components/About'
import { NavLink, Routes, Route } from 'react-router-dom'

function App() {
  const [ticketId, setTicketId] = useState('')

  console.log(ticketId)




  const setId = (id) => {
    setTicketId(id)
  }



  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Home ticketId={ticketId} />} />
          <Route path='/buytickets' element={<BuyTickets setId={setId} />} />
          <Route path='/ticket' element={<Ticket ticketId={ticketId} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

