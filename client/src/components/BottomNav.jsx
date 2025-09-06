import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../assets/homeIcon'
import ContestantIcon from '../assets/contestantIcon';
import ContactIcon from '../assets/Contact';
import RegisterIcon from '../assets/registerIcon';
import VoteIcon from '../assets/voteIcon';

export default function bottomNav() {
  const [active, setActive] = useState("Home");
  
  return (
    <nav>
      <ul className='flex justify-around items-center bg-background text-gray-400 hover:border-t fixed bottom-0 w-full h-16 shadow-lg py-3 z-50'>

        <li className='items-center flex flex-col justify-center'>
          <Link to="/" className={`text-gray-400 hover:text-primary flex flex-col  items-center ${active === "Home" ? "text-primary" : ""}`} onClick={() => setActive("Home")}>
           <HomeIcon className="w-6 h-6" />
            Home
          </Link>
        </li>

        <li>
          <Link to="/contestants" className={`text-gray-400 hover:text-primary items-center  flex flex-col ${active === "Contestants" ? "text-primary" : ""}`} onClick={() => setActive("Contestants")}>
            <ContestantIcon className="w-6 h-6" />
            Contestants
          </Link>
        </li>
        <li>
          <Link to="/register" className={`text-gray-400 hover:text-primary flex flex-col  items-center ${active === "Register" ? "text-primary" : ""}`} onClick={() => setActive("Register")}>
              <RegisterIcon className="w-6 h-6" />
            Register
          </Link>
        </li>
        <li>
          <Link to="/vote" className={`text-gray-400 hover:text-primary flex flex-col  items-center ${active === "Vote" ? "text-primary" : ""}`} onClick={() => setActive("Vote")}>
              <VoteIcon className="w-6 h-6" />
            Vote
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`text-gray-400 hover:text-primary flex flex-col  items-center ${active === "Contact" ? "text-primary" : ""}`} onClick={() => setActive("Contact")}>
              <ContactIcon className="w-6 h-6" />
            Contact
            
          </Link>
        </li>
      </ul>
    </nav>
  )
}
