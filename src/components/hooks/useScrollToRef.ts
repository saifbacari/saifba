import React, { useEffect, useRef} from 'react' ; 


const useScrollToRef = (ref: React.MutableRefObject<HTMLElement | null>) => {
            const scrollToRef = () => {
              if (ref.current) {
              window.scrollTo({
                top: ref.current.offsetTop,
                left: 0,
                behavior: "smooth",
              });
            }
        };
       
        useEffect(() => {
         
        window.addEventListener("click", scrollToRef);

        return () => {
          window.removeEventListener("click", scrollToRef);
        };
      }, []);

        return scrollToRef;

}

export default useScrollToRef;
export {};

