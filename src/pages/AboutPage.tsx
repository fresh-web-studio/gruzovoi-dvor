import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { BuildingOfficeIcon, CheckCircleIcon, SparklesIcon, UsersIcon } from "@heroicons/react/24/outline";
import heroImage from "../assets/images/hero-image.png";
import aboutWorkshop from "../assets/images/about-workshop.jpg";


export function AboutPage() {
  useDocumentTitle("Грузовой Двор‑НТ — О нашей компании");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-white border-b border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">О нашей компании</h1>
          <nav className="mt-3 flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-red-600">Главная</a>
            <span>/</span>
            <span>О компании</span>
          </nav>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">История компании</h2>
              <div className="space-y-4 text-gray-700">
                <p>«Грузовой Двор‑НТ» начал работу как небольшой техцентр, ориентированный на ремонт и обслуживание грузовых автомобилей в Нижнем Тагиле. За годы работы мы выросли в надёжного партнёра для владельцев коммерческого транспорта.</p>
                <p>Сегодня мы располагаем современными боксами для обслуживания длинномерных грузовиков, профессиональным оборудованием и командой опытных специалистов, которые разбираются в европейских и отечественных марках.</p>
                <p>Наша миссия — помогать владельцам грузовой техники сокращать простой машин и держать их в отличном рабочем состоянии.</p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <ImageWithFallback
                src={aboutWorkshop}
                alt="Команда сервиса"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Наши принципы работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Честность и прозрачность</h3>
              <p className="text-gray-700 text-sm">Говорим о проблемах напрямую, объясняем, что нужно делать сейчас, а что позже. Без скрытых доплат.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 mb-4">
                <SparklesIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Качество и ответственность</h3>
              <p className="text-gray-700 text-sm">Используем качественные запчасти, даём гарантию на работы. Отвечаем за результат.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 mb-4">
                <UsersIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Понимание вашего бизнеса</h3>
              <p className="text-gray-700 text-sm">Знаем, что простой машины — это потери. Планируем работы вокруг вашего графика рейсов.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 mb-4">
                <BuildingOfficeIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Постоянство и развитие</h3>
              <p className="text-gray-700 text-sm">Мы здесь надолго. Постоянно совершенствуем оборудование и знания специалистов.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
              Наша команда
            </h2>
            <p className="text-center text-gray-700 mb-10">
              Опытные специалисты, которые разбираются в грузовиках и готовы помочь вашему бизнесу
            </p>

            <div className="space-y-6 mb-10">
              <p className="text-gray-700">
                В сервисе работают опытные механики с многолетним опытом ремонта европейских и отечественных грузовиков. Каждый из них прошёл специальную подготовку и постоянно развивает свои навыки.
              </p>
              <p className="text-gray-700">
                Мы постоянно повышаем квалификацию и изучаем новые технологии. Это позволяет быстро разбираться в любых проблемах и предложить оптимальное решение.
              </p>
            </div>

            {/* Компетенции команды */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Европейские грузовики</h3>
                <p className="text-sm text-gray-600">Volvo, Scania, DAF, MAN, Mercedes</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Отечественная техника</h3>
                <p className="text-sm text-gray-600">КамАЗ, МАЗ, УРАЛ, ГАЗ</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Специализация</h3>
                <p className="text-sm text-gray-600">Двигатели, КПП, мосты, ходовая часть</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Диагностика</h3>
                <p className="text-sm text-gray-600">Компьютерная диагностика, техническое освидетельствование</p>
              </div>
            </div>

            <p className="text-center text-gray-700 mt-10">
              Каждый специалист относится к работе ответственно и понимает, что их работа важна для вашего бизнеса.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Современное оснащение</h2>
              <div className="space-y-4 text-gray-700">
                <p>На нашей мастерской установлено профессиональное оборудование для диагностики и ремонта грузовиков.</p>
                <p>У нас есть посты для длинномерных автомобилей, подъёмники, стенды для проверки и диагностические сканеры.</p>
                <p>Все инструменты регулярно проходят техническое обслуживание, чтобы обеспечивать высокое качество работ.</p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <ImageWithFallback
                src={heroImage}
                alt="Мастерская"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Реквизиты компании</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BuildingOfficeIcon className="h-5 w-5 text-red-600" />
                Юридические данные
              </h3>
              <dl className="space-y-3 text-sm">
                <div><dt className="font-semibold text-gray-900">ОГРН:</dt><dd className="text-gray-700">1156623000753</dd></div>
                <div><dt className="font-semibold text-gray-900">ИНН:</dt><dd className="text-gray-700">6623108028</dd></div>
                <div><dt className="font-semibold text-gray-900">КПП:</dt><dd className="text-gray-700">662301001</dd></div>
                <div><dt className="font-semibold text-gray-900">ОКВЭД:</dt><dd className="text-gray-700">45.20</dd></div>
                <div><dt className="font-semibold text-gray-900">ОКПО:</dt><dd className="text-gray-700">48588994</dd></div>
              </dl>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Банковские реквизиты</h3>
              <dl className="space-y-3 text-sm">
                <div><dt className="font-semibold text-gray-900">Расчётный счёт:</dt><dd className="text-gray-700 font-mono text-xs">40702810338240000539</dd></div>
                <div><dt className="font-semibold text-gray-900">БИК:</dt><dd className="text-gray-700 font-mono">046577964</dd></div>
                <div><dt className="font-semibold text-gray-900">Кор. счёт:</dt><dd className="text-gray-700 font-mono">30101810100000000964</dd></div>
                <div><dt className="font-semibold text-gray-900">Банк:</dt><dd className="text-gray-700">Филиал "Екатеринбургский" АО "АЛЬФА-БАНК" г. Екатеринбург</dd></div>
              </dl>
            </div>
          </div>
          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
            <dl className="space-y-3 text-sm">
              <div><dt className="font-semibold text-gray-900">Налоговый режим:</dt><dd className="text-gray-700">Упрощённая система налогообложения (УСН) — не является плательщиком НДС</dd></div>
              <div><dt className="font-semibold text-gray-900">Директор:</dt><dd className="text-gray-700">Сунцов Владислав Викторович (действует на основании Устава)</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
