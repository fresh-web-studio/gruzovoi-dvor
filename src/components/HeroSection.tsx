import { useState } from "react";
import heroImage from "../assets/images/hero-image.png";
import { CallbackModal } from "../components/CallbackModal";

export function HeroSection() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const openCallbackModal = () => setIsCallbackOpen(true);
  const closeCallbackModal = () => setIsCallbackOpen(false);

  const handleScrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="border-b border-border bg-card py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая колонка: текст */}
          <div className="flex-1">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                  Ремонт грузовых автомобилей и спецтехники в Нижнем Тагиле
                </h1>
                <p className="text-lg text-muted-foreground">
                  «Грузовой Двор‑НТ» — это сертифицированный, светлый, чистый, теплый сервис. Ремонт двигателей, КПП, редукторов, ходовой части, механической топливной аппаратуры.

                </p>
              </div>

              <div className="space-y-2">
                <p className="text-base text-muted-foreground">
                  Работаем с грузовиками, автобусами и спецтехникой. Гарантируем качество работ,
                  реальные сроки и понятные цены.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                {/* Скролл к форме заявки */}
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-md
                    bg-primary text-primary-foreground
                    text-sm font-medium
                    hover:bg-primary/90
                    cursor-pointer
                  "
                >
                  Оставить заявку на ремонт
                </button>

                {/* Мобилка: прямой звонок */}
                <a
                  href="tel:+79502006564"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-md
                    border border-border
                    bg-card text-foreground
                    text-sm font-medium
                    hover:bg-primary hover:text-white
                    cursor-pointer
                    sm:hidden
                  "
                >
                  Позвонить на номер
                </a>

                {/* ПК/планшеты: модальное окно «Заказать звонок» */}
                <button
                  type="button"
                  onClick={openCallbackModal}
                  className="
                    hidden sm:inline-flex items-center justify-center
                    px-6 py-3 rounded-md
                    border border-border
                    bg-card text-foreground
                    text-sm font-medium
                    hover:bg-primary hover:text-white
                    cursor-pointer
                  "
                >
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>

          {/* Правая колонка: изображение */}
          <div className="flex-1">
            <div className="w-full h-80 border border-border flex items-center justify-center bg-card">
              <img
                src={heroImage}
                alt="Ремонт грузовых автомобилей и спецтехники"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Модалка */}
      <CallbackModal open={isCallbackOpen} onClose={closeCallbackModal} />
    </section>
  );
}
