import { useState, useEffect } from 'react';

export const useScrollHandler = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;

      if (newScrollY > 500) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      if (newScrollY > scrollData.lastY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setScrollData((prevState) => ({
        ...prevState,
        y: newScrollY,
        lastY: prevState.y,
      }));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollData]);

  return { showNav, scrollData };
};
