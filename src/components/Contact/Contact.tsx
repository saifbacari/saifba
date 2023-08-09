import React from 'react';
import styles from './contact.module.css';
import '../SharedStyles/sharedStyles.css';

interface ContactProps {
  // Définir les propriétés ici
}

// Définition du composant React
const Contact: React.FC<ContactProps> = (props) => {

  return (
    <div className={styles.contact}>
      <h3>Contact</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci 
        eu lobortis elementum nibh. Ultrices sagittis orci a scelerisque purus
        semper eget. Enim ut sem viverra aliquet eget. Mauris sit amet massa 
        vitae. Bibendum ut tristique et egestas quis ipsum. Convallis posuere 
        morbi leo urna molestie
      </p>
      <button className="buttonOrange">Contact God</button>
    </div>
  );
};

export default Contact;
