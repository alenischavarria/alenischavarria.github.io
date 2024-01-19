import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
//import {useSpring, animated} from 'react-spring';

const NavBar = () => {
  return(
    <nav>
      <ul>
        <li>//home  </li>
        <li>//about me  </li>
        <li>//education  </li>
        <li>//projects  </li>
        <li>//resume  </li>
        <li>//contact</li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 className="myName">ALENIS CHAVARRIA</h1>
        <div className="sliding-box">
        <h1 className="myJobAspirations">SOFTWARE ENGINEER, <br/> FULL - STACK, APP, WEB, & UX/UI DEVELOPER</h1>
        </div>
      </header> 
      <body>
        <p>COMING SOON</p>
      </body>
    </div>
  );
}

export default App;
