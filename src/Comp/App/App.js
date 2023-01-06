import React from 'react'
import 'firebase/compat/auth';
import HomePage from '../Auth/HomePage';
import Login from '../Auth/Login';
import Signup from "../Auth/Signup";
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/homepage" element={<HomePage />}></Route>
          <Route path="/login/signup" element={<Signup />}></Route>
          <Route path="/login/signup/homepage" element={<HomePage />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App; 





