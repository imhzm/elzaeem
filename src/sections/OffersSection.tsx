"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { offers } from "@/data/offers";

export default function OffersSection() {
  return (
    <section className="py-20 px-4 bg-dark-gray">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          titleAr="أحدث العروض"
          subtitleAr="عروض خاصة لفترة محدودة على خدماتنا المميزة"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="bg-dark-bg rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${offer.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold mb-2">
                  {offer.titleAr}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {offer.descriptionAr}
                </p>
                <Button
                  variant="whatsapp"
                  size="sm"
                  whatsapp
                  whatsappMessage={offer.whatsappMessage}
                  className="w-full justify-center"
                >
                  اسأل عن العرض على واتساب
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
