
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';




import styles from './app.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Routes>
            <Route path="/about" element={<About />}  />
            <Route path="/work" element={<Work />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>        
    </div>
  )
}

export default App
