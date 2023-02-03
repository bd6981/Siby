import Header from "../Header/Header";
import GMap from "./GMap";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import React from 'react'

const App = () => {
  return (
    <div className="App">
      <Header/>
     
      <GMap />
      <Nav/>
     <Footer/>
    </div>
  );
};

export default App;
