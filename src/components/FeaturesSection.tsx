export function FeaturesSection() {
  return (
    <section className="py-16 bg-white border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="h-8 bg-gray-300 w-96 mx-auto mb-4 flex items-center justify-center">
            Наши преимущества
          </div>
          <div className="h-4 bg-gray-200 w-[480px] mx-auto"></div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex gap-4 border-2 border-gray-400 p-6 bg-gray-50">
            <div className="w-20 h-20 border-2 border-gray-400 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="h-5 bg-gray-300 w-2/3 mb-3"></div>
              <div className="h-3 bg-gray-200 w-full mb-2"></div>
              <div className="h-3 bg-gray-200 w-5/6 mb-2"></div>
              <div className="h-3 bg-gray-200 w-4/5"></div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-4 border-2 border-gray-400 p-6 bg-gray-50">
            <div className="w-20 h-20 border-2 border-gray-400 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="h-5 bg-gray-300 w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-200 w-full mb-2"></div>
              <div className="h-3 bg-gray-200 w-5/6 mb-2"></div>
              <div className="h-3 bg-gray-200 w-3/4"></div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-4 border-2 border-gray-400 p-6 bg-gray-50">
            <div className="w-20 h-20 border-2 border-gray-400 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="h-5 bg-gray-300 w-2/3 mb-3"></div>
              <div className="h-3 bg-gray-200 w-full mb-2"></div>
              <div className="h-3 bg-gray-200 w-5/6 mb-2"></div>
              <div className="h-3 bg-gray-200 w-4/5"></div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-4 border-2 border-gray-400 p-6 bg-gray-50">
            <div className="w-20 h-20 border-2 border-gray-400 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="h-5 bg-gray-300 w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-200 w-full mb-2"></div>
              <div className="h-3 bg-gray-200 w-5/6 mb-2"></div>
              <div className="h-3 bg-gray-200 w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}