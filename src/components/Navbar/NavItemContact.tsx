import React, { useRef, MutableRefObject } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "../Contact/contact.module.css";
import { useHoverColorChange } from "../hooks/useHoverColorChange";

interface NavItemContactProps {
  targetId: string;
  name: string;
  contactRef: React.MutableRefObject<HTMLElement | null>;
}

const NavItemContact: React.FC<NavItemContactProps> = ({
  targetId,
  name,
  contactRef
}) => {
  const { isHover, handleMouseOver, handleMouseOut } = useHoverColorChange();

  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleScroll = () => {
    if (contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
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
        handleScroll();
      }}
      style={{ color: isHover ? "#F29727" : "" }}
    >
      {name}
    </Link>
  );
};

export default NavItemContact;
