"use client";

import SectionHeader from "@/components/SectionHeader";
import { FaCheckCircle, FaShieldAlt, FaAward, FaTools } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image & Key Pillars Side */}
          <div className="relative">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: "url(/images/hero-4.jpg)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/30 to-transparent" />
              
              {/* Bottom Badge inside the card - No mobile overflow */}
              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-dark-bg/90 backdrop-blur-md border border-gold/40 flex items-center gap-3 shadow-lg">
                <div className="p-2.5 rounded-lg bg-gold/20 text-gold shrink-0">
                  <FaShieldAlt size={22} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">مركز معتمد لحماية السيارات</p>
                  <p className="text-gray-300 text-xs sm:text-sm">أحدث تقنيات الـ PPF والنانو سيراميك والتجهيزات الفاخرة</p>
                </div>
              </div>
            </div>

            {/* 2 Feature Badges - Responsively stacked below on mobile, neatly aligned */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-dark-gray/90 p-4 rounded-xl border border-gold/25 flex items-center gap-3">
                <FaTools className="text-gold text-xl shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">بيئة معزولة</p>
                  <p className="text-gray-400 text-xs">تركيب احترافي خالٍ من الأتربة</p>
                </div>
              </div>
              <div className="bg-dark-gray/90 p-4 rounded-xl border border-gold/25 flex items-center gap-3">
                <FaAward className="text-gold text-xl shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">ضمان معتمد</p>
                  <p className="text-gray-400 text-xs">حماية ممتدة ومتابعة دورية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <SectionHeader
              titleAr="من نحن"
              subtitleAr="نبذة عن إيليت شيلد | ELITE SHIELD"
              centered={false}
            />

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              إيليت شيلد مركز متخصص في تقديم حلول متقدمة لحماية وتجهيز السيارات الفاخرة، يجمع بين دقة التركيب واختيار أجود خامات أفلام الحماية PPF والنانو سيراميك والعزل الحراري، إلى جانب خدمات التجهيزات المتكاملة والطباعة الدعائية، مع الالتزام التام بأعلى معايير الإتقان والتسليم.
            </p>

            <div className="space-y-3.5 mb-8">
              {[
                "أفلام حماية طلاء PPF معالجة ذاتياً ومقاومة لأقسى عوامل الطريق",
                "عزل حراري نانو كربوني وسيراميك يحجب 99% من الأشعة فوق البنفسجية",
                "طبقات نانو سيراميك 9H فائقة اللمعان والصلابة لحماية الهيكل والجنوط",
                "تجهيزات مقصورة وفرش داخلي وأنظمة شاشات وليدات متطورة",
                "فريق فني متخصص وبيئة عمل معقمة ومجهزة بأحدث أدوات الفحص والتثبيت",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"
                >
                  <FaCheckCircle className="text-gold text-lg shrink-0 mt-0.5" />
                  <p className="text-gray-100 text-sm sm:text-base font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
