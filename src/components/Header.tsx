import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    setMobileMenuOpen(false);
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="border-b border-border bg-card">
      {/* Верхняя инфо-панель (desktop) */}
      <div className="border-b border-border bg-card hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="grid grid-cols-3 gap-4">
            {/* Адрес */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] text-primary">
                <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M12 2.75a6.25 6.25 0 0 0-6.25 6.25c0 3.77 3.54 7.42 5.46 9.17.45.41 1.13.41 1.58 0 1.92-1.75 5.46-5.4 5.46-9.17A6.25 6.25 0 0 0 12 2.75Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <span className="text-sm text-muted-foreground">
                г. Нижний Тагил, ул. Трикотажников, д. 7
              </span>
            </div>

            {/* Время работы */}
            <div className="flex items-center gap-2 justify-center">
              <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] text-primary">
                <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="12"
                    r="7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 9v3.25L14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-sm text-muted-foreground">
                Время работы: ежедневно, по предварительной записи
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 justify-end">
              <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] text-primary">
                <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                  <rect
                    x="4"
                    y="6"
                    width="16"
                    height="12"
                    rx="1.5"
                    ry="1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M5 7.5 12 12l7-4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-sm text-muted-foreground">
                Email: vvs@transfer01.ru
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Основной header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Логотип — переход на главную */}
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center"
          >
            <Logo className="h-6 md:h-10 w-auto flex-shrink-0 cursor-pointer" />
          </button>

          {/* Навигация (desktop) */}
          <nav className="hidden lg:flex gap-6">
            <Link
              to="/uslugi"
              className="px-4 py-2 border border-border text-sm text-foreground hover:bg-primary hover:text-white transition-colors"
            >
              Услуги
            </Link>
            <Link
              to="/o-nas"
              className="px-4 py-2 border border-border text-sm text-foreground hover:bg-primary hover:text-white transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/kontakty"
              className="px-4 py-2 border border-border text-sm text-foreground hover:bg-primary hover:text-white transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Контакты (desktop) */}
          <div className="px-4 py-2 hidden sm:block">
            <span className="text-sm text-foreground">
              Сервис: +7&nbsp;950&nbsp;200‑65‑64
            </span>
            <span className="block text-sm text-foreground">
              Запчасти: +7&nbsp;950&nbsp;200‑61‑72
            </span>
          </div>

          {/* Кнопка мобильного меню */}
          <button
            className="lg:hidden p-2 border-2 border-border w-10 h-10 flex flex-col items-center justify-center gap-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileMenuOpen ? (
              <>
                <div className="w-6 h-0.5 bg-foreground rotate-45 translate-y-1" />
                <div className="w-6 h-0.5 bg-foreground -rotate-45 -translate-y-1" />
              </>
            ) : (
              <>
                <div className="w-6 h-0.5 bg-foreground" />
                <div className="w-6 h-0.5 bg-foreground" />
                <div className="w-6 h-0.5 bg-foreground" />
              </>
            )}
          </button>
        </div>

        {/* Мобильная навигация */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 border-t border-border pt-4 space-y-3">
            <Link
              to="/"
              className="block px-4 py-3 border border-border text-sm text-foreground"
              onClick={closeMobile}
            >
              Главная
            </Link>
            <Link
              to="/uslugi"
              className="block px-4 py-3 border border-border text-sm text-foreground"
              onClick={closeMobile}
            >
              Услуги
            </Link>
            <Link
              to="/o-nas"
              className="block px-4 py-3 border border-border text-sm text-foreground"
              onClick={closeMobile}
            >
              О нас
            </Link>
            <Link
              to="/kontakty"
              className="block px-4 py-3 border border-border text-sm text-foreground"
              onClick={closeMobile}
            >
              Контакты
            </Link>

            {/* Контакты (mobile) */}
            <div className="border border-border px-4 py-3">
              <span className="text-sm text-foreground">
                Сервис: +7&nbsp;950&nbsp;200‑65‑64
              </span>
              <span className="block text-sm text-foreground">
                Запчасти: +7&nbsp;950&nbsp;200‑61‑72
              </span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
