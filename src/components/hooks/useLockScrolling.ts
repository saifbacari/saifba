import React, { useState } from 'react';

export const useLockScrolling = () =>{

const [backdropVisible, setBackdropVisible] = useState(false);
const [navbarExpanded, setNavbarExpanded] = useState(false);

    const lockScrolling = () => {
        
        setNavbarExpanded(!navbarExpanded);
        setBackdropVisible(!navbarExpanded)
        
        if (!navbarExpanded) {
            document.body.style.overflow = 'hidden';
        }  
       }
       return { lockScrolling, backdropVisible, navbarExpanded };

}