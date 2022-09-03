import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store }  from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.REACT_APP_API_URL)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
