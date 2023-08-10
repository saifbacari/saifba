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
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos <  10);

        setPrevScrollPos(currentScrollPos);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    } ,[prevScrollPos, visible, handleScroll]);
    
    return (
        <header>
            <nav id='about' className={`${styles.navLinks}`} style={{ top: visible ? '0' : '-60px' }}>
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
        </header>
    );
};

export default Navbar;
