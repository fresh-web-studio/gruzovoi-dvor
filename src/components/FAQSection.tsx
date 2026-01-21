import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Какие марки грузовиков вы обслуживаете?",
      answer:
        "Мы работаем с отечественными грузовыми автомобилями :КамАЗ, МАЗ, ГАЗон; китайскими автомобилями: Sitrak, Howo, Shacman; европейские марки: Volvo, Scania, DAF, Man, Mercedes. Также обслуживаем прицепы, полуприцепы и спецтехнику. Если у вас есть сомнения, позвоните нам — уточним по телефону.",
    },
    {
      question: "Сколько стоит диагностика грузовика?",
      answer:
        "Диагностика стоит 3200 рублей, если Вы затем делаете у нас ремонт, то она бесплатна. После диагностики мы дадим вам смету с точной стоимостью ремонта. Если нужна только консультация без работ, стоимость уточняйте по телефону.",
    },
    {
      question: "Как долго занимает плановое ТО грузовика?",
      answer:
        "Плановое техническое обслуживание зависит от объёма и модели машины. Обычно это занимает от 4 до 8 часов. Мы можем планировать работы в удобное вам время, чтобы минимизировать простой техники.",
    },
    {
      question: "Какая гарантия на выполненные работы?",
      answer:
        "На все виды работ мы предоставляем гарантию: на техническое обслуживание — 2000 км или 14 дней, на текущий ремонт — 30 дней или 5000 км, на капитальный ремонт двигателя — 180 дней при пробеге не более 40 000 км, на проведённые жестяно-сварочные работы — 6 месяцев.",
    },
    {
      question: "Можете ли вы приехать к месту поломки?",
      answer:
        "Мы работаем в своей мастерской расположенной в городе Нижнем Тагиле. При серьёзных поломках в дороге сможем эвакуировать машину к нам. Уточняйте возможность выезда по телефону для вашего конкретного случая.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-gray-700 leading-relaxed">
            Ответы на самые популярные вопросы о ремонте грузовиков и обслуживании техники.
          </p>
        </div>

        {/* FAQ элементы */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 flex-1">
                  {item.question}
                </h3>
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                >
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
              </button>

              {/* Ответ (раскрывается/закрывается) */}
              {openIndex === index && (
                <div className="border-t border-gray-200 px-5 py-4 sm:px-6 sm:py-5 bg-gray-50">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
