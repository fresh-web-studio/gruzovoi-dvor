import {
    FaOilCan,
    FaTools,
    FaCogs,
    FaCarBattery,
    FaCarSide,
    FaFan,
    FaThermometerHalf,
    FaTruck,
    FaBolt,
    FaCompressArrowsAlt,
} from "react-icons/fa";
import {
    GiCarWheel,
    GiCarBattery,
    GiCarDoor,
    GiGearStickPattern,
    GiSpring,
    GiCarSeat,
} from "react-icons/gi";
import { MdBuild, MdOutlineEngineering } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";

export type ServiceIconKey =
    | "engineOil"
    | "airFilter"
    | "fuelFilter"
    | "gearboxOil"
    | "axleOil"
    | "powerSteeringFluid"
    | "coolant"
    | "belt"
    | "greasing"
    | "brakeAdjust"
    | "handbrakeAdjust"
    | "gearboxRemove"
    | "clutch"
    | "centerBearing"
    | "uJoint"
    | "kingpin"
    | "frontLeafSpring"
    | "rearLeafSpring"
    | "frontBrakePads"
    | "rearBrakePads"
    | "pinionSeal"
    | "headGasket"
    | "valveCover"
    | "valveAdjust"
    | "vacuumPump"
    | "starter"
    | "alternator"
    | "injectionPump"
    | "turbo"
    | "brakeLining"
    | "generic";

export function ServiceIcon({ type }: { type: ServiceIconKey }) {
    const base = "h-6 w-6 text-primary";

    switch (type) {
        case "engineOil":
            // Масло двигателя
            return <FaOilCan className={base} />;
        case "airFilter":
            // Воздушный фильтр / поток воздуха
            return <FaFan className={base} />;
        case "fuelFilter":
            // Топливная система / капля топлива
            return <FaTruck className={base} />;
        case "gearboxOil":
            // КПП / шестерни
            return <GiGearStickPattern className={base} />;
        case "axleOil":
            // Редуктор / шестерни моста
            return <FaCogs className={base} />;
        case "powerSteeringFluid":
            // Руль / усилитель
            return <FaCarSide className={base} />;
        case "coolant":
            // Температура / охлаждение
            return <FaThermometerHalf className={base} />;
        case "belt":
            // Ремень / привод
            return <FaCompressArrowsAlt className={base} />;
        case "greasing":
            // Смазка / сервис
            return <MdBuild className={base} />;

        case "brakeAdjust":
            // Регулировка тормозов
            return <GiCarWheel className={base} />;
        case "handbrakeAdjust":
            // Ручник
            return <RiTimerLine className={base} />;

        case "gearboxRemove":
            // Снятие/установка КПП
            return <GiGearStickPattern className={base} />;
        case "clutch":
            // Сцепление
            return <GiCarSeat className={base} />;
        case "centerBearing":
            // Подвесной подшипник / кардан
            return <FaCarSide className={base} />;
        case "uJoint":
            // Крестовина кардана
            return <MdOutlineEngineering className={base} />;

        case "kingpin":
            // Шкворни / поворотный узел
            return <GiCarDoor className={base} />;
        case "frontLeafSpring":
        case "rearLeafSpring":
            // Рессоры / подвеска
            return <GiSpring className={base} />;

        case "frontBrakePads":
        case "rearBrakePads":
        case "brakeLining":
            // Тормозной диск/колодки
            return <GiCarWheel className={base} />;

        case "pinionSeal":
            // Сальник редуктора
            return <FaCogs className={base} />;

        case "headGasket":
            // ГБЦ / сложный ремонт
            return <MdOutlineEngineering className={base} />;
        case "valveCover":
        case "valveAdjust":
            // Клапаны / ГРМ
            return <FaTools className={base} />;

        case "vacuumPump":
            // Вакуум / тормоза
            return <GiCarBattery className={base} />;

        case "starter":
            // Стартер
            return <FaBolt className={base} />;
        case "alternator":
            // Генератор
            return <FaCarBattery className={base} />;

        case "injectionPump":
            // ТНВД
            return <FaTruck className={base} />;
        case "turbo":
            // Турбина
            return <FaFan className={base} />;

        case "generic":
        default:
            // Универсальный инструмент
            return <FaTools className={base} />;
    }
}
