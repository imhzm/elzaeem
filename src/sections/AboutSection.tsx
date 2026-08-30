"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { FaCheckCircle } from "react-icons/fa";

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}+</span>;
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-gold/20" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-dark-gray p-6 rounded-xl border border-gold/30 shadow-xl">
              <div className="text-center">
                <p className="text-4xl font-bold text-gold">
                  <CountUp end={500} />
                </p>
                <p className="text-gray-300 text-sm">مشروع منفذ</p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-dark-gray p-6 rounded-xl border border-gold/30 shadow-xl">
              <div className="text-center">
                <p className="text-4xl font-bold text-gold">
                  <CountUp end={1000} />
                </p>
                <p className="text-gray-300 text-sm">عميل راضٍ</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              titleAr="من نحن"
               subtitleAr="نبذة عن إيليت شيلد"
              centered={false}
            />

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              إيليت شيلد مركز متخصص في تقديم حلول احترافية تجمع بين كماليات
              السيارات وخدمات الطباعة والدعاية، من خلال تنفيذ دقيق، خامات مختارة،
              وتجربة عميل منظمة من أول التواصل حتى التسليم.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "خبرة واسعة في كماليات السيارات",
                "حلول طباعة ودعاية متكاملة",
                "فريق عمل محترف ومتخصص",
                "خامات عالية الجودة وضمان شامل",
                "التزام بالمواعيد والجودة",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaCheckCircle className="text-gold text-xl shrink-0" />
                  <p className="text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
