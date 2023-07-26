import React, { useEffect, useState } from "react";
import styles from './navbar.module.css';

interface NavbarProps{
    links: {name:string, url:string}[];
}

const Navbar : React.FC<NavbarProps> = ({ links }) => {
//Créer un composant avec le state de scrolling : par défaut il est inactif
const [scrolling, setScrolling] = useState(false);
const [scrollDirection, setScrollDirection] = useState("up");
let previousScrollY = 0
//useEffect permettra de mémoriser que des lors qu'on scrolle jusqu'à un point donné, on peut mettre à jour l'état donné : 
// tu crées une fonction qui va permettre de bouger des lors qu'il y a un scroll

//determiner le sens du défilement



useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY ;
        const isScrolling = window.scrollY > 10;
        setScrolling(isScrolling);

        if (currentScrollY > previousScrollY){
            setScrollDirection("down")
        }else {
            setScrollDirection("up")
        }

        setScrolling(isScrolling);
        previousScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
},[])

function changeColorInRed(event: React.MouseEvent<HTMLAnchorElement>){
const linkElement = event.currentTarget;
linkElement.style.color="#F29727";

}

function backToTheColor(event: React.MouseEvent<HTMLAnchorElement>){
    const linkElement = event.currentTarget;
    linkElement.style.color="";
    
    }


    return(
        <header>
           <nav className={`${styles.navLinks} ${scrolling ? styles.hidden : ""}`}>
                <ul>
                    {links.map((link, index) => (
                        
                        <li key={index}>
                            
                            <a 
                             href={link.url} 
                             className={link.name === 'Resume' ? styles.resume : styles.a }
                             onMouseOver={changeColorInRed}
                             onMouseOut={backToTheColor}
                             >{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar