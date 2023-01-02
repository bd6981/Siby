import React from 'react';
import ReactDOM from 'react-dom';
import App from './Comp/App/App';
import {ContextProvider} from './Comp/Map/Hook/Hook'


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);




