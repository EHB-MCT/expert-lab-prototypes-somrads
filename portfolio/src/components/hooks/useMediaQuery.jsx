// File: useMediaQuery.js
import { useRef, useEffect, useState } from "react";

export const useMediaQuery = (mediaWidth) => {
  const [width, setWidth] = useState(mediaWidth);

  // Use the useRef hook to track the previous screen width
  const prevWidth = useRef(width);

  const handleResize = () => {
    setWidth(mediaWidth);

    // Check if the width has changed and only refresh the page if it has
    if (prevWidth.current !== width) {
      prevWidth.current = width;
      window.location.reload();
    }
  };

  // Use the useEffect hook to update the width when the window is resized
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return width;
};