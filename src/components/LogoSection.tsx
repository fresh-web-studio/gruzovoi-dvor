// src/components/LogoSection.tsx
import kamazLogo from "../assets/logos/kamaz.svg";
import mazLogo from "../assets/logos/maz.svg";
import uralLogo from "../assets/logos/ural.svg";
import gazLogo from "../assets/logos/gaz.svg";
import howoLogo from "../assets/logos/howo.svg";
import sitrakLogo from "../assets/logos/sitrak.svg";
import shacmanLogo from "../assets/logos/shacman.svg";
import hyundaiLogo from "../assets/logos/hyundai.svg";
import isuzuLogo from "../assets/logos/isuzu.svg";
import fusoLogo from "../assets/logos/fuso.svg";
import volvoLogo from "../assets/logos/volvo.svg";
import mercedesLogo from "../assets/logos/mercedes.svg";
import dafLogo from "../assets/logos/daf.svg";
import scaniaLogo from "../assets/logos/scania.svg";
import manLogo from "../assets/logos/man.svg";

type TruckBrand = {
  name: string;
  logo: string;
};

const TRUCK_BRANDS: TruckBrand[] = [
  { name: "КамАЗ", logo: kamazLogo },
  { name: "МАЗ", logo: mazLogo },
  { name: "Урал", logo: uralLogo },
  { name: "ГАЗ", logo: gazLogo },
  { name: "HOWO", logo: howoLogo },
  { name: "SITRAK", logo: sitrakLogo },
  { name: "SHACMAN", logo: shacmanLogo },
  { name: "Hyundai", logo: hyundaiLogo },
  { name: "Isuzu", logo: isuzuLogo },
  { name: "Mitsubishi Fuso", logo: fusoLogo },
  { name: "Volvo", logo: volvoLogo },
  { name: "Mercedes", logo: mercedesLogo },
  { name: "DAF", logo: dafLogo },
  { name: "Scania", logo: scaniaLogo },
  { name: "MAN", logo: manLogo },
];

export function LogoSection() {
  return (
    <section className="py-16 bg-gray-800 border-b-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-50">
            Марки грузовиков
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Обслуживаем популярные иностранные и российские марки
            среднетоннажных и тяжёлых грузовиков.
          </p>
        </div>

        {/* Сетка логотипов */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {TRUCK_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="border border-gray-500 bg-white rounded-xl p-4 h-24 flex items-center justify-center shadow-sm"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}