"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 px-4 bg-dark-gray">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          titleAr="أعمالنا"
          subtitleAr="معرض لأهم المشاريع التي نفذناها باحترافية وجودة عالية"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                activeCategory === category.id
                  ? "bg-gold text-dark-bg border-gold shadow-lg shadow-gold/20 scale-105"
                  : "bg-dark-bg text-gray-300 border-white/5 hover:border-gold/40 hover:bg-white/[0.04]"
              }`}
            >
              {category.titleAr}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative group rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-gold/50 shadow-xl shadow-black/40 transition-colors"
                onClick={() => openLightbox(index)}
              >
                <div
                  className="h-64 bg-cover bg-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/95 via-dark-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-xl font-bold text-gold mb-2">
                      {item.titleAr}
                    </h4>
                    <p className="text-gray-300 text-sm">{item.descriptionAr}</p>
                  </div>
                </div>
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
        />
      </div>
    </section>
  );
}
