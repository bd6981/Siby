import React from 'react'
import 'firebase/compat/auth';
import { Routes, Route} from 'react-router-dom'
import HomePage from '../Auth/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Auth/Login';
import Signup from "../Auth/Signup";


function App() {


  return (
    <div className="App">
      <div>
        <main>
          <Routes>
            <Header />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/homepage" element={<HomePage />} />
            <Footer />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App; 





