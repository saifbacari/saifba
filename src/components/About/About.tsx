import React, { useRef } from "react";
import styles from './about.module.css';
import Card from "../Cards/Card";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Work from "../work/Work";
import Contact from "../Contact/Contact";
import profile from "../../assets/images/profile.png"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Wrapper from "../../helpers/Wrapper";
import "../../helpers/wrapper.module.css"

interface AboutProps {
   aboutRef: React.MutableRefObject<null>
   contactRef: React.MutableRefObject<null>
   workRef: React.MutableRefObject<null>
}
const About: React.FC<AboutProps> = ({ aboutRef, contactRef, workRef }) => {
 
    return (
        <Wrapper>
                    <div className={styles.about} id="about" ref={aboutRef}>
             <Card className="header" >
                <h3>01. About Me</h3>
                <hr className={styles.hr}/>
             </Card>
             
             <div className={styles.content}>
                <p>
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
                    <img src={profile} alt="Image 1" />

                    <p className={styles.titleStack}>Et harum quidem rerum facilis est et expedita distinctio :</p>
                    <ul className={styles.stacklist}>
                        <div>                                           
                            <li><FontAwesomeIcon icon={faChevronRight} className={styles.faChevronRight}/> JavaScript</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className={styles.faChevronRight}/> Ruby on Rails</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className={styles.faChevronRight}/> React</li>
                        </div>
                        <div>
                            <li><FontAwesomeIcon icon={faChevronRight} className={styles.faChevronRight}/> TypeScript</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className={styles.faChevronRight}/> HTML/CSS</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className={styles.faChevronRight}/> SQL</li>
                        </div>
                    </ul>
              </div>
         </div>   
        </Wrapper>
  
    )
}

export default About;
