import React, { useState } from 'react';


export const useScrollData = () => {
    const [scrollData, setScrollData] = useState({
        y:0,
        lastY: 0,
    });
    return [scrollData, setScrollData] as const;

}