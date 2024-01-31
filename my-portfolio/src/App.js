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
      <ul className='navbaruli'>
        <li id="navbarli" className={activeLink === 'home' ? 'active' : ''}>
          <a href="#home" id="navbar" onClick={(e) => handleLinkClick(e, 'home')}>//home  </a></li>
        <li id="navbarli" className={activeLink === 'aboutme' ? 'active' : ''}>
          <a href="#aboutme" id="navbar">//about me  </a></li>
        <li id="navbarli" className={activeLink === 'education' ? 'active' : ''}>
          <a href="#education" id="navbar">//education  </a></li>
        <li id="navbarli" className={activeLink === 'projects' ? 'active' : ''}>
          <a href="#projects" id="navbar">//projects  </a></li>
        <li id="navbarli"> //resume  </li>
        <li id="navbarli" className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact" id="navbar">//contact  </a></li>
      </ul>
    </nav>
  );
};

const LogoCarousel = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === logos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? logos.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 1000); 
    
    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <div className="logo-carousel">
      <div className="carousel-wrapper">
        {logos.map((logo, index) => (
          <div
            className={index === currentIndex ? 'slide active' : 'slide'}
            key={index}
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        ))}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <button onClick={() => setIsOpen(!isOpen)} className="custom-button">
        COURSEWORK
      </button>
      {isOpen && (
        <ul id="option">
          <li id="options" >AI Topics in Image Processing</li>
          <li id="options" >Advanced Database Design</li>
        </ul>
      )}
    </div>
  );
};

const Button2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <button onClick={() => setIsOpen(!isOpen)} className="custom-button">
        COURSEWORK
      </button>
      {isOpen && (
        <ul id="option2">
          <li id="options" >Database Design & Implementation</li>
          <li id="options" >Automata, Formal Language & Comp</li>
          <li id="options" >Algorithms & Data Structures</li>
          <li id="options" >Software Engineering I/II</li>
          <li id="options" >Web Development</li>
          <li id="options" >Mathematical Foundation of CS</li>
          <li id="options" >Computer Networks</li>
          <li id="options" >OOP in Python</li>
        </ul>
      )}
    </div>
  );
};

const Button3 = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div >
      <button onClick={() => setIsOpen(!isOpen)} className="custom-button">
        COURSEWORK
      </button>
      {isOpen && (
        <ul id="option3">
          <li id="options" >Business Information Management</li>
          <li id="options" >Principles of Information Technology</li>
        </ul>
      )}
    </div>
  );
};

const Square1 = () => {
  return <div className="square">
    <p id="pinfo">Masters of Science in Computer Science</p>
    <h1 id="uniinfo">University of Texas Rio Grande Valley</h1>
    <h5 id="timeinfo">January 2024 - Present</h5>
    <Button />
  </div>;
};

const Square2 = () => {
  return <div className="square">
    <p id="pinfo">Bachelors of Science in Computer Science</p>
    <h1 id="uniinfo">University of Texas Rio Grande Valley</h1>
    <h5 id="timeinfo">August 2020 - December 2023</h5>
    <Button2 />
  </div>;
};

const Square3 = () => {
  return <div className="square">
    <p id="pinfo">Associates of Arts in Interdisciplinary Studies</p>
    <h1 id="uniinfo">South Texas College</h1>
    <h5 id="timeinfo">January 2017 - May 2020</h5>
    <Button3 />
  </div>;
};

const SquareContainer = () => {
  return (
    <div className='square-container'>
      <Square1 />
      <Square2 />
      <Square3 />
    </div>
  );
};

const AboutMeInfo = () => {
  return(
    <p>   Hello, welcome to my digital domain! My name is Alenis Chavarria, a new Computer Science graduate from <a href="https://www.utrgv.edu/" target="_blank" id="utrgv">the University of Texas-Rio Grande Valley</a>. 
    I'm currently pursuing my Masters of Science in Computer Science at my Alma Mater. As can be noticed in the homepage, I'm interested in various fields 
    within the Technology Industry, from Software Engineering to Mobile App Development to UX/UI.</p>
  )
}

const EducationInfo = () => {

  return (
    <>
    <div id="eduinfo">
      <SquareContainer />
    </div>
    </>
  )
}

const ProjectsInfo = () => {
  const logos = [
    'https://github.com/alenischavarria/alenischavarria.github.io/blob/Branch3/Coming%20Soon%20-%20Free%20photo%20on%20Pixabay.jpeg?raw=true',
    'https://github.com/alenischavarria/alenischavarria.github.io/blob/Branch3/Download%20Coming%20Soon%20Text%20Label%20Vector%20Template%20Design%20Illustration%20for%20free.jpeg?raw=true'
  ]
  return (
    <>
      <LogoCarousel logos={logos}/>
    </>
  )
}

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
        </section>
        <section id="projects">
          <h1>Projects</h1>
            <ProjectsInfo />
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
