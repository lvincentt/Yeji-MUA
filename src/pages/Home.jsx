import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import PortfolioSection from "../components/home/PortfolioSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="bg-base text-accent font-body overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
