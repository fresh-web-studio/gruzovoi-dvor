import React, { useState } from "react";
//import { useLocation } from "react-router-dom";

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

async function sendLead(
  formType: "call" | "repair",
  data: {
    name: string;
    email?: string;
    phone: string;
    service?: string;
    message?: string;
  }
) {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, ...data }),
  });

  const json = await res.json();
  if (!res.ok || !json.ok) {
    throw new Error(json.error || "Ошибка отправки");
  }
  return json;
}

// Простая проверка email только латиница + @ + домен
const EMAIL_REGEXP =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function ContactForm() {
  // const location = useLocation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<"idle" | "success" | "error">("idle");
  const [fieldError, setFieldError] = useState<{
    email?: string;
    phone?: string;
  }>({});

  // форматирование телефона в маску +7 (___) ___-__-__
  const formatPhone = (value: string) => {
    // убираем всё, кроме цифр
    const digits = value.replace(/\D/g, "");

    // берём только первые 10 цифр после 7 (7XXXXXXXXXX)
    let numbers = digits;

    if (numbers.startsWith("8")) {
      numbers = "7" + numbers.slice(1);
    }
    if (!numbers.startsWith("7")) {
      numbers = "7" + numbers;
    }

    numbers = numbers.slice(0, 11); // 7 + 10 цифр

    const p1 = numbers.slice(1, 4); // ___
    const p2 = numbers.slice(4, 7); // ___
    const p3 = numbers.slice(7, 9); // __
    const p4 = numbers.slice(9, 11); // __

    let result = "+7";
    if (p1) result += ` (${p1}`;
    if (p1.length === 3) result += ")";
    if (p2) result += ` ${p2}`;
    if (p3) result += `-${p3}`;
    if (p4) result += `-${p4}`;

    return result;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (name === "phone") {
      const formatted = formatPhone(value);
      setFormData((prev) => ({ ...prev, phone: formatted }));
      return;
    }

    if (name === "email") {
      // оставляем только латиницу, цифры и ._%+-@
      const cleaned = value.replace(/[^a-zA-Z0-9@._%+-]/g, "");
      setFormData((prev) => ({ ...prev, email: cleaned }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const validate = () => {
    const errors: { email?: string; phone?: string } = {};

    // проверка телефона: нужно минимум 11 цифр
    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length < 11) {
      errors.phone = "Укажите полный номер телефона";
    }

    // email не обязателен, но если есть — валидируем
    if (formData.email.trim() && !EMAIL_REGEXP.test(formData.email)) {
      errors.email = "Некорректный email (только латиница, формат name@example.com)";
    }

    setFieldError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.service.trim() ||
      !formData.agreed
    ) {
      setSubmitStatus("error");
      return;
    }

    if (!validate()) {
      setSubmitStatus("error");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus("idle");

      await sendLead("repair", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || undefined,
        service: formData.service || undefined,
        message: formData.message || undefined,
      });

      // 👉 отправляем событие в Яндекс Метрику
      if (typeof window !== "undefined" && (window as any).ym) {
        (window as any).ym(107098604, "reachGoal", "form_submit", {
          service: formData.service || "unknown",
        });
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        agreed: false,
      });
      setFieldError({});
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-16 bg-white border-b border-gray-200"
      id="contact-form"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Оставить заявку
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-gray-700 leading-relaxed">
            Заполните форму и наши специалисты свяжутся с вами в течение часа
            для уточнения деталей и согласования времени.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
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

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full rounded-md border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors ${fieldError.email
                  ? "border-red-500 focus:border-red-600 focus:ring-red-600"
                  : "border-gray-300 focus:border-red-600 focus:ring-red-600"
                  } bg-white`}
              />
              {fieldError.email && (
                <p className="mt-1 text-xs text-red-600">
                  {fieldError.email}
                </p>
              )}
            </div>

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
                inputMode="tel"
                className={`w-full rounded-md border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors ${fieldError.phone
                  ? "border-red-500 focus:border-red-600 focus:ring-red-600"
                  : "border-gray-300 focus:border-red-600 focus:ring-red-600"
                  } bg-white`}
                required
              />
              {fieldError.phone && (
                <p className="mt-1 text-xs text-red-600">
                  {fieldError.phone}
                </p>
              )}
            </div>

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
              <label
                htmlFor="agreed"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Я согласен с{" "}
                <a href="/usloviya" className="text-red-600 hover:underline">
                  условиями использования
                  {" "}
                  и политикой конфиденциальности{" "}</a>
                <span className="text-red-600">*</span>
              </label>
            </div>

            {submitStatus === "success" && (
              <div className="rounded-md bg-green-50 p-3 text-sm text-green-800 border border-green-200">
                ✓ Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее
                время.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-800 border border-red-200">
                ✗ Ошибка. Пожалуйста, проверьте обязательные поля, телефон и
                email, а также согласие с условиями. Если ошибка повторяется,
                попробуйте позже.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-[#c92424] px-6 py-3 text-sm font-medium text-white hover:bg-[#b02020] disabled:bg-gray-400 transition-colors"
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </button>

            <p className="text-center text-xs text-gray-500">
              или позвоните нам:{" "}
              <a
                href="tel:+79502006564"
                className="text-red-600 font-semibold"
              >
                +7 950 200-65-64
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
