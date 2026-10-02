"use client";

import { useState } from "react";
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
    <section id="contact-form" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          titleAr="تواصل معنا"
          subtitleAr="نحن هنا للإجابة على استفساراتك وتنفيذ طلبك بأسرع وقت"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-6">طلب عرض سعر</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">الاسم</label>
                <input
                  type="text"
                  required
                  className="w-full bg-dark-gray border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-dark-gray border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">نوع الخدمة</label>
                <select
                  required
                  className="w-full bg-dark-gray border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option value="">اختر الخدمة</option>
                  {allServices.map((service) => (
                    <option key={service.id} value={service.titleAr}>
                      {service.titleAr}
                    </option>
                  ))}
                  <option value="خدمة أخرى">خدمة أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">تفاصيل الطلب</label>
                <textarea
                  rows={4}
                  className="w-full bg-dark-gray border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                إرسال على واتساب
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-6">معلومات التواصل</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhone size={24} className="text-gold" />
                <div>
                  <p className="text-white font-bold">رقم الهاتف</p>
                  <a
                    href="tel:+201067894321"
                    className="text-gray-300 hover:text-gold"
                  >
                    +201067894321
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt size={24} className="text-gold mt-1" />
                <div>
                  <p className="text-white font-bold">العنوان</p>
                  <p className="text-gray-300">
                    دار السلام، شارع الفيوم، القاهرة، مصر
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaClock size={24} className="text-gold" />
                <div>
                  <p className="text-white font-bold">مواعيد العمل</p>
                  <p className="text-gray-300">
                    السبت - الخميس: 9 ص - 9 م
                  </p>
                  <p className="text-gray-300">الجمعة: مغلق</p>
                </div>
              </div>

              <Button
                variant="whatsapp"
                size="lg"
                whatsapp
                whatsappMessage="مرحبًا، أريد التواصل مع إيليت شيلد"
                className="w-full justify-center"
              >
                تواصل واتساب مباشر
              </Button>

              {/* Google Maps Embed */}
              <div className="h-64 rounded-xl overflow-hidden border border-gold/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.864244567722!2d31.281203!3d29.961994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sDar%20El%20Salam%2C%20Al%20Fayoum%20Street%2C%20Cairo!2sDar+El+Salam%2C+Cairo+Governorate!5e0!3m2!1sen!2seg!4v1714646400000!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع إيليت شيلد"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
