import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  agreed: boolean;
};

const SERVICES = [
  "Плановое техническое обслуживание (ТО)",
  "Диагностика и ремонт двигателя",
  "Ремонт коробки передач (МКПП/АКПП)",
  "Ремонт и замена сцепления",
  "Ремонт тормозной системы",
  "Ремонт подвески и амортизаторов",
  "Замена тормозных колодок",
  "Ремонт электрооборудования",
  "Кузовной ремонт и покраска",
  "Замена выхлопной системы",
  "Ремонт рефрижераторной установки",
  "Диагностика электроники",
  "Консультация специалиста",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service || !formData.agreed) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    // Здесь можно добавить отправку формы на сервер
    try {
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      setTimeout(() => {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          agreed: false,
        });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }, 500);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white border-b border-gray-200" id="contact-form">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Оставить заявку
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-gray-700 leading-relaxed">
            Заполните форму и наши специалисты свяжутся с вами в течение часа
            для уточнения деталей и согласования времени.
          </p>
        </div>

        {/* Форма */}
        <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Имя */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Имя <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors"
              />
            </div>

            {/* Телефон */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Телефон <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (950) 200-00-00"
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors"
                required
              />
            </div>

            {/* Тип услуги */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Тип услуги <span className="text-red-600">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors"
                required
              >
                <option value="">Выберите услугу</option>
                {SERVICES.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Сообщение */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Сообщение
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Опишите вашу проблему или вопрос"
                rows={4}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors resize-none"
              />
            </div>

            {/* Согласие */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600 cursor-pointer"
                required
              />
              <label htmlFor="agreed" className="text-sm text-gray-600 cursor-pointer">
                Я согласен с{" "}
                <a href="#" className="text-red-600 hover:underline">
                  условиями использования
                </a>
                {" "}и политикой конфиденциальности{" "}
                <span className="text-red-600">*</span>
              </label>
            </div>

            {/* Статус отправки */}
            {submitStatus === "success" && (
              <div className="rounded-md bg-green-50 p-3 text-sm text-green-800 border border-green-200">
                ✓ Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-800 border border-red-200">
                ✗ Ошибка. Пожалуйста, заполните все обязательные поля и согласитесь с условиями.
              </div>
            )}

            {/* Кнопка отправки */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-[#c92424] px-6 py-3 text-sm font-medium text-white hover:bg-[#b02020] disabled:bg-gray-400 transition-colors"
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </button>

            {/* Подтекст */}
            <p className="text-center text-xs text-gray-500">
              или позвоните нам: <a href="tel:+79502006564" className="text-red-600 font-semibold">+7 950 200-65-64</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
