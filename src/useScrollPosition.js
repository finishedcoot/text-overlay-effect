import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollYPos, setScrollYPoss] = useState(window.scrollY);

  const onScroll = () => {
    setScrollYPoss(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollYPos;
};

export default useScrollPosition;
