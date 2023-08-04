import { useState } from "react";

export const useHoverColorChange = () => {
    const [ isHover, setIsHover] = useState(false);

  const  handleMouseOver = () => {
    setIsHover(true);
  }
        
 const handleMouseOut = () => {
    setIsHover(false);
 }
    return {
        isHover,
        handleMouseOver,
        handleMouseOut
    };
  
}
