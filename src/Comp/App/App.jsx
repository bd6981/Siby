import './App.css';
import Header from '../Header/Header'
import GMap from '../Map/GMap'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import React, { useState, useEffect } from 'react'
import { useMainContext } from '../Map/Hooks/Hooks'
import Loader from './Loader'



function App() {
  // const { setEventData, reRenderMarkers } = useMainContext();
  // const [loading, setLoading] = useState(false)
  // const [renderEvent, setRenderEvent] = useState([])



  return (
    <div className="App">
      <Header />
      <GMap /> 
      
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
