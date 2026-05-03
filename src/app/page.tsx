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
const ogImage = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "مركز الزعيم الدولي | كماليات سيارات وطباعة ودعاية",
    template: "%s | مركز الزعيم الدولي",
  },
  description:
    "مركز الزعيم الدولي - الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان. شاشات أندرويد، ليدات، أفلام حماية PPF، واجهات كلادينج، بنرات، ورول أب، استيكرات بأعلى جودة في مصر. خدمة احترافية وضمان حقيقي.",
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
    "مركز الزعيم الدولي",
    "الزعيم الدولي",
    "كماليات سيارات مصر",
    "طباعة دعاية القاهرة",
    "شاشات سيارات دار السلام",
  ],
  authors: [{ name: "ELZAEEM INTERNATIONAL", url: baseUrl }],
  creator: "ELZAEEM INTERNATIONAL",
  publisher: "ELZAEEM INTERNATIONAL",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    url: baseUrl,
    title: "مركز الزعيم الدولي | كماليات سيارات وطباعة ودعاية",
    description:
      "الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان بأعلى جودة في مصر. خدمة احترافية وضمان حقيقي.",
    siteName: "ELZAEEM INTERNATIONAL",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "مركز الزعيم الدولي - كماليات سيارات وطباعة",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز الزعيم الدولي | كماليات سيارات وطباعة ودعاية",
    description:
      "الحلول المتكاملة لكماليات السيارات والطباعة والدعاية والإعلان بأعلى جودة في مصر.",
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
