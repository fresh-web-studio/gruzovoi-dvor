import {
  TruckIcon,
  WrenchIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export function FeaturesSection() {
  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок в стиле \"Комфортное ожидание\" */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Наши преимущества
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-gray-700 leading-relaxed">
            Сервис для грузовой техники, который помогает сокращать простой
            и планировать ремонт без лишних рисков.
          </p>
        </div>

        {/* Сетка преимуществ */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#c92424]">
              <TruckIcon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                Работа с любым парком техники
              </p>
              <p className="mt-1 text-sm leading-snug text-gray-600">
                Обслуживаем одиночные грузовики и небольшие автопарки, знаем специфику
                европейских и отечественных марок.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#c92424]">
              <WrenchIcon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                Оснащённый ремонтный техцентр
              </p>
              <p className="mt-1 text-sm leading-snug text-gray-600">
                Посты для длинномеров, подъёмное оборудование и профессиональный
                инструмент для быстрого и качественного ремонта.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#c92424]">
              <ClockIcon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                Реальное понимание сроков
              </p>
              <p className="mt-1 text-sm leading-snug text-gray-600">
                Сразу говорим, сколько займут работы, и подстраиваем ремонт под ваши
                рейсы и загрузку автопарка.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#c92424]">
              <ShieldCheckIcon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                Прозрачные условия и гарантия
              </p>
              <p className="mt-1 text-sm leading-snug text-gray-600">
                Согласуем работы и запчасти до начала ремонта и даём гарантию на
                выполненные работы без скрытых доплат.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
