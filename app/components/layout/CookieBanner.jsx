// /app/components/CookieBanner.jsx

'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookie_accepted');
        if (!accepted) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_accepted', 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
            <div className="max-w-4xl mx-auto bg-[#1a0e08]/95 backdrop-blur-md border border-[#F7C35F]/30
                rounded-2xl shadow-2xl shadow-black/50 p-5 md:p-6
                flex flex-col sm:flex-row items-start sm:items-center gap-4">

                {/* Иконка */}
                <div className="flex-shrink-0 w-10 h-10 bg-[#F7C35F]/10 rounded-lg
                    flex items-center justify-center">
                    <span className="text-xl" role="img" aria-label="cookie">🍪</span>
                </div>

                {/* Текст */}
                <p className="flex-1 text-[#EADCC1]/80 text-sm leading-relaxed">
                    Мы используем файлы cookie для корректной работы сайта и анализа посещаемости.
                    Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
                    <Link
                        href="/privacy-policy"
                        className="text-[#F7C35F] hover:text-[#e5b44f] underline underline-offset-2 transition-colors"
                    >
                        политикой конфиденциальности
                    </Link>.
                </p>

                {/* Кнопка */}
                <button
                    onClick={handleAccept}
                    className="flex-shrink-0 px-6 py-2.5 bg-[#F7C35F] text-[#2c1810] rounded-lg
                        font-semibold text-sm hover:bg-[#e5b44f] transition-colors
                        whitespace-nowrap shadow-lg"
                >
                    Принять
                </button>
            </div>
        </div>
    );
}