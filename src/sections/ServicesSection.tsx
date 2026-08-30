"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { automotiveServices, printingServices } from "@/data/services";
import { IconType } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

// Map icon strings to actual icon components
const iconMap: Record<string, IconType> = {
  ...FaIcons,
  ...MdIcons,
};

function ServiceCard({ service }: { service: (typeof automotiveServices)[0] }) {
  const Icon = iconMap[service.icon] || MdIcons.MdHelp;

  return (
    <motion.div
      className="bg-dark-gray rounded-xl p-6 border border-gold/20 hover:border-gold/50 transition-all duration-300 group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-dark-bg/40 flex items-center justify-center">
          <Icon size={48} className="text-gold" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gold mb-2">{service.titleAr}</h3>
      <p className="text-gray-300 text-sm mb-4">{service.descriptionAr}</p>
      <Button
        variant="outline"
        size="sm"
        whatsapp
        whatsappMessage={`مرحبًا، أريد طلب خدمة ${service.titleAr}`}
      >
        طلب الخدمة
      </Button>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          titleAr="خدماتنا"
          subtitleAr="نقدم حلولاً متكاملة لكماليات السيارات والطباعة والدعاية والإعلان بأعلى معايير الجودة"
        />

        {/* Automotive Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <MdIcons.MdDirectionsCar size={28} className="text-gold" />
            كماليات السيارات
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automotiveServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Printing Services */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <MdIcons.MdPrint size={28} className="text-gold" />
            الطباعة والدعاية والإعلان
          </h3>
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
