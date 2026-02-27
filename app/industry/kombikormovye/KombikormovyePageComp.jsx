'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import PriceCalculator from '@/app/components/PriceCalculator';
import { posts } from '@/app/blog/data/post';

const advantages = [
    { title: 'Контроль качества каждой партии', text: 'Лабораторный анализ белка, влажности, клейковины и сорной примеси перед отгрузкой. Протокол передаётся вместе с партией.' },
    { title: 'Стабильность между поставками', text: 'Согласованные показатели фиксируем в договоре. Каждая следующая партия — в пределах допуска для вашей рецептуры.' },
    { title: 'Подбор под рецептуры комбикорма', text: 'Уточняем питательные характеристики: обменную энергию, сырой протеин, содержание клетчатки под конкретные рецепты.' },
    { title: 'Гибкая логистика', text: 'Самовывоз EXW, доставка собственным транспортом или организация перевозки на условиях FCA / CPT.' },
    { title: 'Промышленные объёмы', text: 'Работаем с партиями от 20 до 500+ тонн. Возможна поставка несколькими машинами в согласованные сроки.' },
    { title: 'Прозрачные документы', text: 'Товарная накладная, счёт-фактура, протокол анализа, фитосанитарный сертификат — весь комплект.' },
];

const expertiseSteps = [
    { num: '01', title: 'Уточняем параметры рецептуры', text: 'Запрашиваем требования по сырому протеину, обменной энергии, влажности и допустимому содержанию примесей под ваши рецепты комбикорма.' },
    { num: '02', title: 'Фиксируем показатели в договоре', text: 'Согласованные технические параметры прописываем в спецификации к договору. Это защищает обе стороны.' },
    { num: '03', title: 'Подтверждаем качество анализами', text: 'Перед отгрузкой предоставляем протокол лабораторного анализа от аккредитованной лаборатории.' },
    { num: '04', title: 'Обеспечиваем соответствие каждой партии', text: 'Ведём партионный учёт. Каждая машина — из проверенной партии с документально подтверждёнными показателями.' },
];

const specifications = [
    {
        product: 'Пшеница фуражная (4–5 кл.)',
        purpose: 'Зерновая составляющая в рецептурах комбикорма',
        params: 'Белок ≥ 10%, влажность ≤ 14%, сорная примесь ≤ 2%',
        delivery: 'Авто, EXW/FCA',
    },
    {
        product: 'Пшеница 3–4 класс',
        purpose: 'Высокобелковая добавка в рецептуры для птицы и свиней',
        params: 'Белок ≥ 12%, клейковина ≥ 23%, влажность ≤ 14%',
        delivery: 'Авто, EXW/FCA',
    },
    {
        product: 'Подсолнечник (для шрота)',
        purpose: 'Источник растительного белка и жира в рецептурах',
        params: 'Масличность 48–52%, влажность ≤ 8%, сорная примесь ≤ 2%',
        delivery: 'Авто, EXW/FCA',
    },
];

const reviews = [
    {
        id: 1,
        name: 'Николай Петров',
        role: 'Технолог производства',
        location: 'Ростов-на-Дону',
        date: 'Февраль 2026',
        rating: 5,
        text: 'Берём фуражную пшеницу под рецептуры для бройлера. Белок стабильно в норме, документы без замечаний. Важно, что каждая партия соответствует предыдущей — это позволяет не перебалансировать рецепт.',
    },
    {
        id: 2,
        name: 'Елена Соколова',
        role: 'Начальник отдела снабжения',
        location: 'Краснодар',
        date: 'Январь 2026',
        rating: 5,
        text: 'Работаем второй сезон. Нравится, что показатели фиксируют в договоре — это даёт уверенность при закупке. Отгрузка по графику, без сюрпризов.',
    },
    {
        id: 3,
        name: 'Дмитрий Харченко',
        role: 'Директор по закупкам',
        location: 'Волгоград',
        date: 'Декабрь 2025',
        rating: 5,
        text: 'Заказывали пшеницу и подсолнечник в одной поставке. Оформили одним договором, протоколы на каждую культуру — отдельно. Удобно и прозрачно.',
    },
];

function ReviewCard({ review }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2c1810]/80 to-[#1a0e08]/80 border border-[#F7C35F]/20 rounded-2xl p-7">
            <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (<span key={i} className="text-[#F7C35F] text-lg">★</span>))}
            </div>
            <p className="text-[#EADCC1] text-sm md:text-base leading-relaxed mb-6 min-h-[80px]">{review.text}</p>
            <div className="border-t border-[#F7C35F]/10 pt-4">
                <p className="text-[#F7C35F] font-semibold">{review.name}</p>
                <p className="text-[#EADCC1]/70 text-sm">{review.role}</p>
                <p className="text-[#EADCC1]/50 text-xs mt-1">{review.location} · {review.date}</p>
            </div>
        </motion.div>
    );
}

function IndustryRelatedPosts() {
    const relatedPosts = posts.filter(p => p.category === 'Пшеница').slice(0, 3);
    const displayPosts = relatedPosts.length > 0 ? relatedPosts : posts.slice(0, 3);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                    className="group p-6 bg-[#334C35]/80 border border-[#F7C35F]/20 rounded-xl hover:border-[#F7C35F]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <span className="inline-block px-3 py-1 bg-[#F7C35F]/10 text-[#F7C35F] text-xs font-semibold rounded-full mb-3">{post.category}</span>
                    <h3 className="text-base font-bold text-[#F7C35F] mb-2 group-hover:text-[#e5b44f] transition-colors leading-snug">{post.title}</h3>
                    <p className="text-[#EADCC1]/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-[#EADCC1]/60">
                        <time>{post.date}</time><span>{post.readTime}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default function KombikormovyePageComp() {
    return (
        <div className="min-h-screen bg-[#263C28]">
            <div className="farm_container px-4 py-6">
                <nav className="flex items-center gap-2 text-sm text-[#EADCC1]/60 flex-wrap">
                    <Link href="/" className="hover:text-[#F7C35F] transition-colors">Главная</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/industry" className="hover:text-[#F7C35F] transition-colors">Отрасли</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#F7C35F]">Производители комбикормов</span>
                </nav>
            </div>

            {/* БЛОК 1: HERO */}
            <section className="farm_container px-4 pt-4 pb-16 md:pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-[#F7C35F]/15 border border-[#F7C35F]/30 rounded-full text-[#F7C35F] text-sm font-semibold mb-6">⚙️ Для производителей комбикормов</span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7C35F] leading-tight mb-6">
                            Сырье для производства комбикормов оптом
                        </h1>
                        <p className="text-[#EADCC1] text-lg leading-relaxed mb-8">
                            КФХ Великанов поставляет фуражную пшеницу и подсолнечник производителям комбикормов напрямую с хозяйства. Показатели питательности фиксируем в договоре. Каждая партия — с лабораторным протоколом.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#contact" className="inline-flex items-center justify-center bg-[#F7C35F] text-[#2c1810] font-bold px-8 py-4 rounded-[15px] hover:bg-[#e5b44f] transition-all shadow-lg hover:shadow-xl text-base">Получить расчёт стоимости</Link>
                            <Link href="/pshenitsa" className="inline-flex items-center justify-center border border-[#F7C35F]/40 text-[#F7C35F] font-semibold px-8 py-4 rounded-[15px] hover:border-[#F7C35F] hover:bg-[#F7C35F]/10 transition-all text-base">О нашей пшенице</Link>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="grid grid-cols-2 gap-4">
                        {[
                            { value: '≥10%', label: 'сырой протеин', sub: 'фуражная пшеница' },
                            { value: '≤14%', label: 'влажность', sub: 'по ГОСТ' },
                            { value: '48–52%', label: 'масличность', sub: 'подсолнечник' },
                            { value: '20 т', label: 'минимальный объём', sub: 'одна машина' },
                        ].map((item) => (
                            <div key={item.label + item.sub} className="bg-gradient-to-br from-[#2c1810]/60 to-[#1a0e08]/60 border border-[#F7C35F]/20 rounded-2xl p-5 text-center">
                                <div className="text-3xl font-bold text-[#F7C35F] mb-1">{item.value}</div>
                                <div className="text-[#EADCC1] text-sm font-medium">{item.label}</div>
                                <div className="text-[#EADCC1]/50 text-xs mt-1">{item.sub}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* БЛОК 2: УТП */}
            <section className="farm_container px-4 py-16 md:py-20">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-4">Почему производители комбикормов выбирают нас?</h2>
                    <p className="text-[#EADCC1]/70 text-lg max-w-2xl">Для комбикормового производства важна стабильность питательных характеристик от партии к партии — иначе приходится пересчитывать рецептуры. Именно это мы гарантируем.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advantages.map((adv, i) => (
                        <motion.div key={adv.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 border border-[#F7C35F]/15 hover:border-[#F7C35F]/40 rounded-2xl p-6 transition-all">
                            <h3 className="text-[#F7C35F] font-semibold mb-2">{adv.title}</h3>
                            <p className="text-[#EADCC1]/70 text-sm leading-relaxed">{adv.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* БЛОК 3: ЭКСПЕРТНОСТЬ */}
            <section className="farm_container px-4 py-16 md:py-20">
                <div className="bg-gradient-to-br from-[#2c1810]/40 to-[#1a0e08]/40 border border-[#F7C35F]/20 rounded-3xl p-8 md:p-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-4">Как мы подбираем зерно под задачи вашего производства?</h2>
                        <p className="text-[#EADCC1]/70 text-lg max-w-2xl">Зерно для комбикорма — это не просто «фуражная пшеница». Мы работаем с питательными характеристиками конкретного предприятия: протеином, обменной энергией и требованиями по влажности.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {expertiseSteps.map((step, i) => (
                            <motion.div key={step.num} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F7C35F]/15 border border-[#F7C35F]/30 flex items-center justify-center">
                                    <span className="text-[#F7C35F] font-bold text-sm">{step.num}</span>
                                </div>
                                <div>
                                    <h3 className="text-[#F7C35F] font-semibold mb-2">{step.title}</h3>
                                    <p className="text-[#EADCC1]/70 text-sm leading-relaxed">{step.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* БЛОК 4: СПЕЦИФИКАЦИИ */}
            <section className="farm_container px-4 py-16 md:py-20">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-4">Доступные позиции и технические параметры</h2>
                    <p className="text-[#EADCC1]/70">Актуальные остатки и цены уточняйте по запросу — показатели зависят от партии и даты отгрузки.</p>
                </motion.div>
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-[#F7C35F]/20">
                                <th className="text-left py-4 px-4 text-[#F7C35F] font-semibold">Продукт</th>
                                <th className="text-left py-4 px-4 text-[#F7C35F] font-semibold">Назначение</th>
                                <th className="text-left py-4 px-4 text-[#F7C35F] font-semibold">Ключевые показатели</th>
                                <th className="text-left py-4 px-4 text-[#F7C35F] font-semibold">Формат поставки</th>
                            </tr>
                        </thead>
                        <tbody>
                            {specifications.map((row, i) => (
                                <tr key={i} className="border-b border-[#F7C35F]/10 hover:bg-[#F7C35F]/5 transition-colors">
                                    <td className="py-4 px-4 text-[#EADCC1] font-medium">{row.product}</td>
                                    <td className="py-4 px-4 text-[#EADCC1]/80">{row.purpose}</td>
                                    <td className="py-4 px-4 text-[#EADCC1]/70 text-xs leading-relaxed">{row.params}</td>
                                    <td className="py-4 px-4 text-[#EADCC1]/70">{row.delivery}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="md:hidden space-y-4">
                    {specifications.map((row, i) => (
                        <div key={i} className="bg-gradient-to-br from-[#2c1810]/50 to-[#1a0e08]/50 border border-[#F7C35F]/15 rounded-xl p-5">
                            <h3 className="text-[#F7C35F] font-bold mb-3">{row.product}</h3>
                            <div className="space-y-2 text-sm">
                                <p className="text-[#EADCC1]/80"><span className="text-[#EADCC1]/50">Назначение: </span>{row.purpose}</p>
                                <p className="text-[#EADCC1]/80"><span className="text-[#EADCC1]/50">Параметры: </span>{row.params}</p>
                                <p className="text-[#EADCC1]/80"><span className="text-[#EADCC1]/50">Поставка: </span>{row.delivery}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <Link href="#contact" className="inline-flex items-center gap-2 text-[#F7C35F] font-semibold border border-[#F7C35F]/40 px-6 py-3 rounded-xl hover:border-[#F7C35F] hover:bg-[#F7C35F]/10 transition-all">
                        Запросить актуальные показатели <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* БЛОК 5: ЛОГИСТИКА */}
            <section className="farm_container px-4 py-16 md:py-20">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-6">География и условия поставок</h2>
                        <p className="text-[#EADCC1]/80 mb-6 leading-relaxed">Хозяйство расположено в Тацинском районе Ростовской области. Работаем с предприятиями ЮФО и ЦФО: Ростов-на-Дону, Краснодар, Волгоград, Воронеж и тд.</p>
                        <div className="space-y-3 mb-8">
                            {[
                                { label: 'Самовывоз (EXW)', text: 'Бесплатно. Хутор Новороссошанский, Тацинский р-н.' },
                                { label: 'Доставка транспортом', text: 'Автомобильный транспорт 20–25 т. Стоимость по расстоянию.' },
                                { label: 'FCA / CPT', text: 'По договорённости. Уточняйте условия при запросе.' },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-3 p-4 bg-[#F7C35F]/5 rounded-xl border border-[#F7C35F]/10">
                                    <CheckCircle2 className="w-5 h-5 text-[#F7C35F] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-[#F7C35F] font-medium text-sm">{item.label}</span>
                                        <p className="text-[#EADCC1]/70 text-sm mt-0.5">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-[#F7C35F]/20 h-[380px] lg:h-[460px]">
                        <iframe src="https://yandex.ru/map-widget/v1/?ll=41.354941,47.912033&z=13&pt=41.354941,47.912033,pm2rdm" width="100%" height="100%" frameBorder="0" allowFullScreen title="Хутор Новороссошанский" />
                    </motion.div>
                </div>
            </section>

            {/* БЛОК 6: КАЛЬКУЛЯТОР */}
            <section className="farm_container px-4 py-16 md:py-20">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-4">Предварительный расчёт стоимости</h2>
                    <p className="text-[#EADCC1]/70">Рассчитайте ориентировочную стоимость партии. Точная цена зависит от культуры, объёма и даты отгрузки.</p>
                </motion.div>
                <PriceCalculator productName="фуражной пшеницы" basePrice={11500} minVolume={20} />
            </section>

            {/* БЛОК 7: МАТЕРИАЛЫ */}
            <section className="farm_container px-4 py-16 md:py-20">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-4">Полезные материалы для специалистов отрасли</h2>
                    <p className="text-[#EADCC1]/70">Статьи о качестве зерна, питательных характеристиках и агрономических нюансах.</p>
                </motion.div>
                <IndustryRelatedPosts />
                <div className="mt-8 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[#F7C35F] font-semibold hover:text-[#e5b44f] transition-colors">Все материалы в блоге <ChevronRight className="w-4 h-4" /></Link>
                </div>
            </section>

            {/* БЛОК 8: ОТЗЫВЫ */}
            <section className="farm_container px-4 py-16 md:py-20">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-4">Нам доверяют производители комбикормов</h2>
                    <p className="text-[#EADCC1]/70">Акцент — на стабильность питательных характеристик и предсказуемость каждой следующей поставки.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review) => (<ReviewCard key={review.id} review={review} />))}
                </div>
            </section>

            {/* ФИНАЛЬНЫЙ CTA */}
            <section className="farm_container px-4 pb-24">
                <div className="bg-gradient-to-r from-[#F7C35F]/15 via-[#F7C35F]/10 to-[#F7C35F]/5 border border-[#F7C35F]/30 rounded-3xl p-10 md:p-14 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F7C35F] mb-4">Готовы обсудить поставку под ваши рецептуры?</h2>
                    <p className="text-[#EADCC1]/70 mb-8 max-w-xl mx-auto leading-relaxed">Оставьте заявку — уточним культуру, питательные характеристики, объём и сроки. Ответим в рабочее время в день обращения.</p>
                    <Link href="#contact" className="inline-flex items-center justify-center bg-[#F7C35F] text-[#2c1810] font-bold px-12 py-4 rounded-[15px] hover:bg-[#e5b44f] transition-all shadow-lg hover:shadow-xl text-lg">
                        Оставить заявку
                    </Link>
                </div>
            </section>
        </div>
    );
}