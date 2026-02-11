import Image from 'next/image'
import React from 'react'
import wheat from '../assets/visit-wheat.png'
import Link from 'next/link'

export default function VisitBlock() {
    return (
        <section className='farm_container section px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-8'>

                {/* Текстовый блок */}
                <div className='flex flex-col justify-center lg:max-w-[65%] xl:max-w-[70%]'>
                    <h1 className='visit_title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] text-[#F7C35F] font-bold leading-tight'>
                        Пшеница от фермерского хозяйства в Ростовской области – продажа оптом
                    </h1>

                    <span className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[36px] text-[#EADCC1] mt-3 sm:mt-4 md:mt-5 lg:mt-6 '>
                        Фуражная пшеница и 3-4 класс оптом, лен масличный, подсолнечник.
                        Новый урожай 2026, прямые поставки без посредников
                    </span>

                    <Link
                        href="#contact"
                        className='visit_button text-sm sm:text-base lg:text-lg inline-flex items-center justify-center bg-[#F7C35F] rounded-[15px] w-full sm:w-fit px-6 sm:px-8 lg:px-[50px] py-3 lg:py-[12px] mt-6 sm:mt-8 lg:mt-[50px] font-semibold hover:bg-[#e5b34d] transition-colors'
                    >
                        Связаться
                    </Link>
                </div>

                {/* Картинка */}
                <div className='hidden lg:flex lg:flex-shrink-0 lg:justify-center xl:justify-end'>
                    <Image
                        className='visit-wheat-img w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto'
                        src={wheat}
                        width={600}
                        height={570}
                        alt='Колосья пшеницы, фермерское хозяйство Великанова'
                        priority
                    />
                </div>
            </div>
        </section>
    )
}