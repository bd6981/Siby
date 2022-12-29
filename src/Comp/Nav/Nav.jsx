import React from 'react'
import "./Nav.css"
import {BiUserPin} from 'react-icons/bi'
import {AiTwotoneHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import { useState } from 'react'
import Info from '../Info/Info'
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="Intro" onClick= {() => setActiveNav('Info')} className={activeNav === '/Info' ? 'Info' : ''}><FcAbout size={35}/></a>
      {/* <a onClick= {() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiTwotoneHome/></a> */}
    
      {/* <Link exact path ="/Info" element= {<Info />}><BiUserPin/></Link> */}
      
    </nav>
  )
}

export default Nav