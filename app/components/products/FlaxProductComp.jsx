'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import len from '../../assets/len.png';
import oil from '../../assets/oil.png';
import drop from '../../assets/drop.png';
import scales from '../../assets/scales.png';
import star from '../../assets/star.png';
import calendar from '../../assets/calendar.png';
import PriceCalculator from '../PriceCalculator';


export default function FlaxProductComp() {
    const [activeTab, setActiveTab] = useState('description');

    const specifications = [
        { label: 'МАСЛИЧНОСТЬ', value: '44-46%', icon: oil, isImage: true },
        { label: 'ВЛАЖНОСТЬ', value: 'до 13%', icon: drop, isImage: true },
        { label: 'НАТУРНЫЙ ВЕС', value: '98-99%', icon: scales, isImage: true },
        { label: 'СОРНАЯ ПРИМЕСЬ', value: 'до 2%', icon: '🔍' },
        { label: 'СОРТ', value: '1-2 сорт', icon: star, isImage: true },
        { label: 'УРОЖАЙ', value: '2025 год', icon: calendar, isImage: true }
    ];

    const applications = [
        {
            title: 'Производство льняного масла',
            description: 'Высокий процент масличности 44-46% обеспечивает превосходный выход качественного масла',
            icon: '🫗'
        },
        {
            title: 'Пищевая промышленность',
            description: 'Семена для хлебобулочных изделий, каш, снеков и продуктов здорового питания',
            icon: '🍞'
        },
        {
            title: 'Комбикормовое производство',
            description: 'Льняной жмых и шрот — питательная белково-витаминная добавка в корма',
            icon: '🐄'
        },
        {
            title: 'Экспортные поставки',
            description: 'Продукция соответствует международным требованиям качества для экспорта',
            icon: '🌍'
        }
    ];

    const advantages = [
        'Поставки напрямую от производителя без посредников',
        'Высокий показатель масличности — до 46%',
        'Комплект сертификатов и всех необходимых документов',
        'Контроль качества в лаборатории для каждой партии',
        'Низкий уровень влажности — гарантия долгого хранения',
    ];

    return (
        <div className="min-h-screen bg-[#263C28]">


            {/* Schema.org Product - Лен */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Лен масличный оптом",
                        "description": "Высококачественный лен масличный 1-2 сорта от фермерского хозяйства Великанова. Масличность 44-46%, влажность до 10%, чистота 98-99%. Идеально для маслобойных производств, пищевой и комбикормовой промышленности.",
                        "image": "https://velikanov-farming.ru/images/len.png",
                        "brand": {
                            "@type": "Organization",
                            "name": "Фермерское хозяйство Великанова"
                        },
                        "offers": {
                            "@type": "AggregateOffer",
                            "url": "https://velikanov-farming.ru/len",
                            "priceCurrency": "RUB",
                            "lowPrice": "38000",
                            "highPrice": "42000",
                            "priceValidUntil": "2026-12-31",
                            "availability": "https://schema.org/OutOfStock",
                            "eligibleRegion": {
                                "@type": "Place",
                                "name": "Ростовская область, Россия"
                            }
                        },
                        "category": "Масличные культуры",
                        "additionalProperty": [
                            { "@type": "PropertyValue", "name": "Масличность", "value": "44-46%" },
                            { "@type": "PropertyValue", "name": "Влажность", "value": "до 10%" },
                            { "@type": "PropertyValue", "name": "Чистота", "value": "98-99%" },
                            { "@type": "PropertyValue", "name": "Сорная примесь", "value": "до 2%" },
                            { "@type": "PropertyValue", "name": "Сорт", "value": "1-2 сорт" }
                        ]
                    })
                }}
            />

            {/* Schema.org Breadcrumbs - Лен */}
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
                                "name": "Лен масличный",
                                "item": "https://velikanov-farming.ru/len"
                            }
                        ]
                    })
                }}
            />

            {/* Schema.org FAQ - Лен */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Какой минимальный объём заказа льна?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Минимальный объём заказа составляет 15 тонн. Для меньших объёмов возможны индивидуальные условия при наличии продукции на складе."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Какая масличность вашего льна?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Масличность нашего льна составляет 44-46%, что является отличным показателем. Каждая партия проходит лабораторный анализ, результаты которого мы предоставляем покупателю."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Предоставляете ли вы документы на лен?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, каждая партия сопровождается полным пакетом документов: сертификат соответствия, протокол испытаний с указанием масличности, влажности и чистоты, фитосанитарный сертификат."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "В какой упаковке поставляется лен?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Лен поставляется навалом (для крупных партий) или в биг-бэгах по 1 тонне. По согласованию возможна фасовка в мешки по 25-50 кг с доплатой за упаковку."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Какие формы оплаты доступны?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Мы работаем как с предоплатой, так и с отсрочкой платежа для постоянных клиентов. Принимаем оплату по безналичному расчёту, возможна частичная предоплата."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Как долго можно хранить лен после покупки?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "При соблюдении условий хранения (сухое помещение, влажность семян не более 10%, температура до +20°C) лен сохраняет свои свойства до 12 месяцев."
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
                    <span className="text-[#F7C35F]">Лен масличный</span>
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
                                        src={len}
                                        alt="Лен масличный оптом"
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
                            Лен масличный оптом в Ростовской области
                        </h1>

                        <div className="bg-gradient-to-r from-[#F7C35F]/10 to-transparent rounded-xl p-6 mb-6 border-l-4 border-[#F7C35F]">
                            <p className="text-[#EADCC1] text-lg leading-relaxed">
                                Если вы хотите купить лен высокого качества, наше хозяйство предлагает
                                лен масличный 1-2 сорта с превосходными характеристиками. Масличность 44-46%,
                                минимальная влажность, максимальная чистота. Идеально подходит для маслобойных
                                производств, пищевой и комбикормовой промышленности.
                            </p>
                        </div>

                        {/* Price Section */}
                        <div className="bg-gradient-to-br from-[#2c1810]/70 to-[#1a0e08]/70 backdrop-blur rounded-2xl p-6 mb-6 border border-[#F7C35F]/30">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <div className="text-[#EADCC1]/60 text-sm mb-1">Стоимость за тонну</div>
                                    <div className="text-3xl font-bold text-[#F7C35F]">от 38 000 ₽</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[#EADCC1]/60 text-sm mb-1">Минимальная партия</div>
                                    <div className="text-xl font-semibold text-[#EADCC1]">от 15 тонн</div>
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
                                Купить лен
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
                    Технические характеристики
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
                        <button
                            onClick={() => setActiveTab('calculator')}
                            className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'calculator'
                                ? 'bg-[#F7C35F]/10 text-[#F7C35F] border-b-2 border-[#F7C35F]'
                                : 'text-[#EADCC1]/60 hover:text-[#EADCC1] hover:bg-[#F7C35F]/5'
                                }`}
                        >
                            <h2>Рассчитать стоимость</h2>
                        </button>
                    </div>

                    {/* Tabs Content */}
                    <div className="p-8">
                        {activeTab === 'description' && (
                            <div className="space-y-6">
                                <span className="text-2xl font-bold text-[#F7C35F] mb-4">
                                    Лен масличный от фермерского хозяйства Великанова
                                </span>

                                <p className="text-[#EADCC1] leading-relaxed">
                                    Наше фермерское хозяйство выращивает качественный лен масличный в Тацинском
                                    районе Ростовской области. Лен — уникальная масличная культура с повышенным содержанием
                                    полезных Омега-3 жирных кислот, которая пользуется стабильным спросом на рынке
                                    здорового питания и масложировой промышленности.
                                </p>

                                <div className="bg-[#F7C35F]/5 rounded-lg p-6 border-l-4 border-[#F7C35F]">
                                    <span className="text-xl font-semibold text-[#F7C35F] mb-3">
                                        Преимущества работы с нами
                                    </span>
                                    <ul className="space-y-3">
                                        {advantages.map((advantage, index) => (
                                            <li key={index} className="flex items-start gap-3 text-[#EADCC1]">
                                                <svg className="w-6 h-6 text-[#F7C35F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                {advantage}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-[#EADCC1] leading-relaxed">
                                    Применяем современные технологии возделывания и уборки, что позволяет сохранить
                                    максимальную масличность и качество продукции. Каждая партия проходит лабораторный
                                    анализ на масличность, влажность, чистоту и отсутствие вредителей. Предоставляем
                                    комплект документов: сертификаты соответствия, протоколы испытаний, фитосанитарные
                                    сертификаты.
                                </p>

                                <div className="bg-[#2c1810]/50 rounded-xl p-6 border border-[#F7C35F]/20">
                                    <span className="text-lg font-semibold text-[#F7C35F] mb-3">
                                        Почему выбирают наш лен?
                                    </span>
                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <div className="flex items-start gap-3">
                                            <div className="text-2xl">🏆</div>
                                            <div>
                                                <div className="font-medium text-[#EADCC1] mb-1">Высокая масличность</div>
                                                <div className="text-[#EADCC1]/70 text-sm">44-46% — максимальный выход масла</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="text-2xl">🔬</div>
                                            <div>
                                                <div className="font-medium text-[#EADCC1] mb-1">Лабораторный контроль</div>
                                                <div className="text-[#EADCC1]/70 text-sm">Каждая партия сертифицирована</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="text-2xl">📦</div>
                                            <div>
                                                <div className="font-medium text-[#EADCC1] mb-1">Чистота продукции</div>
                                                <div className="text-[#EADCC1]/70 text-sm">98-99% без примесей</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="text-2xl">🤝</div>
                                            <div>
                                                <div className="font-medium text-[#EADCC1] mb-1">Прямые поставки</div>
                                                <div className="text-[#EADCC1]/70 text-sm">Без посредников и наценок</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

                                <div className="mt-8 bg-gradient-to-r from-[#F7C35F]/10 to-transparent rounded-xl p-6 border-l-4 border-[#F7C35F]">
                                    <span className="text-xl font-semibold text-[#F7C35F] mb-3">
                                        Дополнительная информация
                                    </span>
                                    <div className="space-y-4 mt-4">
                                        <div>
                                            <div className="font-medium text-[#EADCC1] mb-2">Льняное масло</div>
                                            <p className="text-[#EADCC1]/80 text-sm">
                                                Из наших семян получается масло холодного отжима высшего качества, богатое
                                                Омега-3 кислотами (до 60%). Подходит для диетического и детского питания.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[#EADCC1] mb-2">Льняной шрот и жмых</div>
                                            <p className="text-[#EADCC1]/80 text-sm">
                                                После отжима масла остаётся питательный белковый продукт с содержанием протеина
                                                до 35%, который используется в комбикормах для сельскохозяйственных животных.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[#EADCC1] mb-2">Цельные семена</div>
                                            <p className="text-[#EADCC1]/80 text-sm">
                                                Семена льна используются в хлебопечении, производстве каш, мюсли, снеков
                                                и других продуктов здорового питания как источник клетчатки и полезных жиров.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-[#F7C35F]/5 rounded-lg p-6 border border-[#F7C35F]/30">
                                    <span className="text-lg font-semibold text-[#F7C35F] mb-3">
                                        Требуется консультация?
                                    </span>
                                    <p className="text-[#EADCC1] mb-4">
                                        Наши специалисты помогут выбрать оптимальную партию для ваших целей
                                        и ответят на технические вопросы переработки.
                                    </p>
                                    <a
                                        href="tel:+79281789282"
                                        className="inline-flex items-center gap-2 bg-[#F7C35F] text-[#2c1810] px-6 py-3 rounded-lg font-semibold hover:bg-[#e5b44f] transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
                                            Доставка собственными транспортными средствами в пределах Ростовской области
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#F7C35F]/5 to-transparent rounded-xl p-6 border border-[#F7C35F]/20">
                                        <div className="text-4xl mb-4">📦</div>
                                        <span className="text-lg font-semibold text-[#F7C35F] mb-2">
                                            Самовывоз
                                        </span>
                                        <p className="text-[#EADCC1]/80 text-sm">
                                            Забрать товар можно со склада в хуторе Новороссошанский
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#F7C35F]/5 to-transparent rounded-xl p-6 border border-[#F7C35F]/20">
                                        <div className="text-4xl mb-4">🌍</div>
                                        <span className="text-lg font-semibold text-[#F7C35F] mb-2">
                                            Другие регионы
                                        </span>
                                        <p className="text-[#EADCC1]/80 text-sm">
                                            Организуем отправку в другие регионы через транспортные компании
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
                                                <div className="text-[#EADCC1]/70 text-sm">Бесплатная доставка при заказе от 30 тонн</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#F7C35F] flex items-center justify-center text-[#2c1810] font-bold flex-shrink-0">
                                                2
                                            </div>
                                            <div>
                                                <div className="font-medium text-[#EADCC1] mb-1">По Ростовской области</div>
                                                <div className="text-[#EADCC1]/70 text-sm">Рассчитывается индивидуально, от 15 ₽/км</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#F7C35F] flex items-center justify-center text-[#2c1810] font-bold flex-shrink-0">
                                                3
                                            </div>
                                            <div>
                                                <div className="font-medium text-[#EADCC1] mb-1">Другие регионы</div>
                                                <div className="text-[#EADCC1]/70 text-sm">Через транспортные компании по их тарифам</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-[#F7C35F]/10 to-transparent rounded-xl p-6 border-l-4 border-[#F7C35F]">
                                    <p className="text-[#EADCC1]">
                                        <strong className="text-[#F7C35F]">Важно знать:</strong> Точный расчёт стоимости доставки
                                        зависит от объёма партии, расстояния и типа транспорта. Для уточнения стоимости
                                        свяжитесь с нами по телефону или оставьте заявку на сайте.
                                    </p>
                                </div>

                                <div className="bg-[#F7C35F]/5 rounded-lg p-6 border border-[#F7C35F]/20">
                                    <span className="text-lg font-semibold text-[#F7C35F] mb-3">
                                        Упаковка и хранение
                                    </span>
                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <div className="font-medium text-[#EADCC1] mb-2">Упаковка</div>
                                            <p className="text-[#EADCC1]/80 text-sm">
                                                Поставляется навалом или в биг-бэгах по 1 тонне. Возможна фасовка
                                                в мешки по 25-50 кг по согласованию.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[#EADCC1] mb-2">Условия хранения</div>
                                            <p className="text-[#EADCC1]/80 text-sm">
                                                Храним в сухих проветриваемых складах при влажности не более 10%.
                                                Срок хранения — до 12 месяцев.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'calculator' && (
                            <PriceCalculator
                                productName="льна"
                                basePrice={38000}
                                minVolume={15}
                                volumeDiscounts={[
                                    { from: 15, to: 29, discount: 0, label: '15-29 т' },
                                    { from: 30, to: 49, discount: 1, label: '30-49 т' },
                                    { from: 50, to: 99, discount: 2, label: '50-99 т' },
                                    { from: 100, to: Infinity, discount: 3, label: '100+ т' }
                                ]}
                                deliveryRates={[
                                    { distance: 50, rate: 0, label: 'Тацинский район (бесплатно)' },
                                    { distance: 100, rate: 400, label: '50-100 км (400 ₽/т)' },
                                    { distance: 200, rate: 600, label: '100-200 км (600 ₽/т)' },
                                    { distance: 300, rate: 800, label: '200-300 км (800 ₽/т)' },
                                    { distance: Infinity, rate: 1200, label: 'Более 300 км (1200 ₽/т)' }
                                ]}
                            />
                        )}
                    </div>
                </div>
            </section>




            {/* FAQ Section */}
            <section className="farm_container mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F7C35F] text-center mb-10">
                    Популярные вопросы
                </h2>

                <div className="max-w-4xl mx-auto space-y-4">
                    {[
                        {
                            q: 'Какой минимальный объём заказа льна?',
                            a: 'Минимальная партия для заказа составляет 15 тонн. Для меньших объёмов возможно обсуждение индивидуальных условий при наличии продукции на складе.'
                        },
                        {
                            q: 'Какая масличность вашего льна?',
                            a: 'Масличность составляет 44-46%, что является превосходным показателем. Каждая партия проходит лабораторный анализ, результаты которого мы предоставляем покупателю.'
                        },
                        {
                            q: 'Предоставляете ли вы документы на лен?',
                            a: 'Да, каждая партия идёт с полным комплектом документов: сертификат соответствия, протокол испытаний с указанием масличности, влажности и чистоты, фитосанитарный сертификат.'
                        },
                        {
                            q: 'В какой упаковке поставляется лен?',
                            a: 'Поставляется навалом (для крупных партий) или в биг-бэгах по 1 тонне. По согласованию возможна фасовка в мешки по 25-50 кг с доплатой за упаковку.'
                        },
                        {
                            q: 'Какие способы оплаты доступны?',
                            a: 'Работаем как с предоплатой, так и с отсрочкой платежа для постоянных покупателей. Принимаем оплату по безналичному расчёту, возможна частичная предоплата.'
                        },
                        {
                            q: 'Как долго можно хранить лен после покупки?',
                            a: 'При соблюдении условий хранения (сухое помещение, влажность не более 10%, температура до +20°C) продукция сохраняет свои свойства до 12 месяцев.'
                        }
                    ].map((faq, index) => (
                        <details
                            key={index}
                            className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 backdrop-blur rounded-xl border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 transition-all overflow-hidden group"
                        >
                            <summary className="px-6 py-4 cursor-pointer flex items-center justify-between text-[#F7C35F] font-medium hover:bg-[#F7C35F]/5 transition-colors">
                                <span>{faq.q}</span>
                                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
                        <div className="text-3xl mb-4">🌾</div>
                        <span className="text-2xl font-bold text-[#F7C35F] mb-3 group-hover:text-[#e5b44f]">
                            Пшеница
                        </span>
                        <p className="text-[#EADCC1]/80 mb-4">
                            Продовольственная и фуражная пшеница 3-4 класса с повышенным содержанием клейковины
                        </p>
                        <span className="text-[#F7C35F] font-semibold flex items-center gap-2">
                            Подробнее
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>


                    <Link
                        href="/podsolnechnik"
                        className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 backdrop-blur rounded-2xl p-8 border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 transition-all duration-300 hover:scale-105 group"
                    >
                        <div className="text-3xl mb-4">🌻</div>
                        <span className="text-2xl font-bold text-[#F7C35F] mb-3 group-hover:text-[#e5b44f]">
                            Подсолнечник
                        </span>
                        <p className="text-[#EADCC1]/80 mb-4">
                            Качественное сырьё для изготовления масла с высоким содержанием масличности
                        </p>
                        <span className="text-[#F7C35F] font-semibold flex items-center gap-2">
                            Подробнее
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
}