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

export default function WhyEliteShieldSection() {
  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          titleAr="ليه تختار إيليت شيلد؟"
          subtitleAr="نحن نقدم جودة احترافية وخدمة موثوقة تجعلنا خيارك الأول"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-dark-gray p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MdCheckCircle size={32} className="text-gold shrink-0" />
              <p className="text-lg text-white">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
