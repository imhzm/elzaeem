"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { automotiveServices, printingServices } from "@/data/services";
import { IconType } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { FiCheck } from "react-icons/fi";

const iconMap: Record<string, IconType> = {
  ...FaIcons,
  ...MdIcons,
};

interface ServiceCardProps {
  service: (typeof automotiveServices)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || MdIcons.MdHelp;

  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden border-gold/10 hover:border-gold/30 transition-all duration-500 group card-glow"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative h-52 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image}?w=800&q=80)` }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          role="img"
          aria-label={service.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-2xl bg-gold/10 backdrop-blur-sm border border-gold/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon size={28} className="text-gold" />
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gold mb-3">{service.titleAr}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
          {service.descriptionAr}
        </p>

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <div className="mb-4 space-y-2">
            {service.features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400 text-xs">
                <FiCheck size={12} className="text-gold" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        <Button
          variant="outline"
          size="sm"
          whatsapp
          whatsappMessage={`مرحبًا، أريد طلب خدمة ${service.titleAr}`}
          className="w-full justify-center"
        >
          طلب الخدمة
        </Button>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"automotive" | "printing">("automotive");

  return (
    <section className="py-24 px-4 bg-dark-bg relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background effects */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-red/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          titleAr="خدماتنا"
          subtitleAr="نقدم حلولاً متكاملة لكماليات السيارات والطباعة والدعاية والإعلان بأعلى معايير الجودة"
        />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass p-2 rounded-full flex gap-2">
            <motion.button
              onClick={() => setActiveTab("automotive")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "automotive"
                  ? "bg-gold text-dark-bg shadow-lg"
                  : "text-gray-300 hover:text-gold hover:bg-gold/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdIcons.MdDirectionsCar size={18} />
              كماليات السيارات
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("printing")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "printing"
                  ? "bg-gold text-dark-bg shadow-lg"
                  : "text-gray-300 hover:text-gold hover:bg-gold/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdIcons.MdPrint size={18} />
              الطباعة والدعاية
            </motion.button>
          </div>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          {activeTab === "automotive" ? (
            <motion.div
              key="automotive"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {automotiveServices.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="printing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {printingServices.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
