import React, { useState } from 'react'
import { useUnlockScrolling } from './useUnlockScrolling';

export const useCloseNavbar = () => {
    //check si state par défaut correspond 
    const [navbarExpanded, setNavbarExpanded] = useState(false);
    const [backdropVisible, setBackdropVisible] = useState(false)


    const closeStateNavbar = () =>{
        if (backdropVisible){
          setNavbarExpanded(!navbarExpanded);
          setBackdropVisible(!backdropVisible);
        }
    
      }

      return  { closeStateNavbar }


}

