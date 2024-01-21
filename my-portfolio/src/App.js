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
          <a href="#home" id="navbar" onClick={(e) => handleLinkClick(e, 'home')}>//home  </a></li>
        <li className={activeLink === 'aboutme' ? 'active' : ''}>
          <a href="#aboutme" id="navbar">//about me  </a></li>
        <li className={activeLink === 'education' ? 'active' : ''}>
          <a href="#education" id="navbar">//education  </a></li>
        <li className={activeLink === 'projects' ? 'active' : ''}>
          <a href="#projects" id="navbar">//projects  </a></li>
        <li> <a id="resumepdf" href="myportfolio./my-portfolio/resumes/Software Engineer copy.pdf" download="My Resume">//resume  </a></li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact" id="navbar">//contact  </a></li>
      </ul>
    </nav>
  )
}

const AboutMeInfo = () => {
  return(
    <p>   Hello, welcome to my digital domain! My name is Alenis Chavarria, a new Computer Science graduate from <a href="https://www.utrgv.edu/" id="utrgv">the University of Texas-Rio Grande Valley</a>. 
    I'm currently pursuing my Masters of Science in Computer Science at my Alma Mater. As can be noticed in the homepage, I'm interested in various fields 
    within the Technology Industry, from Software Engineering to Mobile App Development to UX/UI.</p>
  )
}

const EducationInfo = () => {}

const ProjectsInfo = () => {}

const ContactInfo = () => {}

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
                  <h1 className="myJobAspirations">ASPIRING SOFTWARE ENGINEER, <br/> FULL - STACK, APP, WEB, & UX/UI DEVELOPER</h1>
                  </div>
        </section>
        
      </header> 
      <main>
        <section id="aboutme">
          <h1>About Me</h1> 
          <div id="aboutmeinfo">
            <AboutMeInfo />
          </div>
        </section>
        <section id="education">
          <h1>Education</h1>
            <EducationInfo />
          <p>COMING SOON</p>
        </section>
        <section id="projects">
          <h1>Projects</h1>
            <ProjectsInfo />
          <p>COMING SOON</p>
        </section>
        <section id="contact">
          <h1>Contact Me</h1>
            <ContactInfo />
          <p>COMING SOON</p>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
