import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import styles from "./navbar.module.css";
import { Link, Router } from "react-router-dom";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import Wrapper from "../../helpers/Wrapper";
import NavItemAbout from "./NavItemAbout";
import NavItemContact from "./NavItemContact";
import NavItemWork from "./NavItemWork";
import Backdrop from "../Cards/Backdrop";
import "../SharedStyles/sharedStyles.css";
import About from "../About/About";
import resume from "../../utils/Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { useLockScrolling } from "../hooks/useLockScrolling";
import ReactPDF from "@react-pdf/renderer";
import { useScrollData } from "../hooks/useScrollData";
import { useScrollHandler } from "../hooks/useScrollHandler";
import { useExpandNavbar } from "../hooks/useExpandNavbar";
import { useUnlockScrolling } from "../hooks/useUnlockScrolling";
import { useDocumentLoad } from "../hooks/useDocumentLoad";
import { useCloseNavbar } from "../hooks/useCloseNavbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface NavbarProps {
  targetId: string;
  contactRef: React.MutableRefObject<null>;
  workRef: React.MutableRefObject<null>;
  aboutRef: React.MutableRefObject<null>;
}

const Navbar: React.FC<NavbarProps> = ({ aboutRef, contactRef, workRef }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const unlockScrolling = useUnlockScrolling();

  const lockScrolling = useLockScrolling();

  const onDocumentLoadSuccess = useDocumentLoad();

  const [crossMenu, setCrossMenu] = useState(false);

  const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();

  const { showNav, scrollData } = useScrollHandler();

  const {
    navbarExpanded,
    setNavbarExpanded,
    backdropVisible,
    setBackdropVisible,
    toggleNavbarExpansion,
  } = useExpandNavbar();

  const handleBurgerClick = () => {
    toggleNavbarExpansion();
    if (backdropVisible) {
      setBackdropVisible(false);
      unlockScrolling();
    } else {
      setBackdropVisible(true);
      lockScrolling;
    }
  };

  //a refactoriser en custom hook

  const closingNavbarHandler = () => {
    if (backdropVisible) {
      setBackdropVisible(false);
      setNavbarExpanded(false);
      unlockScrolling();
    }
  };

  useCloseNavbar();
  useEffect(() => {
    const sizeChangeHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", sizeChangeHandler);

    return () => {
      window.removeEventListener("resize", sizeChangeHandler);
    };
  }, []);

  useEffect(() => {
    closeStateNavbarAfterResizing();
  }, [windowWidth]);

  const closeStateNavbarAfterResizing = () => {
    if (windowWidth > 600) {
      setNavbarExpanded(false);
      setBackdropVisible(false);
      unlockScrolling();
    }
  };

  //const closeStateNavbar = useCloseNavbar(); inutile pour l'instant - a supprimer

  const selected = document.querySelector;

  return (
    <>
      <div
        className={`${showNav ? `${styles.menuResponsive}` : styles.closed} ${
          styles.menuResponsive
        }`}
      >
        <a
          href="#menu"
          className={`${styles.a} ${styles.iconBurger} ${
            crossMenu ? `${styles.line}` : styles.iconBurger
          }`}
          onClick={() => {
            handleBurgerClick();
          }}
        >
          <label
            htmlFor="nav-toggle"
            className={`${styles.iconBurger} ${
              crossMenu ? `${styles.open}` : styles.iconBurger
            }`}
            /*onClick={()=>{setCrossMenu(!crossMenu)}}*/
          >
            <div
              className={`${backdropVisible ? `${styles.line1}` : styles.line}`}
            ></div>
            <div
              className={`${backdropVisible ? `${styles.line2}` : styles.line}`}
            ></div>
            <div
              className={`${backdropVisible ? `${styles.line3}` : styles.line}`}
            ></div>
          </label>
        </a>

        {backdropVisible && (
          <Backdrop className={styles.backdrop}>
            <ol
              className={`${styles.ol} ${
                navbarExpanded ? `${styles.open} ` : styles.closed
              }`}
            >
              <li
                className={styles.liNavItem}
                onClick={() => {
                  closingNavbarHandler();
                }}
              >
                <NavItemAbout
                  aboutRef={aboutRef}
                  targetId="about"
                  name="1. About"
                />
              </li>
              <li
                className={styles.liNavItem}
                onClick={() => {
                  closingNavbarHandler();
                }}
              >
                <NavItemWork workRef={workRef} targetId="work" name="2. Work" />
              </li>
              <li
                className={styles.liNavItem}
                onClick={() => {
                  closingNavbarHandler();
                }}
              >
                <NavItemContact
                  contactRef={contactRef}
                  targetId="contact"
                  name="3. Contact"
                />
              </li>
              <li className={styles.liNavItem}>
                <Link
                  to="https://drive.google.com/file/d/1hdJ_95OjZgxwJEbg8eNwQ53u3jkBWQVj/view?usp=sharing"
                  className={styles.resume}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  //onClick={() =>{unlockScrolling()}}//a supprimer si aucun effet en dehors
                >
                  <div className={styles.resumePdf}>
                    <Document file={resume}>
                      <Page
                        pageNumber={1}
                        onLoadSuccess={onDocumentLoadSuccess}
                      ></Page>
                    </Document>
                  </div>
                  Resume
                </Link>
              </li>
            </ol>
          </Backdrop>
        )}
      </div>

      <nav
        id="about"
        className={`${showNav ? styles.navLinks : styles.hiddenNav} ${
          styles.navLinks
        }`}
      >
        <div className={styles.welcomeLogo}><a href="/">G. Garbo</a></div>
        <ul>
          <li className={styles.navLink}>
            <NavItemAbout
              aboutRef={aboutRef}
              targetId="about"
              name="1. About"
            />
          </li>
          <li className={styles.navLink}>
            <NavItemWork workRef={workRef} targetId="work" name="2. Work" />
          </li>
          <li className={styles.navLink}>
            <NavItemContact
              contactRef={contactRef}
              targetId="contact"
              name="3. Contact"
            />
          </li>
          <li>
            <Link
              to="https://drive.google.com/file/d/1hdJ_95OjZgxwJEbg8eNwQ53u3jkBWQVj/view?usp=sharing"
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
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
