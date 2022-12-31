import './App.css';
import Header from '../Header/Header'
import Map from '../Map/Map'
import Model from '../Model/Model'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import React, { useState } from 'react'


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

   
  
  return (
    <div className="App">
      <Header/>
      <Map>
      </Map>
      <Model/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
