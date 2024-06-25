import Image from 'next/image'
import React from 'react'
import mainbg from '../assets/mainbg-big.jpg'
export default function VisitBlock() {
    return (
        <div className='relative'>
            <Image
                src={mainbg}
                width={2560}
                height={1000}
                alt="Picture of the author"
            />
            <div className='absolute w-[70%] h-[30%]  m-auto top-0 left-0 right-0 bottom-0 main_title'>
                <div className='bg-[#263C28]/[0.5] flex flex-col items-center  p-10 rounded-xl'>
                    <span className='text-white text-[64px] mb-10 title'>Предлагем пшеницу от фермерского хозяйства</span>
                    <a href="#contact"> <button className='bg-[#F7C34F] w-fit text-[32px] px-10 py-5 rounded-lg button'>ОСТАВИТЬ ЗАЯВКУ</button></a>
                </div>
            </div>
        </div>
    )
}
