"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";

const navLinks = [
  { label: "الرئيسية", href: "/#home" },
  { label: "من نحن", href: "/#about" },
  { label: "خدماتنا", href: "/#services" },
  { label: "أعمالنا", href: "/#portfolio" },
  { label: "العروض", href: "/#offers" },
  { label: "تواصل معنا", href: "/#contact-form" },
];

interface NavigationProps {
  logo?: string;
}

export default function Navigation({ logo = "/images/logo.png" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-strong shadow-lg shadow-black/30 border-b border-gold/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center overflow-hidden">
              <Image
                src={logo}
                alt="مركز الزعيم الدولي"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gold text-glow-strong leading-tight">
                ELZAEEM
              </span>
              <span className="text-xs text-gray-400">
                INTERNATIONAL
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-300 hover:text-gold transition-colors duration-300 text-sm font-medium group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <Button
              variant="whatsapp"
              size="sm"
              whatsapp
              whatsappMessage="مرحبًا، أريد الاستفسار عن خدمات مركز الزعيم"
            >
              تواصل واتساب
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gold text-2xl w-10 h-10 flex items-center justify-center rounded-lg border border-gold/20 bg-dark-card/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="قائمة التنقل"
            whileTap={{ scale: 0.9 }}
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
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
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
            className="md:hidden fixed inset-0 top-20 z-40 glass-strong border-t border-gold/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full px-6 py-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-lg text-gray-300 hover:text-gold transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gold/5 border-b border-gold/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-auto pt-6 border-t border-gold/10">
                <Button
                  variant="whatsapp"
                  size="md"
                  whatsapp
                  whatsappMessage="مرحبًا، أريد الاستفسار عن خدمات مركز الزعيم"
                  className="w-full justify-center"
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
