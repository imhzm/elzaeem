"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { offers } from "@/data/offers";
import { FiClock, FiTag } from "react-icons/fi";

export default function OffersSection() {
  const isOfferValid = (validUntil?: string) => {
    if (!validUntil) return true;
    return new Date(validUntil) > new Date();
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-dark-gray to-dark-bg relative overflow-hidden" aria-labelledby="offers-heading">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          titleAr="أحدث العروض"
          subtitleAr="عروض خاصة لفترة محدودة على خدماتنا المميزة - لا تفوت الفرصة!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="glass-card rounded-2xl overflow-hidden border-gold/10 hover:border-gold/30 transition-all duration-500 group card-glow relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Discount Badge */}
              <motion.div
                className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiTag size={16} />
                خصم {offer.discount}
              </motion.div>

              {/* Offer Badge */}
              {offer.badge && (
                <div className="absolute top-4 left-4 z-10 bg-gold text-dark-bg text-xs font-bold px-3 py-1 rounded-full">
                  {offer.badge}
                </div>
              )}

              {/* Image */}
              <div
                className="h-52 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 relative"
                style={{ backgroundImage: `url(${offer.image}?w=800&q=80)` }}
                role="img"
                aria-label={offer.imageAlt}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold mb-3 line-clamp-2">
                  {offer.titleAr}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {offer.descriptionAr}
                </p>

                {/* Valid until */}
                {offer.validUntil && isOfferValid(offer.validUntil) && (
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                    <FiClock size={12} />
                    <span>ينتهي: {new Date(offer.validUntil).toLocaleDateString("ar-EG")}</span>
                  </div>
                )}

                <Button
                  variant="whatsapp"
                  size="sm"
                  whatsapp
                  whatsappMessage={offer.whatsappMessage}
                  className="w-full justify-center"
                >
                  <span className="flex items-center gap-2">
                    احجز العرض الآن
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ←
                    </motion.span>
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6">لم تجد العرض المناسب؟ تواصل معنا للحصول على عرض مخصص</p>
          <Button
            variant="primary"
            whatsapp
            whatsappMessage="مرحبًا، أريد استفسار عن عرض مخصص"
          >
            طلب عرض مخصص
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
