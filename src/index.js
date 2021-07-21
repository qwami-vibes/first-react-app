import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"


ReactDOM.render(
  <React.StrictMode>
    <App message="Hey there", library="this library" number=4/>
  </React.StrictMode>,
  document.getElementById('root')
);
