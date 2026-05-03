"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { MdCheckCircle } from "react-icons/md";

const reasons = [
  "خدمات متعددة في مكان واحد",
  "خامات مختارة بعناية",
  "تنفيذ دقيق وتشطيب واضح",
  "سرعة في التواصل والتنفيذ",
  "حلول مناسبة للأفراد والشركات",
  "متابعة من أول الطلب حتى التسليم",
];

export default function WhyElzaeemSection() {
  return (
    <section className="py-24 px-4 bg-dark-bg relative overflow-hidden">
      {/* Decorative mesh gradient */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          titleAr="ليه تختار الزعيم؟"
          subtitleAr="نحن نقدم جودة احترافية وخدمة موثوقة تجعلنا خيارك الأول"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-2xl border-gold/10 hover:border-gold/30 transition-all duration-500 group card-glow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 group-hover:border-gold/40 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MdCheckCircle size={24} className="text-gold" />
                </motion.div>
                <p className="text-lg text-white font-medium">{reason}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
