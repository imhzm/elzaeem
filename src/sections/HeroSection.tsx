"use client";

import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-bg py-20 px-4">
      {/* Background with real automotive protection visual & luxury gradient vignette */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('/images/hero-1.png')` }}
        />
        {/* Multilayer gradient: ensure high contrast and immediate visual clarity on desktop and mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f14]/90 via-[#0f0f14]/65 to-[#0f0f14]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-gold/5">
          <span className="text-base">🛡️</span>
          <span>المركز المتخصص لحماية وتجهيز السيارات الفاخرة | ELITE SHIELD</span>
        </div>

        {/* Main Automotive Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          حماية متطورة ومظهر استثنائي لسيارتك مع{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-amber-500">
            إيليت شيلد
          </span>
        </h1>

        {/* Clear Service Proposition */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
          أفلام حماية الطلاء PPF بتقنية المعالجة الذاتية، طلاء النانو سيراميك عالي الكثافة، العزل الحراري المتقدم، وتجهيزات كماليات ومقصورة السيارات بأعلى معايير الإتقان.
        </p>

        {/* Primary and WhatsApp CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10 w-full sm:w-auto">
          <Button variant="primary" size="lg" href="#contact-form" className="shadow-lg shadow-gold/20 hover:shadow-gold/35">
            اطلب عرض سعر فوري
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            whatsapp
            whatsappMessage="مرحبًا إيليت شيلد، أود الاستفسار عن باقات حماية وتجهيز السيارات المتاحة لديكم"
          >
            تواصل واتساب مباشر
          </Button>
        </div>

        {/* 4 Feature Value Props */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full pt-4 border-t border-white/10 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] border border-white/5">
            <span className="text-gold font-bold text-base">🛡️</span>
            <span className="font-medium">أفلام PPF معالجة ذاتياً</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] border border-white/5">
            <span className="text-gold font-bold text-base">💎</span>
            <span className="font-medium">نانو سيراميك 9H فائق</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] border border-white/5">
            <span className="text-gold font-bold text-base">☀️</span>
            <span className="font-medium">عزل حراري 99% UV</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] border border-white/5">
            <span className="text-gold font-bold text-base">📜</span>
            <span className="font-medium">ضمان حقيقي معتمد</span>
          </div>
        </div>
      </div>
    </section>
  );
}
