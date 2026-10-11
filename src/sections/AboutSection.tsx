"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { FaCheckCircle, FaShieldAlt, FaAward, FaTools } from "react-icons/fa";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 px-4 bg-dark-bg border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image & Key Pillars Side */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0.9, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: "url(/images/hero-4.jpg)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/30 to-transparent" />
              
              {/* Bottom Badge inside the card - No mobile overflow */}
              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-dark-bg/90 backdrop-blur-md border border-gold/40 flex items-center gap-3 shadow-lg">
                <div className="p-2.5 rounded-lg bg-gold/20 text-gold shrink-0">
                  <FaShieldAlt size={22} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">مركز متخصص لتجهيز وحماية السيارات</p>
                  <p className="text-gray-300 text-xs sm:text-sm">أحدث تقنيات الـ PPF والنانو سيراميك والتجهيزات الفاخرة</p>
                </div>
              </div>
            </div>

            {/* 2 Feature Badges - Responsively stacked below on mobile, neatly aligned */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-dark-gray/90 p-4 rounded-xl border border-gold/25 flex items-center gap-3 transition-colors hover:border-gold/50">
                <FaTools className="text-gold text-xl shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">بيئة معزولة</p>
                  <p className="text-gray-400 text-xs">تركيب احترافي خالٍ من الأتربة</p>
                </div>
              </div>
              <div className="bg-dark-gray/90 p-4 rounded-xl border border-gold/25 flex items-center gap-3 transition-colors hover:border-gold/50">
                <FaAward className="text-gold text-xl shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">ضمان مكتوب</p>
                  <p className="text-gray-400 text-xs">حماية ممتدة ومتابعة دورية</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0.9, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <SectionHeader
              titleAr="من نحن"
              subtitleAr="نبذة عن إيليت شيلد | ELITE SHIELD"
              centered={false}
            />

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              إيليت شيلد مركز متخصص في تقديم حلول متقدمة لحماية وتجهيز السيارات الفاخرة، يجمع بين دقة التركيب واختيار أجود خامات أفلام الحماية PPF والنانو سيراميك والعزل الحراري، إلى جانب خدمات التجهيزات المتكاملة والطباعة الدعائية، مع الالتزام التام بأعلى معايير الإتقان والتسليم.
            </p>

            <div className="space-y-3.5 mb-8">
              {[
                "أفلام حماية طلاء PPF معالجة ذاتياً ومقاومة لأقسى عوامل الطريق",
                "عزل حراري نانو كربوني وسيراميك متطور لحجب الأشعة فوق البنفسجية",
                "طبقات نانو سيراميك فائقة الكثافة واللمعان لحماية الطلاء والجنوط",
                "تجهيزات مقصورة وفرش داخلي وأنظمة شاشات وليدات متطورة",
                "فريق فني متخصص وبيئة عمل معقمة ومجهزة بأحدث أدوات الفحص والتثبيت",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5 transition-all hover:border-gold/30 hover:bg-white/[0.04]"
                >
                  <FaCheckCircle className="text-gold text-lg shrink-0 mt-0.5" />
                  <p className="text-gray-100 text-sm sm:text-base font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
