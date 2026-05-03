"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="العودة للأعلى"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-gold/20 blur-md" />
          {/* Main button */}
          <div className="relative w-12 h-12 bg-gold text-dark-bg rounded-full shadow-lg shadow-gold/30 flex items-center justify-center hover:bg-gold-light transition-colors duration-300">
            <FaArrowUp size={18} />
          </div>
          {/* Tooltip */}
          <motion.span
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-dark-card text-white text-sm px-3 py-1.5 rounded-lg border border-gold/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            للأعلى
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
