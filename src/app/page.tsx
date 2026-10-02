"use client";

import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import ProcessSection from "@/sections/ProcessSection";
import PortfolioSection from "@/sections/PortfolioSection";
import WhyEliteShieldSection from "@/sections/WhyEliteShieldSection";
import FAQSection from "@/sections/FAQSection";
import OffersSection from "@/sections/OffersSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CallNowButton from "@/components/CallNowButton";
export default function Home() {
  return (
    <main className="flex-1 min-h-screen bg-dark-bg text-white">
        <div id="home" className="scroll-mt-20">
          <HeroSection />
        </div>
        <div id="about" className="scroll-mt-20">
          <AboutSection />
        </div>
        <div id="services" className="scroll-mt-20">
          <ServicesSection />
        </div>
        <ProcessSection />
        <div id="portfolio" className="scroll-mt-20">
          <PortfolioSection />
        </div>
        <WhyEliteShieldSection />
        <FAQSection />
        <div id="offers" className="scroll-mt-20">
          <OffersSection />
        </div>
        <div id="contact-form" className="scroll-mt-20">
          <ContactSection />
        </div>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <CallNowButton />
    </main>
  );
}
