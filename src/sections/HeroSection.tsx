"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import { heroImages } from "@/data/images";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = heroImages.map((img) => img.url);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero Section">
      {/* Animated background images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </AnimatePresence>
        {/* Multiple gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/20 blur-sm"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-gold/20 rotate-45"
          animate={{ rotate: [45, 405], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 border-2 border-gold/10 rounded-full"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-4 h-4 bg-gold/30 rounded-full"
          animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gold mb-6 tracking-wide"
            animate={{ textShadow: [
              "0 0 20px rgba(212,175,55,0.3)",
              "0 0 40px rgba(212,175,55,0.6)",
              "0 0 20px rgba(212,175,55,0.3)",
            ] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ELZAEEM INTERNATIONAL
          </motion.h1>
          <motion.div
            className="h-1 w-32 mx-auto my-6 bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

        <motion.p
          className="text-xl md:text-3xl lg:text-4xl text-white mb-4 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-glow">مركز الزعيم الدولي لكماليات السيارات</span>
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان
          <br />
          <span className="text-gold/80">جودة عالية • ضمان حقيقي • خدمة احترافية</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Button variant="primary" size="lg" href="#contact-form" className="group">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              اطلب عرض سعر الآن
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ←
              </motion.span>
            </motion.span>
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            whatsapp
            whatsappMessage="مرحبًا، أريد الاستفسار عن خدمات مركز الزعيم الدولي"
            className="group"
          >
            <span className="flex items-center gap-2">
              تواصل واتساب
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💬
              </motion.span>
            </span>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-8 md:gap-12 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          {[
            { number: "1000+", label: "مشروع منفذ" },
            { number: "5000+", label: "عميل راضٍ" },
            { number: "15+", label: "سنة خبرة" },
            { number: "99%", label: "رضا العملاء" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2 + i * 0.15 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.number}</p>
              <p className="text-gray-400 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3" role="group" aria-label="شرائح الصور">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "bg-gold w-8 btn-gold-glow"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`عرض الشريحة ${index + 1}`}
            aria-current={currentImage === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold z-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
