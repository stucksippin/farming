import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='bg-[#334C35]/80 backdrop-blur-md sticky top-0 z-50 shadow-md'>
            <div className='farm_container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>

                {/* Логотип / Название */}
                <Link
                    href={'/'}
                    className='header_title text-2xl md:text-3xl font-extralight text-[#EADCC1] hover:text-yellow-500 transition-colors'
                >
                    🌾 Великанов Фермерское Хозяйство
                </Link>

                {/* Навигация */}
                <nav className='flex flex-wrap items-center gap-4 md:gap-6'>
                    <Link
                        href={'/pshenitsa'}
                        className='header_text text-lg md:text-xl font-light text-[#EADCC1] hover:text-yellow-500 transition-colors'
                    >
                        Пшеница
                    </Link>
                    <span className='text-[#EADCC1]'>|</span>
                    <Link
                        href={"/len"}
                        className='header_text text-lg md:text-xl font-light text-[#EADCC1] hover:text-yellow-500 transition-colors'
                    >
                        Семена льна
                    </Link>
                    <span className='text-[#EADCC1]'>|</span>
                    <Link
                        href={'/podsolnechnik'}
                        className='header_text text-lg md:text-xl font-light text-[#EADCC1] hover:text-yellow-500 transition-colors'
                    >
                        Семена подсолнечника
                    </Link>
                    <span className='text-[#EADCC1]'>|</span>
                    <Link
                        href={"/blog"}
                        className='header_text text-lg md:text-xl font-light text-[#EADCC1] hover:text-yellow-500 transition-colors'
                    >
                        Блог
                    </Link>
                    <Link
                        href={"tel:+79281789282"}
                        className='header_text text-lg md:text-xl font-light text-[#EADCC1] hover:text-yellow-500 whitespace-nowrap border border-[#EADCC1]/40 px-3 py-1 rounded-md hover:border-yellow-500 transition-all'
                    >
                        +7 928 178-92-82
                    </Link>
                </nav>

            </div>
            {/* Декоративная линия под хедером */}
            <div className='h-1 bg-yellow-500 w-full'></div>
        </header>
    )
}
