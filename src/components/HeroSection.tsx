export function HeroSection() {
  return (
    <section className="border-b-2 border-gray-300 bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content area */}
          <div className="flex-1">
            <div className="space-y-6">
              {/* Heading placeholder */}
              <div className="space-y-2">
                <div className="h-8 bg-gray-300 w-3/4"></div>
                <div className="h-8 bg-gray-300 w-2/3"></div>
              </div>

              {/* Subheading placeholder */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 w-full"></div>
                <div className="h-4 bg-gray-300 w-5/6"></div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 border-2 border-gray-600 bg-gray-800 text-white">
                  Основная кнопка
                </button>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="flex-1">
            <div className="w-full h-80 border-2 border-gray-400 flex items-center justify-center bg-white">
              <span className="text-gray-400 text-sm">[Главное изображение]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}