"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";

export default function FloatingActions() {
  const whatsappUrl = getWhatsAppLink(
    "201067894321",
    "مرحبًا إيليت شيلد، أود الاستفسار عن باقات حماية وتجهيز السيارات"
  );

  return (
    <>
      {/* Mobile Consolidated Glass Capsule (Single compact bar, replaces stacked floating circles) */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-50 max-w-md mx-auto">
        <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-[#0f0f14]/95 backdrop-blur-md border border-gold/30 shadow-[0_12px_32px_rgba(0,0,0,0.85)]">
          <a
            href="tel:+201067894321"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] active:scale-95 text-white font-medium text-xs transition-all border border-white/5"
            aria-label="اتصال هاتفي"
          >
            <FaPhone className="text-gold text-xs" />
            <span>اتصال هاتفي</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1faa52] active:scale-95 text-white font-bold text-xs transition-all shadow-md shadow-[#25D366]/25"
            aria-label="تواصل واتساب"
          >
            <FaWhatsapp className="text-base" />
            <span>محادثة واتساب</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 left-6 z-50 items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl shadow-[#25D366]/30 hover:bg-[#128C7E] transition-all duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="تواصل واتساب"
      >
        <FaWhatsapp size={26} />
        <span className="text-sm font-bold pl-1">تواصل واتساب</span>
        <span className="bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center -mr-1">
          1
        </span>
      </motion.a>
    </>
  );
}
