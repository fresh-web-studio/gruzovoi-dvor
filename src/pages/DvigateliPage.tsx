import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircleIcon, WrenchScrewdriverIcon, ClockIcon, ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";
import aboutWorkshop from "../assets/images/about-workshop.jpg";
import { DvigateliForm } from "../components/DvigateliForm";
import { useSeoMetadata } from "../hooks/useSeoMetadata";

export function DvigateliPage() {
    useSeoMetadata({
        title: "Ремонт двигателей грузовиков в Нижнем Тагиле | от 30 000 ₽", // Улучшен title для сниппета
        description: "Капитальный ремонт двигателей грузовиков КамАЗ, ГАЗон, Volvo, Scania. Диагностика, замена поршневой, ремонт ТНВД и ГБЦ. Гарантия 6 мес. Звоните!",
        canonicalUrl: "https://gruzovoi-dvor.ru/dvigateli"
    });

    const services = [
        { title: "Диагностика ДВС", price: "от 3 000 ₽", desc: "Компьютерная и механическая" },
        { title: "Капремонт двигателя", price: "от 30 000 ₽", desc: "Замена поршневой, вкладышей" },
        { title: "Ремонт ТНВД и форсунок", price: "от 3 000 ₽", desc: "Диагностика и регулировка" },
        { title: "Ремонт ГБЦ", price: "от 8 000 ₽", desc: "Шлифовка, замена направляющих" },
    ];

    const brands = ["КамАЗ (Cummins, ЯМЗ)", "ГАЗон Next", "Volvo", "Scania", "MAN", "Mercedes", "Iveco", "Shacman", "FAW"];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* 1. Hero Section с исправленной опечаткой и четким H1 */}
            <section className="bg-white border-b border-gray-200 py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Ремонт двигателей грузовых автомобилей в Нижнем Тагиле
                    </h1>
                    <nav className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                        <a href="/" className="hover:text-red-600 transition">Главная</a>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Ремонт двигателей</span>
                    </nav>
                </div>
            </section>

            {/* 2. Преимущества с иконками и конкретикой */}
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Почему выбирают наш моторный цех:</h2>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700"><b>Быстрая диагностика</b> и точное выявление неисправностей благодаря современному оборудованию и опытным специалистам.</p>
                                </div>
                                <div className="flex gap-3">
                                    <WrenchScrewdriverIcon className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700"><b>Комплексный подход</b>: полная замена деталей, капитальный ремонт двигателя, тюнинг и модернизация силового агрегата.</p>
                                </div>
                                <div className="flex gap-3">
                                    <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700"><b>Индивидуальные решения</b>: работа с двигателями любых марок, включая европейские и отечественные модели.</p>
                                </div>
                                <div className="flex gap-3">
                                    <ClockIcon className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700"><b>Гарантия качества</b>: гарантия на выполненные работы и установленные запчасти.</p>
                                </div>
                                <div className="flex gap-3">
                                    <TruckIcon className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700"><b>Удобное расположение</b>: современные боксы для ремонта длинных грузовиков, быстрая обработка заказов и удобное размещение клиентов.</p>
                                </div>
                            </div>

                            <p className="mt-6 text-gray-700 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                💡 <i>Работаем с двигателями любых марок: от отечественных ЯМЗ и Cummins до европейских Volvo, Scania и MAN. Помогаем с подбором запчастей, чтобы сократить время простоя.</i>
                            </p>
                        </div>
                        <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg">
                            <ImageWithFallback
                                src={aboutWorkshop}
                                alt="Ремонт двигателя грузовика в сервисе Грузовой Двор-НТ"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. НОВЫЙ БЛОК: Популярные услуги и цены (для доверия из рекламы) */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Популярные услуги и ориентировочные цены</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:border-red-200 transition">
                                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-red-600 font-bold text-lg mb-2">{item.price}</p>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-gray-600">
                        Полный прайс-лист и условия смотрите в разделе{" "}
                        <a href="/uslugi" className="text-red-600 hover:underline font-medium">«Услуги и цены»</a>.
                    </p>
                </div>
            </section>

            {/* 4. НОВЫЙ БЛОК: Обслуживаемые марки (бейджи) */}
            <section className="py-10 bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Обслуживаемые марки двигателей</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {brands.map((brand) => (
                            <span key={brand} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. НОВЫЙ БЛОК: Мини-FAQ (снимает возражения до звонка) */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Частые вопросы</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Сколько времени занимает капремонт двигателя?</h3>
                            <p className="text-gray-600 text-sm">Обычно от 3 до 7 рабочих дней, в зависимости от сложности дефектов и наличия запчастей на складе.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Можно ли отремонтировать двигатель без снятия с машины?</h3>
                            <p className="text-gray-600 text-sm">Некоторые операции (замена форсунок, ТНВД, ремня ГРМ) мы делаем без демонтажа. Полный капремонт требует снятия агрегата.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Какая гарантия на ремонт?</h3>
                            <p className="text-gray-600 text-sm">Мы даем гарантию до 6 месяцев на выполненные работы и установленные нами запчасти.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Усиленный призыв к действию перед формой */}
            <section className="py-12 bg-gray-900 text-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Нужен срочный ремонт двигателя?</h2>
                    <p className="text-gray-300 mb-6 text-lg">
                        Оставьте заявку или позвоните нам прямо сейчас. Мы перезвоним за 15 минут, проконсультируем и озвучим примерную стоимость.
                    </p>
                    <a href="tel:+79502006564" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition shadow-lg">
                        📞 +7 950 200-65-64
                    </a>
                </div>
            </section>

            {/* Contact Form */}
            <div className="bg-gray-50 py-12">
                <DvigateliForm />
            </div>

            <Footer />
        </div>
    );
}