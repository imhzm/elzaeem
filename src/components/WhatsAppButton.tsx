"use client";

import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink("201067894321", "مرحبًا، أريد طلب عرض سعر من إيليت شيلد")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#128C7E] transition-colors duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="تواصل واتساب"
    >
      <FaWhatsapp size={28} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        !
      </span>
    </motion.a>
  );
}
