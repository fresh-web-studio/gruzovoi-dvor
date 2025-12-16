import { useState } from 'react';

export function ReviewsSection() {
  const [, setCurrentReview] = useState(0);
  const reviews = [1, 2, 3];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-white border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="h-8 bg-gray-300 max-w-xs md:max-w-sm mx-auto mb-4 flex items-center justify-center">
            Отзывы
          </div>
          <div className="h-4 bg-gray-200 max-w-sm md:max-w-md mx-auto"></div>
        </div>

        {/* Desktop: Reviews grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="border-2 border-gray-400 p-6 bg-gray-50">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
            </div>
            {/* Review text */}
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-5/6 mb-2"></div>
            <div className="h-3 bg-gray-200 w-4/5 mb-4"></div>
            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-300">
              <div className="w-12 h-12 border-2 border-gray-400 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 w-2/3 mb-2"></div>
                <div className="h-3 bg-gray-200 w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="border-2 border-gray-400 p-6 bg-gray-50">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
            </div>
            {/* Review text */}
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-11/12 mb-2"></div>
            <div className="h-3 bg-gray-200 w-5/6 mb-4"></div>
            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-300">
              <div className="w-12 h-12 border-2 border-gray-400 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 w-2/3 mb-2"></div>
                <div className="h-3 bg-gray-200 w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="border-2 border-gray-400 p-6 bg-gray-50">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
            </div>
            {/* Review text */}
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-5/6 mb-2"></div>
            <div className="h-3 bg-gray-200 w-3/4 mb-4"></div>
            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-300">
              <div className="w-12 h-12 border-2 border-gray-400 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 w-2/3 mb-2"></div>
                <div className="h-3 bg-gray-200 w-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Single review carousel */}
        <div className="md:hidden">
          <div className="border-2 border-gray-400 p-6 bg-gray-50">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
              <div className="w-5 h-5 border border-gray-400"></div>
            </div>
            {/* Review text */}
            <div className="h-3 bg-gray-200 w-full mb-2"></div>
            <div className="h-3 bg-gray-200 w-5/6 mb-2"></div>
            <div className="h-3 bg-gray-200 w-4/5 mb-4"></div>
            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-300">
              <div className="w-12 h-12 border-2 border-gray-400 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 w-2/3 mb-2"></div>
                <div className="h-3 bg-gray-200 w-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevReview}
            className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center"
          >
            <span className="text-gray-500">←</span>
          </button>
          <button
            onClick={nextReview}
            className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center"
          >
            <span className="text-gray-500">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}