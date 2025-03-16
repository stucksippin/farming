import Image from 'next/image'
import React from 'react'
import wheat from '../assets/visit-wheat.png'
export default function VisitBlock() {
    return (

        <div className='farm_container section flex justify-between '>
            <div className='flex flex-col justify-center'>
                <h1 className='visit_title text-[48px] text-[#F7C35F] font-bold'>Предлагаем пшеницу и лен</h1>
                <span className='visit_subtitle text-[36px] text-[#EADCC1] font-bold'>От фермерского хозяйства</span>
                <button className='visit_button text-[18px] bg-[#F7C35F] rounded-[15px] w-fit px-[25px] py-[10px] mt-[50px]'><a href="#contact">Оставить запрос</a></button>
            </div>
            <div>
                <Image className='visit-wheat-img' src={wheat} width={600} height={570} alt='wheat' />
            </div>
        </div>

    )
}
