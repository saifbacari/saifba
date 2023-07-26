import React, { FC } from "react";
import styles from './hero.module.css';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {

    return (
        <div className={styles.hero}>
            <h1 className={styles.h1}>Hi, my name is X</h1>
            <h2 className={styles.h2}>Salim Ali Amir.</h2>
            <h3>Sacerdoce depuis 1990</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <button className={styles.buttonHero}>minima veniam</button>
        </div>
       
    )
}



export default Hero;