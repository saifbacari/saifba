import React from "react";
import { Link } from "react-router-dom";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import styles from '../About/about.module.css';

interface NavItemAboutProps {
    targetId: string;
    name: string;
    aboutRef: React.MutableRefObject<HTMLElement | null>;
}

const NavItemAbout : React.FC<NavItemAboutProps> = ({ targetId, name, aboutRef }) => {
    const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();

    const handleScroll = () => {
        if (aboutRef.current) {
            window.scrollTo({
                top: aboutRef.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div>
            <Link 
                to={`#${targetId}`}
                className={styles.a}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={() =>{handleScroll()}} // Utilisez la fonction de défilement ici
            >
                {name}
            </Link>
        </div>
    );
}

export default NavItemAbout;
