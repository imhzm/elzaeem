"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "ما هي مواعيد عمل مركز الزعيم الدولي؟",
    answer: "نعمل من السبت إلى الخميس من الساعة 9 صباحاً حتى 9 مساءً. الجمعة إجازة.",
  },
  {
    question: "هل تقدمون خدمة التنقل للمنازل؟",
    answer: "نعم، نقدم خدمة التنقل للمنازل لتركيب الشاشات والليدات وأفلام الحماية حسب الموقع.",
  },
  {
    question: "ما هي مدة ضمان خدماتكم؟",
    answer: "نقدم ضمان يصل إلى سنة كاملة على أفلام الحماية والليدات، وضمان 6 شهور على الشاشات.",
  },
  {
    question: "هل يمكنني طلب عرض سعر قبل التنفيذ؟",
    answer: "بالتأكيد، يمكنك طلب عرض سعر مجاني عبر واتساب أو من خلال نموذج التواصل في الموقع.",
  },
  {
    question: "ما هي مناطق التغطية الخاصة بكم؟",
    answer: "نغطي القاهرة الكبرى والجيزة، ولدينا إمكانية التنفيذ في المحافظات المجاورة حسب حجم المشروع.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-dark-gray relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          titleAr="أسئلة شائعة"
          subtitleAr="إجابات على أكثر الأسئلة شيوعاً حول خدماتنا"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl border-gold/10 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 text-right flex items-center justify-between hover:bg-gold/5 transition-colors group"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gold shrink-0 ml-4"
                >
                  <FaChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-gold/10">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
