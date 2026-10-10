"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Button from "@/components/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-bg py-20 px-4">
      {/* Background with real automotive protection visual & luxury gradient vignette */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero-1.png')` }}
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 14, ease: "easeOut" }}
        />
        {/* Multilayer gradient: ensure high contrast and immediate visual clarity on desktop and mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f14]/90 via-[#0f0f14]/65 to-[#0f0f14]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Trust Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-gold/5 transition-transform hover:scale-105"
        >
          <span className="text-base">🛡️</span>
          <span>المركز المتخصص لحماية وتجهيز السيارات الفاخرة | ELITE SHIELD</span>
        </motion.div>

        {/* Main Automotive Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
        >
          حماية متطورة ومظهر استثنائي لسيارتك مع{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-amber-500">
            إيليت شيلد
          </span>
        </motion.h1>

        {/* Clear Service Proposition */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          أفلام حماية الطلاء PPF بتقنية المعالجة الذاتية، طلاء النانو سيراميك عالي الكثافة، العزل الحراري المتقدم، وتجهيزات كماليات ومقصورة السيارات بأعلى معايير الإتقان.
        </motion.p>

        {/* Primary and WhatsApp CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-4 mb-10 w-full sm:w-auto"
        >
          <Button variant="primary" size="lg" href="#contact-form" className="shadow-lg shadow-gold/20 hover:shadow-gold/35">
            اطلب عرض سعر فوري
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            whatsapp
            whatsappMessage="مرحبًا إيليت شيلد، أود الاستفسار عن باقات حماية وتجهيز السيارات المتاحة لديكم"
          >
            تواصل واتساب مباشر
          </Button>
        </motion.div>

        {/* 4 Feature Value Props */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full pt-4 border-t border-white/10 text-xs sm:text-sm text-gray-300"
        >
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] border border-white/5 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.08]">
            <span className="text-gold font-bold text-base">🛡️</span>
            <span className="font-medium">أفلام PPF معالجة ذاتياً</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] border border-white/5 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.08]">
            <span className="text-gold font-bold text-base">💎</span>
            <span className="font-medium">نانو سيراميك 9H فائق</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] border border-white/5 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.08]">
            <span className="text-gold font-bold text-base">☀️</span>
            <span className="font-medium">عزل حراري 99% UV</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] border border-white/5 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.08]">
            <span className="text-gold font-bold text-base">📜</span>
            <span className="font-medium">ضمان حقيقي معتمد</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
