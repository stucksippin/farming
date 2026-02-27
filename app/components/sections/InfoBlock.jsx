'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, MapPin, Users, Truck, Wheat, Droplets, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const faqData = [
    {
        question: "Какой минимальный объём для заказа пшеницы?",
        answer: "Минимальный объём для оптовой поставки — от 20 тонн (одна машина). Для крупных партий предусмотрены дополнительные скидки. Уточняйте актуальные условия по телефону."
    },
    {
        question: "Есть ли документы на зерно?",
        answer: "Да, предоставляем полный комплект документов: товарно-транспортные накладные, сертификаты качества, фитосанитарные сертификаты и декларации соответствия."
    },
    {
        question: "Какова цена пшеницы за тонну?",
        answer: "Цены зависят от класса зерна, объёма партии и условий доставки. Актуальные расценки уточняйте по телефону."
    },
    {
        question: "Продаете пшеницу на экспорт?",
        answer: "Да, поставляем зерно 3–4 класса на экспорт. Предоставляем всю документацию для таможенного оформления. Учитываем действующие пошлины на экспорт из России."
    },
    {
        question: "Есть пшеница нового урожая 2026?",
        answer: "Продаём зерно нового урожая с августа 2026. Возможно предварительное бронирование партий. Качество подтверждается лабораторными анализами."
    }
];

const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="border border-[#F7C35F]/20 rounded-lg overflow-hidden hover:border-[#F7C35F]/40 transition-colors duration-300"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#F7C35F]/5 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="text-[#F7C35F] font-medium pr-4">{faq.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <ChevronDown className="w-5 h-5 text-[#F7C35F] flex-shrink-0" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-4 text-[#EADCC1]">{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const products = [
    {
        icon: <Wheat className="w-8 h-8" />,
        title: "Пшеница",
        description: "Продовольственная и фуражная, с повышенным содержанием клейковины, подходит для хлебопекарной и кормовой промышленности",
    },
    {
        icon: <Droplets className="w-8 h-8" />,
        title: "Лен масличный",
        description: "Востребованное сырьё для производства масла и продуктов переработки с высокой масличностью",
    },
    {
        icon: <Wheat className="w-8 h-8" />,
        title: "Подсолнечник",
        description: "Семена с повышенным содержанием масла для производства подсолнечного масла",
    },
];

const advantages = [
    { icon: <Award />, text: "Многолетний опыт ведения фермерского хозяйства" },
    { icon: <MapPin />, text: "Плодородные земли Ростовской области" },
    { icon: <Users />, text: "Прямые поставки без посредников" },
    { icon: <Truck />, text: "Доставка по Тацинскому району и регионам" },
];

export default function InfoBlock() {
    return (
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">

            {/* Заголовок */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7C35F] mb-6 leading-tight">
                    Зерно от фермерского хозяйства
                </h2>
                <p className="text-xl md:text-2xl text-[#F7C35F]/80 mb-8">
                    Зерно оптом в Тацинском районе, Ростовская область
                </p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-[#EADCC1] text-lg max-w-4xl mx-auto leading-relaxed"
                >
                    Наше хозяйство расположено в хуторе Новороссошанский, Тацинский район —
                    одном из наиболее плодородных регионов России. Мы выращиваем и продаём{" "}
                    <span className="text-[#F7C35F] font-semibold">пшеницу, лен масличный и подсолнечник</span>{" "}
                    свежего урожая. Работаем напрямую без посредников, обеспечивая справедливые цены
                    и стабильное качество продукции.
                </motion.p>
            </motion.div>

            {/* Продукция — карточки
                ИСПРАВЛЕНО: убран whileHover scale + убран transition-all из className (конфликт).
                Ховер-эффект теперь только через border/shadow в CSS. */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <span className="text-2xl md:text-3xl font-bold text-[#F7C35F] text-center mb-10 block">
                    Пшеница, лен и подсолнечник — прямые поставки без посредников
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.4 }}
                            // whileHover убран — он конфликтовал с transition-all
                            className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 backdrop-blur
                                rounded-xl p-6 border border-[#F7C35F]/20 hover:border-[#F7C35F]/50
                                hover:shadow-lg hover:-translate-y-1
                                transition-[border-color,box-shadow,transform] duration-300 group"
                        >
                            <div className="text-[#F7C35F] mb-4 group-hover:scale-110 transition-transform duration-200">
                                {product.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#F7C35F] mb-3">
                                {product.title}
                            </h3>
                            <p className="text-[#EADCC1] text-sm leading-relaxed">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Преимущества
                ИСПРАВЛЕНО: убрали initial x: ±20 — он вызывал горизонтальный сдвиг
                при появлении элементов в центре экрана. Только opacity+y. */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 bg-gradient-to-r from-[#F7C35F]/5 to-transparent rounded-2xl p-8"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] text-center mb-10">
                    Почему выгодно купить пшеницу от производителя
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="flex items-start gap-4"
                        >
                            <div className="text-[#F7C35F] mt-1 flex-shrink-0">
                                {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                            </div>
                            <p className="text-[#EADCC1] flex-1">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* CTA блок */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center bg-gradient-to-br from-[#F7C35F]/10 to-[#F7C35F]/5 
                    rounded-2xl p-10 border border-[#F7C35F]/20"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-4">
                    Где купить зерно в Ростовской области?
                </h2>
                <p className="text-[#EADCC1] text-lg max-w-3xl mx-auto mb-8">
                    Если вы ищете надёжного поставщика пшеницы, льна или подсолнечника,
                    обращайтесь в фермерское хозяйство Великанова. Гарантируем свежий урожай,
                    проверенное качество и выгодные условия сотрудничества.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#contact"
                        className="bg-[#F7C35F] text-[#2c1810] px-8 py-3 rounded-lg font-semibold
                            hover:bg-[#e5b44f] transition-colors duration-300"
                    >
                        Оставить заявку
                    </Link>
                    <Link
                        href="/pshenitsa"
                        className="border border-[#F7C35F]/40 text-[#F7C35F] px-8 py-3 rounded-lg font-semibold
                            hover:border-[#F7C35F] hover:bg-[#F7C35F]/10 transition-colors duration-300"
                    >
                        Наша продукция
                    </Link>
                </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] text-center mb-8">
                    Часто задаваемые вопросы
                </h2>
                <div className="space-y-3 max-w-3xl mx-auto">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </motion.div>

        </section>
    );
}