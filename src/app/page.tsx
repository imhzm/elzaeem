import type { Metadata } from "next";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import PortfolioSection from "@/sections/PortfolioSection";
import WhyElzaeemSection from "@/sections/WhyElzaeemSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FAQSection from "@/sections/FAQSection";
import OffersSection from "@/sections/OffersSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CallNowButton from "@/components/CallNowButton";
import Preloader from "@/components/Preloader";

const baseUrl = "https://elzaeem-international.skywaveads.com";
const ogImage = `${baseUrl}/images/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "مركز الزعيم الدولي لكماليات السيارات | طباعة ودعاية وإعلان",
    template: "%s | مركز الزعيم الدولي لكماليات السيارات",
  },
  description:
    "مركز الزعيم الدولي لكماليات السيارات - الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان. شاشات أندرويد، ليدات، أفلام حماية PPF، فاميه سيارات، واجهات كلادينج، بنرات، ورول أب، استيكرات بأعلى جودة في مصر. خدمة احترافية وضمان حقيقي. الرقم الضريبي: 271-810-343",
  keywords: [
    "كماليات سيارات",
    "شاشات سيارات أندرويد",
    "ليدات سيارات",
    "أفلام حماية PPF",
    "فاميه سيارات",
    "واجهات كلادينج",
    "طباعة دعاية وإعلان",
    "بنرات ورول أب",
    "استيكرات واجهات",
    "مركز الزعيم الدولي لكماليات السيارات",
    "الزعيم الدولي",
    "كماليات سيارات مصر",
    "طباعة دعاية القاهرة",
    "شاشات سيارات دار السلام",
  ],
  authors: [{ name: "مركز الزعيم الدولي لكماليات السيارات", url: baseUrl }],
  creator: "مركز الزعيم الدولي لكماليات السيارات",
  publisher: "مركز الزعيم الدولي لكماليات السيارات",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    url: baseUrl,
    title: "مركز الزعيم الدولي لكماليات السيارات | طباعة ودعاية وإعلان",
    description:
      "مركز الزعيم الدولي لكماليات السيارات - الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان بأعلى جودة في مصر. خدمة احترافية وضمان حقيقي.",
    siteName: "مركز الزعيم الدولي لكماليات السيارات",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "مركز الزعيم الدولي لكماليات السيارات - طباعة ودعاية وإعلان",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز الزعيم الدولي لكماليات السيارات | طباعة ودعاية وإعلان",
    description:
      "مركز الزعيم الدولي لكماليات السيارات - الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان بأعلى جودة في مصر.",
    images: [ogImage],
    creator: "@elzaeem",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function Home() {
  return (
    <>
      <Preloader />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <WhyElzaeemSection />
      <TestimonialsSection />
      <FAQSection />
      <div id="offers">
        <OffersSection />
      </div>
      <div id="contact-form">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <CallNowButton />
    </>
  );
}
