"use client";

import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { automotiveServices, printingServices, Service } from "@/data/services";
import { IconType } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

// Map icon strings to actual icon components
const iconMap: Record<string, IconType> = {
  ...FaIcons,
  ...MdIcons,
};

function ServiceCard({ service, isFeatured }: { service: Service; isFeatured?: boolean }) {
  const Icon = iconMap[service.icon] || MdIcons.MdHelp;

  return (
    <div
      className={`bg-dark-gray/90 rounded-xl p-6 border transition-all duration-300 group hover:-translate-y-1.5 shadow-xl shadow-black/40 flex flex-col justify-between relative overflow-hidden ${
        isFeatured ? "border-gold/60 ring-1 ring-gold/30" : "border-gold/20 hover:border-gold/50"
      }`}
    >
      {isFeatured && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold text-dark-bg shadow-md">
          الأكثر طلباً
        </span>
      )}
      <div>
        <div className="relative h-48 mb-5 rounded-lg overflow-hidden border border-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/85 via-dark-bg/40 to-transparent flex items-end p-4">
            <div className="p-2.5 rounded-lg bg-dark-bg/80 border border-gold/30 text-gold shadow-lg">
              <Icon size={28} />
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors mb-2">
          {service.titleAr}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
          {service.descriptionAr}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          whatsapp
          whatsappMessage={`مرحبًا إيليت شيلد، أود الاستفسار وحجز خدمة ${service.titleAr}`}
          className="w-full text-center"
        >
          حجز الخدمة عبر واتساب
        </Button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          titleAr="خدماتنا وحلول الحماية"
          subtitleAr="منظومة متكاملة من أفلام الحماية الذاتية، النانو سيراميك، العزل الحراري، وتجهيزات كماليات السيارات بأعلى معايير الجودة"
        />

        {/* Automotive Protection & Styling Services */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-gold/20">
            <div className="p-2 rounded-lg bg-gold/15 text-gold">
              <MdIcons.MdDirectionsCar size={30} />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">خدمات كماليات وحماية السيارات</h3>
              <p className="text-sm text-gray-400">حماية فائقة ومعالجة متطورة لجميع موديلات وفئات السيارات</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automotiveServices.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                isFeatured={service.id === "protection-films" || service.id === "car-tint"}
              />
            ))}
          </div>
        </div>

        {/* Printing & Commercial Branding Services */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-gold/20">
            <div className="p-2 rounded-lg bg-gold/15 text-gold">
              <MdIcons.MdPrint size={30} />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">الطباعة والدعاية والإعلان والتجهيزات</h3>
              <p className="text-sm text-gray-400">واجهات كلادينج، استيكرات فينيل، وبنرات دعائية للمحلات والشركات</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {printingServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
