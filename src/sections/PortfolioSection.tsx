"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FiEye, FiCalendar } from "react-icons/fi";
import Image from "next/image";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const lightboxImages = filteredItems.map((item) => ({
    src: item.image,
    title: item.titleAr,
    description: item.descriptionAr,
    alt: item.imageAlt,
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 px-4 bg-dark-gray relative overflow-hidden" aria-labelledby="portfolio-heading">
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-40 h-40 border-2 border-gold/10 rounded-full hidden lg:block" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-gold/10 rotate-45 hidden lg:block" aria-hidden="true" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          titleAr="معرض أعمالنا"
          subtitleAr="معرض لأهم المشاريع التي نفذناها باحترافية وجودة عالية"
        />

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-16"
          role="radiogroup"
          aria-label="تصفية المشاريع حسب الفئة"
        >
          {portfolioCategories.map((category, i) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gold text-dark-bg font-bold shadow-lg shadow-gold/30 btn-gold-glow"
                  : "glass text-gray-300 hover:bg-gold/10 border border-gold/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              role="radio"
              aria-checked={activeCategory === category.id}
            >
              {category.titleAr}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer card-glow"
                onClick={() => openLightbox(index)}
                whileHover={{ y: -8 }}
                role="button"
                tabIndex={0}
                aria-label={`عرض صورة: ${item.titleAr}`}
                onKeyPress={(e) => e.key === "Enter" && openLightbox(index)}
              >
                {/* Image */}
                <div className="h-72 md:h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                {/* Featured Badge */}
                {item.featured && (
                  <motion.div
                    className="absolute top-4 left-4 bg-gold/90 backdrop-blur-sm text-dark-bg text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    مميز
                  </motion.div>
                )}

                {/* Category Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-dark-bg/80 backdrop-blur-sm text-gold text-xs font-bold px-3 py-1 rounded-full border border-gold/20 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {portfolioCategories.find((c) => c.id === item.category)?.titleAr}
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="glass-card p-4 rounded-xl border-gold/20">
                    <h4 className="text-lg font-bold text-gold mb-2 line-clamp-1">
                      {item.titleAr}
                    </h4>
                    <p className="text-gray-300 text-xs mb-3 line-clamp-2">
                      {item.descriptionAr}
                    </p>

                    {/* Year if available */}
                    {item.year && (
                      <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                        <FiCalendar size={12} />
                        <span>{item.year}</span>
                      </div>
                    )}

                    <div className="text-gold text-sm font-semibold flex items-center gap-2">
                      <span>عرض التفاصيل</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        aria-hidden="true"
                      >
                        ←
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* View Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center text-dark-bg">
                    <FiEye size={24} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxImages}
          index={currentImageIndex}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
        />
      </div>
    </section>
  );
}
