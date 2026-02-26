// app/components/FloatingContacts.jsx

'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingContacts() {
    const [isOpen, setIsOpen] = useState(false);

    const contacts = [
        {
            name: 'Telegram',
            url: 'https://t.me/danivelin',
            color: '#0088cc',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.97-.924c-.645-.213-.658-.645.135-.96l11.566-4.461c.54-.203 1.01.122.84.951z" />
                </svg>
            )
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/79281789282',
            color: '#25D366',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
            )
        }
    ];

    return (
        <>
            {/* Плавающая главная кнопка */}
            <motion.div
                className="fixed bottom-8 right-8 z-40"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            >
                {/* Меню контактов */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="absolute bottom-20 right-0 flex flex-col gap-3 mb-4"
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {contacts.map((contact) => (
                                <motion.a
                                    key={contact.name}
                                    href={contact.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, x: -8 }}
                                    whileTap={{ scale: 0.95 }}
                                    title={contact.name}
                                    className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-200"
                                    style={{ backgroundColor: contact.color }}
                                >
                                    <div className="text-white">
                                        {contact.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Основная кнопка */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-[#F7C35F] text-[#2c1810] transition-all duration-200 relative z-50 hover:shadow-xl"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} strokeWidth={2.5} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="open"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MessageCircle size={28} strokeWidth={2} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>

                {/* Фоновый бабл при наведении */}
                {isOpen && (
                    <motion.div
                        className="absolute inset-0 rounded-full bg-[#F7C35F]/10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.5 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </motion.div>

            {/* Полупрозрачный фон при открытом меню */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/10 z-30 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}