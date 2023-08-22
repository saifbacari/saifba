import React, { useRef } from "react";
import styles from './about.module.css';
import Card from "../Cards/Card";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Work from "../work/Work";
import Contact from "../Contact/Contact";

interface AboutProps {
   aboutRef: React.MutableRefObject<null>
   contactRef: React.MutableRefObject<null>
   workRef: React.MutableRefObject<null>
}
const About: React.FC<AboutProps> = ({ aboutRef, contactRef, workRef }) => {
 
    return (
        <div className={styles.about} id="about" ref={aboutRef}>
             <Card className="header" >
                <h3>01. About Me</h3>
                <hr/>
             </Card>
             <div className={styles.content}>
                <p className={styles.p}>
                        Nulla pellentesque et enim vel condimentum. 
                        Vivamus tempor, augue id ornare feugiat, magna
                        lacus luctus nibh, id efficitur risus diam nec nisl. 
                        Curabitur luctus, leo non consequat viverra, metus ligula 
                        tincidunt lectus, sed feugiat nisl dolor vitae metus. Donec sodales, 
                        lectus id gravida rhoncus, ex sapien luctus neque, sit amet
                        dignissim tortor mi ut eros. Donec facilisis commodo nulla,
                        id vulputate sem sodales id. Nunc at viverra erat. Donec dignissim 
                        aliquam nulla, non luctus quam convallis ut.
                    </p>
                    <img src="src/assets/images/profile.png" alt="Image 1" />

                    <p className={styles.titleStack}>Et harum quidem rerum facilis est et expedita distinctio :</p>
                    <ul className={styles.stacklist}>
                        <div>                                           
                            <li>JavaScript</li>
                            <li>Ruby on Rails</li>
                            <li>React</li>
                        </div>
                        <div>
                            <li>TypeScript</li>
                            <li>HTML/CSS</li>
                            <li>SQL</li>
                        </div>
                    </ul>
              </div>
         </div>     
    )
}

export default About;
