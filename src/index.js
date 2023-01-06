import React from "react";
import ReactDOM from "react-dom";
import App from "./Comp/App/App";
import { ContextProvider } from './Comp/Map/Hooks/Hooks'
import { BrowserRouter as Routers } from "react-router-dom";



ReactDOM.render(
  <Routers>
    <ContextProvider>
  
      <App />
   
    </ContextProvider>
  </Routers>,
  document.getElementById("root")
);
