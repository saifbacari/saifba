import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import styles from './navbar.module.css';
import { Link } from "react-router-dom";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import Wrapper from "../../helpers/Wrapper";
import NavItemAbout from "./NavItemAbout";
import NavItemContact from "./NavItemContact";
import NavItemWork from "./NavItemWork";
import Backdrop from "../Cards/Backdrop";
import '../SharedStyles/sharedStyles.css';
import About from "../About/About";
import resume from '../../utils/Resume.pdf';
import {  Document, Page, pdfjs } from 'react-pdf';
import { useLockScrolling } from "../hooks/useLockScrolling";
import ReactPDF from '@react-pdf/renderer';
import { useScrollData } from "../hooks/useScrollData";
import { useScrollHandler } from "../hooks/useScrollHandler";
import { useExpandNavbar } from "../hooks/useExpandNavbar";
import { useUnlockScrolling } from "../hooks/useUnlockScrolling";
import { useDocumentLoad } from "../hooks/useDocumentLoad";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




interface NavbarProps {
    targetId: string;
    contactRef: React.MutableRefObject<null>;
    workRef: React.MutableRefObject<null>;
    aboutRef: React.MutableRefObject<null>;
    
}


const Navbar: React.FC<NavbarProps> = ({ aboutRef, contactRef, workRef })  => {
    //logique react-pdf //
    //const [numPages, setNumPages] = useState(null);
    //const [pageNumber, setPageNumber] = useState(1);
    
    //function onDocumentLoadSuccess ({}) {
        //setNumPages(numPages);
        //setPageNumber(1);
    //}

    const onDocumentLoadSuccess = useDocumentLoad();
    
    //effect & state for navbar responsive//
    //const [navbarVisible, setNavbarVisible] = useState(true);
    
    //const [prevScrollPos, setProvScrollPos] = useState(0);
    
    //const [navbarExpanded, setNavbarExpanded] = useState(false);
    
    //const navbExp = navbarExpanded ? "open" : "";

    //
    
    const [crossMenu, setCrossMenu ] = useState(false);
    
    //const [backdropVisible, setBackdropVisible] = useState(false);

    //effects & state for standard navbar//
    
    const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();
    //
    const { showNav, scrollData } = useScrollHandler();

    const { navbarExpanded,setNavbarExpanded, backdropVisible, setBackdropVisible, toggleNavbarExpansion } = useExpandNavbar();


    //

//refactor bloquer //

    



      const unlockScrolling = useUnlockScrolling();

      const lockScrolling = useLockScrolling();

      // const unlockScrolling = () =>{
        //document.body.style.overflow = 'unset';
       //} 
    



//a refactoriser en custom hook  
 const handleBurgerClick = () => {
    toggleNavbarExpansion();
    if (showNav) {
        return useLockScrolling();
        
    } else if (showNav!) {
        return unlockScrolling();// Call your hook function
    }
    else {
       return unlockScrolling();
    }
};

 // fin refactor //

    return (
        <>
        
        <div className={`${showNav ? `${styles.menuResponsive}`  : styles.closed} ${styles.menuResponsive }`} >
        <a href="#menu" className={ `${styles.a} ${styles.iconBurger} ${crossMenu ? `${styles.line}` : styles.iconBurger}`} 
        onClick={() => {
            if (backdropVisible!) {
              unlockScrolling();
            }
            handleBurgerClick();
          }}>
        <label htmlFor="nav-toggle"   className={ `${styles.iconBurger} ${crossMenu ? `${styles.line}` : styles.iconBurger}`} 
        onClick={()=>{setCrossMenu(!crossMenu)}}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        </label>
        </a>
        {backdropVisible && (
            <Backdrop className={styles.backdrop} >
            
            <ol className={`${styles.ol} ${navbarExpanded ? `${styles.open} ${styles.line}` : styles.closed}`} >
            <li className={styles.li}
            onClick={() => {setNavbarExpanded(!navbarExpanded);
                setBackdropVisible(!navbarExpanded); unlockScrolling();}
            }
            ><NavItemAbout aboutRef={aboutRef} targetId="about" name="1. About" /></li>
            <li className={styles.li}
            onClick={() => {setNavbarExpanded(!navbarExpanded);
                setBackdropVisible(!navbarExpanded); unlockScrolling();}
            }
            ><NavItemWork workRef={workRef} targetId="work" name="2. Work"/></li>
            <li className={styles.li} 
            onClick={() => {setNavbarExpanded(!navbarExpanded);
                setBackdropVisible(!navbarExpanded); unlockScrolling();}
            }><NavItemContact contactRef={contactRef} targetId="contact" name="3. Contact"/></li>
            <li className={styles.li} onClick={() => {unlockScrolling()}}
            >
            <Link
            to="https://drive.google.com/file/d/1hdJ_95OjZgxwJEbg8eNwQ53u3jkBWQVj/view?usp=sharing"
            className={styles.resume}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() =>{unlockScrolling()}}
            >
            <div className={styles.resumePdf}>
            <Document file={resume}>
            <Page pageNumber={1} onLoadSuccess={onDocumentLoadSuccess}></Page>
            </Document>
            </div>
            Resume
            </Link>
            </li>
            </ol>
            </Backdrop>
            )}
            </div>
            <div/>
            
            
            
            
            <nav id='about'className={`${showNav ? styles.navLinks : styles.hiddenNav } ${styles.navLinks}`}>
            
            <ul>
            <li className={styles.navLink}>
            <NavItemAbout aboutRef={aboutRef} targetId="about" name="1. About" />
            </li>
            <li className={styles.navLink}>
            <NavItemWork workRef={workRef} targetId="work" name="2. Work"/>                 
            </li>
            <li className={styles.navLink}>
            <NavItemContact contactRef={contactRef} targetId="contact" name="3. Contact"/>
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
            <Page pageNumber={1} onLoadSuccess={onDocumentLoadSuccess}></Page>
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
