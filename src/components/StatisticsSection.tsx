export function StatisticsSection() {
  const statistics = [
    {
      number: "43",
      label: "Ремонтов двигателей",
      description: "Полная диагностика, замена поршневых колец, восстановление ГБЦ",
    },
    {
      number: "48",
      label: "Ремонтов коробок передач",
      description: "Капитальный ремонт МКПП и АКПП, замена синхронизаторов",
    },
    {
      number: "64",
      label: "Замен комплектов сцепления",
      description: "Замена диска, корзины и выжимного подшипника",
    },
    {
      number: "18",
      label: "Отремонтировано фургонов",
      description: "Рефрижераторные установки, гидравлика, обивка",
    },
    {
      number: "300+",
      label: "Замен тормозных колодок",
      description: "Полное техническое обслуживание тормозной системы",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Наша работа в цифрах
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            За 2025 год — основные показатели выполненных работ
            в нашем сервисном центре.
          </p>
        </div>

        {/* Сетка статистики */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg bg-gray-800 p-6 text-center hover:bg-gray-750 hover:border-red-600/50 transition-colors"
            >
              {/* Большое число */}
              <div className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
                {stat.number}
              </div>

              {/* Название */}
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                {stat.label}
              </h3>

              {/* Описание */}
              <p className="text-xs sm:text-sm text-gray-400 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Дополнительный текст */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            Все работы выполнены с использованием оригинальных и качественных
            запчастей, с гарантией и полной ответственностью за результат.
          </p>
        </div>
      </div>
    </section>
  );
}
