'use client';

import { useState, useEffect } from 'react';

export default function PriceCalculator({
    productName = 'пшеницы',
    basePrice = 12000,
    minVolume = 20,
    volumeDiscounts = [
        { from: 20, to: 49, discount: 0, label: '20-49 тонн' },
        { from: 50, to: 99, discount: 3, label: '50-99 тонн' },
        { from: 100, to: 199, discount: 5, label: '100-199 тонн' },
        { from: 200, to: Infinity, discount: 8, label: '200+ тонн' }
    ],
    deliveryRates = [
        { distance: 50, rate: 0, label: 'До 50 км (бесплатно)' },
        { distance: 100, rate: 300, label: '50-100 км (300 ₽/т)' },
        { distance: 200, rate: 500, label: '100-200 км (500 ₽/т)' },
        { distance: 300, rate: 700, label: '200-300 км (700 ₽/т)' },
        { distance: Infinity, rate: 1000, label: 'Более 300 км (1000 ₽/т)' }
    ]
}) {


    const [volume, setVolume] = useState(minVolume);
    const [deliveryDistance, setDeliveryDistance] = useState('self');

    const [pricePerTon, setPricePerTon] = useState(basePrice);
    const [discount, setDiscount] = useState(0);
    const [deliveryCost, setDeliveryCost] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Расчет скидки по объему
    useEffect(() => {
        const volumeDiscount = volumeDiscounts.find(
            d => volume >= d.from && volume < d.to
        );

        if (volumeDiscount) {
            const discountAmount = (basePrice * volumeDiscount.discount) / 100;
            setDiscount(volumeDiscount.discount);
            setPricePerTon(basePrice - discountAmount);
        }
    }, [volume, basePrice, volumeDiscounts]);

    // Расчет доставки
    useEffect(() => {
        if (deliveryDistance === 'self') {
            setDeliveryCost(0);
        } else {
            const distance = parseInt(deliveryDistance);
            const rateObj = deliveryRates.find(r => distance <= r.distance);
            // rate - это цена за тонну, умножаем на объем
            setDeliveryCost(rateObj ? rateObj.rate * volume : 0);
        }
    }, [deliveryDistance, volume, deliveryRates]);

    // Общий расчет
    useEffect(() => {
        const subtotal = pricePerTon * volume;
        const total = subtotal + deliveryCost;
        setTotalPrice(total);
    }, [pricePerTon, volume, deliveryCost]);

    const formatNumber = (num) => {
        return new Intl.NumberFormat('ru-RU').format(Math.round(num));
    };

    return (
        <div className="bg-gradient-to-br from-[#2c1810]/70 to-[#1a0e08]/70 backdrop-blur rounded-2xl p-6 md:p-8 border border-[#F7C35F]/30">
            <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">🧮</div>
                <h3 className="text-2xl font-bold text-[#F7C35F]">
                    Калькулятор стоимости
                </h3>
            </div>

            <div className="space-y-6">
                {/* Объем заказа */}
                <div>
                    <label className="block text-[#EADCC1] font-medium mb-3">
                        Объем заказа (тонн)
                    </label>
                    <div className="flex items-center gap-4">
                        <input
                            type="range"
                            min={minVolume}
                            max="500"
                            step="5"
                            value={volume}
                            onChange={(e) => setVolume(Number(e.target.value))}
                            className="flex-1 h-2 bg-[#F7C35F]/20 rounded-lg appearance-none cursor-pointer accent-[#F7C35F]"
                            style={{
                                background: `linear-gradient(to right, #F7C35F 0%, #F7C35F ${((volume - minVolume) / (500 - minVolume)) * 100}%, rgba(247, 195, 95, 0.2) ${((volume - minVolume) / (500 - minVolume)) * 100}%, rgba(247, 195, 95, 0.2) 100%)`
                            }}
                        />
                        <div className="min-w-[80px] text-right">
                            <input
                                type="number"
                                min={minVolume}
                                value={volume}
                                onChange={(e) => setVolume(Number(e.target.value))}
                                className="w-full bg-[#F7C35F]/10 border border-[#F7C35F]/30 rounded-lg px-3 py-2 text-[#F7C35F] font-bold text-lg focus:outline-none focus:border-[#F7C35F]"
                            />
                        </div>
                    </div>

                    {/* Шкала скидок */}
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                        {volumeDiscounts.map((vd, index) => (
                            <div
                                key={index}
                                className={`text-center p-2 rounded-lg border transition-all ${volume >= vd.from && volume < vd.to
                                    ? 'bg-[#F7C35F]/20 border-[#F7C35F] text-[#F7C35F]'
                                    : 'bg-[#F7C35F]/5 border-[#F7C35F]/20 text-[#EADCC1]/60'
                                    }`}
                            >
                                <div className="text-xs font-medium">{vd.label}</div>
                                <div className="text-sm font-bold">-{vd.discount}%</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Доставка */}
                <div>
                    <label className="block text-[#EADCC1] font-medium mb-3">
                        Доставка
                    </label>
                    <select
                        value={deliveryDistance}
                        onChange={(e) => setDeliveryDistance(e.target.value)}
                        className="w-full bg-[#F7C35F]/10 border border-[#F7C35F]/30 rounded-lg px-4 py-3 text-[#EADCC1] focus:outline-none focus:border-[#F7C35F] cursor-pointer"
                    >
                        <option value="self">Самовывоз (бесплатно)</option>
                        {deliveryRates.map((rateObj, index) => (
                            <option key={index} value={rateObj.distance}>
                                {rateObj.label} — {rateObj.rate > 0 ? `${formatNumber(rateObj.rate * volume)} ₽` : 'Бесплатно'}
                            </option>
                        ))}
                    </select>
                </div>



                {/* Разделитель */}
                <div className="border-t border-[#F7C35F]/20 my-6"></div>

                {/* Детализация расчета */}
                <div className="space-y-3 bg-[#F7C35F]/5 rounded-lg p-4">
                    <div className="flex justify-between text-[#EADCC1]/80">
                        <span>Цена за тонну {productName}</span>
                        <span className="font-medium">
                            {formatNumber(basePrice)} ₽
                        </span>
                    </div>

                    {discount > 0 && (
                        <div className="flex justify-between text-[#F7C35F]">
                            <span>Скидка за объем ({discount}%)</span>
                            <span className="font-medium">
                                -{formatNumber((basePrice - pricePerTon) * volume)} ₽
                            </span>
                        </div>
                    )}

                    <div className="flex justify-between text-[#EADCC1]/80">
                        <span>Стоимость {productName}</span>
                        <span className="font-medium">
                            {formatNumber(pricePerTon * volume)} ₽
                        </span>
                    </div>

                    {deliveryCost > 0 && (
                        <div className="flex justify-between text-[#EADCC1]/80">
                            <span>Доставка</span>
                            <span className="font-medium">
                                +{formatNumber(deliveryCost)} ₽
                            </span>
                        </div>
                    )}
                </div>

                {/* Итоговая стоимость */}
                <div className="bg-gradient-to-r from-[#F7C35F]/20 to-[#F7C35F]/10 rounded-xl p-6 border-2 border-[#F7C35F]">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-[#EADCC1]/80 text-sm mb-1">
                                Итоговая стоимость
                            </div>
                            <div className="text-4xl font-bold text-[#F7C35F]">
                                {formatNumber(totalPrice)} ₽
                            </div>
                            <div className="text-[#EADCC1]/60 text-sm mt-1">
                                {formatNumber(pricePerTon)} ₽ за тонну
                            </div>
                        </div>
                        <div className="text-5xl">
                            💰
                        </div>
                    </div>
                </div>

                {/* Примечание */}
                <div className="bg-[#F7C35F]/5 border-l-4 border-[#F7C35F] rounded-lg p-4">
                    <div className="flex gap-3">
                        <div className="text-xl">ℹ️</div>
                        <div className="text-[#EADCC1]/80 text-sm">
                            <p className="mb-2">
                                <strong className="text-[#F7C35F]">Обратите внимание:</strong>
                                Расчет является предварительным. Точная стоимость зависит от текущих цен на момент заказа,
                                фактического расстояния доставки и дополнительных услуг.
                            </p>
                            <p>
                                Для получения коммерческого предложения свяжитесь с нами по телефону или оставьте заявку.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Кнопка действия */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                        href="#contact"
                        className="flex-1 bg-[#F7C35F] text-[#2c1810] px-6 py-4 rounded-lg font-semibold text-center hover:bg-[#e5b44f] transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Оставить заявку
                    </a>
                    <a
                        href="tel:+79281789282"
                        className="flex-1 bg-transparent border-2 border-[#F7C35F] text-[#F7C35F] px-6 py-4 rounded-lg font-semibold text-center hover:bg-[#F7C35F]/10 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Позвонить
                    </a>
                </div>
            </div>
        </div>
    );
}