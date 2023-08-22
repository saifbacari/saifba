import { Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Work from './components/work/Work';
import Contact from './components/Contact/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import styles from './app.module.css'

const App: React.FC = () => {
  const aboutRef = useRef(null); // Assurez-vous de l'initialiser correctement
  const workRef = useRef(null); // représente la section À propos
  const contactRef = useRef(null); 

  return (
    <div className={styles.app}>
      <Routes>
          <Route path="/" element={<MainPage targetId="" aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />} />
          <Route path="/about" element={<MainPage targetId="about" aboutRef={aboutRef} workRef={workRef} contactRef={contactRef}  />} />
          <Route path="/work" element={<MainPage targetId="work" aboutRef={aboutRef} workRef={workRef} contactRef={contactRef}  />} />
          <Route path="/contact" element={<MainPage targetId="contact" aboutRef={aboutRef} workRef={workRef} contactRef={contactRef}  />} />
      </Routes>
    </div>
  )
}

export default App;
