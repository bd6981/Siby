import React from 'react'
import "./Nav.css"
import {FcAbout} from 'react-icons/fc'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  
  return (
    <nav>
      <a href="Intro" onClick= {() => setActiveNav('Info')} className={activeNav === '/Info' ? 'Info' : ''}><FcAbout size={35}/></a>
      
    </nav>
  )
}

export default Nav