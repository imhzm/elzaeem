"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";

const navLinks = [
  { label: "الرئيسية", href: "/#home" },
  { label: "من نحن", href: "/#about" },
  { label: "خدماتنا", href: "/#services" },
  { label: "أعمالنا", href: "/#portfolio" },
  { label: "العروض", href: "/#offers" },
  { label: "تواصل معنا", href: "/#contact-form" },
] as const;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    setIsScrolled(scrolled);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMobileMenu]);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "glass-strong shadow-lg shadow-black/30 border-b border-gold/20"
      : "bg-transparent"
  }`;

  return (
    <motion.nav
      className={navClass}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/#home"
            className="flex items-center gap-3 group relative z-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="مركز الزعيم الدولي لكماليات السيارات - الرئيسية"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="مركز الزعيم الدولي لكماليات السيارات"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black text-gold whitespace-nowrap">الزعيم الدولي</span>
              <span className="text-[10px] md:text-xs font-medium text-gold/80 whitespace-nowrap">لكماليات السيارات</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-5 py-2.5 text-gray-300 hover:text-gold transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-gold/5"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4 rounded-full opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <a href="tel:+201067894321" className="flex items-center gap-2 hover:text-gold transition-colors">
                <FaPhone size={16} />
                <span className="text-sm">01067894321</span>
              </a>
              <a href="https://wa.me/201067894321" target="_blank" className="flex items-center gap-2 hover:text-gold transition-colors">
                <FaWhatsapp size={16} />
                <span className="text-sm">واتساب</span>
              </a>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <FaMapMarkerAlt size={16} />
              <span className="text-sm">العنوان</span>
            </a>
          </div>

          {/* WhatsApp CTA Button */}
          <div className="hidden md:block relative z-10">
            <Button
              variant="whatsapp"
              size="sm"
              whatsapp
              whatsappMessage="مرحبًا، أريد الاستفسار عن خدمات مركز الزعيم الدولي لكماليات السيارات"
            >
              تواصل معنا
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gold text-2xl w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gold/20 bg-dark-card/50 backdrop-blur-sm relative z-20"
            onClick={toggleMobileMenu}
            aria-label="القائمة"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-20 z-40 glass-strong border-t border-gold/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full px-6 py-8 gap-4 overflow-y-auto max-h-[80vh]">
              <a
                href="/#home"
                className="flex items-center gap-3 text-lg text-white hover:text-gold transition-colors py-3 border-b border-gold/10"
                onClick={closeMobileMenu}
              >
                <span className="text-2xl">الرئيسية</span>
              </a>
              <a
                href="/#about"
                className="flex items-center gap-3 text-lg text-white hover:text-gold transition-colors py-3 border-b border-gold/10"
                onClick={closeMobileMenu}
              >
                <span className="text-2xl">من نحن</span>
              </a>
              <a
                href="/#services"
                className="flex items-center gap-3 text-lg text-white hover:text-gold transition-colors py-3 border-b border-gold/10"
                onClick={closeMobileMenu}
              >
                <span className="text-2xl">خدماتنا</span>
              </a>
              <a
                href="/#portfolio"
                className="flex items-center gap-3 text-lg text-white hover:text-gold transition-colors py-3 border-b border-gold/10"
                onClick={closeMobileMenu}
              >
                <span className="text-2xl">أعمالنا</span>
              </a>
              <a
                href="/#offers"
                className="flex items-center gap-3 text-lg text-white hover:text-gold transition-colors py-3 border-b border-gold/10"
                onClick={closeMobileMenu}
              >
                <span className="text-2xl">العروض</span>
              </a>
              <div className="mt-8 pt-6 border-t border-gold/10">
                <Button
                  variant="whatsapp"
                  size="lg"
                  whatsapp
                  whatsappMessage="مرحبًا، أريد الاستفسار عن خدمات مركز الزعيم الدولي لكماليات السيارات"
                  className="w-full justify-center"
                  onClick={closeMobileMenu}
                >
                  تواصل واتساب
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
