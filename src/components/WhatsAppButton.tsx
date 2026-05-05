"use client";

import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink("201067894321", "مرحبًا، أريد طلب عرض سعر من مركز الزعيم الدولي لكماليات السيارات")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="تواصل واتساب"
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]/30"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      {/* Main button */}
      <div className="relative w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#128C7E] transition-colors duration-300">
        <FaWhatsapp size={28} />
        {/* Badge */}
        <motion.span
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          !
        </motion.span>
      </div>
      {/* Tooltip */}
      <motion.span
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-card text-white text-sm px-3 py-1.5 rounded-lg border border-gold/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        تواصل واتساب
      </motion.span>
    </motion.a>
  );
}
