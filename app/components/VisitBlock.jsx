import Image from 'next/image'
import React from 'react'
import wheat from '../assets/visit-wheat.png'
export default function VisitBlock() {
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col ml-[85px]'>
                <h1 className='text-[128px] text-[#F7C35F] font-bold'>Предлагаем <br />пшеницу и<br /> лен</h1>
                <span className='text-[52px] text-[#EADCC1] font-bold'>От фермерского хозяйства</span>
                <button className='text-[38px] bg-[#F7C35F] rounded-[70px] w-fit p-[35px] mt-[50px]'>Оставить запрос</button>
            </div>
            <div>
                <Image src={wheat} width={1038} height={848} alt='wheat' />
            </div>
        </div>
    )
}
