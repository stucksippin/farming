// /infoblock.jsx

'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Wheat, Droplets, Truck, Award, Users, MapPin } from 'lucide-react';

// Данные для FAQ
const faqData = [
    {
        question: "Сколько стоит пшеница в Ростовской области?",
        answer: "Стоимость зависит от сезона и объёма партии. Чтобы узнать актуальные цены и купить пшеницу в Тацинском районе, свяжитесь с нами по телефону или через форму обратной связи.",
    },
    {
        question: "Можно ли заказать доставку в другие регионы?",
        answer: "Организуем поставки по всей Ростовской области и соседним районам. Для отдалённых регионов условия обсуждаем индивидуально.",
    },
    {
        question: "С кем вы работаете?",
        answer: "Наши покупатели — фермерские хозяйства, перерабатывающие предприятия, мукомольные производства, хлебопекарни и частные заказчики.",
    },
    {
        question: "Где купить пшеницу оптом в Тацинском районе?",
        answer: "Фермерское хозяйство Великанова предлагает качественную пшеницу, лен и подсолнечник для производств и мельниц Ростовской области. Оставьте заявку для оформления заказа.",
    },
    {
        question: "Какие документы предоставляете?",
        answer: "Комплект документов: сертификаты качества, декларации соответствия, товарные накладные. Вся документация оформляется в день отгрузки товара.",
    },
    {
        question: "Какая закупочная цена на пшеницу в 2026 году?",
        answer: "Закупочные цены варьируются по классам: фуражная от 10000 руб/т, 3 класс от 13000 руб/т, 4 класс от 13500 руб/т. Актуальные расценки уточняйте по телефону."
    },
    {
        question: "Продаете пшеницу на экспорт?",
        answer: "Да, поставляем зерно 3-4 класса на экспорт. Предоставляем всю документацию для таможенного оформления. Учитываем действующие пошлины на экспорт из России."
    },
    {
        question: "Есть пшеница нового урожая 2026?",
        answer: "Продаём зерно нового урожая с августа 2026. Возможно предварительное бронирование партий. Качество подтверждается лабораторными анализами."
    }
];

// Компонент FAQ аккордеон
const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-[#F7C35F]/20 rounded-lg overflow-hidden hover:border-[#F7C35F]/40 transition-all duration-300"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#F7C35F]/5 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="text-[#F7C35F] font-medium pr-4">{faq.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 text-[#F7C35F] flex-shrink-0" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-4 text-[#EADCC1]">{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// Данные продукции
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

// Данные преимуществ
const advantages = [
    { icon: <Award />, text: "Многолетний опыт ведения фермерского хозяйства" },
    { icon: <MapPin />, text: "Плодородные земли Ростовской области" },
    { icon: <Users />, text: "Прямые поставки без посредников" },
    { icon: <Truck />, text: "Доставка по Тацинскому району и регионам" },
];

export default function InfoBlock() {
    return (
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Основной заголовок с анимацией */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-[#EADCC1] text-lg max-w-4xl mx-auto leading-relaxed"
                >
                    Наше хозяйство расположено в хуторе Новоросошанский, Тацинский район —
                    одном из наиболее плодородных регионов России. Мы выращиваем и продаём{" "}
                    <span className="text-[#F7C35F] font-semibold">пшеницу, лен масличный и подсолнечник</span>{" "}
                    свежего урожая. Работаем напрямую без посредников, обеспечивая справедливые цены
                    и стабильное качество продукции.
                </motion.p>
            </motion.div>

            {/* Продукция - карточки */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 backdrop-blur
                rounded-xl p-6 border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 
                transition-all duration-300 group"
                        >
                            <div className="text-[#F7C35F] mb-4 group-hover:scale-110 transition-transform">
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

            {/* Преимущества - сетка с иконками */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 bg-gradient-to-r from-[#F7C35F]/5 to-transparent rounded-2xl p-8"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] text-center mb-10">
                    Почему выгодно купить пшеницу от производителя
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="text-[#F7C35F] mt-1 group-hover:scale-110 transition-transform">
                                {React.cloneElement(item.icon, { className: "w-6 h-6" })}
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
                transition={{ duration: 0.6 }}
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
                <motion.a
                    href='#contact'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-[#F7C35F] text-[#2c1810] px-8 py-4 rounded-lg font-semibold text-lg
            hover:bg-[#e5b44f] transition-colors shadow-lg"
                >
                    Получить прайс-лист
                </motion.a>
            </motion.div>

            {/* FAQ аккордеон */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] text-center mb-10">
                    Популярные вопросы
                </h2>

                <div className="space-y-4 max-w-4xl mx-auto">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </motion.div>

            {/* Schema.org разметка */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </section>
    );
}