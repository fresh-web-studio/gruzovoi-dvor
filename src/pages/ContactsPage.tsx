import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface ContactsPageProps {
  onNavigate: (page: string) => void;
}

export function ContactsPage({
  onNavigate,
}: ContactsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} />
      <main>
        {/* Page Hero */}
        <section className="py-12 bg-white border-b-2 border-gray-300">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-10 bg-gray-300 max-w-xs md:max-w-sm mb-4 flex items-center">Контакты</div>
            <div className="flex gap-2 items-center">
              <div className="h-3 bg-gray-200 w-20">Главная</div>
              <span className="text-gray-400">/</span>
              <div className="h-3 bg-gray-200 w-24">Контакты</div>
            </div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-16 bg-gray-50 border-b-2 border-gray-300">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Address */}
              <div className="border-2 border-gray-400 p-8 bg-white">
                <div className="w-16 h-16 border-2 border-gray-400 mx-auto mb-6"></div>
                <div className="h-5 bg-gray-300 w-32 mx-auto mb-4"></div>
                <div className="h-3 bg-gray-200 w-full mb-2"></div>
                <div className="h-3 bg-gray-200 w-5/6 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 w-4/5 mx-auto"></div>
              </div>

              {/* Phone */}
              <div className="border-2 border-gray-400 p-8 bg-white">
                <div className="w-16 h-16 border-2 border-gray-400 mx-auto mb-6"></div>
                <div className="h-5 bg-gray-300 w-32 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 w-40 mx-auto mb-3"></div>
                <div className="h-4 bg-gray-200 w-36 mx-auto"></div>
              </div>

              {/* Email */}
              <div className="border-2 border-gray-400 p-8 bg-white">
                <div className="w-16 h-16 border-2 border-gray-400 mx-auto mb-6"></div>
                <div className="h-5 bg-gray-300 w-32 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 w-48 mx-auto mb-3"></div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="border-2 border-gray-400 p-4 md:p-8 bg-white">
              <div className="h-6 bg-gray-300 w-48 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between mb-3 pb-3 border-b border-gray-300">
                    <div className="h-4 bg-gray-200 w-32"></div>
                    <div className="h-4 bg-gray-200 w-40"></div>
                  </div>
                  <div className="flex justify-between mb-3 pb-3 border-b border-gray-300">
                    <div className="h-4 bg-gray-200 w-32"></div>
                    <div className="h-4 bg-gray-200 w-40"></div>
                  </div>
                  <div className="flex justify-between mb-3 pb-3 border-b border-gray-300">
                    <div className="h-4 bg-gray-200 w-32"></div>
                    <div className="h-4 bg-gray-200 w-40"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3 pb-3 border-b border-gray-300">
                    <div className="h-4 bg-gray-200 w-32"></div>
                    <div className="h-4 bg-gray-200 w-40"></div>
                  </div>
                  <div className="flex justify-between mb-3 pb-3 border-b border-gray-300">
                    <div className="h-4 bg-gray-200 w-32"></div>
                    <div className="h-4 bg-gray-200 w-40"></div>
                  </div>
                  <div className="flex justify-between mb-3 pb-3 border-b border-gray-300">
                    <div className="h-4 bg-gray-200 w-32"></div>
                    <div className="h-4 bg-gray-200 w-40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white border-b-2 border-gray-300">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="h-8 bg-gray-300 max-w-sm md:max-w-md mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 max-w-xs md:max-w-lg mx-auto"></div>
            </div>

            <div className="border-2 border-gray-400 p-4 md:p-8 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name field */}
                <div>
                  <div className="h-4 bg-gray-200 w-24 mb-2"></div>
                  <div className="h-12 border-2 border-gray-400 bg-white"></div>
                </div>

                {/* Phone field */}
                <div>
                  <div className="h-4 bg-gray-200 w-24 mb-2"></div>
                  <div className="h-12 border-2 border-gray-400 bg-white"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Email field */}
                <div>
                  <div className="h-4 bg-gray-200 w-24 mb-2"></div>
                  <div className="h-12 border-2 border-gray-400 bg-white"></div>
                </div>

                {/* Subject field */}
                <div>
                  <div className="h-4 bg-gray-200 w-24 mb-2"></div>
                  <div className="h-12 border-2 border-gray-400 bg-white"></div>
                </div>
              </div>

              {/* Message field */}
              <div className="mb-6">
                <div className="h-4 bg-gray-200 w-24 mb-2"></div>
                <div className="h-32 border-2 border-gray-400 bg-white"></div>
              </div>

              {/* Submit button */}
              <button className="px-8 py-3 border-2 border-gray-600 bg-gray-800 text-white">
                Отправить сообщение
              </button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-[500px] border-b-2 border-gray-300">
          {/* Map placeholder */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">
              [Карта местоположения]
            </span>
          </div>

          {/* Info card overlay */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white border-2 border-gray-400 p-4 md:p-6 shadow-lg max-w-sm w-[calc(100%-2rem)] md:w-auto">
            {/* Company name */}
            <div className="mb-4">
              <div className="h-6 bg-gray-300 w-48 mb-2"></div>
            </div>

            {/* Address */}
            <div className="mb-3 flex gap-2">
              <div className="w-5 h-5 border border-gray-400 flex-shrink-0 mt-0.5"></div>
              <div className="flex-1">
                <div className="h-3 bg-gray-200 w-full mb-1"></div>
                <div className="h-3 bg-gray-200 w-4/5"></div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-3 flex gap-2">
              <div className="w-5 h-5 border border-gray-400 flex-shrink-0"></div>
              <div className="h-3 bg-gray-200 w-32 mt-1"></div>
            </div>

            {/* Email */}
            <div className="mb-4 flex gap-2">
              <div className="w-5 h-5 border border-gray-400 flex-shrink-0"></div>
              <div className="h-3 bg-gray-200 w-40 mt-1"></div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-4"></div>

            {/* Button */}
            <button className="w-full px-6 py-3 border-2 border-gray-600 bg-gray-800 text-white">
              Построить маршрут
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}