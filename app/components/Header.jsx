import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='farm_container mx-auto flex justify-between m-8 text-[#EADCC1]'>
            <span className='header_title text-[24px] header_text font-extralight'>Великанов | Пшеница и Лен  </span>
            <Link className='header_number text-[24px] header_text font-extralight' href={"tel:+7(928)178-92-82"}>+7 928 178-92-82</Link>
        </div>
    )
}
