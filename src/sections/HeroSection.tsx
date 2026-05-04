"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import { heroImages } from "@/data/images";
import Image from "next/image";

interface Particle {
  width: number;
  height: number;
  left: string;
  top: string;
  xMove: number;
  duration: number;
}

const PARTICLE_COUNT = 4;

// Helper function to generate random particles
function generateParticles(): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      width: Math.random() * 15 + 8,
      height: Math.random() * 15 + 8,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      xMove: Math.random() * 30 - 15,
      duration: Math.random() * 4 + 3,
    });
  }
  return particles;
}

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [particles] = useState<Particle[]>(generateParticles);

  const images = heroImages.map((img) => img.url);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded(prev => prev + 1);
  }, []);

  const totalImages = images.length;
  const isReady = imagesLoaded >= totalImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000); // Slower rotation for better UX
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero Section">
      {/* Animated background images - using optimized img tags for CDN */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            aria-hidden="true"
          >
            {/* Using regular img tag for CDN URLs to avoid Next.js Image issues */}
            <img
              src={images[currentImage]}
              alt={heroImages[currentImage]?.alt || "Hero background"}
              className="w-full h-full object-cover"
              style={{ opacity: 0.7 }}
              onLoad={handleImageLoad}
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            <span className="text-gold text-glow">الزعيم الدولي</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
            الحلول المتكاملة لكماليات السيارات
            <br className="hidden md:block" />
            والطباعة والدعاية والإعلان
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            whatsapp
            whatsappMessage="مرحبًا، أريد طلب عرض سعر من مركز الزعيم الدولي"
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-center justify-start"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold ml-2" />
        </motion.div>
      </motion.div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "bg-gold scale-125"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`الصورة ${index + 1}`}
          />
        ))}
      </div>

      {/* Background gradient overlay for depth */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent/20 to-black/40" aria-hidden="true" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/10 blur-md"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, p.xMove, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
