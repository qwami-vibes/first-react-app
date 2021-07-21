// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>I want it show in the main file</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Jonathan ({library, message, number}) {
  return (
    <div>
      <h1>It's me, Jonathan</h1>
      <p>I am going to be the best developer in the world</p>
      <h2>Jonathan is currently learning {library}</h2>
      <p>{message} at {number}</p>
      
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Jonathan library = "React" message = "Have fun" number = {5}/>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

export default Jonathan;
