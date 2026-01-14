
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
      }
      return false;
    };

    if (hash) {
      // 1. Attempt scroll immediately (works if we are already on the page)
      const success = scrollToElement();

      // 2. If element not found (navigating from another page), wait for transition
      if (!success) {
        // We set multiple checkpoints to ensure scroll happens after the 0.5s page transition
        const timers = [
          setTimeout(scrollToElement, 100), // Quick check
          setTimeout(scrollToElement, 600), // After exit animation completes
          setTimeout(scrollToElement, 1200)  // Final fallback
        ];

        return () => timers.forEach(clearTimeout);
      }
    } else {
      // No hash: Reset scroll to top instantly for new pages
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
