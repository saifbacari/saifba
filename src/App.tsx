import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Work from './components/work/Work';
import Contact from './components/Contact/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';




import styles from './app.module.css';

const App: React.FC = () => {
  const links = [
    {name:'1. About',url:''},
    {name:'2. Experience',url:''},
    {name:'3. Work',url:''},
    {name:'4. Contact',url:''},
    {name:'Resume',url:''},
  ];
  return (
    <div className={styles.app}>
        <Navbar links={links}/>
        <Hero />
        <About />
        <Work />
        <Contact />
    </div>
  )
}

export default App
