import React, { FC } from "react";
import styles from "./hero.module.css";
import Wrapper from "../../helpers/Wrapper";
import "../SharedStyles/sharedStyles.css";
import { useHoverColorChange } from "../hooks/useHoverColorChange";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();

  return (
    <Wrapper>
    <div className={`${styles.hero}`}>
      <h1 className={styles.h1}>Hi, my name is...</h1>
      <h2 className={styles.h2}>Kenny Cairo</h2>
      <h3 className={styles.h3}>Front-End Developer Javascript | React JS</h3>
      <p className={styles.p}>
        I'm a Javascript-React JS Developer. I write code for build things to turn them into real life products. 
      </p>
      <button
        className={styles.buttonHero}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ color: isHover ? "#F29727" : "" }}
      >
        minima veniam
      </button>
    </div>
    </Wrapper>

  );
};

export default Hero;
