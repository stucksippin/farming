'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'


export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await fetch("/api/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                console.log("Сообщение отправлено")
            } else {
                console.error("Ошибка при отправке данных")
            }
        } catch (error) {
            console.error("Ошибка при отправке", error)
        }
    }

    return (
        <section
            id="contact"
            className="section bg-[#263C28] pt-[10%] pb-[2%] rounded-t-3xl text-white font-extralight text-[12px] flex flex-col"
        >
            <h3 className="title_for-block text-center !mb-[100px] ">КОНТАКТЫ</h3>
            <div className="block_contact flex flex-col md:flex-row justify-around items-start gap-8">
                {/* Контактная информация */}
                <address className="not-italic block_contact-info space-y-6">
                    <div className="flex flex-col">
                        <span className="title_block_contact">НОМЕР</span>
                        <a href="tel:+79281789282" className="text_block_contact">
                            +7 928 178-92-82
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <span className="title_block_contact">ПОЧТА</span>
                        <a href="mailto:velikanov_n@mail.ru" className="text_block_contact">
                            velikanov_n@mail.ru
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <span className="title_block_contact">АДРЕС</span>
                        <span className="text_block_contact">
                            Ростовская обл, <br /> хут. Новоросоошанский
                        </span>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.google.ru/maps/place/Новороссошанский,+Ростовская+обл.,+347083"
                            className="info_button font-light bg-[#f7c35f] mt-3 w-fit px-3 py-[10px] rounded-lg text-black"
                        >
                            Показать на карте
                        </a>
                    </div>
                </address>

                {/* Форма обратной связи */}
                <div className="block_contact-form w-full max-w-md">
                    <form
                        className="contact_form flex flex-col gap-4 items-center"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <div>
                            <label htmlFor="firstName" className="block mb-1">
                                Ваше имя *
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                className="contact-form-input w-full"
                                placeholder="Введите имя"
                                {...register("firstName", {
                                    required: "Введите имя",
                                    maxLength: { value: 80, message: "Слишком длинное имя" }
                                })}
                            />
                            {errors.firstName && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="mobileNumber" className="block mb-1">
                                Номер телефона *
                            </label>
                            <ReactInputMask
                                mask="+7 (999) 999-99-99"
                                maskChar="_"
                                id="mobileNumber"
                                type="tel"
                                className="contact-form-input w-full"
                                placeholder="+7 (___) ___-__-__"
                                {...register("mobileNumber", {
                                    required: "Введите номер телефона",
                                    pattern: {
                                        value: /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/,
                                        message: "Введите корректный номер"
                                    }
                                })}
                            />
                            {errors.mobileNumber && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.mobileNumber.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="more" className="block mb-1">
                                Дополнительная информация
                            </label>
                            <textarea
                                id="more"
                                className="contact-form-input w-full"
                                rows={4}
                                placeholder="Ваш комментарий"
                                {...register("more", {
                                    maxLength: { value: 300, message: "Максимум 300 символов" }
                                })}
                            />
                            {errors.more && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.more.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className=" px-10 py-[10px] font-light  bg-[#F7C35F] text-black rounded-xl hover:bg-[#f9d375] disabled:opacity-60"
                        >
                            {isSubmitting ? "Отправка..." : "Отправить"}
                        </button>

                        {isSubmitSuccessful && (
                            <p className="text-green-400 mt-2">Сообщение отправлено!</p>
                        )}
                    </form>
                </div>
            </div>

            <div class="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg mt-10 ">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=41.3607586%2C47.9071682&z=14&pt=41.3607586,47.9071682,pm2rdm"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allowFullScreen="true"

                ></iframe>
            </div>
        </section>
    )
}
