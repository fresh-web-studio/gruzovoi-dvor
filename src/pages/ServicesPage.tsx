// src/pages/ServicesPage.tsx
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ALL_SERVICES } from "../components/ServicesSection";
import { ServiceIcon } from "../components/ServiceIcons";
import type { ServiceIconKey } from "../components/ServiceIcons";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} />

      <main className="py-16 border-b border-gray-300 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4">
          {/* Заголовок страницы */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
              Все услуги сервиса
            </h1>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Полный перечень работ по техническому обслуживанию и ремонту грузовой техники.
            </p>
          </div>

          {/* Сетка всех услуг с теми же карточками и иконками */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES.map((service) => (
              <article
                key={service.name}
                className="
                  border border-border
                  rounded-xl
                  bg-card
                  p-6
                  shadow-sm
                  hover:border-primary/70 hover:shadow-md
                  transition-colors transition-shadow
                "
              >
                <div className="w-16 h-16 rounded-lg border border-border mb-4 flex items-center justify-center bg-primary/5">
                  <ServiceIcon type={service.icon as ServiceIconKey} />
                </div>

                <h2 className="text-base md:text-lg font-semibold text-foreground mb-3">
                  {service.name}
                </h2>

                <p className="text-sm text-muted-foreground mb-4">
                  {service.shortDescription}
                </p>

                <div className="text-sm font-semibold text-foreground">
                  {service.price}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
