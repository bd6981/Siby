import React from 'react';
import ReactDOM from 'react-dom';
import App from './Comp/App/App';
import { ContextProvider, EasyPeasy } from './Comp/Map/Hooks/Hooks'
import { StoreProvider } from "easy-peasy"



ReactDOM.render(
  <React.StrictMode>
    <StoreProvider EasyPeasy={EasyPeasy}>
    <ContextProvider>
      <App />
    </ContextProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);




