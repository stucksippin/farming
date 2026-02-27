import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'Поставки зерна по отраслям | КФХ Великанов',
    description: 'Прямые поставки пшеницы, льна и подсолнечника для мукомольных предприятий, маслоэкстракционных заводов, производителей комбикормов, круп, хлебопекарен и трейдеров.',
    keywords: [
        'поставки зерна для промышленности',
        'пшеница для мукомольных предприятий',
        'подсолнечник для маслоэкстракционных заводов',
        'зерно для комбикормов',
        'хлебопекарная пшеница оптом',
    ],
    alternates: {
        canonical: 'https://velikanov-farming.ru/industry',
    },
};

const industries = [
    {
        slug: 'mukomolnye',
        title: 'Мукомольные предприятия',
        description: 'Пшеница 3–4 класса с гарантированным содержанием клейковины и стекловидности под помольные партии.',
        product: 'Пшеница продовольственная',
        minVolume: 'от 20 тонн',
    },
    {
        slug: 'masloekstrakcionnye',
        title: 'Маслоэкстракционные заводы',
        description: 'Подсолнечник с масличностью 48–52% и лён масличный 44–46% для переработки в масло и шрот.',
        product: 'Подсолнечник, Лён',
        minVolume: 'от 20 тонн',
    },
    {
        slug: 'kombikormovye',
        title: 'Производители комбикормов',
        description: 'Фуражная пшеница и зернобобовые культуры для рецептур комбикормов с фиксацией показателей.',
        product: 'Пшеница фуражная',
        minVolume: 'от 20 тонн',
    },
    {
        slug: 'krupy-hlopya',
        title: 'Производители круп и хлопьев',
        description: 'Пшеница с высоким натурным весом и минимальным содержанием примесей для крупяного производства.',
        product: 'Пшеница 3 класс',
        minVolume: 'от 20 тонн',
    },
    {
        slug: 'hlebopekarnye',
        title: 'Хлебопекарные предприятия',
        description: 'Продовольственная пшеница 3 класса с белком 13%+ и клейковиной 28%+ для хлебопечения.',
        product: 'Пшеница 3 класс',
        minVolume: 'от 20 тонн',
    },
    {
        slug: 'treidery-eksportery',
        title: 'Трейдеры и экспортеры',
        description: 'Все культуры с полным пакетом документов, возможность работы на условиях EXW / FCA / CPT.',
        product: 'Пшеница, Лён, Подсолнечник',
        minVolume: 'от 20 тонн',
    },
];

export default function IndustryHubPage() {
    return (
        <div className="min-h-screen bg-[#263C28]">

            {/* Schema.org */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        name: 'Поставки зерна по отраслям',
                        description: 'Прямые поставки зерновых и масличных культур для предприятий АПК',
                        url: 'https://velikanov-farming.ru/industry',
                        publisher: {
                            '@type': 'Organization',
                            name: 'Фермерское хозяйство Великанов',
                        },
                    }),
                }}
            />

            {/* Breadcrumbs */}
            <div className="farm_container px-4 py-6">
                <nav className="flex items-center gap-2 text-sm text-[#EADCC1]/60">
                    <Link href="/" className="hover:text-[#F7C35F] transition-colors">Главная</Link>
                    <span>/</span>
                    <span className="text-[#F7C35F]">Отрасли</span>
                </nav>
            </div>

            {/* Hero */}
            <section className="farm_container px-4 pt-4 pb-16 md:pb-20">
                <div className="max-w-3xl">
                    <span className="inline-block px-4 py-1.5 bg-[#F7C35F]/15 border border-[#F7C35F]/30 rounded-full text-[#F7C35F] text-sm font-semibold mb-6">
                        Прямые поставки от производителя
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7C35F] leading-tight mb-6">
                        Зерно и масличные культуры — для каждой отрасли
                    </h1>
                    <p className="text-[#EADCC1] text-lg md:text-xl leading-relaxed mb-8">
                        КФХ Великанов поставляет пшеницу, лён и подсолнечник предприятиям АПК напрямую с хозяйства. Стабильные показатели между партиями, лабораторный контроль, полный пакет документов. Выберите вашу отрасль — расскажем, как работаем именно с вами.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm text-[#EADCC1]/70">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F7C35F]"></span>
                            Поставки от 20 тонн
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F7C35F]"></span>
                            Ростовская область
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F7C35F]"></span>
                            Документы и сертификаты
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="farm_container px-4 pb-20">
                <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-10">
                    Выберите вашу отрасль
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry) => (
                        <Link
                            key={industry.slug}
                            href={`/industry/${industry.slug}`}
                            className="group relative bg-gradient-to-br from-[#2c1810]/60 to-[#1a0e08]/60 border border-[#F7C35F]/20 hover:border-[#F7C35F]/60 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
                        >
                            <div className="text-4xl mb-4">{industry.icon}</div>
                            <h3 className="text-xl font-bold text-[#F7C35F] mb-3 group-hover:text-[#e5b44f] transition-colors">
                                {industry.title}
                            </h3>
                            <p className="text-[#EADCC1]/70 text-sm leading-relaxed flex-1 mb-5">
                                {industry.description}
                            </p>
                            <div className="border-t border-[#F7C35F]/15 pt-4 flex items-center justify-between">
                                <div>
                                    <div className="text-xs text-[#EADCC1]/50 uppercase tracking-wide mb-1">Продукт</div>
                                    <div className="text-sm text-[#EADCC1] font-medium">{industry.product}</div>
                                </div>
                                <div className="flex items-center gap-1 text-[#F7C35F] text-sm font-semibold group-hover:gap-2 transition-all">
                                    Подробнее
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 text-xs text-[#EADCC1]/40">{industry.minVolume}</div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="farm_container px-4 pb-24 text-center">
                <p className="text-[#EADCC1]/70 mb-6 text-lg">Не нашли свою отрасль или нужна консультация?</p>
                <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#F7C35F] text-[#2c1810] font-bold px-10 py-4 rounded-[15px] hover:bg-[#e5b44f] transition-all shadow-lg hover:shadow-xl text-lg"
                >
                    Связаться с нами
                </Link>
            </section>

            {/* Trust strip */}
            <section className="farm_container px-4 pb-20">
                <div className="bg-gradient-to-r from-[#F7C35F]/10 to-[#F7C35F]/5 border border-[#F7C35F]/20 rounded-2xl p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-8 text-center">
                        Почему предприятия работают с нами
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🔬', title: 'Лабораторный контроль', text: 'Каждая партия проходит анализ с выдачей протокола' },
                            { icon: '📋', title: 'Фиксация в договоре', text: 'Согласованные показатели закрепляем документально' },
                            { icon: '🚛', title: 'Гибкая логистика', text: 'Самовывоз, доставка транспортом, EXW / FCA / CPT' },
                            { icon: '📦', title: 'Промышленные объёмы', text: 'Поставки от 20 до 1000+ тонн в одну партию' },
                        ].map((item) => (
                            <div key={item.title} className="flex flex-col items-center text-center gap-3">
                                <span className="text-3xl">{item.icon}</span>
                                <h3 className="text-[#F7C35F] font-semibold">{item.title}</h3>
                                <p className="text-[#EADCC1]/70 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}