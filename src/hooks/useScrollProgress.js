import { useCallback, useEffect, useState } from "react";

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = height > 0 ? Math.min(scrollTop / height, 1) : 0;
      setProgress(nextProgress);
      setShowBackToTop(scrollTop > 600);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { progress, showBackToTop, scrollToTop };
};
