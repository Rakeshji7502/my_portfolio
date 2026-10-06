
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 hover:scale-110 hover:shadow-blue-500/30 transition-all duration-300"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;

