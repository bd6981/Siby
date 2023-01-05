import React from 'react'
import 'firebase/compat/auth';
import { Router, Route} from 'react-router-dom'
import HomePage from '../Auth/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Auth/Login';
import Signup from "../Auth/Signup";


function App() {


  return (
    <div className="App">
      <div>
     
        <Login/>
       
      </div>
    </div>
  );
}
export default App; 





