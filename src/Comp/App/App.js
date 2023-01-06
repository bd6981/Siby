import React from 'react'
import 'firebase/compat/auth';

import HomePage from '../Auth/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Auth/Login';
import Signup from "../Auth/Signup";
import { Route, Routes } from "react-router-dom";
import Nav from "../Nav/Nav"


function App() {


  return (
    <div className="App">
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/homepage" element={<HomePage />}></Route>
          <Route path="/login/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App; 





