import React, { useEffect, useState} from "react";
import styles from './navbar.module.css';
import { useHoverColorChange } from "../hooks/useHoverColorChange";

interface NavbarProps{
    links: {name:string, url:string}[];
}

const Navbar : React.FC<NavbarProps> = ({ links }) => {
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
            <nav className={`${styles.navLinks}`} style={{ top: visible ? '0' : '-60px' }}>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a 
                                href={link.url} 
                                className={link.name === 'Resume' ? styles.resume : styles.a }
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                style={{ color: isHover &&  (link.name === 'Resume' || link.name === '') ? "#F29727" : "" }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
