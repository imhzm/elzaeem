"use client";

import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import { FaScroll, FaArrowUp, FaFileAlt } from "react-icons/fa";

interface Section {
  title: string;
  content: string;
}

interface LegalPageLayoutProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
  contactInfo: {
    phone: string;
    address: string;
    email?: string;
  };
  relatedLinks?: Array<{ label: string; href: string }>;
}

export default function LegalPageLayout({
  icon,
  title,
  subtitle,
  lastUpdated,
  sections,
  contactInfo,
  relatedLinks = [],
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      const headings = document.querySelectorAll("h2[id]");
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < 200) {
          setActiveSection(heading.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionIds = sections.map((_, i) => `section-${i}`);

  return (
    <main className="min-h-screen bg-dark-bg text-foreground">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6">
              {icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              {title}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full" />
            <p className="text-gray-400 text-sm mt-4">
              آخر تحديث: {lastUpdated}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sticky Sidebar */}
            <motion.div
              className="hidden lg:block lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-32">
                <div className="glass-card rounded-2xl p-6 border border-gold/10">
                  <h3 className="text-lg font-bold text-gold mb-4 flex items-center gap-2">
                    <FaScroll />
                    فهرس المحتويات
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(sectionIds[index])}
                        className={`w-full text-right px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                          activeSection === sectionIds[index]
                            ? "bg-gold/20 text-gold font-medium"
                            : "text-gray-400 hover:text-gold hover:bg-gold/5"
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Quick Contact Card */}
                <div className="glass-card rounded-2xl p-6 border border-gold/10 mt-6">
                  <h3 className="text-lg font-bold text-gold mb-4 flex items-center gap-2">
                    <FaFileAlt />
                معلومات التواصل
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">📞 الهاتف</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-gold font-bold hover:text-gold/80 transition-colors text-lg"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">🧾 الرقم الضريبي</p>
                      <p className="text-gold font-bold text-lg">271-810-343</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">📍 العنوان</p>
                      <p className="text-gray-300">{contactInfo.address}</p>
                    </div>
                    {contactInfo.email && (
                      <div>
                        <p className="text-gray-500 mb-1">📧 البريد الإلكتروني</p>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-gray-300 hover:text-gold transition-colors"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {sections.map((section, index) => (
                  <motion.article
                    key={index}
                    id={sectionIds[index]}
                    className="bg-dark-gray rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 scroll-mt-36"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <h2 className="text-2xl font-bold text-gold mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      {section.title}
                    </h2>
                    <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                className="mt-12 bg-gradient-to-r from-dark-gray to-medium-gray rounded-2xl p-8 border border-gold/30 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  لديك استفسارات؟
                </h3>
                <p className="text-gray-300 mb-6">
                  فريقنا جاهز للإجابة على جميع أسئلتك في أي وقت
                </p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 bg-gold text-dark-bg px-8 py-3 rounded-lg font-bold hover:bg-gold/90 transition-colors"
                >
                  تواصل معنا: {contactInfo.phone}
                </a>
              </motion.div>

              {/* Related Links */}
              {relatedLinks.length > 0 && (
                <motion.div
                  className="mt-12 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-400 mb-4">روابط سريعة:</p>
                  <div className="flex flex-wrap justify-center gap-6">
                    {relatedLinks.map((link, index) => (
                      <React.Fragment key={link.href}>
                        <a
                          href={link.href}
                          className="text-gold hover:text-gold/80 transition-colors"
                        >
                          {link.label}
                        </a>
                        {index < relatedLinks.length - 1 && (
                          <span className="text-gray-600">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-gold text-dark-bg flex items-center justify-center shadow-lg shadow-gold/30 hover:bg-gold/90 transition-colors"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </main>
  );
}
