import { useState } from "react";
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Review {
  id: number;
  author: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Лобов Сергей",
    position: "Главный механик",
    company: "Группа компаний «Деловой Стиль»",
    text: "Ремонтом и обслуживанием нашего парка автомобилей доволен. Все работы выполняют качественно и в срок. Персонал корректен и предупредителен. Запасные части в наличии, если чего то и нет, то могут сами заказать и привезти.",
    rating: 5,
  },
  {
    id: 2,
    author: "Мокшин Тимур",
    position: "Главный механик",
    company: "ООО «Трансфер-НТ»",
    text: "Выражаем огромную благодарность мастерам компании ООО «Грузовой Двор-НТ» за качественную, оперативную и добросовестную работу. Сотрудники используют все возможности для поиска оптимальных запчастей. Ремонтом довольны, обращаемся сюда и только сюда. Обслуживаемся уже более 8 лет.",
    rating: 5,
  },
  {
    id: 3,
    author: "Воронов Андрей",
    position: "Главный механик",
    company: "ООО «РегионСпецТех»",
    text: "Выражаю признательность компании ООО «Грузовой Двор–НТ» за длительное и взаимовыгодное сотрудничество. Сотрудники всегда качественно оказывают услуги по ремонту нашей грузовой техники. За время работы компания зарекомендовала себя как надежный партнер, выполняющий обязательства в срок.",
    rating: 5,
  },
  {
    id: 4,
    author: "Суржиков Илья",
    position: "Главный механик",
    company: "ООО «Промстройсервис»",
    text: "Спешим поблагодарить Вас за сотрудничество. Особенно признательны вашему коллективу за порядочность, взаимовыручку и серьёзное отношение к работе. Все работы сданы вовремя, без замечаний, недоделок и превышения оговоренной суммы.",
    rating: 5,
  },
  {
    id: 5,
    author: "Соколов Алексей",
    position: "Механик",
    company: "ООО «Логистик Л7»",
    text: "Работают быстро и организованно, отличный сервис, клиентоориентированность на высшем уровне. Очень часто сталкивались в других сервисах с обманом – здесь всё четко. Объясняют понятным языком. Обслуживаюсь 6-ой год.",
    rating: 5,
  },
];

export function ReviewsSection() {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const itemsPerPage = 3;
  const maxDesktopIndex = Math.ceil(REVIEWS.length / itemsPerPage);

  const nextDesktopReviews = () => {
    setDesktopIndex((prev) => (prev + 1) % maxDesktopIndex);
  };

  const prevDesktopReviews = () => {
    setDesktopIndex((prev) => (prev - 1 + maxDesktopIndex) % maxDesktopIndex);
  };

  const nextMobileReview = () => {
    setMobileIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevMobileReview = () => {
    setMobileIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  // Для десктопа: получаем 3 отзыва для текущей страницы
  const desktopReviews = REVIEWS.slice(
    desktopIndex * itemsPerPage,
    (desktopIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Отзывы клиентов
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-gray-700">
            Что говорят о нас компании, которые доверяют нам свою технику
          </p>
        </div>

        {/* Desktop: Карусель по 3 отзыва */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {desktopReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6 hover:shadow-md transition-shadow"
              >
                {/* Звёзды */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Текст отзыва */}
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Автор */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900 text-sm">
                    {review.author}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {review.position}, {review.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Навигация для десктопа */}
          <div className="flex justify-center gap-3">
            <button
              onClick={prevDesktopReviews}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              aria-label="Предыдущие отзывы"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
            </button>

            {/* Индикаторы страниц */}
            <div className="flex items-center gap-2">
              {[...Array(maxDesktopIndex)].map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${index === desktopIndex ? "w-8 bg-red-600" : "w-2 bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextDesktopReviews}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              aria-label="Следующие отзывы"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile: Карусель по одному */}
        <div className="md:hidden mb-8">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(REVIEWS[mobileIndex].rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed h-32 overflow-y-auto">
              "{REVIEWS[mobileIndex].text}"
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-gray-900 text-sm">
                {REVIEWS[mobileIndex].author}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {REVIEWS[mobileIndex].position}, {REVIEWS[mobileIndex].company}
              </p>
            </div>
          </div>

          {/* Индикатор страницы мобильных */}
          <div className="flex justify-center gap-2 mt-4 mb-6">
            {REVIEWS.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${index === mobileIndex ? "w-8 bg-red-600" : "w-2 bg-gray-300"
                  }`}
              />
            ))}
          </div>

          {/* Кнопки навигации мобильные */}
          <div className="flex justify-center gap-3">
            <button
              onClick={prevMobileReview}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={nextMobileReview}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
