import React, { useEffect, useState} from "react";
import styles from './navbar.module.css';
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import ScrollToSectionContainer from "../Cards/ScrollToSectionContainer";

interface NavbarProps{
    links: {name:string, url:string}[];
}

const Navbar : React.FC<NavbarProps> = ({ links }) => {
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
                    {links.map((link, index) => (
                        <li key={index}>
                            <ScrollToSectionContainer 
                            targetId={link.url}
                            scrollFunction={() => scrollToSectionHandler(link.url)}
                            >
                            <a 
                                href={link.url} 
                                className={link.name === 'Resume' ? styles.resume : styles.a }
                                onClick={() =>
                                    scrollToSectionHandler(link.url)}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                style={{ color: isHover &&  (link.name === 'Resume' || link.name === '') ? "#F29727" : "" }}
                            >
                                {link.name}
                            </a>
                            </ScrollToSectionContainer>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
