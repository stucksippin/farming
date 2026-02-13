'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sklad from '../assets/sunflower.png';
import flax_seed from '../assets/flax-seed.png';

import oil from '../assets/oil.png';
import wheatIcon from '../assets/wheat.png';
import scales from '../assets/scales.png';
import drop from '../assets/drop.png';
import dust from '../assets/dust.png';
import star from '../assets/star.png';

export default function SunflowerProductComp() {
    const [activeTab, setActiveTab] = useState('description');

    const specifications = [
        { label: 'МАСЛИЧНОСТЬ', value: '48–52%', icon: oil, isImage: true },
        { label: 'СОРТ', value: 'НК Неома', icon: wheatIcon, isImage: true },
        { label: 'НАТУРНЫЙ ВЕС', value: '42–44', icon: scales, isImage: true },
        { label: 'ВЛАЖНОСТЬ', value: '7–8%', icon: drop, isImage: true },
        { label: 'СОРНАЯ ПРИМЕСЬ', value: 'до 2%', icon: dust, isImage: true },
        { label: 'КЛАСС', value: 'Масличный', icon: star, isImage: true },
    ];

    const applications = [
        {
            title: 'Маслоперерабатывающие заводы',
            description: 'Семена подсолнечника с высокой масличностью для переработки в подсолнечное масло',
            icon: '🛢️'
        },
        {
            title: 'Производство жмыха и шрота',
            description: 'Подсолнечник оптом для кормовых производств',
            icon: '🐄'
        },
        {
            title: 'Экспортные поставки',
            description: 'Подсолнечник от производителя с полным пакетом документов',
            icon: '🌍'
        },
        {
            title: 'Комбикормовые предприятия',
            description: 'Сырьё для изготовления комбикормов',
            icon: '⚙️'
        }
    ];

    const advantages = [
        'Подсолнечник от производителя без посредников',
        'Семена подсолнечника с подтверждённым качеством и документами',
        'Лабораторный контроль каждой партии',
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1a0e08] to-[#263C28]">

            {/* Schema.org Product - Подсолнечник */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Семена подсолнечника оптом от производителя",
                        "description": "Купить семена подсолнечника в Ростовской области напрямую от производителя. Семена подсолнуха оптом. Цена подсолнечника Ростовская область — зависит от объёма партии и условий доставки.",
                        "brand": {
                            "@type": "Organization",
                            "name": "Фермерское хозяйство Великанова"
                        },
                        "offers": {
                            "@type": "AggregateOffer",
                            "url": "https://velikanov-farming.ru/podsolnechnik",
                            "priceCurrency": "RUB",
                            "lowPrice": "18000",
                            "highPrice": "22000",
                            "priceValidUntil": "2025-12-31",
                            "eligibleRegion": {
                                "@type": "Place",
                                "name": "Ростовская область, Россия"
                            }
                        },
                        "category": "Масличные культуры",
                        "additionalProperty": [
                            { "@type": "PropertyValue", "name": "Масличность", "value": "48–52%" },
                            { "@type": "PropertyValue", "name": "Влажность", "value": "7–8%" },
                            { "@type": "PropertyValue", "name": "Сорная примесь", "value": "до 2%" }
                        ],
                        "seller": {
                            "@type": "Organization",
                            "name": "Фермерское хозяйство Великанова",
                            "telephone": "+79281789282",
                            "email": "velikanov_n@mail.ru",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "хутор Новороссошанский",
                                "addressLocality": "Тацинский район",
                                "addressRegion": "Ростовская область",
                                "postalCode": "347083",
                                "addressCountry": "RU"
                            }
                        }
                    })
                }}
            />

            {/* Schema.org Breadcrumbs - Подсолнечник */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Главная",
                                "item": "https://velikanov-farming.ru"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Семена подсолнечника",
                                "item": "https://velikanov-farming.ru/podsolnechnik"
                            }
                        ]
                    })
                }}
            />

            {/* Schema.org FAQ - Подсолнечник */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Какой минимальный объём заказа семян подсолнечника?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Минимальный объём заказа — от 25 тонн. Для меньших объёмов возможны индивидуальные условия."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Какая цена на семена подсолнечника в Ростовской области?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Цена подсолнечника в Ростовской области зависит от объёма партии, сезона и условий доставки. Уточняйте актуальную стоимость по телефону."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Вы продаёте подсолнечник оптом от производителя?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, мы реализуем подсолнечник оптом напрямую от производителя без посредников."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* Breadcrumbs */}
            <div className="farm_container mx-auto px-4 py-6">
                <nav className="flex items-center gap-2 text-sm text-[#EADCC1]/60">
                    <Link href="/" className="hover:text-[#F7C35F] transition-colors">
                        Главная
                    </Link>
                    <span>/</span>
                    <span className="text-[#F7C35F]">Семена подсолнечника</span>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="farm_container mx-auto px-4 py-8 md:py-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image Gallery */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#F7C35F]/10 to-transparent p-8 border border-[#F7C35F]/20">
                            <div className="relative w-full aspect-square">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src={sklad}
                                        alt="Семена подсолнечника оптом от производителя"
                                        fill
                                        className="object-cover rounded-2xl"
                                    />
                                </div>
                                <div className="absolute top-4 right-4 bg-[#F7C35F] text-[#2c1810] px-4 py-2 rounded-lg font-bold shadow-lg">
                                    Урожай 2025
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7C35F] mb-6 leading-tight">
                            Семена подсолнечника оптом
                        </h1>

                        <div className="bg-gradient-to-r from-[#F7C35F]/10 to-transparent rounded-xl p-6 mb-6 border-l-4 border-[#F7C35F]">
                            <p className="text-[#EADCC1] text-lg leading-relaxed">
                                Если вы хотите купить семена подсолнечника высокого качества, наше хозяйство предлагает
                                подсолнечник масличный с высокой урожайностью и стабильными показателями масличности.
                                Подходит для маслоперерабатывающих заводов, комбикормовых производств и экспорта.
                            </p>
                        </div>

                        {/* Price Section */}
                        <div className="bg-gradient-to-br from-[#2c1810]/70 to-[#1a0e08]/70 backdrop-blur rounded-2xl p-6 mb-6 border border-[#F7C35F]/30">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <div className="text-[#EADCC1]/60 text-sm mb-1">Стоимость за тонну</div>
                                    <div className="text-3xl font-bold text-[#F7C35F]">по запросу</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[#EADCC1]/60 text-sm mb-1">Минимальная партия</div>
                                    <div className="text-xl font-semibold text-[#EADCC1]">от 25 тонн</div>
                                </div>
                            </div>
                            <div className="text-xs text-[#EADCC1]/50">
                                * Итоговая цена зависит от объёма партии, масличности и условий доставки
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="flex-1 bg-[#F7C35F] text-[#2c1810] px-8 py-4 rounded-lg font-semibold text-center hover:bg-[#e5b44f] transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Купить подсолнечник
                            </a>
                            <a
                                href="tel:+79281789282"
                                className="flex-1 bg-transparent border-2 border-[#F7C35F] text-[#F7C35F] px-8 py-4 rounded-lg font-semibold text-center hover:bg-[#F7C35F]/10 transition-all duration-300"
                            >
                                Позвонить
                            </a>
                        </div>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="flex items-center gap-3">
                                <div className="text-[#F7C35F] text-2xl">📍</div>
                                <div>
                                    <div className="text-[#EADCC1]/60 text-xs">Регион выращивания</div>
                                    <div className="text-[#EADCC1] text-sm font-medium">Тацинский район</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-[#F7C35F] text-2xl">✗</div>
                                <div>
                                    <div className="text-[#EADCC1]/60 text-xs">Наличие</div>
                                    <div className="text-[#EADCC1] text-sm font-medium">Продано</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Specifications Grid */}
            <section className="farm_container mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F7C35F] text-center mb-10">
                    Технические характеристики семян подсолнечника
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {specifications.map((spec, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 backdrop-blur rounded-xl p-6 border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 transition-all duration-300 hover:scale-105 text-center"
                        >
                            {spec.isImage ? (
                                <div className="relative w-12 h-12 mx-auto mb-3">
                                    <Image
                                        src={spec.icon}
                                        alt={spec.label}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="text-4xl mb-3">{spec.icon}</div>
                            )}
                            <div className="text-[#EADCC1]/70 text-xs font-semibold mb-2 uppercase tracking-wide">
                                {spec.label}
                            </div>
                            <div className="text-2xl font-bold text-[#F7C35F]">
                                {spec.value}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tabs Section */}
            <section className="farm_container mx-auto px-4 py-12">
                <div className="bg-gradient-to-br from-[#2c1810]/30 to-[#1a0e08]/30 backdrop-blur rounded-2xl border border-[#F7C35F]/20 overflow-hidden">
                    {/* Tabs Navigation */}
                    <div className="flex border-b border-[#F7C35F]/20">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'description'
                                ? 'bg-[#F7C35F]/10 text-[#F7C35F] border-b-2 border-[#F7C35F]'
                                : 'text-[#EADCC1]/60 hover:text-[#EADCC1] hover:bg-[#F7C35F]/5'
                                }`}
                        >
                            <h2>Описание</h2>
                        </button>
                        <button
                            onClick={() => setActiveTab('applications')}
                            className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'applications'
                                ? 'bg-[#F7C35F]/10 text-[#F7C35F] border-b-2 border-[#F7C35F]'
                                : 'text-[#EADCC1]/60 hover:text-[#EADCC1] hover:bg-[#F7C35F]/5'
                                }`}
                        >
                            <h2>Области применения</h2>
                        </button>
                        <button
                            onClick={() => setActiveTab('delivery')}
                            className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'delivery'
                                ? 'bg-[#F7C35F]/10 text-[#F7C35F] border-b-2 border-[#F7C35F]'
                                : 'text-[#EADCC1]/60 hover:text-[#EADCC1] hover:bg-[#F7C35F]/5'
                                }`}
                        >
                            <h2>Условия доставки</h2>
                        </button>
                    </div>

                    {/* Tabs Content */}
                    <div className="p-8">
                        {activeTab === 'description' && (
                            <div className="space-y-6">
                                <span className="text-2xl font-bold text-[#F7C35F] mb-4">
                                    Купить семена подсолнечника в Ростовской области от производителя
                                </span>

                                <p className="text-[#EADCC1] leading-relaxed">
                                    Фермерское хозяйство выращивает подсолнечник в Тацинском районе Ростовской области —
                                    регионе с благоприятными климатическими условиями для получения высоких урожаев.
                                    Вы можете купить семена подсолнечника напрямую от производителя без посредников.
                                    Реализуем подсолнечник оптом с подтверждёнными показателями масличности и качества.
                                </p>

                                <div className="bg-[#F7C35F]/5 rounded-lg p-6 border-l-4 border-[#F7C35F]">
                                    <span className="text-xl font-semibold text-[#F7C35F] mb-3">
                                        Преимущества работы с нами
                                    </span>
                                    <ul className="space-y-3">
                                        {advantages.map((advantage, index) => (
                                            <li key={index} className="flex items-start gap-3 text-[#EADCC1]">
                                                <svg
                                                    className="w-6 h-6 text-[#F7C35F] flex-shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {advantage}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-[#EADCC1] leading-relaxed">
                                    Каждая партия семян подсолнечника проходит лабораторный контроль качества.
                                    К поставке прилагается полный комплект документов: сертификаты соответствия,
                                    декларации качества и фитосанитарные сертификаты. Возможна продажа семян подсолнуха
                                    крупным и средним оптом.
                                </p>
                            </div>
                        )}

                        {activeTab === 'applications' && (
                            <div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {applications.map((app, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-br from-[#F7C35F]/5 to-transparent rounded-xl p-6 border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 transition-all duration-300"
                                        >
                                            <div className="text-5xl mb-4">{app.icon}</div>
                                            <span className="text-xl font-semibold text-[#F7C35F] mb-3">
                                                {app.title}
                                            </span>
                                            <p className="text-[#EADCC1]/80">
                                                {app.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 bg-[#F7C35F]/5 rounded-lg p-6 border border-[#F7C35F]/30">
                                    <span className="text-lg font-semibold text-[#F7C35F] mb-3">
                                        Нужна консультация?
                                    </span>
                                    <p className="text-[#EADCC1] mb-4">
                                        Поможем подобрать подходящий подсолнечник для переработки,
                                        экспорта или комбикормового производства. Подскажем актуальную
                                        цену подсолнечника в Ростовской области.
                                    </p>
                                    <a
                                        href="tel:+79281789282"
                                        className="inline-flex items-center gap-2 bg-[#F7C35F] text-[#2c1810] px-6 py-3 rounded-lg font-semibold hover:bg-[#e5b44f] transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        Связаться со специалистом
                                    </a>
                                </div>
                            </div>
                        )}

                        {activeTab === 'delivery' && (
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-[#F7C35F]/5 to-transparent rounded-xl p-6 border border-[#F7C35F]/20">
                                        <div className="text-4xl mb-4">🚚</div>
                                        <span className="text-lg font-semibold text-[#F7C35F] mb-2">
                                            Наш транспорт
                                        </span>
                                        <p className="text-[#EADCC1]/80 text-sm">
                                            Доставка семян подсолнечника собственным транспортом по Ростовской области
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#F7C35F]/5 to-transparent rounded-xl p-6 border border-[#F7C35F]/20">
                                        <div className="text-4xl mb-4">📦</div>
                                        <span className="text-lg font-semibold text-[#F7C35F] mb-2">
                                            Самовывоз
                                        </span>
                                        <p className="text-[#EADCC1]/80 text-sm">
                                            Возможен самовывоз семян подсолнечника со склада в хуторе Новороссошанский
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#F7C35F]/5 to-transparent rounded-xl p-6 border border-[#F7C35F]/20">
                                        <div className="text-4xl mb-4">🌍</div>
                                        <span className="text-lg font-semibold text-[#F7C35F] mb-2">
                                            Другие регионы
                                        </span>
                                        <p className="text-[#EADCC1]/80 text-sm">
                                            Отправка подсолнечника в другие регионы РФ через транспортные компании
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-[#2c1810]/50 rounded-xl p-6 border border-[#F7C35F]/20">
                                    <span className="text-xl font-semibold text-[#F7C35F] mb-4">
                                        Расчёт стоимости доставки
                                    </span>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#F7C35F] flex items-center justify-center text-[#2c1810] font-bold flex-shrink-0">
                                                1
                                            </div>
                                            <div>
                                                <div className="font-medium text-[#EADCC1] mb-1">Тацинский район</div>
                                                <div className="text-[#EADCC1]/70 text-sm">
                                                    Бесплатная доставка при заказе семян подсолнечника от 50 тонн
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#F7C35F] flex items-center justify-center text-[#2c1810] font-bold flex-shrink-0">
                                                2
                                            </div>
                                            <div>
                                                <div className="font-medium text-[#EADCC1] mb-1">По Ростовской области</div>
                                                <div className="text-[#EADCC1]/70 text-sm">
                                                    Рассчитывается индивидуально, от 15 ₽/км
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#F7C35F] flex items-center justify-center text-[#2c1810] font-bold flex-shrink-0">
                                                3
                                            </div>
                                            <div>
                                                <div className="font-medium text-[#EADCC1] mb-1">Другие регионы</div>
                                                <div className="text-[#EADCC1]/70 text-sm">
                                                    Доставка подсолнечника через транспортные компании по их тарифам
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-[#F7C35F]/10 to-transparent rounded-xl p-6 border-l-4 border-[#F7C35F]">
                                    <p className="text-[#EADCC1]">
                                        <strong className="text-[#F7C35F]">Важно:</strong> итоговая цена подсолнечника
                                        в Ростовской области зависит от объёма партии, расстояния и типа транспорта.
                                        Уточняйте актуальную стоимость у менеджера.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="farm_container mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F7C35F] text-center mb-10">
                    Популярные вопросы о семенах подсолнечника
                </h2>

                <div className="max-w-4xl mx-auto space-y-4">
                    {[
                        {
                            q: 'Какой минимальный объём заказа семян подсолнечника?',
                            a: 'Минимальная партия для заказа составляет 25 тонн. Для меньших объёмов возможно обсуждение индивидуальных условий.'
                        },
                        {
                            q: 'Какая цена на семена подсолнечника в Ростовской области?',
                            a: 'Цена подсолнечника в Ростовской области зависит от объёма партии, сезона и условий доставки. Уточнить актуальную стоимость можно по телефону.'
                        },
                        {
                            q: 'Вы продаёте подсолнечник оптом от производителя?',
                            a: 'Да, мы реализуем подсолнечник оптом напрямую от производителя без посредников.'
                        },
                        {
                            q: 'Предоставляете ли вы документы на семена подсолнуха?',
                            a: 'Да, каждая партия сопровождается комплектом документов: сертификат соответствия, декларация качества и фитосанитарный сертификат.'
                        },
                    ].map((faq, index) => (
                        <details
                            key={index}
                            className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 backdrop-blur rounded-xl border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 transition-all overflow-hidden group"
                        >
                            <summary className="px-6 py-4 cursor-pointer flex items-center justify-between text-[#F7C35F] font-medium hover:bg-[#F7C35F]/5 transition-colors">
                                <span>{faq.q}</span>
                                <svg
                                    className="w-5 h-5 transition-transform group-open:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>
                            <div className="px-6 pb-4 text-[#EADCC1]/80">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Related Products */}
            <section className="farm_container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F7C35F] text-center mb-10">
                    Другая продукция хозяйства
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Link
                        href="/pshenitsa"
                        className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 backdrop-blur rounded-2xl p-8 border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 transition-all duration-300 hover:scale-105 group"
                    >
                        <div className="text-4xl mb-4">🌾</div>
                        <span className="text-2xl font-bold text-[#F7C35F] mb-3 group-hover:text-[#e5b44f]">
                            Пшеница
                        </span>
                        <p className="text-[#EADCC1]/80 mb-4">
                            Продовольственная и фуражная пшеница оптом от производителя
                        </p>
                        <span className="text-[#F7C35F] font-semibold flex items-center gap-2">
                            Подробнее
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </span>
                    </Link>

                    <Link
                        href="/len"
                        className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 backdrop-blur rounded-2xl p-8 border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 transition-all duration-300 hover:scale-105 group"
                    >
                        <div className="text-6xl mb-4">
                            <Image src={flax_seed} alt="Лён масличный оптом от производителя" />
                        </div>
                        <span className="text-2xl font-bold text-[#F7C35F] mb-3 group-hover:text-[#e5b44f]">
                            Лён масличный
                        </span>
                        <p className="text-[#EADCC1]/80 mb-4">
                            Качественное сырьё для производства масла с высокой масличностью
                        </p>
                        <span className="text-[#F7C35F] font-semibold flex items-center gap-2">
                            Подробнее
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
}