import React, { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Work from '../components/work/Work';
import Contact from '../components/Contact/Contact';
import Footbar from '../components/Footbar/Footbar'
import styles from '../app.module.css'


interface MainPageProps {
    aboutRef: React.MutableRefObject<null>
    contactRef: React.MutableRefObject<null>
    workRef: React.MutableRefObject<null>
    targetId: string
}

const MainPage: React.FC<MainPageProps> = ({aboutRef,contactRef,workRef,targetId}) => (
          <div>
            <Navbar aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} targetId={targetId} />
            <Hero />
            <About aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
            <Work workRef={workRef} aboutRef={aboutRef} contactRef={contactRef} />
            <Contact aboutRef={aboutRef} contactRef={contactRef} workRef={workRef} />
            <Footbar />
         </div>
);

export default MainPage;
