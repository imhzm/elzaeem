"use client";

import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

export default function CallNowButton() {
  return (
    <motion.a
      href="tel:+201067894321"
      className="fixed bottom-24 left-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="اتصل الان"
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent-red/30"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
      />
      {/* Main button */}
      <div className="relative w-12 h-12 bg-accent-red text-white rounded-full shadow-lg shadow-accent-red/30 flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
        <FaPhone size={20} />
      </div>
      {/* Tooltip */}
      <motion.span
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-card text-white text-sm px-3 py-1.5 rounded-lg border border-gold/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        اتصل الان
      </motion.span>
    </motion.a>
  );
}
