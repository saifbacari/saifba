import React from "react";
import ScrollToSectionContainer from "../Cards/ScrollToSectionContainer";
import styles from '../Contact/contact.module.css'
import { useHoverColorChange } from "../hooks/useHoverColorChange";


interface NavItemContactProps {
    targetId: string;
    name: string;
}


const NavItemContact : React.FC<NavItemContactProps> = ({targetId, name}) => {
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


    return (
        <ScrollToSectionContainer targetId={targetId} scrollFunction={scrollToSectionHandler}>
            <a
                href={`${targetId}`}
                className={styles.a}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
            {name}
            </a>
        </ScrollToSectionContainer>


    )
}

export default NavItemContact