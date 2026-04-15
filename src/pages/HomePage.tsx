import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { ExpectationSection } from "../components/ExpectationSection";
import { LogoSection } from "../components/LogoSection";
import { FeaturesSection } from "../components/FeaturesSection";
//import { WorkSection } from "../components/WorkSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { StatisticsSection } from "../components/StatisticsSection";
import { ContactForm } from "../components/ContactForm";
import { FAQSection } from "../components/FAQSection";
import { MapSection } from "../components/MapSection";
import { Footer } from "../components/Footer";
//import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useSeoMetadata } from "../hooks/useSeoMetadata";

export function HomePage() {

  useSeoMetadata({
    title: "Грузовой Двор‑НТ — Ремонт грузовиков в Нижнем Тагиле",
    description: "Грузовой Двор‑НТ — обслуживание и ремонт грузовиков в Нижнем Тагиле. Запчасти в наличии, договор на автопарк, рассрочка для ИП. Гарантия 6 месяцев.",
    canonicalUrl: "https://gruzovoi-dvor.ru"
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ExpectationSection />
        <LogoSection />
        <FeaturesSection />
        {/* <WorkSection /> */}
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
