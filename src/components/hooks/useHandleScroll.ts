import { useEffect } from "react";
import { useScrollData } from "./useScrollData";

export const useHandleScroll = () => {
  const [scrollData, setScrollData] = useScrollData();

  useEffect(() => {
    const handleScroll = () => {
      setScrollData(prevState => ({
        ...prevState, // Assurez-vous de copier l'état précédent
        y: window.scrollY,
        lastY: prevState.y
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollData]);

  // Vous n'avez pas besoin de renvoyer quoi que ce soit ici, car la mise à jour de l'état est gérée par useScrollData
};
