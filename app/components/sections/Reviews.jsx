'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Link from 'next/link';

// Данные отзывов
const reviewsData = [
    {
        id: 1,
        name: "Александр Рудовой",
        role: "Директор мельницы",
        location: "г. Белая Калитва",
        rating: 5,
        text: "Работаем с хозяйством Великанова третий год. Пшеница всегда отличного качества, высокая клейковина, минимальная влажность. Поставки точно в срок.",
        date: "Октябрь 2024"
    },
    {
        id: 2,
        name: "Мария Л.А",
        role: "Главный технолог",
        location: "Хлебокомбинат, г. Морозовск",
        rating: 5,
        text: "Качество зерна стабильно высокое. Особенно радует прямая работа без посредников - цены честные, документы всегда в порядке.",
        date: "Сентябрь 2024"
    },
    {
        id: 3,
        name: "Сергей К.А.",
        role: "Фермер",
        location: "Каменский район",
        rating: 5,
        text: "Закупаю семенной материал уже пятый сезон. Всхожесть отличная, сорта проверенные. Николай всегда даст дельный совет по агротехнике.",
        date: "Август 2024"
    },
    {
        id: 4,
        name: "Елена Стомецкая",
        role: "Закупщик",
        location: "ООО АгроТрейд",
        rating: 5,
        text: "Лен масличный отменного качества! Масличность соответствует заявленной. Удобная логистика, всегда идут навстречу по срокам отгрузки.",
        date: "Июль 2024"
    },
    {
        id: 5,
        name: "Андрей Светлогорсков",
        role: "Предприниматель",
        location: "г. Каменск-Шахтинский",
        rating: 5,
        text: "Подсолнечник закупаем второй год для маслоцеха. Качество семян высокое, выход масла отличный. Рекомендую как надёжного поставщика.",
        date: "Сентябрь 2024"
    },
    {
        id: 6,
        name: "Николай Погорелов",
        role: "Агроном",
        location: "СПК Заря",
        rating: 5,
        text: "Профессиональный подход к делу. Зерно чистое, без примесей. Документы оформлены грамотно, сертификаты качества всегда актуальные.",
        date: "Октябрь 2024"
    }
];

// Компонент одной карточки отзыва
const ReviewCard = ({ review }) => (
    <div className="bg-gradient-to-br from-[#2c1810] to-[#1a0e08] 
    rounded-xl p-6 border border-[#F7C35F]/20 relative overflow-hidden
    hover:border-[#F7C35F]/40 transition-all duration-300 h-full"
    >
        <Quote className="absolute top-4 right-4 w-8 h-8 text-[#F7C35F]/10" />

        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating
                        ? 'fill-[#F7C35F] text-[#F7C35F]'
                        : 'text-[#F7C35F]/20'
                        }`}
                />
            ))}
        </div>

        <p className="text-[#EADCC1] text-sm md:text-base mb-6 min-h-[96px]">
            {review.text}
        </p>

        <div className="border-t border-[#F7C35F]/10 pt-4">
            <p className="text-[#F7C35F] font-semibold text-base">
                {review.name}
            </p>
            <p className="text-[#EADCC1]/70 text-sm">
                {review.role}
            </p>
            <p className="text-[#EADCC1]/50 text-xs mt-1">
                {review.location} • {review.date}
            </p>
        </div>
    </div>
);

export default function Reviews() {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width < 640) setItemsPerPage(1);
            else if (width < 1024) setItemsPerPage(2);
            else setItemsPerPage(3);
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    // Рассчитываем общее количество страниц
    const totalPages = Math.ceil(reviewsData.length / itemsPerPage);

    // Получаем отзывы для текущей страницы
    const getCurrentPageReviews = () => {
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;
        return reviewsData.slice(start, end);
    };

    const nextPage = () => {
        setCurrentPage(prev => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    };

    // Touch handlers для свайпов
    const [touchStart, setTouchStart] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (!touchStart) return;

        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) nextPage();
            else prevPage();
        }

        setTouchStart(null);
    };

    return (
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Заголовок */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#F7C35F] mb-4">
                    ОТЗЫВЫ НАШИХ КЛИЕНТОВ
                </h2>
                <p className="text-[#EADCC1] text-lg max-w-2xl mx-auto">
                    Более 10 лет успешного сотрудничества с предприятиями Ростовской области
                </p>
            </motion.div>

            {/* Контейнер слайдера */}
            <div className="relative">
                {/* Кнопки навигации */}
                {totalPages > 1 && (
                    <>
                        <button
                            onClick={prevPage}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 md:-translate-x-12
                bg-[#F7C35F] rounded-full p-2 md:p-3 shadow-lg transition-all
                hover:bg-[#e5b44f] hover:scale-110"
                            aria-label="Предыдущий отзыв"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#2c1810]" />
                        </button>

                        <button
                            onClick={nextPage}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 md:translate-x-12
                bg-[#F7C35F] rounded-full p-2 md:p-3 shadow-lg transition-all
                hover:bg-[#e5b44f] hover:scale-110"
                            aria-label="Следующий отзыв"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#2c1810]" />
                        </button>
                    </>
                )}

                {/* Слайдер */}
                <div
                    className="overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`grid gap-6 ${itemsPerPage === 1 ? 'grid-cols-1' :
                            itemsPerPage === 2 ? 'grid-cols-2' :
                                'grid-cols-3'
                            }`}
                    >
                        {getCurrentPageReviews().map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </motion.div>
                </div>

                {/* Точки-индикаторы */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${currentPage === i
                                    ? 'w-8 bg-[#F7C35F]'
                                    : 'w-2 bg-[#F7C35F]/30 hover:bg-[#F7C35F]/50'
                                    }`}
                                aria-label={`Страница ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* CTA секция */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mt-12 p-8 bg-gradient-to-r from-[#F7C35F]/10 to-transparent rounded-xl"
            >
                <p className="text-[#EADCC1] text-lg mb-4">
                    Присоединяйтесь к нашим постоянным клиентам
                </p>
                <Link href={"#contact"} className="bg-[#F7C35F] text-[#2c1810] px-8 py-3 rounded-lg font-semibold
          hover:bg-[#e5b44f] transition-all duration-300 hover:scale-105">
                    Связаться с нами
                </Link>
            </motion.div>
        </section>
    );
}