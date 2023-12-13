import React, { useRef } from "react";
import Card from "../UI/Card";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Work from "../work/Work";
import styles from "./contact.module.css";
import Wrapper from "../../helpers/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


interface ContactProps {
  aboutRef: React.MutableRefObject<null>;
  workRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
}

const Contact: React.FC<ContactProps> = ({ aboutRef, contactRef, workRef }) => {
  return (
    <Wrapper>
      <div className={styles.contact} ref={contactRef}>
        <h2 className={styles.h2}>Need More Info?</h2>
        <h3>Get in Touch!</h3>
        <p>
          I'm currently looking for new opportunities. Feel free to let me any email. I'll contact 
          you  as soon as possible!
        </p>
        <button
          className="buttonOrange"
          onClick={() => (window.location.href = "mailto:saifbacari@gmail.com")}
        >
          Say Hello
        </button>

      </div>
    </Wrapper>
  );
};

export default Contact;
