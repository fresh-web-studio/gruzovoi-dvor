export function StatisticsSection() {
  return (
    <section className="py-16 bg-gray-800 border-b-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <div className="h-8 bg-gray-600 max-w-xs md:max-w-sm mx-auto mb-4 flex items-center justify-center">
            Наша работы в цыфрах
          </div>
        </div>
        {/* Statistics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center border-2 border-gray-600 p-8 bg-gray-700">
            <div className="h-12 bg-gray-500 w-32 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-600 w-40 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-600 w-36 mx-auto"></div>
          </div>

          {/* Stat 2 */}
          <div className="text-center border-2 border-gray-600 p-8 bg-gray-700">
            <div className="h-12 bg-gray-500 w-32 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-600 w-40 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-600 w-36 mx-auto"></div>
          </div>

          {/* Stat 3 */}
          <div className="text-center border-2 border-gray-600 p-8 bg-gray-700">
            <div className="h-12 bg-gray-500 w-32 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-600 w-40 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-600 w-36 mx-auto"></div>
          </div>

          {/* Stat 4 */}
          <div className="text-center border-2 border-gray-600 p-8 bg-gray-700">
            <div className="h-12 bg-gray-500 w-32 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-600 w-40 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-600 w-36 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}