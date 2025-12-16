import { useState } from "react";
import { Logo } from "./Logo";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card">
      {/* Верхняя инфо-панель (desktop) */}
      <div className="border-b border-border bg-card hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="grid grid-cols-3 gap-4">
            {/* Адрес */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-border rounded-sm" />
              <span className="text-sm text-muted-foreground">
                г. Нижний Тагил, ул. Трикотажников, д. 7
              </span>
            </div>

            {/* Время работы */}
            <div className="flex items-center gap-2 justify-center">
              <div className="w-4 h-4 border border-border rounded-sm" />
              <span className="text-sm text-muted-foreground">
                Время работы: ежедневно, по предварительной записи
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 justify-end">
              <div className="w-4 h-4 border border-border rounded-sm" />
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
          {/* Логотип */}
          <Logo className="h-6 md:h-10 w-auto flex-shrink-0" />

          {/* Навигация (desktop) */}
          <nav className="hidden lg:flex gap-6">
            <div
              className="px-4 py-2 border border-border cursor-pointer"
              onClick={() => onNavigate?.("home")}
            >
              <span className="text-sm text-foreground">Главная</span>
            </div>
            <div
              className="px-4 py-2 border border-border cursor-pointer"
              onClick={() => onNavigate?.("services")}
            >
              <span className="text-sm text-foreground">Услуги</span>
            </div>
            <div
              className="px-4 py-2 border border-border cursor-pointer"
              onClick={() => onNavigate?.("about")}
            >
              <span className="text-sm text-foreground">О нас</span>
            </div>
            <div
              className="px-4 py-2 border border-border cursor-pointer"
              onClick={() => onNavigate?.("contacts")}
            >
              <span className="text-sm text-foreground">Контакты</span>
            </div>
          </nav>

          {/* Контакты (desktop) */}
          <div className="px-4 py-2 hidden md:block">
            <span className="text-sm text-foreground">
              Сервис: +7&nbsp;950&nbsp;200‑65‑64
            </span>
            <span className="block text-sm text-foreground">
              Запчасти: +7&nbsp;950&nbsp;200‑61‑72
            </span>
          </div>

          {/* Кнопка мобильного меню (бургера) */}
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
            <div
              className="px-4 py-3 border border-border cursor-pointer"
              onClick={() => {
                onNavigate?.("home");
                setMobileMenuOpen(false);
              }}
            >
              <span className="text-sm text-foreground">Главная</span>
            </div>
            <div
              className="px-4 py-3 border border-border cursor-pointer"
              onClick={() => {
                onNavigate?.("services");
                setMobileMenuOpen(false);
              }}
            >
              <span className="text-sm text-foreground">Услуги</span>
            </div>
            <div
              className="px-4 py-3 border border-border cursor-pointer"
              onClick={() => {
                onNavigate?.("about");
                setMobileMenuOpen(false);
              }}
            >
              <span className="text-sm text-foreground">О нас</span>
            </div>
            <div
              className="px-4 py-3 border border-border cursor-pointer"
              onClick={() => {
                onNavigate?.("contacts");
                setMobileMenuOpen(false);
              }}
            >
              <span className="text-sm text-foreground">Контакты</span>
            </div>

            {/* Контакты (mobile) */}
            <div className="border border-border px-4 py-3">
              <span className="text-sm text-foreground">
                Сервис: +7&nbsp;950&nbsp;200‑65‑64
              </span>
              <span className="block text-xs text-muted-foreground">
                Запчасти и WhatsApp: +7&nbsp;950&nbsp;200‑61‑72
              </span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
