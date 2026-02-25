import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function TermsPage() {
    useDocumentTitle("Условия использования и политика конфиденциальности");

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Page Hero */}
            <section className="bg-white border-b border-gray-200 py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="max-w-3xl sm:text-4xl font-bold text-gray-900">
                        Условия использования и политика конфиденциальности
                    </h1>
                    <nav className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                        <a href="/" className="hover:text-red-600">
                            Главная
                        </a>
                        <span>/</span>
                        <span>Условия</span>
                    </nav>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Условия использования */}
                    <div className="bg-white rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Условия использования сайта
                        </h2>

                        <div className="space-y-6 text-gray-700">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    1. Общие положения
                                </h3>
                                <p className="leading-relaxed">
                                    Сайт gruzovoi-dvor.ru (далее — "Сайт") является собственностью ООО «АВТОДОМ ТРАНСФЕР» и предоставляет информацию о услугах по ремонту и обслуживанию грузовых автомобилей и спецтехники.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    2. Использование Сайта
                                </h3>
                                <p className="leading-relaxed mb-3">
                                    Пользователь имеет право использовать Сайт в личных и некоммерческих целях. Запрещается:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-2">
                                    <li>Копировать и воспроизводить контент без разрешения</li>
                                    <li>Использовать информацию в коммерческих целях</li>
                                    <li>Передавать вредоносный код или вирусы</li>
                                    <li>Нарушать авторские права и права на товарные знаки</li>
                                    <li>Создавать помехи работе Сайта</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    3. Ответственность
                                </h3>
                                <p className="leading-relaxed">
                                    ООО «АВТОДОМ ТРАНСФЕР» не несёт ответственность за:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                                    <li>Любые убытки, вызванные использованием Сайта</li>
                                    <li>Точность или полноту информации на Сайте</li>
                                    <li>Прерывание доступа или ошибки в работе</li>
                                    <li>Действия третьих лиц</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    4. Контактная информация
                                </h3>
                                <p className="leading-relaxed">
                                    По вопросам использования Сайта обращайтесь:
                                </p>
                                <ul className="mt-2 space-y-1 ml-2">
                                    <li>Email: <a href="mailto:vsz@transfer01.ru" className="text-red-600 hover:underline">vsz@transfer01.ru</a></li>
                                    <li>Телефон: <a href="tel:+79502006564" className="text-red-600 hover:underline">+7 950 200-65-64</a></li>
                                    <li>Адрес: г. Нижний Тагил, ул. Трикотажников, д. 7</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Политика конфиденциальности */}
                    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Политика конфиденциальности
                        </h2>

                        <div className="space-y-6 text-gray-700">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    1. Собираемые данные
                                </h3>
                                <p className="leading-relaxed">
                                    При использовании контактной формы мы собираем:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                                    <li>Имя</li>
                                    <li>Номер телефона</li>
                                    <li>Email адрес</li>
                                    <li>Тип услуги</li>
                                    <li>Текст сообщения</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    2. Использование данных
                                </h3>
                                <p className="leading-relaxed">
                                    Ваши данные используются только для:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                                    <li>Ответа на вашу заявку</li>
                                    <li>Связи с вами по поводу заказанных услуг</li>
                                    <li>Улучшения качества обслуживания</li>
                                </ul>
                                <p className="mt-3 leading-relaxed">
                                    Мы не передаём ваши данные третьим лицам без вашего согласия.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    3. Файлы Cookie
                                </h3>
                                <p className="leading-relaxed">
                                    Сайт использует файлы cookie для улучшения пользовательского опыта и анализа трафика. Продолжая использование Сайта, вы даёте согласие на использование cookie.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    4. Безопасность данных
                                </h3>
                                <p className="leading-relaxed">
                                    Мы используем стандартные методы защиты для обеспечения безопасности ваших данных. Однако полная безопасность в интернете не гарантируется.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    5. Права пользователя
                                </h3>
                                <p className="leading-relaxed">
                                    Вы имеете право:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                                    <li>Запросить доступ к своим данным</li>
                                    <li>Потребовать удаления данных</li>
                                    <li>Отозвать согласие на обработку данных</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    6. Изменения политики
                                </h3>
                                <p className="leading-relaxed">
                                    Мы оставляем за собой право изменять настоящую политику. Об изменениях будет сообщено путём обновления данной страницы.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg mt-6">
                                <p className="text-sm text-gray-600">
                                    Последнее обновление: февраль 2026
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    При наличии вопросов о конфиденциальности, пожалуйста, свяжитесь с нами по адресу <a href="mailto:vsz@transfer01.ru" className="text-red-600 hover:underline">vsz@transfer01.ru</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
