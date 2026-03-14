import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const YandexMetrika: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const sendPageView = () => {
      if (typeof window !== 'undefined' && window.ym !== undefined) {
        window.ym(107098604, 'hit', location.pathname + location.search);
      }
    };

    sendPageView();
  }, [location]);

  useEffect(() => {
    if (typeof window === 'undefined' || window.ym !== undefined) return;

    // Создаём скрипт без text/innerHTML
    const script = document.createElement('script');
    script.src = 'https://mc.yandex.ru/metrika/tag.js?id=107098604';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      console.log('Яндекс Метрика загружена успешно');
      if (window.ym) {
        // Инициализируем после загрузки скрипта
        window.ym(107098604, 'init', {
          webvisor: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          ecommerce: "dataLayer"
        });
      }
    };

    script.onerror = () => {
      console.warn('Яндекс Метрика заблокирована или не загрузилась');
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};
