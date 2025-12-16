import { LogoWhite } from "./LogoWhite";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <div className="w-48 h-8 mb-4">
              <LogoWhite className="w-full h-full" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-600 w-full"></div>
              <div className="h-3 bg-gray-600 w-5/6"></div>
            </div>
          </div>

          {/* Links column 1 */}
          <div>
            <div className="h-5 bg-gray-600 w-24 mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-3 bg-gray-600 w-20"></div>
              ))}
            </div>
          </div>

          {/* Links column 2 */}
          <div>
            <div className="h-5 bg-gray-600 w-24 mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-3 bg-gray-600 w-20"></div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div className="h-5 bg-gray-600 w-24 mb-4"></div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-600 w-32"></div>
              <div className="h-3 bg-gray-600 w-28"></div>
              <div className="h-3 bg-gray-600 w-36"></div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[1, 2, 3, 4].map((icon) => (
                <div
                  key={icon}
                  className="w-10 h-10 border-2 border-gray-500 flex items-center justify-center"
                >
                  <span className="text-xs text-gray-400">[]</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t-2 border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="h-3 bg-gray-600 w-48"></div>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="h-3 bg-gray-600 w-20"></div>
              <div className="h-3 bg-gray-600 w-20"></div>
              <div className="h-3 bg-gray-600 w-20"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}