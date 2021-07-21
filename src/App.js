
import React from 'react';

function App({message, library, number}) {
  return (
    <div className="App">
      <div>
        <h1>It's me, Jonathan</h1>
        <p>I am going to be the best developer in the world</p>
        <h2>Jonathan is currently learning {library}</h2>
        <p>{message} at {number}</p>
      </div>
    </div>
  );
}

export default Jonathan;
