import Image from 'next/image'
import React from 'react'
import wheat from '../assets/visit-wheat.png'
export default function VisitBlock() {
    return (

        <div className='farm_container section flex justify-between '>
            <div className='flex flex-col justify-center'>
                <h1 className='text-[58px] text-[#F7C35F] font-bold'>Предлагаем <br />пшеницу и<br /> лен</h1>
                <span className='text-[40px] text-[#EADCC1] font-bold'>От фермерского хозяйства</span>
                <button className='text-[18px] bg-[#F7C35F] rounded-[15px] w-fit px-[25px] py-[10px] mt-[50px]'><a href="#contact">ОСТАВИТЬ ЗАПРОС</a></button>
            </div>
            <div>
                <Image src={wheat} width={730} height={570} alt='wheat' />
            </div>
        </div>

    )
}
