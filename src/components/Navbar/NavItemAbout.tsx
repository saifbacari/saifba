import React from "react";
import ScrollToSectionContainer from "../Cards/ScrollToSectionContainer";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import styles from '../About/about.module.css'


interface NavItemAboutProps {
    targetId: string;
    name: string;
}


const NavItemAbout : React.FC<NavItemAboutProps> = ({targetId, name}) => {
    const scrollToSectionHandler = () => {
        const targetElement = document.getElementById(targetId);
            if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop,
            });
        };

    }

const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();

    return(
        <ScrollToSectionContainer targetId={targetId} scrollFunction={scrollToSectionHandler}>
                <a 
                    href={`#${targetId}`}
                    className={styles.a}
                    onClick={scrollToSectionHandler}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}   
                >
                {name}
                </a>
        </ScrollToSectionContainer>

    )
}

export default NavItemAbout;