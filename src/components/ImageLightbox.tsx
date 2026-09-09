import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  image: string;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function ImageLightbox({
  image,
  title,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: LightboxProps) {
  // Закрытие по Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <DialogPrimitive.Root open onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <DialogPrimitive.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" />

          {/* Content */}
          <div className="relative z-50 flex flex-col items-center max-w-screen-xl mx-auto px-4 py-8">
            {/* Заголовок */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-center max-w-md">
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>

            {/* Кнопка закрытия */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/30 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Закрыть"
            >
              <XIcon className="w-6 h-6" />
            </button>

            {/* Изображение */}
            <img
              src={`/photos/${image}`}
              alt={title}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
            />

            {/* Навигация */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={onPrev}
                disabled={!hasPrev}
                className={`p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors ${
                  hasPrev ? "cursor-pointer" : "opacity-30 cursor-not-allowed"
                }`}
                aria-label="Предыдущее"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-white/70 text-sm">
                {image.replace(".jpg", "").replace(/_/g, " ")}
              </span>
              <button
                onClick={onNext}
                disabled={!hasNext}
                className={`p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors ${
                  hasNext ? "cursor-pointer" : "opacity-30 cursor-not-allowed"
                }`}
                aria-label="Следующее"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
