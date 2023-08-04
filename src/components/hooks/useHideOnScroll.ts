import { useEffect, useState } from "react";

export const useHideOnScroll = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [previousScrollY, setPreviousScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > previousScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setPreviousScrollY(currentScrollY);
  };

  useEffect(() => {
    const threshold = 11; // Seuil de défilement pour cacher la navbar
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [previousScrollY]);

  return showNavbar;
};

