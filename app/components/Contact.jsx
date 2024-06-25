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
    console.log(errors);

    return (
        <div className='bg-[#263C28] pt-[5%] pb-[5%]  '>
            <h3 id='contact' className='text-white text-center text-[68px] mb-[10%] font-extrabold product_main_title'>КОНТАКТЫ</h3>
            <div className='flex justify-around items-center'>

                <div>
                    <div className='mb-[10%] flex flex-col'>
                        <span className='text-[#F7C35F] text-[36px] mb-[15px] contact_label-text'>Номер</span>
                        <span className='text-[40px] text-white contact_mean-text'>+7 928 178-92-82</span>
                    </div>
                    <div className='mb-[10%] flex flex-col'>
                        <span className='text-[#F7C35F] text-[36px] mb-[15px] contact_label-text'>Почта</span>
                        <span className='text-[40px] text-white contact_mean-text'>example@mail.ru</span>
                    </div>
                    <div className='mb-[10%] flex flex-col'>
                        <span className='text-[#F7C35F] text-[36px] mb-[15px] contact_label-text'>Адрес</span>
                        <span className='text-[40px] text-white contact_mean-text'>Ростовская обл,<br /> хут.Новоросоошанский</span>
                    </div>
                </div>

                <div className='bg-[#334B35]/[0.5] w-[805px] h-[675px] p-10 rounded-[57px] callback_form'>
                    <h4 className='text-center text-[40px] text-white font-extrabold mb-10 contact_title'>Оставьте ваши контакты</h4>
                    <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-[50px] w-1/2 p-4 rounded-xl bg-[#263C28] text-white  form_input' type="text" placeholder="Ваше имя" {...register("firstName", { required: true, maxLength: 80 })} />
                        <input className='mb-[50px] w-1/2 p-4 rounded-xl bg-[#263C28] text-white  form_input' type="tel" placeholder="Номер телефона" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                        <input className='mb-[50px] w-1/2 p-4 h-[150px] rounded-xl bg-[#263C28] text-white form_input' type="more" placeholder="Дополнительная информация" {...register("more", { required: false, minLength: 5, maxLength: 300 })} />

                        <input className='px-10 py-4 bg-[#F7C35F] font-extrabold form_button rounded-xl' type="submit" />
                    </form>
                </div>

            </div>
        </div>
    )
}
