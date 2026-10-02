"use client";

import SectionHeader from "@/components/SectionHeader";
import { MdSearch, MdBuild, MdShield, MdVerified } from "react-icons/md";

const steps = [
  {
    step: "01",
    title: "الفحص والتقييم الشامل",
    desc: "فحص دقيق لحالة البوية والزجاج تحت إضاءة متخصصة، وتحديد باقة الحماية والخدمات المناسبة لسيارتك.",
    icon: MdSearch,
  },
  {
    step: "02",
    title: "التجهيز والتلميع التصحيحي",
    desc: "غسيل تفصيلي، إزالة الشوائب والترميل، ومعالجة دوائر الغسيل (Paint Correction) لضمان سطح مثالي.",
    icon: MdBuild,
  },
  {
    step: "03",
    title: "التركيب والتطبيق الاحترافي",
    desc: "تطبيق أفلام PPF أو طبقات النانو سيراميك في بيئة عمل معزولة ومعقمة لمنع أي ذرات غبار بأيدي فنيين محترفين.",
    icon: MdShield,
  },
  {
    step: "04",
    title: "فحص الجودة وتسليم الضمان",
    desc: "مراجعة ميكروسكوبية للحواف والتثبيت، معالجة حرارية نهائية، وتسليم شهادة الضمان المعتمد وإرشادات العناية.",
    icon: MdVerified,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          titleAr="مراحل العمل والتنفيذ"
          subtitleAr="خطوات هندسية دقيقة نتبعها في إيليت شيلد لضمان أعلى درجات الحماية والتشطيب لسيارتك"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="bg-dark-gray/60 p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark-bg transition-colors">
                    <Icon size={26} />
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-gold/20 transition-colors font-mono">
                    {s.step}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
