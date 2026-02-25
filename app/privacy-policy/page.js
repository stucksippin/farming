// /app/privacy-policy/page.jsx

import Link from 'next/link';

export const metadata = {
    title: 'Политика конфиденциальности | ФХ Великанова',
    description: 'Политика конфиденциальности и обработки персональных данных ИП Великанов Николай Николаевич',
    robots: 'noindex, follow',
    alternates: {
        canonical: "https://velikanov-farming.ru/privacy-policy",
    },
};


const Section = ({ title, children }) => (
    <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#F7C35F] mb-4 pb-2 border-b border-[#F7C35F]/20">
            {title}
        </h2>
        <div className="text-[#EADCC1]/80 leading-relaxed space-y-3 text-sm md:text-base">
            {children}
        </div>
    </div>
);

export default function PrivacyPage() {
    const today = new Date().toLocaleDateString('ru-RU', {
        day: '2-digit', month: '2-digit', year: 'numeric'
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#263C28] via-[#1f2f20] to-[#263C28]">
            {/* Декоративные блюры */}
            <div className="fixed top-0 left-0 w-96 h-96 bg-[#F7C35F]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-96 h-96 bg-[#F7C35F]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">

                {/* Хлебная крошка */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#F7C35F]/60 hover:text-[#F7C35F] transition-colors text-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        На главную
                    </Link>
                </div>

                {/* Заголовок */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#F7C35F]/10 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="#F7C35F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            </svg>
                        </div>
                        <span className="text-[#F7C35F]/60 text-sm uppercase tracking-widest">Правовая информация</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7C35F] mb-4">
                        Политика конфиденциальности
                    </h1>
                    <p className="text-[#EADCC1]/60 text-sm">
                        Дата последнего обновления: {today}
                    </p>
                </div>

                {/* Карточка с содержимым */}
                <div className="bg-[#1a0e08]/30 backdrop-blur rounded-2xl p-6 md:p-10 border border-[#F7C35F]/20">

                    <Section title="1. Общие положения">
                        <p>
                            Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки
                            и защиты персональных данных физических лиц (далее — «Пользователи»), которые используют
                            сайт <span className="text-[#F7C35F]">velikanov-farming.ru</span> (далее — «Сайт»).
                        </p>
                        <p>
                            Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
                            «О персональных данных».
                        </p>
                        <p>
                            Использование Сайта означает безоговорочное согласие с настоящей Политикой и указанными
                            в ней условиями обработки персональных данных. Если вы не согласны с этими условиями,
                            пожалуйста, воздержитесь от использования Сайта.
                        </p>
                    </Section>

                    <Section title="2. Оператор персональных данных">
                        <p>Оператором персональных данных является:</p>
                        <div className="mt-3 p-4 bg-[#F7C35F]/5 rounded-lg border border-[#F7C35F]/15 space-y-1">
                            <p><span className="text-[#F7C35F]/70">Наименование:</span> ИП Великанов Николай Николаевич</p>
                            <p><span className="text-[#F7C35F]/70">ОГРНИП:</span> 318619600238345</p>
                            <p><span className="text-[#F7C35F]/70">ИНН:</span> 615508070458</p>
                            <p><span className="text-[#F7C35F]/70">Адрес:</span> Хутор Новороссошанский, Тацинский район, Ростовская область, 347083</p>
                            <p>
                                <span className="text-[#F7C35F]/70">Email: </span>
                                <a href="mailto:velikanov_n@mail.ru" className="text-[#F7C35F] hover:underline">
                                    velikanov_n@mail.ru
                                </a>
                            </p>
                            <p>
                                <span className="text-[#F7C35F]/70">Телефон: </span>
                                <a href="tel:+79281789282" className="text-[#F7C35F] hover:underline">
                                    +7 928 178-92-82
                                </a>
                            </p>
                        </div>
                    </Section>

                    <Section title="3. Какие персональные данные мы собираем">
                        <p>При заполнении формы обратной связи на Сайте мы получаем следующие данные:</p>
                        <ul className="mt-2 space-y-1 list-none">
                            {['Имя (фамилия, имя или псевдоним)', 'Номер телефона', 'Текст обращения (по желанию пользователя)'].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="text-[#F7C35F] mt-1 flex-shrink-0">—</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3">
                            Мы не собираем специальные категории персональных данных (расовое происхождение,
                            политические взгляды, состояние здоровья и т.п.).
                        </p>
                    </Section>

                    <Section title="4. Цели обработки персональных данных">
                        <p>Персональные данные обрабатываются исключительно в следующих целях:</p>
                        <ul className="mt-2 space-y-1 list-none">
                            {[
                                'Обработка заявок и обращений пользователей',
                                'Связь с пользователем для уточнения деталей заказа или консультации',
                                'Выполнение обязательств перед пользователями',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="text-[#F7C35F] mt-1 flex-shrink-0">—</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section title="5. Правовые основания обработки">
                        <p>
                            Обработка персональных данных осуществляется на основании согласия субъекта
                            персональных данных (ст. 6 ч. 1 п. 1 Федерального закона № 152-ФЗ).
                        </p>
                        <p>
                            Согласие выражается пользователем путём установки отметки в соответствующем поле
                            формы обратной связи перед отправкой обращения.
                        </p>
                    </Section>

                    <Section title="6. Порядок и сроки хранения">
                        <p>
                            Персональные данные хранятся не дольше, чем этого требуют цели их обработки.
                            Данные, переданные через форму обратной связи, хранятся в течение 3 лет с момента
                            получения обращения или до момента отзыва согласия пользователем.
                        </p>
                        <p>
                            По истечении указанного срока или при отзыве согласия персональные данные
                            уничтожаются или обезличиваются.
                        </p>
                    </Section>

                    <Section title="7. Передача данных третьим лицам">
                        <p>
                            Мы не передаём персональные данные третьим лицам, за исключением случаев,
                            предусмотренных действующим законодательством Российской Федерации.
                        </p>
                        <p>
                            Персональные данные не продаются и не используются в рекламных целях третьих сторон.
                        </p>
                    </Section>

                    <Section title="8. Права субъекта персональных данных">
                        <p>Пользователь имеет право:</p>
                        <ul className="mt-2 space-y-1 list-none">
                            {[
                                'Получить информацию об обработке своих персональных данных',
                                'Потребовать уточнения, блокировки или уничтожения персональных данных',
                                'Отозвать согласие на обработку персональных данных в любой момент',
                                'Обжаловать действия оператора в уполномоченном органе (Роскомнадзор)',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="text-[#F7C35F] mt-1 flex-shrink-0">—</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3">
                            Для реализации прав направьте обращение на email{' '}
                            <a href="mailto:velikanov_n@mail.ru" className="text-[#F7C35F] hover:underline">
                                velikanov_n@mail.ru
                            </a>{' '}
                            или по телефону{' '}
                            <a href="tel:+79281789282" className="text-[#F7C35F] hover:underline">
                                +7 928 178-92-82
                            </a>.
                        </p>
                    </Section>

                    <Section title="9. Аналитика и счетчики">
                        <p>
                            Для анализа трафика и отслеживания статистики посещений Сайт использует следующие
                            системы аналитики и счетчики:
                        </p>
                        <ul className="mt-3 space-y-3 list-none">
                            {[
                                {
                                    name: 'Top.Mail.Ru',
                                    desc: 'Счётчик посещений от Mail.ru. Собирает информацию о количестве просмотров и посетителей, включая IP-адрес, тип браузера, операционную систему и реферера. Данные обрабатываются согласно политике конфиденциальности Mail.ru.'
                                },
                                {
                                    name: 'LiveInternet',
                                    desc: 'Система аналитики для отслеживания посещений сайта. Сохраняет информацию о реферере, разрешении экрана, типе браузера и параметрах устройства. Подробнее в политике конфиденциальности LiveInternet.'
                                },
                                {
                                    name: 'AgroServer',
                                    desc: 'Каталог сельскохозяйственных предприятий. Счётчик отслеживает переходы из каталога на Сайт и помогает с продвижением в целевой аудитории.'
                                }
                            ].map((counter) => (
                                <li key={counter.name} className="p-3 bg-[#F7C35F]/5 rounded-lg border border-[#F7C35F]/15">
                                    <p className="text-[#F7C35F] font-semibold mb-1">{counter.name}</p>
                                    <p className="text-[#EADCC1]/70 text-sm">{counter.desc}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3">
                            Эти системы могут использовать cookies и другие технологии отслеживания для сбора
                            информации о вашем поведении на Сайте. Данные обрабатываются в соответствии с
                            политиками конфиденциальности этих сервисов.
                        </p>
                        <p className="mt-2 text-sm text-[#EADCC1]/60">
                            Вы можете управлять настройками cookies в своём браузере или отказаться от некоторых
                            форм отслеживания, однако это может повлиять на функциональность Сайта.
                        </p>
                    </Section>

                    <Section title="10. Cookies и технологии отслеживания">
                        <p>
                            Сайт использует cookies — небольшие текстовые файлы, сохраняемые на вашем устройстве
                            для улучшения пользовательского опыта и сбора статистики.
                        </p>
                        <p className="mt-2">
                            Cookies могут быть использованы для:
                        </p>
                        <ul className="mt-2 space-y-1 list-none">
                            {[
                                'Запоминания ваших предпочтений и параметров',
                                'Анализа трафика и поведения пользователей',
                                'Отслеживания эффективности системами аналитики',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="text-[#F7C35F] mt-1 flex-shrink-0">—</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3">
                            Большинство браузеров позволяют управлять cookies через настройки приватности.
                            При отключении cookies некоторые функции Сайта и системы аналитики могут быть недоступны.
                        </p>
                    </Section>

                    <Section title="11. Защита персональных данных">
                        <p>
                            Оператор принимает необходимые организационные и технические меры для защиты
                            персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
                        </p>
                        <p className="mt-2">
                            Данные передаются по защищённому протоколу HTTPS. Однако ни один метод передачи
                            данных через интернет не является полностью безопасным, и мы не можем гарантировать
                            абсолютную безопасность информации.
                        </p>
                    </Section>

                    <Section title="12. Изменение политики">
                        <p>
                            Оператор оставляет за собой право вносить изменения в настоящую Политику.
                            Новая редакция вступает в силу с момента её размещения на Сайте.
                            Продолжение использования Сайта после внесения изменений означает принятие
                            новой редакции Политики.
                        </p>
                    </Section>

                </div>

                {/* Кнопка назад */}
                <div className="mt-10 text-center">
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#F7C35F] text-[#2c1810] rounded-lg font-semibold hover:bg-[#e5b44f] transition-colors shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Вернуться на сайт
                    </Link>
                </div>

                {/* Подвал */}
                <div className="mt-12 pt-6 border-t border-[#F7C35F]/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <p className="text-[#EADCC1]/40 text-xs">
                        ИП Великанов Николай Николаевич · ОГРНИП 318619600238345 · ИНН 615508070458
                    </p>
                    <Link href="/" className="text-[#EADCC1]/40 text-xs hover:text-[#F7C35F]/70 transition-colors">
                        velikanov-farming.ru
                    </Link>
                </div>

            </div>
        </div>
    );
}