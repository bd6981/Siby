import './App.css';
import Header from '../Header/Header'
import GMap from '../Map/GMap'
import Model from '../Model/Model'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import React, { useState, useEffect } from 'react'
// import '../../crimeData.json'
import { useMainContext } from '../Map/Hooks/Hooks'
import crimeData from '../../Data.json';
import Loader from './Loader'


function App() {
  const { setEventData, reRenderMarkers } = useMainContext();
  const [loading, setLoading] = useState(false)
  const [renderEvent, setRenderEvent] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const response = await fetch("../../Data.json");
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const crimeData = await response.json()
      setEventData(crimeData)
      setRenderEvent(crimeData)
      setLoading(false)
    }
    fetchEvents();
    console.log(crimeData)
      

       },[])

  return (
    <div className="App">
      <Header />
      {/* {!loading ? <GMap eventData={eventData} /> : <h1>Loading</h1>} */}
      {!loading ? <GMap eventData={renderEvent} /> : <Loader />}
      <Model/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
