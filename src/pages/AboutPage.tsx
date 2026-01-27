import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

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

      {/* Company Info Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Реквизиты компании
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Левая колонка */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BuildingOfficeIcon className="h-5 w-5 text-red-600" />
                Юридические данные
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-gray-900">ОГРН:</dt>
                  <dd className="text-gray-700">1156623000753</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">ИНН:</dt>
                  <dd className="text-gray-700">6623108028</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">КПП:</dt>
                  <dd className="text-gray-700">662301001</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">ОКВЭД:</dt>
                  <dd className="text-gray-700">45.20</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">ОКПО:</dt>
                  <dd className="text-gray-700">48588994</dd>
                </div>
              </dl>
            </div>

            {/* Правая колонка */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Банковские реквизиты
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-gray-900">Расчётный счёт:</dt>
                  <dd className="text-gray-700 font-mono">40702810338240000539</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">БИК:</dt>
                  <dd className="text-gray-700 font-mono">046577964</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Кор. счёт:</dt>
                  <dd className="text-gray-700 font-mono">30101810100000000964</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Банк:</dt>
                  <dd className="text-gray-700">
                    Филиал "Екатеринбургский" АО "АЛЬФА-БАНК" г. Екатеринбург
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Доп инфо */}
          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-gray-900">Налоговый режим:</dt>
                <dd className="text-gray-700">
                  Упрощённая система налогообложения (УСН) — не является плательщиком НДС
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Директор:</dt>
                <dd className="text-gray-700">
                  Сунцов Владислав Викторович (действует на основании Устава)
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}