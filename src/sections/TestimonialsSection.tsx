"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "أحمد محمد",
    role: "صاحب معرض سيارات",
    text: "تعاملت مع مركز الزعيم في تركيب شاشات وليدات لأسطول المعرض، والشغل كان خرافي من ناحية الجودة والسرعة.",
    rating: 5,
  },
  {
    name: "محمد عبد الله",
    role: "مدير شركة",
    text: "عملنا واجهة كلادينج للشركة مع الزعيم، والنتيجة كانت احترافية جداً وأفضل من التوقعات.",
    rating: 5,
  },
  {
    name: "سارة أحمد",
    role: "عميلة",
    text: "أفلام الحماية اللي عملتها لسيارتي ممتازة، وسعرها مناسب جداً مقارنة بالجودة العالية.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-dark-gray relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 text-gold/5">
        <FaQuoteRight size={300} />
      </div>
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          titleAr="آراء العملاء"
          subtitleAr="ماذا يقول عملاؤنا عن جودة شغلنا"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-2xl border-gold/10 hover:border-gold/30 transition-all duration-500 relative card-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Quote icon */}
              <motion.div
                className="text-gold/30 text-4xl mb-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
              >
                <FaQuoteRight />
              </motion.div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.1 * i + 0.4 }}
                    >
                      <FaStar className="text-gold" size={16} />
                    </motion.div>
                  ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
