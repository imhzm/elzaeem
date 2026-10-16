"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import {
  automotiveServices,
  commercialServices,
  serviceCategories,
  Service,
  ServiceCategoryMeta,
} from "@/data/services";
import { IconType } from "react-icons/lib";
import {
  MdShield,
  MdOpacity,
  MdAutoAwesome,
  MdDirectionsCar,
  MdBusiness,
  MdLocalShipping,
  MdPhotoSizeSelectLarge,
  MdSignpost,
  MdBlurOn,
  MdPrint,
  MdCheckCircle,
  MdVerified,
  MdHelp,
  MdArrowForward,
} from "react-icons/md";

// Map icon identifiers to React Icons components
const iconMap: Record<string, IconType> = {
  MdShield,
  MdOpacity,
  MdAutoAwesome,
  MdDirectionsCar,
  MdBusiness,
  MdLocalShipping,
  MdPhotoSizeSelectLarge,
  MdSignpost,
  MdBlurOn,
  MdPrint,
  MdCheckCircle,
  MdVerified,
  MdHelp,
};

function ModernServiceCard({
  service,
  index,
  categoryType,
}: {
  service: Service;
  index: number;
  categoryType: "automotive" | "commercial";
}) {
  const Icon = iconMap[service.icon] || MdShield;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      layout
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.98 }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#121217] border border-white/10 hover:border-gold/50 transition-all duration-500 shadow-2xl shadow-black/60 hover:-translate-y-1.5"
    >
      {/* Top Metallic Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Section: Visual & Badges */}
      <div>
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/50">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          {/* Subtle multi-layer gradient mask for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/50 to-black/30" />

          {/* Floating Category Tag / Badge */}
          <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-2">
            {service.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-gold text-[#0a0a0d] shadow-lg shadow-gold/25">
                {service.badge}
              </span>
            )}
            <span className="px-2.5 py-0.8 rounded-full text-[11px] font-medium bg-black/60 text-gray-300 border border-white/15 backdrop-blur-md">
              {categoryType === "automotive" ? "حماية سيارات" : "دعاية وتجهيزات"}
            </span>
          </div>

          {/* Icon Badge Overlay */}
          <div className="absolute bottom-3 right-4 z-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#0a0a0d]/90 border border-gold/40 flex items-center justify-center text-gold shadow-xl shadow-black/80 group-hover:border-gold group-hover:scale-105 transition-all duration-300">
              <Icon size={26} />
            </div>
            <div className="text-right">
              <span className="text-[11px] font-mono tracking-wider text-gold/80 block uppercase">
                {service.titleEn}
              </span>
              <span className="text-xs text-gray-300 font-medium">
                {categoryType === "automotive" ? "هندسة معتمدة" : "مواصفات قياسية"}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 text-right">
          {/* Tagline */}
          {service.taglineAr && (
            <div className="mb-2 inline-block text-xs font-semibold text-gold/90">
              {service.taglineAr}
            </div>
          )}

          {/* Main Title */}
          <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-gold transition-colors duration-300 leading-tight mb-3">
            {service.titleAr}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed font-normal mb-5">
            {service.descriptionAr}
          </p>

          {/* Technical Specs Pill Matrix (Asymmetric Detail) */}
          {service.specs && service.specs.length > 0 && (
            <div className="mb-5 grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
              {service.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-medium">
                    {spec.label}
                  </span>
                  <span className="text-xs font-bold text-white group-hover:text-gold transition-colors mt-0.5 truncate">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Highlights Checklist */}
          {service.highlights && service.highlights.length > 0 && (
            <div className="space-y-2 mb-4 pt-3 border-t border-white/5">
              {service.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <MdCheckCircle
                    size={16}
                    className="text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                  />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Action Button */}
      <div className="p-5 sm:p-6 pt-0">
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2">
          <Button
            variant="primary"
            size="md"
            whatsapp
            whatsappMessage={`مرحبًا إيليت شيلد، أود الاستفسار وحجز خدمة ${service.titleAr} (${service.titleEn})`}
            className="w-full justify-center text-sm font-bold shadow-md shadow-gold/20"
          >
            حجز الخدمة عبر واتساب
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"automotive" | "commercial">("automotive");
  const shouldReduceMotion = useReducedMotion();

  const currentCategoryMeta = serviceCategories.find((cat) => cat.id === activeTab)!;
  const currentServices = activeTab === "automotive" ? automotiveServices : commercialServices;

  return (
    <section className="relative py-24 px-4 bg-[#0a0a0d] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Ambient Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          titleAr="منظومة الخدمات والحلول المتكاملة"
          subtitleAr="هيكلية متخصصة تفصل بدقة بين قطاع حماية وتجهيز السيارات الفاخرة، وقطاع الواجهات والتجهيزات الإعلانية والتجارية"
        />

        {/* Dual Business Architecture: Interactive Category Tab Switcher */}
        <div className="flex flex-col items-center mb-12">
          <div
            role="tablist"
            aria-label="أقسام خدمات إيليت شيلد"
            className="inline-flex p-1.5 rounded-2xl bg-[#14141a] border border-white/10 shadow-xl shadow-black/50 relative max-w-full overflow-x-auto"
          >
            {serviceCategories.map((category: ServiceCategoryMeta) => {
              const isActive = activeTab === category.id;
              const Icon = category.id === "automotive" ? MdShield : MdBusiness;

              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => setActiveTab(category.id)}
                  className={`relative z-10 flex items-center gap-3 px-5 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer outline-none whitespace-nowrap ${
                    isActive ? "text-[#0a0a0d]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <Icon
                    size={22}
                    className={isActive ? "text-[#0a0a0d]" : "text-gold group-hover:scale-110 transition-transform"}
                  />
                  <div className="text-right">
                    <span className="block leading-tight font-extrabold">{category.titleAr}</span>
                    <span
                      className={`block text-[11px] font-normal ${
                        isActive ? "text-black/80" : "text-gray-400"
                      }`}
                    >
                      {category.countLabel}
                    </span>
                  </div>

                  {/* Active Sliding Tab Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="categoryActiveIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-gold via-[#e6c86e] to-gold rounded-xl -z-10 shadow-lg shadow-gold/30"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Meta Banner (Cinematic Overview) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategoryMeta.id}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14141c] via-[#101015] to-[#14141c] border border-gold/25 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="text-right max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold/15 text-gold border border-gold/30 mb-3">
                  <span>{currentCategoryMeta.badgeAr}</span>
                  <span>•</span>
                  <span>{currentCategoryMeta.countLabel}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  {currentCategoryMeta.titleAr}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {currentCategoryMeta.descriptionAr}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  size="md"
                  whatsapp
                  whatsappMessage={`مرحبًا إيليت شيلد، أود استشارة فنية حول خدمات ${currentCategoryMeta.titleAr}`}
                  className="w-full md:w-auto text-sm justify-center"
                >
                  <span>طلب استشارة تخصصية</span>
                  <MdArrowForward className="mr-2 rotate-180" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Services Grid with Animated Transition */}
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
              transition={{ duration: 0.35 }}
              className={`grid grid-cols-1 md:grid-cols-2 ${
                activeTab === "automotive" ? "lg:grid-cols-2 xl:grid-cols-2 max-w-5xl mx-auto" : "lg:grid-cols-3"
              } gap-6 sm:gap-8`}
            >
              {currentServices.map((service, idx) => (
                <ModernServiceCard
                  key={service.id}
                  service={service}
                  index={idx}
                  categoryType={activeTab}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Trust & Assurance Footer Note */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MdVerified className="text-gold" size={18} />
              معايير هندسية معتمدة لكل خدمة
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <MdShield className="text-gold" size={18} />
              ضمان موثق وفحص جودة دوري
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <MdAutoAwesome className="text-gold" size={18} />
              خامات ومواد أصلية بنسبة 100%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
