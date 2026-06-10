import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const YandexMetrika: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const w = window as Window & {
      ym: ((...args: any[]) => void) & { a?: any[]; l?: number };
    };

    w.ym =
      w.ym ||
      function (...args: any[]) {
        w.ym.a = w.ym.a || [];
        w.ym.a.push(args);
      };

    w.ym.l = Date.now();

    const initMetrika = () => {
      w.ym(107098604, 'init', {
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        ecommerce: 'dataLayer',
      });

      w.ym(107098604, 'hit', location.pathname + location.search);
    };

    const scriptId = 'yandex-metrika-tag';

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        initMetrika();
      } else {
        existing.addEventListener('load', initMetrika, { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.loaded = 'false';

    script.onload = () => {
      script.dataset.loaded = 'true';
      initMetrika();
    };

    script.onerror = () => {
      console.warn('Яндекс Метрика не загрузилась');
    };

    document.head.appendChild(script);
  }, [location.pathname, location.search]);

  return null;
};