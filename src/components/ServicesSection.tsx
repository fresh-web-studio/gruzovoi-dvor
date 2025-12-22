// src/components/ServicesSection.tsx
import { ServiceIcon } from "./ServiceIcons";
import type { ServiceIconKey } from "./ServiceIcons";


interface Service {
  name: string;
  price: string;
  icon: ServiceIconKey;
  shortDescription: string;
}

const ALL_SERVICES: Service[] = [
  // Масла, фильтры, жидкости
  {
    name: "Замена масла и фильтра ДВС",
    price: "от 1 500 ₽",
    icon: "engineOil",
    shortDescription: "Плановая замена моторного масла и фильтра с проверкой уровней.",
  },
  {
    name: "Замена фильтра воздушного",
    price: "от 200 ₽",
    icon: "airFilter",
    shortDescription: "Чистый воздух на впуске снижает расход топлива и износ ДВС.",
  },
  {
    name: "Замена фильтра топливного",
    price: "от 400 ₽",
    icon: "fuelFilter",
    shortDescription: "Защита топливной аппаратуры от грязи и влаги в дизельном топливе.",
  },
  {
    name: "Замена масла в КПП",
    price: "от 600 ₽",
    icon: "gearboxOil",
    shortDescription: "Обновление масла в коробке передач для стабильной работы агрегата.",
  },
  {
    name: "Замена масла в мосту заднем",
    price: "от 600 ₽",
    icon: "axleOil",
    shortDescription: "Продление ресурса заднего моста и снижение шума в работе.",
  },
  {
    name: "Замена жидкости ГУР частичная",
    price: "от 750 ₽",
    icon: "powerSteeringFluid",
    shortDescription: "Частичная замена жидкости ГУР для лёгкого и безопасного руления.",
  },
  {
    name: "Замена охлаждающей жидкости",
    price: "от 800 ₽",
    icon: "coolant",
    shortDescription: "Обновление антифриза для защиты двигателя от перегрева и коррозии.",
  },
  {
    name: "Замена ремней генератора",
    price: "от 600 ₽",
    icon: "belt",
    shortDescription: "Замена приводных ремней для надёжной работы генератора и навесного.",
  },

  // Смазка
  {
    name: "Шприцевание автомобиля (одна точка смазки)",
    price: "от 75 ₽",
    icon: "greasing",
    shortDescription: "Смазка узлов шасси для снижения износа и устранения скрипов.",
  },

  // Тормоза
  {
    name: "Регулировка тормозов",
    price: "от 1 500 ₽",
    icon: "brakeAdjust",
    shortDescription: "Настройка тормозной системы для ровного и эффективного торможения.",
  },
  {
    name: "Регулировка стояночного тормоза",
    price: "от 600 ₽",
    icon: "handbrakeAdjust",
    shortDescription: "Обеспечивает надёжную фиксацию автомобиля на уклонах.",
  },
  {
    name: "Замена колодок тормозных FR (передних)",
    price: "от 1 500 ₽",
    icon: "frontBrakePads",
    shortDescription: "Замена передних колодок для стабильного тормозного пути.",
  },
  {
    name: "Замена колодок тормозных RR (задних)",
    price: "от 2 000 ₽",
    icon: "rearBrakePads",
    shortDescription: "Обновление задних колодок для правильного распределения усилий.",
  },
  {
    name: "Замена Тормозных накладок",
    price: "Цена не указана",
    icon: "brakeLining",
    shortDescription: "Замена накладок барабанных тормозов, стоимость зависит от модели.",
  },

  // КПП, трансмиссия, кардан
  {
    name: "Снятие/Установка КПП",
    price: "от 6 000 ₽",
    icon: "gearboxRemove",
    shortDescription: "Комплексная работа по демонтажу и установке коробки передач.",
  },
  {
    name: "Замена сцепления при снятой КПП",
    price: "от 1 200 ₽",
    icon: "clutch",
    shortDescription: "Замена комплекта сцепления при уже демонтированной КПП.",
  },
  {
    name: "Замена подвесного подшипника",
    price: "от 1 800 ₽",
    icon: "centerBearing",
    shortDescription: "Восстановление опоры карданного вала для устранения вибраций.",
  },
  {
    name: "Замена крестовины карданного вала",
    price: "от 600 ₽",
    icon: "uJoint",
    shortDescription: "Замена крестовины кардана для плавной и тихой работы трансмиссии.",
  },
  {
    name: "Замена сальника хвостовика редуктора",
    price: "от 1 200 ₽",
    icon: "pinionSeal",
    shortDescription: "Устранение течи масла из редуктора заднего моста.",
  },

  // Подвеска
  {
    name: "Замена шкворней",
    price: "от 10 000 ₽",
    icon: "kingpin",
    shortDescription: "Восстановление поворотных цапф для точного управления и безопасности.",
  },
  {
    name: "Замена рессоры FR (передней)",
    price: "от 1 800 ₽",
    icon: "frontLeafSpring",
    shortDescription: "Замена передней рессоры для корректной высоты и комфорта движения.",
  },
  {
    name: "Замена рессоры RR (задней)",
    price: "от 2 200 ₽",
    icon: "rearLeafSpring",
    shortDescription: "Обновление задней рессоры под рабочую нагрузку и стабильность хода.",
  },

  // Двигатель, ГБЦ, клапаны
  {
    name: "Замена прокладки ГБЦ",
    price: "от 12 000 ₽",
    icon: "headGasket",
    shortDescription: "Сложный ремонт с заменой прокладки головки блока цилиндров.",
  },
  {
    name: "Замена прокладки клапанной крышки",
    price: "от 1 000 ₽",
    icon: "valveCover",
    shortDescription: "Устранение подтёков масла по периметру клапанной крышки.",
  },
  {
    name: "Регулировка клапанов с протяжкой болтов",
    price: "от 3 500 ₽",
    icon: "valveAdjust",
    shortDescription: "Регулировка тепловых зазоров и протяжка крепежа ГБЦ и крышки.",
  },

  // Навесное
  {
    name: "Замена вакуумного насоса",
    price: "от 2 200 ₽",
    icon: "vacuumPump",
    shortDescription: "Замена вакуумного насоса системы усиления тормозов.",
  },
  {
    name: "Снятие/Установка стартера",
    price: "от 1 000 ₽",
    icon: "starter",
    shortDescription: "Демонтаж и монтаж стартера для ремонта или замены.",
  },
  {
    name: "Снятие/Установка генератора",
    price: "от 1 000 ₽",
    icon: "alternator",
    shortDescription: "Снятие и установка генератора для обслуживания или замены.",
  },

  // ТНВД и турбина
  {
    name: "Снятие/Установка ТНВД",
    price: "от 7 500 ₽",
    icon: "injectionPump",
    shortDescription: "Демонтаж и установка топливного насоса высокого давления.",
  },
  {
    name: "Снятие/Установка турбокомпрессора",
    price: "от 6 500 ₽",
    icon: "turbo",
    shortDescription: "Работы по снятию и установке турбокомпрессора.",
  },
];

const HOME_SERVICES = ALL_SERVICES.slice(0, 6);

interface ServicesSectionProps {
  onNavigate?: (page: string) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const handleAllServicesClick = () => {
    onNavigate?.("services");
  };

  return (
    <section className="py-16 border-b border-gray-300 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок + кнопка */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Услуги нашего сервиса
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Основные работы по техническому обслуживанию и ремонту.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAllServicesClick}
            className="
              inline-flex items-center justify-center
              px-5 py-2 rounded-md
              border border-border
              bg-card text-sm font-medium text-foreground
              hover:bg-primary hover:text-white
              transition-colors
            "
          >
            Все услуги
          </button>
        </div>

        {/* Сетка из 6 услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_SERVICES.map((service) => (
            <article
              key={service.name}
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
              <div className="w-16 h-16 rounded-lg border border-border mb-4 flex items-center justify-center bg-primary/5">
                <ServiceIcon type={service.icon} />
              </div>

              <h3 className="text-base md:text-lg font-semibold text-foreground mb-3">
                {service.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {service.shortDescription}
              </p>

              <div className="text-sm font-semibold text-foreground">
                {service.price}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ALL_SERVICES };
