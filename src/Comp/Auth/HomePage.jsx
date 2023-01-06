import Header from "../Header/Header";
import GMap from "../Map/GMap";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import React from "react";


const HomePage = () => {


  return (
    <div className="HomePage">
      <Header />
      <Nav/>
    <GMap  /> 
      <Footer />
    </div>
  );
};

export default HomePage;
