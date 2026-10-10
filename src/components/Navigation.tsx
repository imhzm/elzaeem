"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "@/components/Button";

const navLinks = [
  { label: "الرئيسية", href: "/#home" },
  { label: "من نحن", href: "/#about" },
  { label: "خدماتنا", href: "/#services" },
  { label: "أعمالنا", href: "/#portfolio" },
  { label: "العروض", href: "/#offers" },
  { label: "تواصل معنا", href: "/#contact-form" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/95 backdrop-blur-md shadow-lg shadow-black/25 border-b border-gold/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03]">
            <img src="/logo.png" alt="ELITE SHIELD" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group py-1 text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-200"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-gradient-to-r from-gold/0 via-gold to-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <Button
              variant="whatsapp"
              size="sm"
              whatsapp
              whatsappMessage="مرحبًا، أريد الاستفسار عن خدمات إيليت شيلد"
            >
              تواصل واتساب
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="قائمة التنقل"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-dark-gray/95 backdrop-blur-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-300 hover:text-gold transition-colors duration-300 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  variant="whatsapp"
                  size="sm"
                  whatsapp
                  whatsappMessage="مرحبًا، أريد الاستفسار عن خدمات إيليت شيلد"
                  className="w-full justify-center"
                >
                  تواصل واتساب
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
