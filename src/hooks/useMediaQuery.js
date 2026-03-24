import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  // Handle SSR case - default to false during server-side rendering
  const getInitialMatch = () => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getInitialMatch);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
