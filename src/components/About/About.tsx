import React, { useRef } from "react";
import styles from "./about.module.css";
import Card from "../UI/Card";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Work from "../work/Work";
import Contact from "../Contact/Contact";
import mainPicture from "../../assets/images/mainPicture.jpeg";
import profile from "../../assets/images/profile.png"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../../helpers/Wrapper";
import "../../helpers/wrapper.module.css";
import "../SharedStyles/sharedStyles.css";

interface AboutProps {
  aboutRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
  workRef: React.MutableRefObject<null>;
}
const About: React.FC<AboutProps> = ({ aboutRef, contactRef, workRef }) => {
  return (
    <Wrapper>
      <div className={styles.about} id="about" ref={aboutRef}>
        <Card className="header">
          <h3 className={styles.titleSection}>01. About Me</h3>
          <hr className={styles.hr} />
        </Card>

        <div className={styles.content}>
          <p>
            After an experience in Finance, I decided to shift carreer a developer. I
            worked on Ruby on Rails, HTML, CSS and Javascript at Le
            Wagon Bootamp. I would like to work on a tech product to put my
            skills to good use in a stimulating environment.
          </p>
         
          <img src={mainPicture} className={styles.profile} alt="Image 1" />

          <p className={styles.titleStack}>
          Here are a few of the technologies I'm familiar with and have recently used to make my own projects : 
          </p>
          <ul className={styles.stacklist}>
            <div>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.faChevronRight}
                />{" "}
                JavaScript
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.faChevronRight}
                />{" "}
                Ruby on Rails
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.faChevronRight}
                />{" "}
                React
              </li>
            </div>
            <div>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.faChevronRight}
                />{" "}
                TypeScript
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.faChevronRight}
                />{" "}
                HTML/CSS
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.faChevronRight}
                />{" "}
                SQL
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
