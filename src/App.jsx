import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ticket from './components/Ticket'
import Home from './components/Home'
import BuyTickets from './components/BuyTickets'
import Nav from './components/Nav'
import About from './components/About'
import Signup from '../components/Signup'
import Signin from '../components/SIgnin'

import { NavLink, Routes, Route } from 'react-router-dom'

function App() {

  const [ticketId, setTicketId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  function handleChange(e, input){
    if(input==="username"){
      setUsername(e);
    }
    else if(input==="password"){
      setPassword(e);
    }
  }

  function handleSubmit(e, input){
    if(input==="signup"){
      e.preventDefault()
      
    }
    else if(input==="signin"){
      e.preventDefault()
    }
  }


  const setId = (id) => {
    setTicketId(id)
  }



  return (
    <div>
      <header>
        <Nav user={user}/>
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Home ticketId={ticketId} />} />
          <Route path='/buytickets' element={<BuyTickets setId={setId} />} />
          <Route path='/ticket' element={<Ticket ticketId={ticketId} />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup handleChange={handleChange} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

