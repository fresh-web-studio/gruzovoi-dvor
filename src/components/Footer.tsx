import { LogoWhite } from "./LogoWhite";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Верхняя часть */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr_1.4fr_1.4fr] gap-8 pb-8 border-b border-gray-700">
          {/* О компании */}
          <div>
            <div className="w-48 h-9 mb-4">
              <LogoWhite className="w-full h-full" />
            </div>
            <p className="text-sm text-gray-300">
              Сервис по ремонту и обслуживанию грузовых автомобилей и спецтехники
              в Нижнем Тагиле. Помогаем сократить простой и держать технику в строю.
            </p>
          </div>

          {/* Навигация — более узкая колонка */}
          <div className="lg:pl-4">
            <h3 className="text-sm font-semibold text-gray-100 mb-3">
              Разделы сайта
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-gray-300">
              <Link to="/" className="hover:text-white transition-colors">
                Главная
              </Link>
              <Link to="/uslugi" className="hover:text-white transition-colors">
                Услуги
              </Link>
              <Link to="/o-nas" className="hover:text-white transition-colors">
                О компании
              </Link>
              <Link to="/kontakty" className="hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Режим работы и адрес — шире */}
          <div className="lg:pl-6">
            <h3 className="text-sm font-semibold text-gray-100 mb-3">
              Режим работы
            </h3>
            <p className="text-sm text-gray-300">
              Ежедневно, без выходных
              <br />
              с 09:00 до 21:00
            </p>

            <h3 className="mt-5 text-sm font-semibold text-gray-100 mb-1.5">
              Адрес
            </h3>
            <p className="text-sm text-gray-300 max-w-xs">
              г. Нижний Тагил, ул. Трикотажников, д. 7
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 mb-3">
              Контакты
            </h3>
            <div className="space-y-1.5 text-sm text-gray-300">
              <p>
                Сервис:&nbsp;
                <a href="tel:+79502006564" className="hover:text-white">
                  +7 950 200-65-64
                </a>
              </p>
              <p>
                Запчасти:&nbsp;
                <a href="tel:+79502006172" className="hover:text-white">
                  +7 950 200-61-72
                </a>
              </p>
              <p>
                Email:&nbsp;
                <a
                  href="mailto:vsz@transfer01.ru"
                  className="hover:text-white break-all"
                >
                  vsz@transfer01.ru
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} «Грузовой Двор‑НТ». Все права защищены.
          </p>
          <p className="md:flex-1 max-w-2xl text-center md:text-right">
            На сайте используются файлы cookie для улучшения работы сервиса и анализа
            обращений. Продолжая использование сайта, вы даёте согласие на обработку
            cookie.
          </p>
        </div>
      </div>
    </footer>
  );
}
