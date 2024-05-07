import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ticket from './components/Ticket'
import Home from './components/Home'
import BuyTickets from './components/BuyTickets'
import Nav from './components/Nav'
import { NavLink, Routes, Route } from 'react-router-dom'

function App() {
  const [ticketId, setTicketId] = useState('')



  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buytickets' element={<BuyTickets />} />
          <Route path='/ticket' element={<Ticket />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

