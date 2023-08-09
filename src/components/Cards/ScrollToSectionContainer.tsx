import React, {useRef} from "react";

interface ScrollToSectionContainerProps {
    children: React.ReactNode;
    targetId: string;
    scrollFunction: () => void;
  }


function ScrollToSectionHandler ({ children, targetId, scrollFunction } : ScrollToSectionContainerProps){
    const scrollToRef = useRef<HTMLDivElement | null>(null);
    
    const scrollToSection = () => { 
        const targetElement = document.getElementById(targetId);
    if (targetElement){
        window.scrollTo({
            behavior: 'smooth',
            top:targetElement.offsetTop,
        });
        scrollFunction();
    }
    }

    return (
            <div>
               <div ref={scrollToRef}>{children}</div>
            </div>
    );
}

export default ScrollToSectionHandler; 