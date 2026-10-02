"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "ما هي مواعيد عمل إيليت شيلد؟",
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
    <section className="py-20 px-4 bg-dark-gray">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          titleAr="أسئلة شائعة"
          subtitleAr="إجابات على أكثر الأسئلة شيوعاً حول خدماتنا"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-bg rounded-xl border border-gold/20 overflow-hidden hover:border-gold/40 transition-colors"
            >
              <button
                className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-medium-gray/50 transition-colors"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gold" />
                ) : (
                  <FaChevronDown className="text-gold" />
                )}
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
                    <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
