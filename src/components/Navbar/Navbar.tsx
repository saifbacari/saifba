import React, { useEffect, useState} from "react";
import styles from './navbar.module.css';
import { Link } from "react-router-dom";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import ScrollToSectionContainer from "../Cards/ScrollToSectionContainer";
import NavItemAbout from "./NavItemAbout";
import NavItemContact from "./NavItemContact";
import NavItemWork from "./NavItemWork";


import '../SharedStyles/sharedStyles.css'

interface NavbarProps {
    targetId: string
}



const Navbar : React.FC = () => {
    const scrollToSectionHandler = (targetId:string) => {
        const targetElement = document.getElementById(targetId);
            if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop,
            });
        };

    }
    const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();
    const [scrollData, setScrollData] = useState({
        y:0,
        lastY: 0
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

            if (scrollData.lastY > scrollData.y){
                setShowNav(false);
            }else{
                setShowNav(true);
            }

    

        },[scrollData])
    
    return (
      
            <nav id='about' className={`${showNav ? styles.hiddenNav : ''} ${styles.navLinks}`}>
                <ul>
                        <li className={styles.a}>
                            <NavItemAbout targetId="about" name="1. About"/>
                        </li>
                        <li className={styles.a}>
                            <NavItemWork targetId="work" name="2. Work" />                 
                        </li>
                        <li className={styles.a}>
                            <NavItemContact targetId ="contact" name="3. Contact"/>
                        </li>
                        <li>
                            <a
                                href=""
                                className={styles.resume}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                style={{ color: isHover ?  "#F29727" : "" }}
                            >
                                Resume
                            </a>
                        </li>
                </ul>
            </nav>
    
    );
};

export default Navbar;
