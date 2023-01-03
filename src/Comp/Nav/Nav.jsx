import React from 'react'
import "./Nav.css"
import {BiUserPin} from 'react-icons/bi'
import {AiTwotoneHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import { useState } from 'react'
import Info from './Info'
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <nav>
      <a href="Intro" onClick= {() => setActiveNav('Info')} className={activeNav === '/Info' ? 'Info' : ''}><FcAbout size={35}/></a>
      
    </nav>
  )
}

export default Nav