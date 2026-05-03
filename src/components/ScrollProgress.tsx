"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(progress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1 bg-dark-card/50 backdrop-blur-sm"
      style={{ transformOrigin: "0%" }}
    >
      <motion.div
        className="h-full relative"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)",
          boxShadow: "0 0 10px rgba(212, 175, 55, 0.6), 0 0 20px rgba(212, 175, 55, 0.3)",
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
}
