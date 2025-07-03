import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueris = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQueris.matches);

    mediaQueris.addEventListener("change", handleChange);

    return () => {
      mediaQueris.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}
