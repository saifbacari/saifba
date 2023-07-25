import React from "react";
import styles from './navbar.module.css';

interface NavbarProps{
    links: {name:string, url:string}[];
}

const Navbar : React.FC<NavbarProps> = ({ links }) => {
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
           <nav className={styles.navLinks}>
                <ul>
                    {links.map(link => (
                        
                        <li key={link.url}>
                            
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