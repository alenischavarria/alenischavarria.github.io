import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
//import {useSpring, animated} from 'react-spring';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (e, linkId) => {
    e.preventDefault();
    setActiveLink(linkId);
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return(
    <nav>
      <ul>
        <li className={activeLink === 'home' ? 'active' : ''}>
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>//home  </a></li>
        <li className={activeLink === 'aboutme' ? 'active' : ''}>
          <a href="#aboutme">//about me  </a></li>
        <li className={activeLink === 'education' ? 'active' : ''}>
          <a href="#education">//education  </a></li>
        <li className={activeLink === 'projects' ? 'active' : ''}>
          <a href="#projects">//projects  </a></li>
        <li>//resume  </li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact">//contact  </a></li>
      </ul>
    </nav>
  )
}

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <section id="home">
          <NavBar />
                  <h1 className="myName">ALENIS CHAVARRIA</h1>
                  <div className="sliding-box">
                  <h1 className="myJobAspirations">SOFTWARE ENGINEER, <br/> FULL - STACK, APP, WEB, & UX/UI DEVELOPER</h1>
                  </div>
        </section>
        
      </header> 
      <main>
        <section id="aboutme">
          <h1>About Me</h1> 
          <p>COMING SOON</p>
        </section>
        <section id="education">
          <h1>Education</h1>
          <p>COMING SOON</p>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <p>COMING SOON</p>
        </section>
        <section id="contact">
          <h1>Contact Me</h1>
          <p>COMING SOON</p>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
