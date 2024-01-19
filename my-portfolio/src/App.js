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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
