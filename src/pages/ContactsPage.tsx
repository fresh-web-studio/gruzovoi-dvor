import { Header } from "../components/Header";
import { MapSection } from "../components/MapSection";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export function ContactsPage() {
  useDocumentTitle("Грузовой Двор‑НТ — Контакты");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Контакты
            </h1>
            <nav className="mt-3 flex items-center gap-2 text-sm text-gray-600">
              <a href="/" className="hover:text-red-600">
                Главная
              </a>
              <span>/</span>
              <span>Контакты</span>
            </nav>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Адрес */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 mb-4">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Адрес
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Свердловская обл., г. Нижний Тагил, ул. Трикотажников, д. 7
                </p>
                <p className="text-xs text-gray-500">
                  ОГРН 1156623000753
                </p>
              </div>

              {/* Телефоны */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 mb-4">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Телефоны
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Сервис:</span>{" "}
                    <a href="tel:+79502006564" className="text-red-600 hover:underline">
                      +7 950 200-65-64
                    </a>
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Запчасти:</span>{" "}
                    <a href="tel:+79502006172" className="text-red-600 hover:underline">
                      +7 950 200-61-72
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 mb-4">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Email
                </h3>
                <a
                  href="mailto:vsz@transfer01.ru"
                  className="text-sm text-red-600 hover:underline break-all"
                >
                  vsz@transfer01.ru
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Working Hours Section */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Режим работы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Понедельник — Пятница
                </h3>
                <p className="text-base text-gray-700">09:00 — 21:00</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Суббота — Воскресенье
                </h3>
                <p className="text-base text-gray-700">09:00 — 21:00</p>
              </div>
            </div>
          </div>
        </section>



        {/* Contact Form */}
        <ContactForm />
      </main>

      {/* Map */}
      <MapSection />

      <Footer />
    </div>
  );
}
