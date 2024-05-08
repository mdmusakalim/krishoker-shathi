import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'core-js/modules/web.dom-collections.iterator';
import 'core-js/modules/es.promise';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);