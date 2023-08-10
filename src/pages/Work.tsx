import React from "react";
import Card from "../components/Cards/Card";
import styles from "../components/work/work.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const Work = () => {

  return (
    <div className={styles.work}>
      <Card className="header">
        <h3>02. Some Stuffs I Made</h3>
        <hr />
      </Card>
      <ul className={styles.listProject}>
        <li className={styles.elementList}>
            <a><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.faArrowUpRightFromSquare}/></a>
          <h3>Projet A</h3>
          <h4>Fonctionnalités effectuées</h4>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Javascript</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>SQL</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Typescript</li>
          </ul>
        </li>
        <li className={styles.elementList}>
            <a><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.faArrowUpRightFromSquare}/></a>
          <h3>Projet B</h3>
          <h4>Fonctionnalités effectuées</h4>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>React JS</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>SQL</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Typescript</li>
          </ul>
        </li>
        <li className={styles.elementList}>
          <a><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.faArrowUpRightFromSquare}/></a>
          <h3>Projet C</h3>
          <h4>Fonctionnalités effectuées</h4>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Python</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Java</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>C++</li>
          </ul>
        </li>
        <li className={styles.elementList}>
         <a ><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.faArrowUpRightFromSquare}/></a>
          <h3>Projet D</h3>
          <h4>Fonctionnalités effectuées</h4>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Python</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Java</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>C++</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Work;
