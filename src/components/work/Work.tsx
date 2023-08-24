import React, { MutableRefObject } from "react";
import Card from "../Cards/Card";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import styles from "./work.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";



interface WorkProps {
  aboutRef: React.MutableRefObject<null>
  workRef: React.MutableRefObject<null>
  contactRef: React.MutableRefObject<null>
}

const Work : React.FC<WorkProps> = ({ aboutRef, workRef, contactRef }) => {

  return (
    
    <div className={styles.work} ref={workRef}>
      <Card className="header">
        <h3>02. Some Stuffs I Made</h3>
        <hr />
      </Card>
      <ul className={styles.listProject}>
        <li className={styles.elementList}>
            
          <h3 className={styles.h3ElementList}><a><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.faArrowUpRightFromSquare}/></a>Projet A</h3>
          <h4>Fonctionnalités effectuées:</h4>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Javascript</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>SQL</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Typescript</li>
          </ul>
        </li>
        <li className={styles.elementList}>
            
          <h3 className={styles.h3ElementList}><a><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.faArrowUpRightFromSquare}/></a>Projet B</h3>
          <h4>Fonctionnalités effectuées :</h4>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>   React JS</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>   SQL</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>   Typescript</li>
          </ul>
        </li>
        <li className={styles.elementList}>
          
          <h3 className={styles.h3ElementList}><a><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.faArrowUpRightFromSquare}/></a>Projet C</h3>
          <h4>Fonctionnalités effectuées :</h4>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>   Python</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>   Java</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>   C++</li>
          </ul>
        </li>
        <li className={styles.elementList}>        
          <h3 className={styles.h3ElementList}><a ><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.faArrowUpRightFromSquare}/></a>Projet D</h3>
          <h4>Fonctionnalités effectuées :</h4>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>   Python</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>   Java</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>   C++</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};


export default Work;
