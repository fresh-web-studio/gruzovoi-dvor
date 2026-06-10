import React, { useState } from "react";

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    agreed: boolean;
};

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

const EMAIL_REGEXP =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function AutoElektrikForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
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

    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, "");
        let numbers = digits;

        if (numbers.startsWith("8")) {
            numbers = "7" + numbers.slice(1);
        }
        if (!numbers.startsWith("7")) {
            numbers = "7" + numbers;
        }
        numbers = numbers.slice(0, 11);

        const p1 = numbers.slice(1, 4);
        const p2 = numbers.slice(4, 7);
        const p3 = numbers.slice(7, 9);
        const p4 = numbers.slice(9, 11);

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

        const digits = formData.phone.replace(/\D/g, "");
        if (digits.length < 11) {
            errors.phone = "Укажите полный номер телефона";
        }

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
                service: "Ремонт автоэлектрики грузовиков Нижний Тагил",
                message: formData.message || "Диагностика/ремонт генераторов, стартеров, ЭБУ грузовиков",
            });

            // Yandex.Metrica goal для автоэлектрика
            if (typeof window !== "undefined" && (window as any).ym) {
                (window as any).ym(107098604, "reachGoal", "form_auto_elektrik");
            }

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
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
            id="auto-elektrik-form"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Оставить заявку на автоэлектрика
                    </h2>
                    <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-gray-700 leading-relaxed">
                        Нужна диагностика или ремонт электрики грузовика?
                        Заполните форму — перезвоним за 15 минут!
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
                                Проблема с электрикой
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Генератор не работает, мигают фары, не заводится, проводка..."
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
                                    условиями использования и политикой конфиденциальности
                                </a>
                                <span className="text-red-600">*</span>
                            </label>
                        </div>

                        {submitStatus === "success" && (
                            <div className="rounded-md bg-green-50 p-4 text-sm text-green-800 border border-green-200">
                                ✓ Заявка на автоэлектрика принята! Электрик перезвонит через 15 минут.
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 border border-red-200">
                                ✗ Ошибка отправки. Проверьте телефон и обязательные поля.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-md bg-[#c92424] px-6 py-3 text-sm font-medium text-white hover:bg-[#b02020] disabled:bg-gray-400 transition-colors shadow-md hover:shadow-lg"
                        >
                            {isSubmitting ? "Отправляем..." : "📞 Вызвать автоэлектрика грузовиков"}
                        </button>

                        <p className="text-center text-xs text-gray-500 pt-4 border-t border-gray-200">
                            или звоните прямо сейчас:{" "}
                            <a href="tel:+79502006564" className="text-red-600 font-semibold text-sm">
                                +7 950 200-65-64
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}