export function ExpectationSection() {
  return (
    <section className="py-16 bg-gray-50 border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="h-8 bg-gray-300 max-w-xs md:max-w-md mx-auto mb-4 flex items-center justify-center">
            Комфортное ожидание
          </div>
          <div className="h-4 bg-gray-200 max-w-sm md:max-w-xl mx-auto"></div>
        </div>

        {/* Expectation items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-300 w-3/4 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-5/6 mx-auto"></div>
          </div>

          {/* Item 2 */}
          <div className="border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-300 w-2/3 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-4/5 mx-auto"></div>
          </div>

          {/* Item 3 */}
          <div className="border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-300 w-3/4 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-5/6 mx-auto"></div>
          </div>

          {/* Item 4 */}
          <div className="border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-300 w-2/3 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-4/5 mx-auto"></div>
          </div>

          {/* Item 5 */}
          <div className="border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-300 w-3/4 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-5/6 mx-auto"></div>
          </div>

          {/* Item 6 */}
          <div className="border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-300 w-2/3 mx-auto mb-3"></div>
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-4/5 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}