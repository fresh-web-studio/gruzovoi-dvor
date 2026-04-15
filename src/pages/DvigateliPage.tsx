import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
//import { useDocumentTitle } from "../hooks/useDocumentTitle";
//import { BuildingOfficeIcon, CheckCircleIcon, SparklesIcon, UsersIcon } from "@heroicons/react/24/outline";
import aboutWorkshop from "../assets/images/about-workshop.jpg";
import { DvigateliForm } from "../components/DvigateliForm";
import { useSeoMetadata } from "../hooks/useSeoMetadata";


export function DvigateliPage() {
    //useDocumentTitle("Грузовой Двор‑НТ — Ремонт двигателей грузовых автомомбилей");
    useSeoMetadata({
        title: "Грузовой Двор‑НТ — Ремонт двигателей грузовых автомомбилей",
        description: "Ремонт грузовых двигателей в Нижнем Тагиле: диагностика, капремонт, замена узлов. Опытные мотористы, гарантия 6 месяцев. Звоните!",
        canonicalUrl: "https://gruzovoi-dvor.ru/dvigateli"
    });
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <section className="bg-white border-b border-gray-200 py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Ремонт двигателей грузовых автомомбилей</h1>
                    <nav className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                        <a href="/" className="hover:text-red-600">Главная</a>
                        <span>/</span>
                        <span>Ремонт двигателей грузовых автомомбилей</span>
                    </nav>
                </div>
            </section>

            <section className="py-16 bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Почему выбирают нас:</h2>
                            <div className="space-y-4 text-gray-700">
                                <ul className="list-disc pl-5">
                                    <li><b>Быстрая диагностика</b> и точное выявление неисправностей благодаря современному оборудованию и опытным специалистам.</li>
                                    <li><b>Комплексный подход</b>: полная замена деталей, капитальный ремонт двигателя, тюнинг и модернизация силового агрегата.</li>
                                    <li><b>Индивидуальные решения</b>: работа с двигателями любых марок, включая европейские и отечественные модели.</li>
                                    <li><b>Гарантия качества</b>: гарантия на выполненные работы и установленные запчасти.</li>
                                    <li><b>Удобное расположение</b>: современные боксы для ремонта длинных грузовиков, быстрая обработка заказов и удобное размещение клиентов.</li>
                                </ul>

                                <p>Наш сервис позволяет значительно сократить сроки простоя техники и обеспечить её бесперебойную эксплуатацию. Оставьте заявку прямо сейчас или позвоните нам — опытные специалисты проконсультируют вас и подберут оптимальное решение!</p>
                            </div>

                        </div>
                        <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                            <ImageWithFallback
                                src={aboutWorkshop}
                                alt="Команда сервиса"
                                className="w-full h-100 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <DvigateliForm />

            <Footer />
        </div>
    );
}
