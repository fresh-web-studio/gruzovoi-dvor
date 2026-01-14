import aboutWorkshop from "../assets/images/about-workshop.jpg";

export function AboutSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок по центру */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            О компании «Грузовой Двор‑НТ»
          </h2>
        </div>

        {/* Тело секции */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-stretch">
          {/* Фото слева */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <img
              src={aboutWorkshop}
              alt="Механик в мастерской грузового сервиса"
              className="h-full w-full object-cover"
            />
          </div>


          {/* Текст и карточки справа */}
          <div className="flex flex-col justify-between gap-4">
            {/* Два компактных абзаца */}
            <div className="space-y-2.5">
              <p className="text-sm leading-relaxed text-gray-700">
                «Грузовой Двор‑НТ» занимается ремонтом и техническим обслуживанием
                грузовых автомобилей и спецтехники в Нижнем Тагиле. Работаем с
                грузовиками, автобусами и прицепами.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Проводим диагностику, ремонт узлов и агрегатов, помогаем с подбором
                запчастей и сокращаем простой техники. Объясняем всё простым и
                понятным языком.
              </p>
            </div>



            {/* Кнопка под блоками */}
            <button
              type="button"
              className="mt-2 inline-flex w-max items-center justify-center rounded-md bg-[#c92424] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#b02020] transition-colors"
            >
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
