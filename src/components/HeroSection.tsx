import heroImage from "../assets/images/hero-image.png";

export function HeroSection() {
  return (
    <section className="border-b border-border bg-card py-20">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая колонка: текст */}
          <div className="flex-1">
            <div className="space-y-6">
              {/* Заголовок и подзаголовок */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                  Ремонт грузовых автомобилей и спецтехники в Нижнем Тагиле
                </h1>
                <p className="text-lg text-muted-foreground">
                  «Грузовой Двор‑НТ» — ремонт механической топливной аппаратуры, двигателей,
                  КПП, мостов и ходовой. Сокращаем простой техники и берём на себя подбор
                  запчастей.
                </p>
              </div>

              {/* Дополнительное пояснение */}
              <div className="space-y-2">
                <p className="text-base text-muted-foreground">
                  Работаем с грузовиками, автобусами и спецтехникой. Гарантируем качество работ,
                  реальные сроки и понятные цены.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-md
                    bg-primary text-primary-foreground
                    text-sm font-medium
                    hover:bg-primary/90
                  "
                >
                  Оставить заявку на ремонт
                </button>

                <button
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-md
                    border border-border
                    bg-card text-foreground
                    text-sm font-medium
                    hover:bg-accent
                  "
                >
                  Позвонить: +7&nbsp;950&nbsp;200‑65‑64
                </button>
              </div>
            </div>
          </div>

          {/* Правая колонка: изображение/заглушка */}
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
    </section>
  );
}
