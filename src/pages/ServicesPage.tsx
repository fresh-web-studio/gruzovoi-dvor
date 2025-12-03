import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({
  onNavigate,
}: ServicesPageProps) {
  const services = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      {/* Page Header */}

      <section className="py-12 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-10 bg-gray-300 w-64 mb-4 flex items-center">
            Все наши услуги
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-3 bg-gray-200 w-20">Главная</div>
            <span className="text-gray-400">/</span>
            <div className="h-3 bg-gray-200 w-48">
              Все наши услуги
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="border-2 border-gray-400 p-6 bg-white"
              >
                {/* Icon placeholder */}
                <div className="w-16 h-16 border-2 border-gray-400 mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">
                    [Иконка]
                  </span>
                </div>

                {/* Service title */}
                <div className="h-6 bg-gray-300 w-3/4 mb-3"></div>

                {/* Service description */}
                <div className="space-y-2 mb-4">
                  <div className="h-3 bg-gray-200 w-full"></div>
                  <div className="h-3 bg-gray-200 w-full"></div>
                  <div className="h-3 bg-gray-200 w-2/3"></div>
                </div>

                {/* Learn more button */}
                <button className="px-4 py-2 border border-gray-600 text-sm text-gray-700">
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}