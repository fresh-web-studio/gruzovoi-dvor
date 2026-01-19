// src/components/ExpectationSection.tsx
import { ExpectationIcon, type ExpectationIconKey } from "./ExpectationIcons";

type ExpectationItem = {
  id: string;
  icon: ExpectationIconKey;
  title: string;
  description: string;
};

const EXPECTATION_ITEMS: ExpectationItem[] = [
  {
    id: "sofa",
    icon: "sofa",
    title: "Уютная зона с диваном",
    description:
      "Комфортные кресла и диван, аккуратный интерьер и спокойная атмосфера — чтобы не чувствовать себя в гараже.",
  },
  {
    id: "coffee",
    icon: "coffee",
    title: "Кофе, чай и вода",
    description:
      "Горячий кофе, чай и охлаждённая вода доступны бесплатно на протяжении всего времени обслуживания.",
  },
  {
    id: "wifi",
    icon: "wifi",
    title: "Быстрый Wi‑Fi и розетки",
    description:
      "Стабильный Wi‑Fi и розетки рядом с посадочными местами позволяют поработать или заняться личными делами онлайн.",
  },
  {
    id: "transparency",
    icon: "transparency",
    title: "Прозрачность работ",
    description:
      "Вы всегда понимаете, на каком этапе сейчас ваш автомобиль: статус заказа и ориентировочное время готовности.",
  },
];

type ExpectationCardProps = {
  item: ExpectationItem;
};

function ExpectationCard({ item }: ExpectationCardProps) {
  return (
    <article
      className="
        border border-border
        rounded-xl
        bg-card
        p-6
        shadow-sm
        hover:border-primary/70 hover:shadow-md
        transition-colors transition-shadow
      "
    >
      <div className="w-16 h-16 rounded-lg border border-border mb-4 mx-auto flex items-center justify-center bg-primary/5 text-primary">
        <ExpectationIcon type={item.icon} />
      </div>

      <h3 className="text-base md:text-lg font-semibold text-foreground text-center mb-3">
        {item.title}
      </h3>

      <p className="text-sm text-muted-foreground text-center">
        {item.description}
      </p>
    </article>
  );
}

export function ExpectationSection() {
  return (
    <section className="py-16 border-b border-gray-300 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Комфортное ожидание
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Пока мы занимаемся вашим автомобилем, вы можете спокойно отдохнуть
            в чистой и комфортной зоне ожидания.
          </p>
        </div>

        {/* Сетка преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {EXPECTATION_ITEMS.map((item) => (
            <ExpectationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { EXPECTATION_ITEMS };
