import React, { useRef } from "react";
import Card from "../Cards/Card";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Work from "../work/Work";
import styles from './contact.module.css';



interface ContactProps {
  aboutRef: React.MutableRefObject<null>
  workRef: React.MutableRefObject<null>
  contactRef: React.MutableRefObject<null>
}

const Contact: React.FC<ContactProps> = ({aboutRef, contactRef, workRef}) => {

  return (
    <div className={styles.contact} ref={contactRef}>

      <h3>Contact</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci 
        eu lobortis elementum nibh. Ultrices sagittis orci a scelerisque purus
        semper eget. Enim ut sem viverra aliquet eget. Mauris sit amet massa 
        vitae. Bibendum ut tristique et egestas quis ipsum. Convallis posuere 
        morbi leo urna molestie
      </p>
      <button className="buttonOrange" onClick={() => window.location.href = "mailto:saifbacari@gmail.com"}>
        Contactez-moi
      </button>
        <ul>
          <li>Social Network 01</li>
          <li>Social Network 02</li>
          <li>Social Network 03</li>
        </ul>
    </div>
  );
};

export default Contact;
