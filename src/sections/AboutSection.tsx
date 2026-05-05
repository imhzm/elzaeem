"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { FaCheckCircle } from "react-icons/fa";

function CountUp({ end, duration = 2, suffix = "+" }: { end: number; duration?: number; suffix?: string }) {
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

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-dark-bg relative overflow-hidden">
      {/* Decorative mesh gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl shadow-gold/10 border border-gold/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/images/1.jpg)",
                }}
                role="img"
                aria-label="فريق عمل مركز الزعيم الدولي في مكان عمل حديث"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent" />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
            </div>

            {/* Stats overlay */}
            <motion.div
              className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl shadow-2xl"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
            >
              <div className="text-center">
                <p className="text-5xl font-bold text-gold">
                  <CountUp end={500} />
                </p>
                <p className="text-gray-300 text-sm mt-1">مشروع منفذ</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-8 -left-8 glass-card p-6 rounded-2xl shadow-2xl"
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.7 }}
            >
              <div className="text-center">
                <p className="text-5xl font-bold text-gold">
                  <CountUp end={1000} />
                </p>
                <p className="text-gray-300 text-sm mt-1">عميل راضٍ</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <SectionHeader
              titleAr="من نحن"
              subtitleAr="نبذة عن مركز الزعيم الدولي لكماليات السيارات"
              centered={false}
            />

            <motion.p
              className="text-gray-300 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              مركز الزعيم الدولي لكماليات السيارات مركز متخصص في تقديم حلول احترافية تجمع بين كماليات
              السيارات وخدمات الطباعة والدعاية والإعلان، من خلال تنفيذ دقيق، خامات مختارة،
              وتجربة عميل منظمة من أول التواصل حتى التسليم.
            </motion.p>

            <div className="space-y-5 mb-10">
              {[
                "خبرة واسعة في كماليات السيارات",
                "حلول طباعة ودعاية متكاملة",
                "فريق عمل محترف ومتخصص",
                "خامات عالية الجودة وضمان شامل",
                "التزام بمواعيد والجودة",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300 border border-gold/20 group-hover:border-gold/40">
                    <FaCheckCircle className="text-gold text-xl" />
                  </div>
                  <p className="text-white font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 bg-gold text-dark-bg px-8 py-4 rounded-xl font-bold hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 btn-gold-glow group"
              >
                اكتشف خدماتنا
                <span className="group-hover:translate-x-1 transition-transform">←</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
