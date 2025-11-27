export function MapSection() {
  return (
    <section className="relative h-96 border-b-2 border-gray-300">
      {/* Map placeholder */}
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400">[Карта местоположения]</span>
      </div>

      {/* Info card overlay */}
      <div className="absolute top-8 left-8 bg-white border-2 border-gray-400 p-6 shadow-lg max-w-sm">
        {/* Company name */}
        <div className="mb-4">
          <div className="h-6 bg-gray-300 w-48 mb-2"></div>
        </div>

        {/* Address */}
        <div className="mb-3 flex gap-2">
          <div className="w-5 h-5 border border-gray-400 flex-shrink-0 mt-0.5"></div>
          <div className="flex-1">
            <div className="h-3 bg-gray-200 w-full mb-1"></div>
            <div className="h-3 bg-gray-200 w-4/5"></div>
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4 flex gap-2">
          <div className="w-5 h-5 border border-gray-400 flex-shrink-0"></div>
          <div className="h-3 bg-gray-200 w-32 mt-1"></div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Button */}
        <button className="w-full px-6 py-3 border-2 border-gray-600 bg-gray-800 text-white">
          Наши услуги
        </button>
      </div>
    </section>
  );
}
