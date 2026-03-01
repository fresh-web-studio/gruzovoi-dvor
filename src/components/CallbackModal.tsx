'use client';

import { useState, useRef, useEffect } from 'react';

interface CallbackModalProps {
    open: boolean;
    onClose: () => void;
}

export function CallbackModal({ open, onClose }: CallbackModalProps) {
    const [isOpen, setIsOpen] = useState(open);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const phoneRef = useRef<HTMLInputElement>(null);

    // Синхронизация с пропсом open
    useEffect(() => {
        setIsOpen(open);
        if (open) {
            setName('');
            setPhone('');
            setMessage('');
        }
    }, [open]);

    // Маска телефона
    const formatPhone = (value: string): string => {
        // Убираем всё кроме цифр
        let onlyNumbers = value.replace(/\D/g, '');

        // Приводим к формату +7...
        if (onlyNumbers.startsWith('8')) {
            onlyNumbers = '7' + onlyNumbers.slice(1);
        }
        if (!onlyNumbers.startsWith('7')) {
            onlyNumbers = '7' + onlyNumbers;
        }

        let formatted = '+7 ';
        if (onlyNumbers.length > 1) formatted += onlyNumbers.slice(1, 4);
        formatted += onlyNumbers.length > 4 ? ` ${onlyNumbers.slice(4, 7)}` : '   ';
        formatted += onlyNumbers.length > 7 ? `-${onlyNumbers.slice(7, 9)}` : '  ';
        formatted += onlyNumbers.length > 9 ? `-${onlyNumbers.slice(9, 11)}` : '  ';

        return formatted;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, '');
        const formatted = formatPhone(rawValue);
        setPhone(formatted);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        if (!name.trim() || phone.replace(/\D/g, '').length < 10) {
            setMessage('Заполните имя и телефон');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'call',  // ← Backend ожидает именно это
                    name: name.trim(),
                    phone: phone.replace(/\D/g, ''),  // Только цифры: 79991234567
                }),
            });

            const data = await response.json();

            if (data.ok) {
                setMessage('✅ Заявка отправлена! Скоро перезвоним.');
                setName('');
                setPhone('');
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                setMessage('❌ Ошибка: ' + (data.error || 'Попробуйте позже'));
            }
        } catch (error) {
            setMessage('❌ Ошибка соединения');
        }

        setLoading(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-card rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 relative animate-in fade-in zoom-in duration-200">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1 rounded-full hover:bg-muted transition-all"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Заказать обратный звонок
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="Ваше имя"
                            maxLength={50}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <input
                            ref={phoneRef}
                            type="tel"
                            value={phone}
                            onChange={handlePhoneChange}
                            className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="+7 (___) ___-__-__"
                        />
                    </div>

                    {message && (
                        <div className={`p-3 rounded-lg text-sm ${message.includes('✅')
                                ? 'bg-green-50 border border-green-200 text-green-800'
                                : 'bg-destructive/10 border border-destructive/30 text-destructive'
                            }`}>
                            {message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading || !name.trim() || phone.replace(/\D/g, '').length < 10}
                        className="
                            w-full inline-flex items-center justify-center
                            px-6 py-3 rounded-lg
                            bg-primary text-primary-foreground
                            text-sm font-semibold
                            hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
                            transition-all duration-200
                        "
                    >
                        {loading ? 'Отправляем...' : 'Отправить запрос'}
                    </button>
                </form>
            </div>
        </div>
    );
}
