export function AboutSection() {
  return (
    <section className="py-16 border-b-2 border-gray-300 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image placeholder */}
          <div className="flex-1 w-full">
            <div className="w-full h-96 border-2 border-gray-400 flex items-center justify-center bg-white">
              <span className="text-gray-400 text-sm">
                [Изображение о компании]
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full">
            {/* Section heading */}
            <div className="h-8 bg-gray-300 w-48 mb-6 flex items-center">
              О компании
            </div>

            {/* Content blocks */}
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 w-full"></div>
                <div className="h-3 bg-gray-300 w-full"></div>
                <div className="h-3 bg-gray-300 w-5/6"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 w-full"></div>
                <div className="h-3 bg-gray-300 w-full"></div>
                <div className="h-3 bg-gray-300 w-4/5"></div>
              </div>
            </div>

            {/* Stats or features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[1, 2, 3, 4].map((stat) => (
                <div
                  key={stat}
                  className="border border-gray-400 p-4 bg-white"
                >
                  <div className="h-6 bg-gray-300 w-16 mb-2"></div>
                  <div className="h-3 bg-gray-200 w-24"></div>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 border-2 border-gray-600 bg-gray-800 text-white">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}