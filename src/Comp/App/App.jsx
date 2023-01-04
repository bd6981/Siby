import "./App.css";
import Header from "../Header/Header";
import GMap from "../Map/GMap";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
import { useMainContext } from "../Map/Hooks/Hooks";
import Loader from "./Loader";
import firebaseConfig from "../Auth/Fire";
import { useStoreState, useStoreActions } from "easy-peasy";
import RedLight from "../Auth/RedLight";
import GreenLight from "../Auth/GreenLight";

function App() {
  const { setEventData, reRenderMarkers } = useMainContext();
  const [loading, setLoading] = useState(false);
  const [renderEvent, setRenderEvent] = useState([]);
  const greenLight = useStoreState((state) => state.greenLight);
  const setGreenLight = useStoreActions((actions) => actions.setGreenLight);
  const setRedLight = useStoreActions((actions) => actions.setRedLight
    );

  return (
    <div className="App">
      {/* <Header /> */}
      {/* {!loading ? <GMap eventData={renderEvent} /> : <Loader />} */}
      {loading ? (<Loader />) : greenLight ? (
        <GreenLight />
      ) : (
        <RedLight />
      )}

      {/* <Nav />
      <Footer /> */}
    </div>
  );
}

export default App;
