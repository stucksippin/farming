import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <section className='farm_container mx-auto px-4 py-4 md:py-8 text-[#EADCC1]'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                {/* Название - всегда видимо */}
                <span className='header_title text-lg md:text-2xl header_text font-extralight'>
                    Великанов Фермерское Хозяйство
                </span>

                {/* Навигация и телефон */}
                <div className='flex flex-wrap items-center gap-4 md:gap-6'>
                    <Link
                        className='header_text text-base md:text-2xl font-extralight hover:text-yellow-500 transition-colors'
                        href={'#wheat'}
                    >
                        Пшеница
                    </Link>
                    <Link
                        className='header_text text-base md:text-2xl font-extralight hover:text-yellow-500 transition-colors'
                        href={"#flex"}
                    >
                        Лен
                    </Link>
                    <Link
                        className='header_text text-base md:text-2xl font-extralight hover:text-yellow-500 whitespace-nowrap'
                        href={"tel:+79281789282"}
                    >
                        +7 928 178-92-82
                    </Link>
                </div>
            </div>
        </section>
    )
}
