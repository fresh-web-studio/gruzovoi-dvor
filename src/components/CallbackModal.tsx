interface CallbackModalProps {
    open: boolean;
    onClose: () => void;
}

export function CallbackModal({ open, onClose }: CallbackModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-card rounded-lg shadow-lg max-w-md w-full mx-4 p-6 relative">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold mb-4">
                    Заказать обратный звонок
                </h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Имя</label>
                        <input
                            type="text"
                            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
                            placeholder="Ваше имя"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Телефон</label>
                        <input
                            type="tel"
                            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
                            placeholder="+7 ___ ___‑__‑__"
                        />
                    </div>

                    <button
                        type="submit"
                        className="
                            w-full inline-flex items-center justify-center
                            px-4 py-2 rounded-md
                            bg-primary text-primary-foreground
                            text-sm font-medium
                            hover:bg-primary/90
                            "
                    >
                        Отправить запрос
                    </button>
                </form>
            </div>
        </div>
    );
}
