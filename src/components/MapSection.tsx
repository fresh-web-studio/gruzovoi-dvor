export function MapSection() {
  return (
    <section className="relative border-b border-gray-200 bg-gray-100">
      <div className="grid lg:grid-cols-1 lg:relative">
        {/* Карта 2ГИС */}
        <div className="w-full h-[300px] sm:h-[380px] lg:h-[460px]">
          <iframe
            id="map_763809122"
            width="100%"
            height="460px"
            src="https://makemap.2gis.ru/widget?data=eJw9UE1zgjAU_C_pUcYJ34QbjSPaZhhCDx3b8cBIpLGRMCFYlfG_N6BtTi-7-_a9twOQqmKKVSmTR6YVZx2IPwegLy0DMViyUveKAQu0SrZM6YkfwE4KqQz_tHeg44-85lqMHaasWLdTvNVcNgbIV8kMvuRFnaULSPb0pPEFkpD2bwsqsqkuauzSpsIc968JR5hCQopa4xncrKiu0sT8aZ-lz-sMQ0hOxeGyoB0y-CanGhmd0XOULg3_899LruOsMyQH2iNsQ_IdETeZmQWv66ZiZxDb8O_dLFDfA7iM5z2uzyVvtNHvpAmJN6WewgngHIah69mWH86R7aEg3Jp-Xo2GyLttLXAs21x2_J7AAESpQfwQhz5CThhErhNYQIz83c_2nciLHM8NHbOglEfjFhlbE6UU4v2LMfExoVr17PYLcKeF2w"
            sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
          />
        </div>

        {/* Информационная карточка */}
        <div className="relative lg:absolute lg:left-8 lg:top-8">
          <div className="mx-4 mt-4 lg:mt-0 lg:mx-0 lg:max-w-sm rounded-lg lg:rounded-xl bg-white shadow-lg lg:shadow-xl border border-gray-200 px-4 py-4 sm:px-5 sm:py-5">
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
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
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

            {/* Кнопка построения маршрута */}
            <a
              className="inline-flex w-full items-center justify-center rounded-md bg-[#c92424] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#b02020] transition-colors"
              href="https://2gis.ru/directions/tab/bus/points/|60.077341,57.914967?m=60.07715284824372,57.914975992768326%2F18&routeLink=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Доехать с 2ГИС
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
