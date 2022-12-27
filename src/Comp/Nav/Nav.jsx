import React from 'react'
import "./Nav.css"
import {BiUserPin} from 'react-icons/bi'
import {AiTwotoneHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a onClick= {() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiTwotoneHome/></a>
      <a onClick= {() => setActiveNav('#Info')} className={activeNav === '#Info' ? 'active' : ''}><BiUserPin/></a>
      <a onClick= {() => setActiveNav('#Account')} className={activeNav === '#Account' ? 'active' : ''}><BiBook/></a>
    </nav>
  )
}

export default Nav