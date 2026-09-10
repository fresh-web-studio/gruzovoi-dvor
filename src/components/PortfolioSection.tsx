import { Link } from "react-router-dom";
import { ImageLightbox } from "./ImageLightbox";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Ремонт КПП",
    description: "Разборка и диагностика",
    image: "remont_kpp_2.jpg",
    category: "kpp",
  },
  {
    id: 2,
    title: "Венец маховика",
    description: "Замена зубчатого венца",
    image: "venets_makhovika.jpg",
    category: "flywheel",
  },
  {
    id: 3,
    title: "Восстановление крепления оси балансира",
    description: "Ремонт подвески",
    image: "vosstanovlenie_balansira_1.jpg",
    category: "suspension",
  },
  {
    id: 4,
    title: "Замена шкворней на Шакмане",
    description: "Обслуживание рулевого управления",
    image: "shkornii_shakman_1.jpg",
    category: "steering",
  },
  {
    id: 5,
    title: "ТО Рено Мастер",
    description: "Плановое техническое обслуживание",
    image: "to_reno_master_1.jpg",
    category: "service",
  },
  {
    id: 6,
    title: "Ремонт Урал",
    description: "Комплексный ремонт автомобиля",
    image: "ural_1.jpg",
    category: "ural",
  },
  {
    id: 7,
    title: "Автоэлектрик",
    description: "Диагностика электрооборудования",
    image: "renomaster.jpg",
    category: "electronics",
  },
  {
    id: 8,
    title: "Общий вид",
    description: "Вид сервисной зоны",
    image: "obshchiy_vid.jpg",
    category: "suspension",
  },
  {
    id: 9,
    title: "Износ сцепления",
    description: "Замена комплекта",
    image: "IMG_20260825_150649.jpg",
    category: "clutch",
  },
];

export function PortfolioSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
  };
  const nextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < portfolioItems.length - 1) setLightboxIndex(lightboxIndex + 1);
  };

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Наши работы
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-gray-700 leading-relaxed">
            Примеры выполненных работ по ремонту и обслуживанию грузовых автомобилей.
          </p>
        </div>

        {/* Сетка работ */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {portfolioItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group rounded-lg overflow-hidden border border-gray-200 bg-gray-50 hover:shadow-lg transition-shadow text-left"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={`${import.meta.env.BASE_URL}photos/${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-600">{item.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Кнопка */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c92424] text-white text-sm font-medium rounded hover:bg-red-700 transition-colors"
          >
            Смотреть все работы
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          image={portfolioItems[lightboxIndex].image}
          title={portfolioItems[lightboxIndex].title}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < portfolioItems.length - 1}
        />
      )}
    </section>
  );
}
