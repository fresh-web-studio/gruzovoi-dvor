import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSeoMetadata } from "../hooks/useSeoMetadata";
import { ImageLightbox } from "../components/ImageLightbox";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  // Ремонт КПП
  { id: 1, title: "Ремонт КПП", description: "Разборка и диагностика", image: "remont_kpp_2.jpg", category: "kpp" },
  { id: 2, title: "Ремонт КПП", description: "Замена компонентов", image: "remont_kpp_4.jpg", category: "kpp" },
  { id: 3, title: "Ремонт КПП", description: "Сборка узла", image: "remont_kpp_5.jpg", category: "kpp" },
  { id: 4, title: "Ремонт КПП", description: "Проверка работы", image: "remont_kpp_6.jpg", category: "kpp" },
  { id: 5, title: "Ремонт КПП", description: "Финальный этап", image: "remont_kpp_7.jpg", category: "kpp" },
  { id: 6, title: "Ремонт КПП", description: "Готовый результат", image: "remont_kpp_8.jpg", category: "kpp" },
  // Венец маховика
  { id: 7, title: "Венец маховика", description: "Подготовка к замене", image: "venets_makhovika_3.jpg", category: "flywheel" },
  { id: 8, title: "Венец маховика", description: "Установка нового", image: "venets_makhovika_4.jpg", category: "flywheel" },
  // Восстановление крепления оси балансира
  { id: 9, title: "Крепление оси балансира", description: "Начальный этап ремонта", image: "vosstanovlenie_balansira_1.jpg", category: "suspension" },
  { id: 10, title: "Крепление оси балансира", description: "Восстановление", image: "vosstanovlenie_balansira_3.jpg", category: "suspension" },
  { id: 11, title: "Крепление оси балансира", description: "Замена элементов", image: "vosstanovlenie_balansira_4.jpg", category: "suspension" },
  { id: 12, title: "Крепление оси балансира", description: "Финальный результат", image: "vosstanovlenie_balansira_5.jpg", category: "suspension" },
  // Общий вид
  { id: 13, title: "Общий вид", description: "Вид сервисной зоны", image: "obshchiy_vid.jpg", category: "suspension" },
  // ТО
  { id: 14, title: "ТО Рено Мастер", description: "Плановое техническое обслуживание", image: "to_reno_master_1.jpg", category: "service" },
  { id: 15, title: "ТО Рено Мастер", description: "Диагностика", image: "to_reno_master_2.jpg", category: "service" },
  { id: 16, title: "ТО Рено Мастер", description: "Обслуживание узлов", image: "to_reno_master_3.jpg", category: "service" },
  // Замена шкворней
  { id: 17, title: "Замена шкворней Шакман", description: "Рулевое управление", image: "shkornii_shakman_1.jpg", category: "steering" },
  { id: 18, title: "Замена шкворней Шакман", description: "Разборка", image: "shkornii_shakman_2.jpg", category: "steering" },
  { id: 19, title: "Замена шкворней Шакман", description: "Установка новых", image: "shkornii_shakman_3.jpg", category: "steering" },
  // Урал
  { id: 20, title: "Ремонт Урал", description: "Комплексный ремонт", image: "ural_1.jpg", category: "ural" },
  { id: 21, title: "Ремонт Урал", description: "Диагностика", image: "ural_2.jpg", category: "ural" },
  { id: 22, title: "Ремонт Урал", description: "Обслуживание", image: "ural_3.jpg", category: "ural" },
  { id: 23, title: "Ремонт Урал", description: "Готовый результат", image: "ural_4.jpg", category: "ural" },
  // Автоэлектрик
  { id: 24, title: "Автоэлектрик", description: "Диагностика электрооборудования", image: "renomaster.jpg", category: "electronics" },
  { id: 25, title: "Автоэлектрик", description: "Ремонт проводки", image: "renomaster_2.jpg", category: "electronics" },
  // ТО
  { id: 26, title: "ТО Рено Мастер", description: "Плановое техническое обслуживание", image: "IMG_20260825_150149.jpg", category: "service" },
  { id: 27, title: "ТО Рено Мастер", description: "Техническое обслуживание", image: "IMG_20260825_150209.jpg", category: "service" },
  // Общие фото
  { id: 28, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150513.jpg", category: "general" },
  { id: 31, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150515.jpg", category: "general" },
  { id: 32, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150518.jpg", category: "general" },
  { id: 33, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150520.jpg", category: "general" },
  { id: 34, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150522.jpg", category: "general" },
  { id: 35, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150524.jpg", category: "general" },
  { id: 36, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150527.jpg", category: "general" },
  { id: 37, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150529.jpg", category: "general" },
  { id: 38, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150532.jpg", category: "general" },
  { id: 39, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150534.jpg", category: "general" },
  { id: 40, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150537.jpg", category: "general" },
  { id: 41, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150539.jpg", category: "general" },
  { id: 42, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150542.jpg", category: "general" },
  { id: 43, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150545.jpg", category: "general" },
  { id: 44, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150548.jpg", category: "general" },
  { id: 45, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150550.jpg", category: "general" },
  { id: 46, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150553.jpg", category: "general" },
  { id: 47, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150555.jpg", category: "general" },
  { id: 48, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150557.jpg", category: "general" },
  { id: 49, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150559.jpg", category: "general" },
  { id: 50, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150602.jpg", category: "general" },
  { id: 51, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150604.jpg", category: "general" },
  { id: 52, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150606.jpg", category: "general" },
  { id: 53, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150609.jpg", category: "general" },
  { id: 54, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150611.jpg", category: "general" },
  { id: 55, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150616.jpg", category: "general" },
  { id: 56, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150618.jpg", category: "general" },
  { id: 57, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150621.jpg", category: "general" },
  { id: 58, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150623.jpg", category: "general" },
  { id: 59, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150626.jpg", category: "general" },
  { id: 60, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150630.jpg", category: "general" },
  { id: 61, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150633.jpg", category: "general" },
  { id: 62, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150636.jpg", category: "general" },
  { id: 63, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150638.jpg", category: "general" },
  { id: 64, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150641.jpg", category: "general" },
  { id: 65, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150643.jpg", category: "general" },
  { id: 66, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150646.jpg", category: "general" },
  { id: 67, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150649.jpg", category: "general" },
  { id: 68, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150652.jpg", category: "general" },
  { id: 69, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150654.jpg", category: "general" },
  { id: 70, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150656.jpg", category: "general" },
  { id: 71, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150659.jpg", category: "general" },
  { id: 72, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150701.jpg", category: "general" },
  { id: 73, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150704.jpg", category: "general" },
  { id: 74, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150707.jpg", category: "general" },
  { id: 75, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150710.jpg", category: "general" },
  { id: 76, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150713.jpg", category: "general" },
  { id: 77, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150716.jpg", category: "general" },
  { id: 78, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150719.jpg", category: "general" },
  { id: 79, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150722.jpg", category: "general" },
  { id: 80, title: "Общие фото", description: "Сервисная зона", image: "IMG_20260825_150724.jpg", category: "general" },
];

const categories = [
  { id: "all", label: "Все работы", count: portfolioItems.length },
  { id: "kpp", label: "Ремонт КПП", count: portfolioItems.filter((i) => i.category === "kpp").length },
  { id: "flywheel", label: "Маховик", count: portfolioItems.filter((i) => i.category === "flywheel").length },
  { id: "suspension", label: "Подвеска", count: portfolioItems.filter((i) => i.category === "suspension").length },
  { id: "service", label: "ТО", count: portfolioItems.filter((i) => i.category === "service").length },
  { id: "steering", label: "Рулевое", count: portfolioItems.filter((i) => i.category === "steering").length },
  { id: "ural", label: "Урал", count: portfolioItems.filter((i) => i.category === "ural").length },
  { id: "electronics", label: "Автоэлектрик", count: portfolioItems.filter((i) => i.category === "electronics").length },
  { id: "general", label: "Общие", count: portfolioItems.filter((i) => i.category === "general").length },
];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useSeoMetadata({
    title: "Наши работы — Грузовой Двор‑НТ",
    description: "Примеры выполненных работ по ремонту грузовиков в Нижнем Тагиле. Ремонт КПП, двигателей, ходовой части и другое обслуживание.",
  });

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
  };
  const nextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) setLightboxIndex(lightboxIndex + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Заголовок */}
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Наши работы
            </h1>
            <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-gray-700 leading-relaxed">
              Примеры выполненных работ по ремонту и обслуживанию грузовых автомобилей.
              Используйте фильтрацию для просмотра работ по категориям.
            </p>
          </div>

          {/* Фильтры */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[#c92424] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat.label}
                <span className={`ml-1.5 text-xs ${activeCategory === cat.id ? "text-red-200" : "text-gray-400"}`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>

          {/* Галерея */}
          {filteredItems.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="group rounded-lg overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 text-left"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={`/photos/${item.image}`}
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
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-sm">В этой категории пока нет работ.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          image={filteredItems[lightboxIndex].image}
          title={filteredItems[lightboxIndex].title}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filteredItems.length - 1}
        />
      )}
    </div>
  );
}
