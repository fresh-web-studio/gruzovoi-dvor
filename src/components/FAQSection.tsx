export function FAQSection() {
  return (
    <section className="py-16 bg-white border-b-2 border-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="h-8 bg-gray-300 w-80 mx-auto mb-4 flex items-center justify-center">
            Часто задаваемые вопросы
          </div>
          <div className="h-4 bg-gray-200 w-96 mx-auto"></div>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="border-2 border-gray-400 p-4 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="h-5 bg-gray-300 w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 w-full mb-2"></div>
                <div className="h-3 bg-gray-200 w-5/6"></div>
              </div>
              <div className="w-6 h-6 border-2 border-gray-500 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-500">+</span>
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="border-2 border-gray-400 p-4 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="h-5 bg-gray-300 w-2/3 mb-3"></div>
                <div className="h-3 bg-gray-200 w-full mb-2"></div>
                <div className="h-3 bg-gray-200 w-4/5"></div>
              </div>
              <div className="w-6 h-6 border-2 border-gray-500 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-500">+</span>
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="border-2 border-gray-400 p-4 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="h-5 bg-gray-300 w-4/5 mb-3"></div>
                <div className="h-3 bg-gray-200 w-full mb-2"></div>
                <div className="h-3 bg-gray-200 w-11/12 mb-2"></div>
                <div className="h-3 bg-gray-200 w-3/4"></div>
              </div>
              <div className="w-6 h-6 border-2 border-gray-500 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-500">+</span>
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="border-2 border-gray-400 p-4 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="h-5 bg-gray-300 w-3/5 mb-3"></div>
                <div className="h-3 bg-gray-200 w-full mb-2"></div>
                <div className="h-3 bg-gray-200 w-5/6"></div>
              </div>
              <div className="w-6 h-6 border-2 border-gray-500 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-500">+</span>
              </div>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="border-2 border-gray-400 p-4 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="h-5 bg-gray-300 w-2/3 mb-3"></div>
                <div className="h-3 bg-gray-200 w-full mb-2"></div>
                <div className="h-3 bg-gray-200 w-4/5 mb-2"></div>
                <div className="h-3 bg-gray-200 w-3/5"></div>
              </div>
              <div className="w-6 h-6 border-2 border-gray-500 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-500">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}