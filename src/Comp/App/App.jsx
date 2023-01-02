import './App.css';
import Header from '../Header/Header'
import GMap from '../Map/GMap'
import Model from '../Model/Model'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import React, { useState, useEffect } from 'react'
// import '../../crimeData.json'


function App() {
//   const [data, setData] = useState([]);
//   // const [loading, setLoading] = useState(false)
//   const getData = () => {
//     fetch('crimeData.json'
//     ,{
//       header:{
//         Accept: 'application/json',
//         'Content-Type': 'application/json'

//       }
//     }
//     )
//     .then(function(response){
//       console.log(response)
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log(myJson);
//       setData(myJson)
//     });
//   }
//   useEffect(() => {
//     getData()
    
//     },[])
   
  
  return (
    <div className="App">
      <Header />
      {/* {!loading ? <GMap eventData={eventData} /> : <h1>Loading</h1>} */}
      <GMap/>
      <Model/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
