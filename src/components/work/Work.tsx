import React, { MutableRefObject } from "react";
import Card from "../UI/Card";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import styles from "./work.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../../helpers/Wrapper";
import "../SharedStyles/sharedStyles.css";

interface WorkProps {
  aboutRef: React.MutableRefObject<null>;
  workRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
}

const Work: React.FC<WorkProps> = ({ aboutRef, workRef, contactRef }) => {
  return (
    <Wrapper>
          <div className={styles.work} ref={workRef}>
      <Card className="header">
        <h3 className={styles.titleSection}>02. Some Stuffs I've built</h3>
        <hr className={styles.hr} />
      </Card>
      <ul className={styles.listProject}>
        <li className={styles.elementList}>
          <h3 className={styles.h3ElementList}>
            <a href="https://bookstar-app-v2.vercel.app/">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles.faArrowUpRightFromSquare}
              />
            </a>
            Bookstar
          </h3>
          <h4>Technologies/Stacks :</h4>
          <ul className={styles.stacksProject}>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} />
              React JS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} />
              HTML/CSS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} />
              Vite JS/Vercel
            </li>
          </ul>
        </li>
        <li className={styles.elementList}>
          <h3 className={styles.h3ElementList}>
            <a href="https://github.com/saifbacari/rails-watch-list">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles.faArrowUpRightFromSquare}
              />
            </a>
            Watch List Movie
          </h3>
          <h4>Technologies/Stacks :</h4>
          <ul className={styles.stacksProject}>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} /> Ruby on Rails
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} /> Vanilla JS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} />{" "}
              HTML-CSS
            </li>
          </ul>
        </li>
        <li className={styles.elementList}>
          <h3 className={styles.h3ElementList}>
            <a href="https://github.com/saifbacari/api_news_website">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles.faArrowUpRightFromSquare}
              />
            </a>
            News infos with API
          </h3>
          <h4>Technologies/Stacks :</h4>
          <ul className={styles.stacksProject}>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} /> React JS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} /> JS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} /> HTML/CSS
            </li>
          </ul>
        </li>
        <li className={styles.elementList}>
          <h3 className={styles.h3ElementList}>
            <a href="https://github.com/saifbacari/saifba">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles.faArrowUpRightFromSquare}
              />
            </a>
            Personal website
          </h3>
          <h4>Technologies/Stacks :</h4>
          <ul className={styles.stacksProject}>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} /> React JS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} /> Typescript/JS
            </li>
            <li>
              <FontAwesomeIcon icon={faPlay} className={styles.faPlay} /> HTML/CSS
            </li>
          </ul>
        </li>
      </ul>
    </div>

    </Wrapper>

  );
};

export default Work;
