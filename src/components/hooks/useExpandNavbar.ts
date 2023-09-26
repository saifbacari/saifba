import React, { useState } from 'react';


export const useExpandNavbar = () => {
    const [navbarExpanded, setNavbarExpanded] = useState(false);
    const [backdropVisible, setBackdropVisible] = useState(false);

    const toggleNavbarExpansion = () => {
        
        setNavbarExpanded(!navbarExpanded);
        setBackdropVisible(!navbarExpanded)
        
        if (!navbarExpanded) {
            document.body.style.overflow = 'hidden';
            console.log('test');
        }  
        
       }

       return { navbarExpanded,setNavbarExpanded, backdropVisible, setBackdropVisible, toggleNavbarExpansion}

}
