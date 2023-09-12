import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import styles from './navbar.module.css';
import { Link } from "react-router-dom";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import Wrapper from "../../helpers/Wrapper";
import NavItemAbout from "./NavItemAbout";
import NavItemContact from "./NavItemContact";
import NavItemWork from "./NavItemWork";

import '../SharedStyles/sharedStyles.css';
import About from "../About/About";
import resume from '../../utils/Resume.pdf';
import {  Document, Page, pdfjs } from 'react-pdf';
import ReactPDF from '@react-pdf/renderer';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




interface NavbarProps {
    targetId: string;
    contactRef: React.MutableRefObject<null>;
    workRef: React.MutableRefObject<null>;
    aboutRef: React.MutableRefObject<null>;
    
}


const Navbar: React.FC<NavbarProps> = ({ aboutRef, contactRef, workRef })  => {
 //logique react-pdf //
 const [numPages, setNumPages] = useState(null);
 const [pageNumber, setPageNumber] = useState(1);

 function onDocumentLoadSuccess ({}) {
    setNumPages(numPages);
    setPageNumber(1);
 }
   
//effect & state for navbar responsive//
    //const [navbarVisible, setNavbarVisible] = useState(true);

    //const [prevScrollPos, setProvScrollPos] = useState(0);

    const [navbarExpanded, setNavbarExpanded] = useState(false);

    const navbExp = navbarExpanded ? "open" : "";

    const [crossMenu, setCrossMenu ] = useState(false);



//effects & state for standard navbar//

    const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();
    const [scrollData, setScrollData] = useState({
        y:0,
        lastY: 0,
    });

    const [showNav, setShowNav] = useState(true);

     

    useEffect(() =>{

        const handleScroll = () => {
            setScrollData(prevState => {
                return {
                    y: window.scrollY,
                    lastY: prevState.y
                }
            })
        }
        window.addEventListener('scroll', handleScroll );

    },[])

   
       

        useEffect(() => {
            if (scrollData.y > 500){
                setShowNav(true);
            }else{
                setShowNav(false);
            }

            if (scrollData.lastY < scrollData.y){
                setShowNav(false);
            }else{
                setShowNav(true);
            }


        },[scrollData])

        useEffect(() => {
            if (scrollData.y > scrollData.lastY ){
                setShowNav(false);
            } else {
                setShowNav(true);
            }
        },[scrollData]);
    
    return (
        <>
            <div className={`${showNav ? styles.menuResponsive : styles.closed} ${styles.menuResponsive }`} >
                <a href="#menu" className={ `${styles.a} ${styles.iconBurger} ${crossMenu ? `${styles.line}` : styles.iconBurger}`} onClick={() => {setNavbarExpanded(!navbarExpanded)}}>
                <label htmlFor="nav-toggle"   className={ `${styles.iconBurger} ${crossMenu ? `${styles.line}` : styles.iconBurger}`} onClick={()=>{setCrossMenu(!crossMenu)}}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </label>
                </a>
                <ol className={`${styles.ol} ${navbarExpanded ? `${styles.open} ${styles.line}` : styles.closed}`} >
                    <li className={styles.li}><NavItemAbout aboutRef={aboutRef} targetId="about" name="1. About" /></li>
                    <li className={styles.li}><NavItemWork workRef={workRef} targetId="work" name="2. Work"/></li>
                    <li className={styles.li}><NavItemContact contactRef={contactRef} targetId="contact" name="3. Contact"/></li>
                </ol>
             </div>
   

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
