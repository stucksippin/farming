'use client'
import React from 'react'
import { useForm } from 'react-hook-form';


export default function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            await fetch("/api/", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                console.log('Сообщение отправлено');
            } else {
                console.error('Ошибка при отправке данных в телеграмме');
            }
        } catch (error) {
            console.error("Ошибка при отправке данных в телеграмме", error)
        }
    }


    return (

        <div className='section bg-[#263C28] pt-[10%] pb-[10%] rounded-t-3xl '>
            <h3 id='contact' className='title_for-block'>КОНТАКТЫ</h3>
            <div className='block_contact flex justify-around items-center'>

                <div className='block_contact-info '>
                    <div className='mb-[10%] flex flex-col'>
                        <span className='title_block_contact'>НОМЕР</span>
                        <span className='text_block_contact'>+7 928 178-92-82</span>
                        <span className='text_block_contact'>+7 928 617-38-25</span>
                    </div>
                    <div className='mb-[10%] flex flex-col'>
                        <span className='title_block_contact '>ПОЧТА</span>
                        <span className='text_block_contact'>example@mail.ru</span>
                    </div>
                    <div className='mb-[10%] flex flex-col'>
                        <span className='title_block_contact '>АДРЕС</span>
                        <span className='text_block_contact '>Ростовская обл,<br /> хут.Новоросоошанский</span>
                        <button className='info_button bg-[#EADCC1] mt-3 w-fit px-3 py-1 rounded-lg' ><a target="_blank" href="https://www.google.ru/maps/place/Новороссошанский,+Ростовская+обл.,+347083/@47.9274054,41.3123091,14.5z/data=!4m6!3m5!1s0x411da1c1e70c203d:0x48a368bd20fadacc!8m2!3d47.9071682!4d41.3607586!16s%2Fg%2F1236yr98?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D">Показать на карте</a></button>
                    </div>
                </div>

                <div className='block_contact-form'>
                    <form className='contact_form flex flex-col items-center ' onSubmit={handleSubmit(onSubmit)}>
                        <input className='contact-form-input ' type="text" placeholder="Ваше имя" {...register("firstName", { required: true, maxLength: 80 })} />
                        <input className='contact-form-input' type="tel" placeholder="Номер телефона" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                        <input className='contact-form-input' type="more" placeholder="Дополнительная информация" {...register("more", { required: false, minLength: 5, maxLength: 300 })} />

                        <input className='px-10 py-4 bg-[#F7C35F] font-bold form_button rounded-xl' type="submit" />
                    </form>
                </div>

            </div>
        </div>
    )
}
