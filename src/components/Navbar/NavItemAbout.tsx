import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useHoverColorChange } from "../hooks/useHoverColorChange";
import useScrollToRef from "../hooks/useScrollToRef";
import { MutableRefObject } from 'react';
import styles from "../About/about.module.css";

interface NavItemAboutProps {
  targetId: string;
  name: string;
  aboutRef: React.MutableRefObject<HTMLElement | null>;
}

const NavItemAbout: React.FC<NavItemAboutProps> = ({
  targetId,
  name,
  aboutRef
}) => {

  const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();

  //const scrollToRef = useScrollToRef(aboutRef)

  const linkRef = useRef<HTMLAnchorElement | null>(null);


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
      <Link
        ref={linkRef}
        to={`#${targetId}`}
        className={styles.navLink}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          handleScroll()
        }    
      } 
        style={{ color: isHover ? "#F29727" : "" }}
      >
        {name}
      </Link>
  );
};

export default NavItemAbout;
