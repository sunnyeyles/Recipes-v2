import { useState, useEffect } from "react";

export const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 768px)").matches);
    };

    updateMedia();

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      updateMedia();
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return {
    isLargeScreen,
  };
};
