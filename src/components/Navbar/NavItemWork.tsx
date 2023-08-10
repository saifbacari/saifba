import React from "react";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import styles from '../work/work.module.css';


interface NavItemWorkProps {
    targetId: string;
    name:string;
}

const NavItemWork: React.FC<NavItemWorkProps> = () =>{
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

    return (

        <a
        href="#work"
        className={styles.a}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >
        2. Work
    </a>
    )
}

export default NavItemWork