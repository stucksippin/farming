// /visitblock.jsx

import Image from 'next/image'
import React from 'react'
import wheat from '../../assets/visit-wheat.png'
import Link from 'next/link'

export default function VisitBlock() {
    return (
        <section className='farm_container section px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-12'>

                {/* Текстовый блок */}
                <div className='flex flex-col justify-center lg:max-w-[60%] xl:max-w-[65%]'>
                    <h1 className='visit_title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] text-[#F7C35F] font-bold leading-[1.2] mb-4 sm:mb-5 lg:mb-6'>
                        Продажа пшеницы, льна и подсолнечника оптом от производителя
                    </h1>

                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#EADCC1] leading-[1.5] font-light'>
                        Работаем напрямую с хозяйства без перекупщиков — стабильные объёмы,
                        проверенные характеристики зерна и оперативная отгрузка с собственного
                        склада в Ростовской области.
                    </p>

                    <Link
                        href="#contact"
                        className='visit_button text-base sm:text-lg lg:text-xl inline-flex items-center justify-center bg-[#F7C35F] text-[#2C2416] rounded-[15px] w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3.5 lg:py-4 mt-8 sm:mt-10 lg:mt-12 font-semibold hover:bg-[#e5b34d] transition-all duration-300 shadow-lg hover:shadow-xl'
                    >
                        Связаться с нами
                    </Link>
                </div>

                {/* Картинка */}
                <div className='hidden lg:flex lg:flex-shrink-0 lg:justify-center xl:justify-end lg:max-w-[40%] xl:max-w-[35%]'>
                    <Image
                        className='visit-wheat-img w-full h-auto object-contain'
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