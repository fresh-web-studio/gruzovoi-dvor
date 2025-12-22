import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function AboutPage() {
  useDocumentTitle("Грузовой Двор‑НТ — О нашей компании")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Page Header */}
      <section className="py-12 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-10 bg-gray-300 max-w-xs md:max-w-sm mb-4 flex items-center">
            О нашей компании
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-3 bg-gray-200 w-20">Главная</div>
            <span className="text-gray-400">/</span>
            <div className="h-3 bg-gray-200 max-w-[12rem]">
              О нашей компании
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Text content */}
            <div className="space-y-4">
              <div className="h-6 bg-gray-300 w-3/4 mb-6"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-5/6"></div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-4/5"></div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="border-2 border-gray-400 h-80 flex items-center justify-center overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NDE5NjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Команда"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Image placeholder */}
            <div className="border-2 border-gray-400 h-80 flex items-center justify-center overflow-hidden lg:order-1 order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzY0MTgzNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Офис"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Text content */}
            <div className="space-y-4 lg:order-2 order-1">
              <div className="h-6 bg-gray-300 w-3/4 mb-6"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-4/5"></div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-5/6"></div>
              </div>
            </div>
          </div>

          {/* Third image - full width */}
          <div className="border-2 border-gray-400 h-96 flex items-center justify-center overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576073460124-e073bb8d87f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQyMTkyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Рабочее пространство"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-16 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <div className="h-8 bg-gray-300 max-w-xs md:max-w-sm mx-auto mb-4 flex items-center justify-center">
              Реквизиты компании
            </div>
          </div>

          <div className="border-2 border-gray-400 p-4 md:p-8 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-4">
                {/* Юридическое название */}
                <div className="border-b border-gray-300 pb-4">
                  <div className="h-4 bg-gray-300 w-48 mb-2 flex items-center pl-2">
                    Юридическое название:
                  </div>
                  <div className="h-3 bg-gray-200 w-full"></div>
                </div>

                {/* Адрес */}
                <div className="border-b border-gray-300 pb-4">
                  <div className="h-4 bg-gray-300 w-32 mb-2 flex items-center pl-2">
                    Юридический адрес:
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 w-full"></div>
                    <div className="h-3 bg-gray-200 w-3/4"></div>
                  </div>
                </div>

                {/* ОГРН */}
                <div className="border-b border-gray-300 pb-4">
                  <div className="h-4 bg-gray-300 w-24 mb-2 flex items-center pl-2">
                    ОГРН:
                  </div>
                  <div className="h-3 bg-gray-200 w-64"></div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                {/* ИНН */}
                <div className="border-b border-gray-300 pb-4">
                  <div className="h-4 bg-gray-300 w-16 mb-2 flex items-center pl-2">
                    ИНН:
                  </div>
                  <div className="h-3 bg-gray-200 w-48"></div>
                </div>

                {/* КПП */}
                <div className="border-b border-gray-300 pb-4">
                  <div className="h-4 bg-gray-300 w-16 mb-2 flex items-center pl-2">
                    КПП:
                  </div>
                  <div className="h-3 bg-gray-200 w-48"></div>
                </div>

                {/* Банковские реквизиты */}
                <div className="border-b border-gray-300 pb-4">
                  <div className="h-4 bg-gray-300 w-48 mb-2 flex items-center pl-2">
                    Банковские реквизиты:
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 w-full"></div>
                    <div className="h-3 bg-gray-200 w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}