"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { allServices } from "@/data/services";
import { getWhatsAppLink } from "@/lib/utils";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحبًا، أنا ${formData.name}، رقم هاتفي ${formData.phone}. أريد طلب ${formData.service ? `خدمة ${formData.service}` : "خدمة"}. التفاصيل: ${formData.details}`;
    window.open(getWhatsAppLink("201067894321", message), "_blank");
  };

  return (
    <section id="contact-form" className="py-24 px-4 bg-dark-bg relative overflow-hidden">
      {/* Decorative mesh gradients */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          titleAr="تواصل معنا"
          subtitleAr="نحن هنا للإجابة على استفساراتك وتنفيذ طلبك بأسرع وقت"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 rounded-2xl border-gold/10">
              <h3 className="text-2xl font-bold text-gold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20">
                  📝
                </span>
                طلب عرض سعر
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-gray-300 mb-2 font-medium">الاسم</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-dark-bg/80 border border-gold/30 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="أدخل اسمك"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-gray-300 mb-2 font-medium">رقم الهاتف</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-dark-bg/80 border border-gold/30 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="أدخل رقم هاتفك"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-gray-300 mb-2 font-medium">نوع الخدمة</label>
                  <select
                    required
                    className="w-full bg-dark-bg/80 border border-gold/30 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="">إختر الخدمة</option>
                    {allServices.map((service) => (
                      <option key={service.id} value={service.titleAr}>
                        {service.titleAr}
                      </option>
                    ))}
                    <option value="خدمة أخرى">خدمة أخرى</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-gray-300 mb-2 font-medium">تفاصيل الطلب</label>
                  <textarea
                    rows={4}
                    className="w-full bg-dark-bg/80 border border-gold/30 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    placeholder="اكتب تفاصيل طلبك هنا..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-lg py-4 shadow-xl shadow-gold/30 btn-gold-glow"
                  >
                    <span className="flex items-center justify-center gap-2">
                      إرسال على واتساب
                      <span className="text-2xl">→</span>
                    </span>
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border-gold/10">
              <h3 className="text-2xl font-bold text-gold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20">
                  📞
                </span>
                معلومات التواصل
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: FaPhone,
                    title: "رقم الهاتف",
                    content: "+201067894321",
                    link: "tel:+201067894321",
                    color: "text-gold",
                  },
                  {
                    icon: FaWhatsapp,
                    title: "واتساب",
                    content: "01067894321",
                    link: "https://wa.me/201067894321",
                    color: "text-[#25D366]",
                  },
                  {
                    icon: FaMapMarkerAlt,
                    title: "العنوان",
                    content: "دار السلام، شارع الفيوم، القاهرة، مصر",
                    link: null,
                    color: "text-red-500",
                  },
                  {
                    icon: FaClock,
                    title: "مواعيد العمل",
                    content: "السبت - الخميس: 9 ص - 9 م | الجمعة: مغلق",
                    link: null,
                    color: "text-gold",
                  },
                  {
                    icon: FaWhatsapp,
                    title: "الرقم الضريبي",
                    content: "271-810-343",
                    link: null,
                    color: "text-gold",
                    isTax: true,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className={`w-12 h-12 bg-dark-bg/80 border border-gold/20 rounded-xl flex items-center justify-center group-hover:border-gold/50 transition-colors`}>
                      {item.isTax ? (
                        <span className="text-xl">🧾</span>
                      ) : (
                        <item.icon size={20} className={item.color} />
                      )}
                    </div>
                    <div>
                      <p className="text-white font-bold mb-1">{item.title}</p>
                      {item.isTax ? (
                        <p className="text-gold font-bold text-lg">{item.content}</p>
                      ) : item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-300 hover:text-gold transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="whatsapp"
                size="lg"
                whatsapp
                whatsappMessage="مرحبًا، أريد التواصل مع مركز الزعيم الدولي"
                className="w-full justify-center text-lg py-4 shadow-xl shadow-[#25D366]/30"
              >
                تواصل واتساب مباشر
              </Button>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="h-64 rounded-2xl overflow-hidden border border-gold/20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.864244567722!2d31.281203!3d29.961994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sen!2seg!4v1714646400000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مركز الزعيم الدولي"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
