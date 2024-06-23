import Image from 'next/image'
import React from 'react'
import mainbg from '../assets/mainbg.png'
export default function VisitBlock() {
    return (
        <div>
            <Image
                className='absolute'
                src={mainbg}
                width={1920}
                height={950}
                alt="Picture of the author"
            />
            <div className='relative  bg-[#263C28] flex flex-col items-center'>
                <span className='text-white text-[64px]'>Предлагем пшеницу от ферморского хозяйства</span>
                <button className='bg-[#F7C34F] w-fit text-[32px] px-10 py-5 rounded-lg'>ОСТАВИТЬ ЗАПРОС</button>
            </div>
        </div>
    )
}
