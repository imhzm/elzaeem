"use client";

import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-bg/95 backdrop-blur-md border-t border-gold/20 py-16 px-4 relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-red/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="مركز الزعيم الدولي لكماليات السيارات"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold tracking-wide text-glow-strong">
                مركز الزعيم الدولي
              </h3>
              <p className="text-xs text-gray-400">لكماليات السيارات</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            مركز الزعيم الدولي لكماليات السيارات - الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان
          </p>
          <motion.a
            href={getWhatsAppLink("201067894321", "مرحبًا، أريد التواصل مع مركز الزعيم الدولي لكماليات السيارات")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-dark-bg px-6 py-3 rounded-lg font-bold hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 btn-gold-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaWhatsapp className="text-dark-bg" />
            تواصل واتساب
          </motion.a>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-bold text-white mb-6">روابط سريعة</h4>
          <ul className="space-y-3">
            {[
              { label: "الرئيسية", href: "/#home" },
              { label: "خدماتنا", href: "/#services" },
              { label: "أعمالنا", href: "/#portfolio" },
              { label: "العروض", href: "/#offers" },
              { label: "تواصل معنا", href: "/#contact-form" },
              { label: "الشروط والأحكام", href: "/terms" },
              { label: "سياسة الخصوصية", href: "/privacy" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-xl font-bold text-white mb-6">تواصل معنا</h4>
          <div className="flex gap-4 mb-6">
            {[
              {
                icon: FaFacebook,
                href: "https://facebook.com/elzaeem",
                color: "hover:text-[#1877F2] hover:shadow-[#1877F2]/20 hover:border-[#1877F2]/40",
                label: "Facebook",
              },
              {
                icon: FaInstagram,
                href: "https://instagram.com/elzaeem",
                color: "hover:text-[#E4405F] hover:shadow-[#E4405F]/20 hover:border-[#E4405F]/40",
                label: "Instagram",
              },
              {
                icon: FaTiktok,
                href: "https://tiktok.com/@elzaeem",
                color: "hover:text-white hover:shadow-white/20 hover:border-white/40",
                label: "TikTok",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-12 h-12 rounded-xl bg-dark-card border border-gold/20 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:shadow-lg`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-gray-300 flex items-center gap-2 text-lg">
              <span className="text-gold">📞</span>
              <a href="tel:+201067894321" className="hover:text-gold transition-colors font-bold">
                01067894321
              </a>
            </p>
            <p className="text-gray-300 flex items-center gap-2 text-lg">
              <FaEnvelope className="text-gold" />
              <a href="mailto:admin@skywaveads.com" className="hover:text-gold transition-colors font-medium">
                admin@skywaveads.com
              </a>
            </p>
            <p className="text-gray-300 flex items-center gap-2 text-lg">
              <span className="text-gold">🧾</span>
              <span className="font-medium">الرقم الضريبي: <span dir="ltr">271-810-343</span></span>
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              <span className="text-gold">📍</span>
              <span>١ شارع محمد السراج من شارع الفيوم، دار السلام، محافظة القاهرة، ١١٧١٦</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gold/20 text-center text-gray-400 text-sm relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>
          © {new Date().getFullYear()} مركز الزعيم الدولي لكماليات السيارات. جميع الحقوق محفوظة.
        </p>
        <p className="mt-2 text-gray-500 text-xs">
          الرقم الضريبي: <span dir="ltr">271-810-343</span> | البريد الإلكتروني: admin@skywaveads.com
        </p>
        <p className="mt-2 text-gray-500 text-xs">
          تم التصميم بكل ❤️ بواسطة{" "}
          <a
            href="https://www.skywaveads.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors font-semibold"
          >
            Sky Wave
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
