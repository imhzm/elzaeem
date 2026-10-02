"use client";

import SectionHeader from "@/components/SectionHeader";
import { MdCheckCircle } from "react-icons/md";

const reasons = [
  "أفلام PPF بمعالجة ذاتية ومقاومة للخدوش وترميل الطرق",
  "طبقات نانو سيراميك أصلية بدرجة صلابة فائقة ولمعان زجاجي ممتد",
  "عزل حراري نانو كربوني يقلل حرارة المقصورة ويحجب 99% من الأشعة الضارة",
  "فنيون معتمدون وخبرة متقدمة في فك وتركيب وتجهيز السيارات الفاخرة",
  "بيئة عمل مجهزة ومعزولة للأتربة لضمان أعلى درجات النقاء والالتصاق",
  "شهادة ضمان موثقة ومتابعة دورية بعد التنفيذ لراحة بالك التامة",
];

export default function WhyEliteShieldSection() {
  return (
    <section className="py-20 px-4 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          titleAr="ليه تختار إيليت شيلد؟"
          subtitleAr="معايير دقيقة وتجهيزات متطورة تمنح سيارتك الحماية والمظهر الذي تستحقه"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-dark-gray/80 p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <MdCheckCircle size={28} className="text-gold shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg text-gray-100 font-medium leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
