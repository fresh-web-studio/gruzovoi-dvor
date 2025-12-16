import { useState } from 'react';

export function WorkSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    { id: 1, number: '1' },
    { id: 2, number: '2' },
    { id: 3, number: '3' },
    { id: 4, number: '4' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-16 bg-gray-50 border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="h-8 bg-gray-300 max-w-xs md:max-w-sm mx-auto mb-4 flex items-center justify-center">Наши работы</div>
          <div className="h-4 bg-gray-200 max-w-sm md:max-w-md mx-auto"></div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-24 h-24 border-2 border-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">1</span>
            </div>
            <div className="h-5 bg-gray-300 w-3/4 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-5/6 mx-auto"></div>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-24 h-24 border-2 border-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">2</span>
            </div>
            <div className="h-5 bg-gray-300 w-2/3 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-4/5 mx-auto"></div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-24 h-24 border-2 border-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">3</span>
            </div>
            <div className="h-5 bg-gray-300 w-3/4 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-5/6 mx-auto"></div>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-24 h-24 border-2 border-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">4</span>
            </div>
            <div className="h-5 bg-gray-300 w-2/3 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-4/5 mx-auto"></div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="text-center px-8">
              <div className="w-24 h-24 border-2 border-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">{steps[currentSlide].number}</span>
              </div>
              <div className="h-5 bg-gray-300 w-3/4 mx-auto mb-3"></div>
              <div className="h-3 bg-gray-200 w-full mb-2"></div>
              <div className="h-3 bg-gray-200 w-5/6 mx-auto"></div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 border-2 border-gray-400 bg-white"
            >
              <span className="text-gray-700">←</span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 border-2 border-gray-400 bg-white"
            >
              <span className="text-gray-700">→</span>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}