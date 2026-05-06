"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import { heroImages } from "@/data/images";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalImages = heroImages.length;

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentImage ? 1 : -1);
    setCurrentImage(index);
  }, [currentImage]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.15,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.95,
      x: dir > 0 ? -100 : 100,
    }),
  };

  const currentSlide = heroImages[currentImage];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero Section">
      {/* Animated background images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentImage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={currentSlide.url}
              alt={currentSlide.alt}
              fill
              priority={currentImage === 0}
              quality={75}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-[1]" />
        {/* Side vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-[1]" />
        {/* Gold tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-[1]" />
      </div>

      {/* Top decorative gold line */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        {/* Badge & Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 flex flex-col items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-gold/30 text-gold text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            🧾 الرقم الضريبي: <span dir="ltr">271-810-343</span>
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-gray-300 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <span className="text-gold">📍</span>
              <span>١ شارع محمد السراج من شارع الفيوم، دار السلام، القاهرة</span>
            </span>
            <span className="hidden md:block w-px h-4 bg-gold/30" />
            <a href="tel:+201067894321" className="flex items-center gap-2 hover:text-gold transition-colors">
              <span className="text-gold">📞</span>
              <span dir="ltr">01067894321</span>
            </a>
          </div>
        </motion.div>

        {/* Animated Title with slide content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={`title-${currentImage}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="block"
              >
                <span className="text-gold text-glow-strong">{currentSlide.title}</span>
              </motion.span>
            </AnimatePresence>
          </h1>

          <AnimatePresence mode="wait">
            <motion.h2
              key={`subtitle-${currentImage}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-medium leading-relaxed max-w-4xl mx-auto"
            >
              {currentSlide.subtitle}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Separator line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
        />

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 text-gray-400 text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="text-gold text-lg">🏆</span>
            +500 مشروع منفذ
          </span>
          <span className="hidden md:block w-px h-4 bg-gold/30" />
          <span className="flex items-center gap-2">
            <span className="text-gold text-lg">⭐</span>
            +1000 عميل راضٍ
          </span>
          <span className="hidden md:block w-px h-4 bg-gold/30" />
          <span className="flex items-center gap-2">
            <span className="text-gold text-lg">🛡️</span>
            ضمان شامل
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            whatsapp
            whatsappMessage="مرحبًا، أريد طلب عرض سعر من مركز الزعيم الدولي لكماليات السيارات"
          >
            طلب عرض سعر
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="#services"
          >
            استكشف خدماتنا
          </Button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full glass border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="الصورة السابقة"
        >
          <FaChevronRight size={18} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full glass border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="الصورة التالية"
        >
          <FaChevronLeft size={18} />
        </motion.button>
      </div>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative py-2"
            aria-label={`الانتقال للصورة ${index + 1}`}
          >
            <div className={`w-12 md:w-16 h-1 rounded-full transition-all duration-500 ${
              currentImage === index
                ? "bg-gold shadow-lg shadow-gold/50"
                : "bg-white/20 group-hover:bg-white/40"
            }`}>
              {currentImage === index && (
                <motion.div
                  className="h-full bg-gold-light rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  key={`progress-${currentImage}`}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-sm"
      >
        <span className="text-gold font-bold text-lg">{String(currentImage + 1).padStart(2, "0")}</span>
        <span className="text-gray-500">/</span>
        <span className="text-gray-400">{String(totalImages).padStart(2, "0")}</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 right-8 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest rotate-90 origin-center translate-y-6">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-gold/30 flex items-start justify-center p-1 mt-8"
        >
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-gold"
          />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/5 blur-sm"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
