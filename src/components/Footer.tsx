import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-dark-gray border-t border-gold/20 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <img src="/logo.png" alt="ELITE SHIELD" className="h-12 w-auto mb-4" />
          <p className="text-gray-300 mb-4">
            إيليت شيلد لكماليات السيارات والطباعة والدعاية والإعلان
          </p>
          <a
            href={getWhatsAppLink("201067894321", "مرحبًا، أريد التواصل مع إيليت شيلد")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-colors"
          >
            <FaWhatsapp />
            تواصل واتساب
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">روابط سريعة</h4>
          <ul className="space-y-2">
            {[
              { label: "الرئيسية", href: "#home" },
              { label: "خدماتنا", href: "#services" },
              { label: "أعمالنا", href: "#portfolio" },
              { label: "العروض", href: "#offers" },
              { label: "تواصل معنا", href: "#contact-form" },
              { label: "الشروط والأحكام", href: "/terms" },
              { label: "سياسة الخصوصية", href: "/privacy" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">تواصل معنا</h4>
          <div className="flex gap-4 mb-4">
            {[
              {
                icon: FaFacebook,
                href: "https://facebook.com/eliteshield",
                color: "hover:text-[#1877F2]",
              },
              {
                icon: FaInstagram,
                href: "https://instagram.com/eliteshield",
                color: "hover:text-[#E4405F]",
              },
              {
                icon: FaTiktok,
                href: "https://tiktok.com/@eliteshield",
                color: "hover:text-[#000000]",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${social.color} transition-colors`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-300">
            الهاتف: <a href="tel:+201067894321" className="hover:text-gold">01067894321</a>
          </p>
          <p className="text-gray-300 mt-2">
            العنوان: دار السلام، شارع الفيوم، القاهرة
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gold/20 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} ELITE SHIELD. جميع الحقوق محفوظة.
        </p>
        <p className="flex items-center gap-1.5 text-gray-300">
          <span>تم التصميم بكل</span>
          <span className="text-red-500 font-normal">❤️</span>
          <span>بواسطة</span>
          <a
            href="https://www.skywaveads.com"
            target="_blank"
            rel="follow"
            className="underline underline-offset-4 text-gold hover:text-yellow-400 font-medium transition-colors"
          >
            Sky Wave
          </a>
        </p>
      </div>
    </footer>
  );
}
