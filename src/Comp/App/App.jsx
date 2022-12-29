import './App.css';
import Header from '../Header/Header'
import Crime from '../Crime/Crime'
import Map from '../Map/Map'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      
        <Header/>
        <Nav/>
        <Map/>
        <Crime/>
        <Footer/>
        <Routes>
          <Route exact path='/' ></Route>
        
        </Routes>
      
      </div>
      </Router>
  );
}

export default App;
