import { useEffect } from 'react';

export const YandexMetrika: React.FC = () => {
  useEffect(() => {
    // Вставляем скрипт Яндекс Метрики
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107098604', 'ym');

      ym(107098604, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
    `;
    document.head.appendChild(script);

    // Очистка при размонтировании
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};
