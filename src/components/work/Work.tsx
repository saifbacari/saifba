import React from "react";
import Card from "../Cards/Card";
import styles from "./work.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faPlay } from "@fortawesome/free-solid-svg-icons";


const Work = () => {

  return (
    <div className={styles.work}>
      <Card className="header">
        <h3>02. Some Stuffs I Made</h3>
        <FontAwesomeIcon icon={faPlay} />
        <hr />
      </Card>
      <ul className={styles.listProject}>
        <li className={styles.elementList}>
            <a>link</a>
          <h1>Projet A</h1>
          <h2>Fonctionnalités effectuées</h2>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Javascript</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>SQL</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Typescript</li>
          </ul>
        </li>
        <li className={styles.elementList}>
            <a >link</a>
          <h1>Projet B</h1>
          <h2>Fonctionnalités effectuées</h2>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>React JS</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>SQL</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Typescript</li>
          </ul>
        </li>
        <li className={styles.elementList}>
          <a>link</a>
          <h1>Projet C</h1>
          <h2>Fonctionnalités effectuées</h2>
          <ul className={styles.stacksProject}>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Python</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>Java</li>
            <li><FontAwesomeIcon icon={faPlay} className={styles.faPlay}/>C++</li>
          </ul>
        </li>
        <li className={styles.elementList}>
          <h1>Projet D</h1>
          <h2>Fonctionnalités effectuées</h2>
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
