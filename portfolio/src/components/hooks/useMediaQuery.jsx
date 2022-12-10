import{ useState, useEffect, useRef } from "react";

export const useMediaQuery = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // To track the previous screen width
  const prevWidth = useRef(width);

  // To update the width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      // Check if the width has changed and only refresh the page if it has
      if (prevWidth.current !== width) {
        prevWidth.current = width;
        window.location.reload();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return width;
};
