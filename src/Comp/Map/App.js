import Header from "../Header/Header";
import GMap from "./GMap";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Loader from './Loader';
import React, { useState, useEffect } from "react";
import { useMainContext } from "./Hooks/Hooks.js"
import crimes from "../../data.json";

const App = () => {




  return (
    <div className="HomePage">
      <Header />
      <GMap  />
      <Nav />
      <Footer />
    </div>
  );
};

export default App;
