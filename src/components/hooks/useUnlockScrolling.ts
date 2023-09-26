import React, { useState } from 'react';


export const useUnlockScrolling = () => {

    const unlockScrolling = () =>{
        document.body.style.overflow = 'unset';
       } 

return unlockScrolling;
}