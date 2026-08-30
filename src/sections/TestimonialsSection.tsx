"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "أحمد محد",
    role: "صاحب معرض سيارات",
    text: "تعاملت مع إيليت شيلد في تركيب شاشات وليدات لأسطول المعرض، والشغل كان خرافي من ناحية الجودة والسرعة.",
    rating: 5,
  },
  {
    name: "محمد عبد الله",
    role: "مدير شركة",
    text: "عملنا واجهة كلادينج للشركة مع إيليت شيلد، والنتيجة كانت احترافية جدًا وأفضل من التوقعات.",
    rating: 5,
  },
  {
    name: "سارة أحمد",
    role: "عميلة",
    text: "أفلام الحماية اللي عملتها لسيارتي ممتازة، وسعرها مناسب جدًا مقارنة بالجودة العالية.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <FaQuoteRight size={400} className="text-gold absolute -right-20 -top-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          titleAr="أراء العملاء"
          subtitleAr="ماذا يقول عملاؤنا عن جودة شغلنا"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-dark-gray p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <FaQuoteRight className="text-gold/20 text-4xl mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
                <div className="flex gap-1">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-gold" />
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
