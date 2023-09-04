import React, { MutableRefObject, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import styles from '../work/work.module.css';


interface NavItemWorkProps {
    targetId: string;
    name:string;
    workRef: React.MutableRefObject<HTMLElement | null>;
}

const NavItemWork: React.FC<NavItemWorkProps> = ({targetId, name, workRef}) =>{

    const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();
    const linkRef = useRef<HTMLAnchorElement | null>(null);

    const handleScroll = () => {
        if (workRef.current) {
            window.scrollTo({
                top: workRef.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div >
            <section ref={linkRef}>
                <Link
                    to={`#${targetId}`}   
                    className={styles.navLink}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={() =>{handleScroll()}} 
                    style={{ color: isHover ?  "#F29727" : "" }}
                    >
                    2. Work
                </Link>
            </section>
        </div>
    )
}

export default NavItemWork