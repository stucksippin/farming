import Image from 'next/image'
import React from 'react'
import wheat from '../assets/visit-wheat.png'
import Link from 'next/link'

export default function VisitBlock() {
    return (
        <section className='farm_container section px-4 py-8 md:py-12'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-8'>

                {/* Текстовый блок */}
                <div className='flex flex-col justify-center md:max-w-[70%]'>
                    <h1 className='visit_title text-2xl md:text-[42px] text-[#F7C35F] font-bold leading-tight'>
                        Купить пшеницу и лен в Ростовской области от фермерского хозяйства
                    </h1>

                    <p className='visit_subtitle text-lg md:text-[36px] text-[#EADCC1] font-bold mt-4 md:mt-6 leading-snug'>
                        Фермерское хозяйство Великанова — прямые поставки зерна, подсолнечника и льна масличного. Фуражная пшеница, 3-4 класс, новый урожай
                    </p>

                    <Link
                        href="#contact"
                        className='visit_button text-base md:text-[18px] bg-[#F7C35F] rounded-[15px] w-fit px-6 md:px-[50px] py-3 md:py-[10px] mt-8 md:mt-[50px] font-semibold hover:bg-[#e5b34d] transition-colors'
                    >
                        Связаться
                    </Link>
                </div>

                {/* Картинка - скрыта на мобильных */}
                <div className='hidden md:block md:flex-shrink-0'>
                    <Image
                        className='visit-wheat-img'
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