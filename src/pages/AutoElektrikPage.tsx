import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSeoMetadata } from "../hooks/useSeoMetadata";
import autoElektrikImg from "../assets/images/auto-elektrik-truck.jpg"; // добавь фото
import { AutoElektrikForm } from "../components/AutoElektrikForm"; // создадим ниже

export function AutoElektrikPage() {
    useSeoMetadata({
        title: "Ремонт автоэлектрики грузовиков Нижний Тагил | Грузовой Двор-НТ",
        description: "Диагностика автоэлектрики грузовиков Нижний Тагил: ремонт генераторов КамАЗ, стартеров Volvo, ЭБУ Scania, CAN-шины МАЗ. Выездной сервис +7(950)200-65-64",
        canonicalUrl: "https://gruzovoi-dvor.ru/avtoelektrik"
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero/Breadcrumb */}
            <section className="bg-white border-b border-gray-200 py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Ремонт автоэлектрики грузовиков Нижний Тагил
                    </h1>
                    <nav className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                        <a href="/" className="hover:text-red-600">Главная</a>
                        <span>/</span>
                        <span>Ремонт автоэлектрики грузовиков</span>
                    </nav>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                                Профессиональный автоэлектрик для грузовиков с выездом
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    <strong>Диагностика автоэлектрики грузовиков Нижний Тагил</strong> — наша специализация.
                                    Ремонт электронного блока управления (ЭБУ), CAN-шины. Поиск и устранение неисправностей для КамАЗ, МАЗ и автомобилей иностранного производства.
                                </p>

                                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Основные услуги:</h3>
                                <ul className="list-disc pl-6 space-y-2 mb-8">
                                    <li>Диагностика и ремонт электрооборудования и систем грузовых автомобилей</li>
                                    <li>Ремонт электропроводки грузовиков</li>
                                    <li>Диагностика и ремонт ЭБУ грузовиков</li>
                                    <li>Ремонт CAN-шины грузовиков </li>
                                    <li>Ремонт АБС грузовиков, датчиков</li>
                                    <li>Ремонт светотехники</li>
                                    <li>Установка и ремонт дополнительного оборудования</li>
                                </ul>

                                <div className="bg-blue-50 border-l-4 border-red-500 pl-4 py-4 rounded-r-lg">
                                    <p className="font-semibold text-gray-900 mb-2">
                                        <strong>Почему не работает электрика?</strong>
                                    </p>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Нет зарядки на КамАЗе — проблема с генератором</li>
                                        <li>Не заводится МАЗ — проблемы со стартером</li>
                                        <li>Мигают фары на Volvo — обрыв проводки</li>
                                    </ul>
                                </div>

                                <p className="mt-8 text-xl">
                                    Выезд по Нижнему Тагилу и Свердловской области в день заявки.
                                    Гарантия 6 месяцев. Цены от <strong>3000 руб./час</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="order-first lg:order-last">
                            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                                <ImageWithFallback
                                    src={autoElektrikImg}
                                    alt="Ремонт автоэлектрики грузовиков: электрик работает с КамАЗ"
                                    className="w-full h-96 lg:h-[500px] object-cover"
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form */}
            <AutoElektrikForm />

            <Footer />
        </div>
    );
}