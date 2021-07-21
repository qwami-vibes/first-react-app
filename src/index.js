import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Jonathan (
  {library, 
    message, 
    number}) {
  return (
    <div>
      <h1>It's me, Jonathan</h1>
      <p>I am going to be the best developer in the world</p>
      <h2>Jonathan is currently learning {library}</h2>
      <p>{message} at {number}</p>
    </div>
  )
}


ReactDOM.render(
  <Jonathan library = "React" message = "Have fun" number = {5}/>,
  document.getElementById('root')
);
