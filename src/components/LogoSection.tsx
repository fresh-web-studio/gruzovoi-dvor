// src/components/LogoSection.tsx
import bawLogo from "../assets/logos/baw.svg";
import hyundaiLogo from "../assets/logos/hyundai.svg";
import isuzuLogo from "../assets/logos/isuzu.svg";
import ivecoLogo from "../assets/logos/iveco.svg";
import manLogo from "../assets/logos/man.svg";
import fusoLogo from "../assets/logos/fuso.svg";
import scaniaLogo from "../assets/logos/scania.svg";
import volvoLogo from "../assets/logos/volvo.svg";
import kamazLogo from "../assets/logos/kamaz.svg";
import uralLogo from "../assets/logos/ural.svg";

type TruckBrand = {
  name: string;
  logo: string;
};

const TRUCK_BRANDS: TruckBrand[] = [
  { name: "BAW", logo: bawLogo },
  { name: "Hyundai", logo: hyundaiLogo },
  { name: "Isuzu", logo: isuzuLogo },
  { name: "IVECO", logo: ivecoLogo },
  { name: "MAN", logo: manLogo },
  { name: "Mitsubishi Fuso", logo: fusoLogo },
  { name: "Scania", logo: scaniaLogo },
  { name: "Volvo", logo: volvoLogo },
  { name: "КамАЗ", logo: kamazLogo },
  { name: "Урал", logo: uralLogo },
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
