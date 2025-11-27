import { useState } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b-2 border-gray-300 bg-white">
      {/* Top info bar */}
      <div className="border-b border-gray-300 bg-gray-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="grid grid-cols-3 gap-4">
            {/* Address */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-gray-400"></div>
              <span className="text-sm text-gray-600">Адрес: [адрес компании]</span>
            </div>
            
            {/* Working hours */}
            <div className="flex items-center gap-2 justify-center">
              <div className="w-4 h-4 border border-gray-400"></div>
              <span className="text-sm text-gray-600">Время работы: [время]</span>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-2 justify-end">
              <div className="w-4 h-4 border border-gray-400"></div>
              <span className="text-sm text-gray-600">Email: [email@example.com]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="w-88 h-10 border-2 border-gray-400 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Логотип</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6">
            <div 
              className="px-4 py-2 border border-gray-400 cursor-pointer" 
              onClick={() => onNavigate?.('home')}
            >
              <span className="text-gray-700">Главная</span>
            </div>
            <div 
              className="px-4 py-2 border border-gray-400 cursor-pointer" 
              onClick={() => onNavigate?.('services')}
            >
              <span className="text-gray-700">Услуги</span>
            </div>
            <div 
              className="px-4 py-2 border border-gray-400 cursor-pointer" 
              onClick={() => onNavigate?.('about')}
            >
              <span className="text-gray-700">О нас</span>
            </div>
            <div 
              className="px-4 py-2 border border-gray-400 cursor-pointer" 
              onClick={() => onNavigate?.('contacts')}
            >
              <span className="text-gray-700">Контакты</span>
            </div>
          </nav>

          {/* Contact info placeholder - hidden on mobile */}
          <div className="border border-gray-400 px-4 py-2 hidden md:block">
            <span className="text-gray-700 text-sm">Телефон: [номер]</span>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 border-2 border-gray-400 w-10 h-10 flex flex-col items-center justify-center gap-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              // X icon
              <>
                <div className="w-6 h-0.5 bg-gray-600 rotate-45 translate-y-1"></div>
                <div className="w-6 h-0.5 bg-gray-600 -rotate-45 -translate-y-1"></div>
              </>
            ) : (
              // Hamburger icon
              <>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 border-t-2 border-gray-300 pt-4 space-y-3">
            <div 
              className="px-4 py-3 border border-gray-400 cursor-pointer" 
              onClick={() => {
                onNavigate?.('home');
                setMobileMenuOpen(false);
              }}
            >
              <span className="text-gray-700">Главная</span>
            </div>
            <div 
              className="px-4 py-3 border border-gray-400 cursor-pointer" 
              onClick={() => {
                onNavigate?.('services');
                setMobileMenuOpen(false);
              }}
            >
              <span className="text-gray-700">Услуги</span>
            </div>
            <div 
              className="px-4 py-3 border border-gray-400 cursor-pointer" 
              onClick={() => {
                onNavigate?.('about');
                setMobileMenuOpen(false);
              }}
            >
              <span className="text-gray-700">О нас</span>
            </div>
            <div 
              className="px-4 py-3 border border-gray-400 cursor-pointer" 
              onClick={() => {
                onNavigate?.('contacts');
                setMobileMenuOpen(false);
              }}
            >
              <span className="text-gray-700">Контакты</span>
            </div>
            
            {/* Mobile contact info */}
            <div className="border border-gray-400 px-4 py-3">
              <span className="text-gray-700 text-sm">Телефон: [номер]</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}