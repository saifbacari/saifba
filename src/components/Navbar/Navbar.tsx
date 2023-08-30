import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import styles from './navbar.module.css';
import { Link } from "react-router-dom";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import Wrapper from "../../helpers/Wrapper";
import NavItemAbout from "./NavItemAbout";
import NavItemContact from "./NavItemContact";
import NavItemWork from "./NavItemWork";
import '../SharedStyles/sharedStyles.css'
import About from "../About/About";


interface NavbarProps {
    targetId: string;
    contactRef: React.MutableRefObject<null>;
    workRef: React.MutableRefObject<null>;
    aboutRef: React.MutableRefObject<null>;
}


const Navbar: React.FC<NavbarProps> = ({ aboutRef, contactRef, workRef })  => {
    
    const [navbarExpanded, setNavbarExpanded] = useState(false);

    const navbExp = navbarExpanded ? "open" : ""

    const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();
    const [scrollData, setScrollData] = useState({
        y:0,
        lastY: 0,
    });

    const [showNav, setShowNav] = useState(false);

     

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
    
    return (
        <>
            <div className={styles.menuResponsive}>
                <a href="#menu" onClick={() => {setNavbarExpanded(!navbarExpanded)}}><img className={styles.hamMenu}src="src/assets/images/ham-menu.png" alt="menu" /></a>
                <ol className={`${styles.ol} ${navbarExpanded ? styles.open : ""}`} >
                    <li className={styles.li}><NavItemAbout aboutRef={aboutRef} targetId="about" name="1. About" /></li>
                    <li className={styles.li}><NavItemWork workRef={workRef} targetId="work" name="2. Work"/></li>
                    <li className={styles.li}><NavItemContact contactRef={contactRef} targetId="contact" name="3. Contact"/></li>
                </ol>
             </div>
            
            <nav id='about'className={`${showNav ? styles.navLinks : styles.hiddenNav } ${styles.navLinks}`}>
        
                <ul>
                        <li className={styles.a}>
                            <NavItemAbout aboutRef={aboutRef} targetId="about" name="1. About" />
                        </li>
                        <li className={styles.a}>
                            <NavItemWork workRef={workRef} targetId="work" name="2. Work"/>                 
                        </li>
                        <li className={styles.a}>
                            <NavItemContact contactRef={contactRef} targetId="contact" name="3. Contact"/>
                        </li>
                        <li>
                            <Link
                                to=""
                                className={styles.resume}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                style={{ color: isHover ?  "#F29727" : "" }}
                            >
                                Resume
                            </Link>
                        </li>
                </ul>
            </nav>    
        </>

    
    );
};

export default Navbar;
