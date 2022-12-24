import './App.css';
import Header from '../Header/Header'
import Crime from '../Crime/Crime'
import Info from '../Info/Info'
import Map from '../Map/Map'
import Model from '../Model/Model'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Crime/>
      <Info/>
      <Map/>
      <Model/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
