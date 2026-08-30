"use client";

import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

export default function CallNowButton() {
  return (
    <motion.a
      href="tel:+201067894321"
      className="fixed bottom-24 left-6 z-50 bg-accent-red text-white p-4 rounded-full shadow-lg shadow-accent-red/30 hover:bg-red-700 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="اتصل الان"
    >
      <FaPhone size={24} />
    </motion.a>
  );
}
