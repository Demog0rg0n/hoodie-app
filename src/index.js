import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from '../../hoodie-app/src/redux/store';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider> 
  </BrowserRouter>

    
);

