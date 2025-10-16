'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, User, MessageSquare } from 'lucide-react';

// Компонент маски телефона
const PhoneInput = ({ value, onChange, error }) => {
    const [focused, setFocused] = useState(false);

    const formatPhone = (val) => {
        const numbers = val.replace(/\D/g, '');
        const match = numbers.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

        if (!match) return val;

        const formatted = !match[2] ? match[1] :
            `+${match[1]} (${match[2]})${match[3] ? ` ${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}${match[5] ? `-${match[5]}` : ''}`;

        return formatted;
    };

    const handleChange = (e) => {
        const formatted = formatPhone(e.target.value);
        onChange(formatted);
    };

    return (
        <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F7C35F]/50" />
            <input
                type="tel"
                value={value}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="+7 (___) ___-__-__"
                maxLength={18}
                className={`w-full pl-12 pr-4 py-4 bg-[#1a0e08]/50 border rounded-lg
          text-[#EADCC1] placeholder-[#EADCC1]/30 transition-all duration-300
          focus:outline-none focus:bg-[#1a0e08]/70
          ${focused ? 'border-[#F7C35F] shadow-[0_0_0_3px_rgba(247,195,95,0.1)]' :
                        error ? 'border-red-400' : 'border-[#F7C35F]/20 hover:border-[#F7C35F]/40'}`}
            />
        </div>
    );
};

// Компонент контактной информации
const ContactInfo = ({ icon: Icon, title, content, link, linkText }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex gap-4 group"
    >
        <div className="flex-shrink-0 w-12 h-12 bg-[#F7C35F]/10 rounded-lg flex items-center justify-center
      group-hover:bg-[#F7C35F]/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-[#F7C35F]" />
        </div>
        <div className="flex flex-col">
            <span className="text-[#F7C35F]/60 text-sm mb-1">{title}</span>
            {link ? (
                <a href={link} className="text-[#EADCC1] text-lg hover:text-[#F7C35F] transition-colors">
                    {content}
                </a>
            ) : (
                <span className="text-[#EADCC1] text-lg">{content}</span>
            )}
            {linkText && (
                <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#F7C35F] text-[#2c1810] 
            rounded-lg font-medium hover:bg-[#e5b44f] transition-colors w-fit"
                >
                    <MapPin className="w-4 h-4" />
                    {linkText}
                </motion.a>
            )}
        </div>
    </motion.div>
);

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Валидация
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Введите имя';
                if (value.length < 2) return 'Имя слишком короткое';
                if (value.length > 80) return 'Имя слишком длинное';
                return '';
            case 'phone':
                const phoneDigits = value.replace(/\D/g, '');
                if (!phoneDigits) return 'Введите номер телефона';
                if (phoneDigits.length !== 11) return 'Введите полный номер';
                return '';
            case 'message':
                if (value.length > 300) return 'Максимум 300 символов';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (name) => {
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, formData[name]) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Валидация всех полей
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setTouched({ name: true, phone: true, message: true });
            return;
        }

        setIsSubmitting(true);

        try {
            // Имитация отправки
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitStatus('success');
            setFormData({ name: '', phone: '', message: '' });
            setTouched({});
            setErrors({});

            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contact' className="relative py-12 md:py-20 overflow-hidden">
            {/* Фоновый градиент */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#263C28] via-[#1f2f20] to-[#263C28]" />

            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#F7C35F]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7C35F]/5 rounded-full blur-3xl" />

            <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Заголовок */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7C35F] mb-4">
                        КОНТАКТЫ
                    </h2>
                    <p className="text-[#EADCC1] text-lg">
                        Свяжитесь с нами для заказа или консультации
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Контактная информация */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <ContactInfo
                            icon={Phone}
                            title="ТЕЛЕФОН"
                            content="+7 928 178-92-82"
                            link="tel:+79281789282"
                        />

                        <ContactInfo
                            icon={Mail}
                            title="ЭЛЕКТРОННАЯ ПОЧТА"
                            content="velikanov_n@mail.ru"
                            link="mailto:velikanov_n@mail.ru"
                        />

                        <ContactInfo
                            icon={MapPin}
                            title="АДРЕС"
                            content={
                                <>
                                    Хутор Новороссошанский<br />
                                    Тацинский район<br />
                                    Ростовская область
                                </>
                            }
                            link="https://www.google.ru/maps/place/Новороссошанский,+Ростовская+обл.,+347083"
                            linkText="Показать на карте"
                        />

                        {/* Дополнительная информация */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 p-6 bg-[#F7C35F]/5 rounded-xl border border-[#F7C35F]/20"
                        >
                            <h3 className="text-[#F7C35F] font-semibold mb-3">График работы:</h3>
                            <p className="text-[#EADCC1]">Пн-Пт: 8:00 - 18:00</p>
                            <p className="text-[#EADCC1]">Сб: 8:00 - 15:00</p>
                            <p className="text-[#EADCC1]/60 text-sm mt-2">
                                Звоните в любое время — ответим на все вопросы
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Форма */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#1a0e08]/30 backdrop-blur rounded-2xl p-8 border border-[#F7C35F]/20"
                    >
                        <h3 className="text-2xl font-semibold text-[#F7C35F] mb-6">
                            Оставьте заявку
                        </h3>

                        <div className="space-y-6">
                            {/* Имя */}
                            <div>
                                <label className="block text-[#F7C35F]/80 text-sm mb-2">
                                    Ваше имя *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F7C35F]/50" />
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        onBlur={() => handleBlur('name')}
                                        placeholder="Введите имя"
                                        className={`w-full pl-12 pr-4 py-4 bg-[#1a0e08]/50 border rounded-lg
                      text-[#EADCC1] placeholder-[#EADCC1]/30 transition-all duration-300
                      focus:outline-none focus:bg-[#1a0e08]/70
                      ${errors.name && touched.name ? 'border-red-400' :
                                                'border-[#F7C35F]/20 hover:border-[#F7C35F]/40 focus:border-[#F7C35F]'}`}
                                    />
                                </div>
                                <AnimatePresence>
                                    {errors.name && touched.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-red-400 text-sm mt-2 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Телефон */}
                            <div>
                                <label className="block text-[#F7C35F]/80 text-sm mb-2">
                                    Номер телефона *
                                </label>
                                <PhoneInput
                                    value={formData.phone}
                                    onChange={(value) => handleChange('phone', value)}
                                    error={errors.phone && touched.phone}
                                />
                                <AnimatePresence>
                                    {errors.phone && touched.phone && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-red-400 text-sm mt-2 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.phone}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Сообщение */}
                            <div>
                                <label className="block text-[#F7C35F]/80 text-sm mb-2">
                                    Комментарий
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#F7C35F]/50" />
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => handleChange('message', e.target.value)}
                                        onBlur={() => handleBlur('message')}
                                        placeholder="Ваше сообщение"
                                        rows={4}
                                        className={`w-full pl-12 pr-4 py-4 bg-[#1a0e08]/50 border rounded-lg
                      text-[#EADCC1] placeholder-[#EADCC1]/30 transition-all duration-300
                      focus:outline-none focus:bg-[#1a0e08]/70 resize-none
                      ${errors.message && touched.message ? 'border-red-400' :
                                                'border-[#F7C35F]/20 hover:border-[#F7C35F]/40 focus:border-[#F7C35F]'}`}
                                    />
                                    <span className="absolute bottom-2 right-3 text-xs text-[#F7C35F]/40">
                                        {formData.message.length}/300
                                    </span>
                                </div>
                                <AnimatePresence>
                                    {errors.message && touched.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-red-400 text-sm mt-2 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Кнопка отправки */}
                            <motion.button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2
                  transition-all duration-300 ${isSubmitting
                                        ? 'bg-[#F7C35F]/50 text-[#2c1810]/50 cursor-not-allowed'
                                        : 'bg-[#F7C35F] text-[#2c1810] hover:bg-[#e5b44f] shadow-lg'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-[#2c1810]/30 border-t-[#2c1810] 
                      rounded-full animate-spin" />
                                        Отправка...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Отправить заявку
                                    </>
                                )}
                            </motion.button>

                            {/* Статус отправки */}
                            <AnimatePresence>
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className={`p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                                            ? 'bg-green-500/10 border border-green-500/20'
                                            : 'bg-red-500/10 border border-red-500/20'
                                            }`}
                                    >
                                        {submitStatus === 'success' ? (
                                            <>
                                                <CheckCircle className="w-5 h-5 text-green-400" />
                                                <span className="text-green-400">
                                                    Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <AlertCircle className="w-5 h-5 text-red-400" />
                                                <span className="text-red-400">
                                                    Произошла ошибка. Пожалуйста, попробуйте позже.
                                                </span>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Карта */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl 
            border border-[#F7C35F]/20"
                >
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=41.3607586%2C47.9071682&z=14&pt=41.3607586,47.9071682,pm2rdm"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="Местоположение фермерского хозяйства Великанова"
                    />
                </motion.div>
            </div>
        </section>
    );
}