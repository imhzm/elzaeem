"use client";

import { motion } from "framer-motion";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import PortfolioSection from "@/sections/PortfolioSection";
import WhyEliteShieldSection from "@/sections/WhyEliteShieldSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FAQSection from "@/sections/FAQSection";
import OffersSection from "@/sections/OffersSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CallNowButton from "@/components/CallNowButton";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <div id="home" className="scroll-mt-20">
          <HeroSection />
        </div>
        <div id="about" className="scroll-mt-20">
          <AboutSection />
        </div>
        <div id="services" className="scroll-mt-20">
          <ServicesSection />
        </div>
        <div id="portfolio" className="scroll-mt-20">
          <PortfolioSection />
        </div>
        <WhyEliteShieldSection />
        <TestimonialsSection />
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
      </motion.main>
    </>
  );
}
