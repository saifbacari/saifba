import React, { FC } from "react";
import styles from './hero.module.css';
import '../SharedStyles/sharedStyles.css';
import { useHoverColorChange } from "../hooks/useHoverColorChange";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
    const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();

    return (
        
            <div className={`${styles.hero}`}>
                <h1 className={styles.h1}>Hi, my name is...</h1>
                <h2 className={styles.h2}>Greta Garbo</h2>
                <h3 className={styles.h3}>Software Engineer Fullstack</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <button
                className={styles.buttonHero}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{ color: isHover ? "#F29727" : ""}}
                >minima veniam</button>
            </div>       
    )
}



export default Hero;