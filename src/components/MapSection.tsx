export function MapSection() {
  return (
    <section className="relative border-b border-gray-200 bg-gray-100">
      {/* Карта 2ГИС */}
      <div className="w-full h-[380px] sm:h-[420px] lg:h-[460px]">
        <iframe
          title="Карта проезда к сервису «Грузовой Двор‑НТ»"
          src="https://maps.2gis.com/embed?query=Нижний%20Тагил%2C%20улица%20Трикотажников%2C%207"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Информационная карточка поверх карты */}
      <div className="absolute left-4 right-4 top-4 sm:left-8 sm:top-8 sm:right-auto">
        <div className="max-w-sm rounded-xl bg-white shadow-xl border border-gray-200 px-5 py-4 sm:px-6 sm:py-5">
          {/* Название компании */}
          <div className="mb-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
              Сервис грузовой техники
            </p>
            <p className="mt-1 text-base sm:text-lg font-bold text-gray-900">
              «Грузовой Двор‑НТ»
            </p>
          </div>

          {/* Адрес */}
          <div className="mb-3 flex gap-3">
            <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M12 2.75a6.25 6.25 0 0 0-6.25 6.25c0 3.77 3.54 7.42 5.46 9.17.45.41 1.13.41 1.58 0 1.92-1.75 5.46-5.4 5.46-9.17A6.25 6.25 0 0 0 12 2.75Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                г. Нижний Тагил, ул. Трикотажников, д. 7
              </p>
              <p className="text-xs text-gray-500">
                Удобный заезд и площадка для разворота грузовых автомобилей.
              </p>
            </div>
          </div>

          {/* Режим работы и телефоны */}
          <div className="mb-3 space-y-1.5 text-sm text-gray-800">
            <p>
              <span className="font-semibold">Режим работы:</span> ежедневно,
              с 09:00 до 21:00
            </p>
            <p>
              <span className="font-semibold">Сервис:</span>{" "}
              <a href="tel:+79502006564" className="text-red-600 hover:underline">
                +7 950 200‑65‑64
              </a>
            </p>
            <p>
              <span className="font-semibold">Запчасти:</span>{" "}
              <a href="tel:+79502006172" className="text-red-600 hover:underline">
                +7 950 200‑61‑72
              </a>
            </p>
          </div>

          {/* Кнопка перехода к услугам */}
          <a
            href="https://2gis.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-[#c92424] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#b02020] transition-colors"
          >
            Построить маршрут в 2ГИС
          </a>
        </div>
      </div>
    </section>
  );
}
