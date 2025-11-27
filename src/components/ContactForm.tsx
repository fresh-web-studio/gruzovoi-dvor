export function ContactForm() {
  return (
    <section className="py-16 border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section heading */}
          <div className="mb-8 text-center">
            <div className="h-8 bg-gray-300 w-64 mx-auto mb-4 flex items-center justify-center">
              Оставить заявку
            </div>
            <div className="h-4 bg-gray-200 w-96 mx-auto"></div>
          </div>

          {/* Form */}
          <div className="border-2 border-gray-400 p-4 md:p-8 bg-white">
            <div className="space-y-6">
              {/* Name input */}
              <div>
                <label className="block mb-2 text-gray-700">
                  Имя
                </label>
                <input
                  type="text"
                  placeholder="Введите ваше имя"
                  className="w-full px-4 py-3 border-2 border-gray-400 bg-gray-50"
                />
              </div>

              {/* Email input */}
              <div>
                <label className="block mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Введите ваш email"
                  className="w-full px-4 py-3 border-2 border-gray-400 bg-gray-50"
                />
              </div>

              {/* Phone input */}
              <div>
                <label className="block mb-2 text-gray-700">
                  Телефон
                </label>
                <input
                  type="tel"
                  placeholder="Введите ваш телефон"
                  className="w-full px-4 py-3 border-2 border-gray-400 bg-gray-50"
                />
              </div>

              {/* Service select */}
              <div>
                <label className="block mb-2 text-gray-700">
                  Тип услуги
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-400 bg-gray-50">
                  <option>Выберите услугу</option>
                  <option>Услуга 1</option>
                  <option>Услуга 2</option>
                  <option>Услуга 3</option>
                </select>
              </div>

              {/* Message textarea */}
              <div>
                <label className="block mb-2 text-gray-700">
                  Сообщение
                </label>
                <textarea
                  placeholder="Введите ваше сообщение"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-400 bg-gray-50"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 border-2 border-gray-400"
                />
                <span className="text-sm text-gray-700">
                  Я согласен с условиями использования
                </span>
              </div>

              {/* Submit button */}
              <button className="w-full px-6 py-3 border-2 border-gray-600 bg-gray-800 text-white">
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}