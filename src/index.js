import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jonathan from "./App"



// function Jonathan (
//   {library, 
//     message, 
//     number}) {
//   return (
//     <div>
//       <h1>It's me, Jonathan</h1>
//       <p>I am going to be the best developer in the world</p>
//       <h2>Jonathan is currently learning {library}</h2>
//       <p>{message} at {number}</p>
//       <p>Prince, this doesn't work for me at all</p>
//       <p>Prince, is learning but he is doing his self like he is not doing anything</p>
//     </div>
//   )
// }


ReactDOM.render(
  <React.StrictMode>
    <Jonathan/>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Jonathan library = "React" message = "Have fun" number = {5}/>
//   </React.StrictMode>
//   ,
//   document.getElementById('root')
// );
