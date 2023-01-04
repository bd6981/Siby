import React from 'react';
import ReactDOM from 'react-dom';
import App from './Comp/App/App';
import { StoreProvider } from "easy-peasy"
import store from "./stores/store"


ReactDOM.render(
  <React.StrictMode>
    
    <StoreProvider store={store}>
      <App />
 
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);




