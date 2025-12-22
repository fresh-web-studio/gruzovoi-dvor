import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { ExpectationSection } from "../components/ExpectationSection";
import { LogoSection } from "../components/LogoSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { WorkSection } from "../components/WorkSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { StatisticsSection } from "../components/StatisticsSection";
import { ContactForm } from "../components/ContactForm";
import { FAQSection } from "../components/FAQSection";
import { MapSection } from "../components/MapSection";
import { Footer } from "../components/Footer";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} />
      <main>
        <HeroSection />
        <ServicesSection onNavigate={onNavigate} />
        <AboutSection />
        <ExpectationSection />
        <LogoSection />
        <FeaturesSection />
        <WorkSection />
        <ReviewsSection />
        <StatisticsSection />
        <ContactForm />
        <FAQSection />
      </main>
      <MapSection />
      <Footer />
    </div>
  );
}
