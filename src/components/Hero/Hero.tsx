import React, { FC } from "react";
import styles from "./hero.module.css";
import Wrapper from "../../helpers/Wrapper";
import { Link } from 'react-router-dom';
import resume from "../../utils/Resume.pdf";
import { Document, Page } from "react-pdf";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import { useDocumentLoad } from "../hooks/useDocumentLoad";
import "../SharedStyles/sharedStyles.css";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();
  const onDocumentLoadSuccess = useDocumentLoad();

  return (
    <Wrapper>
    <div className={`${styles.hero}`}>
      <h1 className={styles.h1}>Hi, my name is...</h1>
      <h2 className={styles.h2}>Saïfoullah Bacari</h2>
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
       <Link
              to="https://drive.google.com/file/d/12vqvEutK6h_-3_V4yZHbSE89WXqoCXNm/view?usp=sharing"
              className={styles.resume}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className={styles.resumePdf}>
                <Document file={resume}>
                  <Page
                    pageNumber={1}
                    onLoadSuccess={onDocumentLoadSuccess}
                  ></Page>
                </Document>
              </div>
              My Resume
            </Link>
      </button>
    </div>
    </Wrapper>

  );
};

export default Hero;
