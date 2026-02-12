'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Button, Modal, Table } from 'antd';
import { motion, useScroll, useTransform } from 'framer-motion';

// Импорт изображений
import logo_wheat from '../assets/logo-wheat.png';
import logo_flax from '../assets/logo-flex.png';
import bg_wheat from '../assets/product-wheat.png';
import ellipse from '../assets/ellipse_underwheat.png';
import protein from '../assets/protein.png';
import wheatIcon from '../assets/wheat.png';
import scales from '../assets/scales.png';
import drop from '../assets/drop.png';
import Link from 'next/link';

// ---- Данные продуктов ----
const wheatData = [
  { key: '1', name: 'Влажность', ed: '%', meaning: '10.2' },
  { key: '2', name: 'Натурный вес', ed: 'Гл/л', meaning: '82.9' },
  { key: '3', name: 'Поврежденные клопом-Черепашкой', ed: '%', meaning: '2' },
  { key: '4', name: 'Зерновая примесь', ed: '%', meaning: '4' },
  { key: '5', name: 'Сорная примесь', ed: '%', meaning: '2' },
  { key: '6', name: 'Клейковина по ГОСТ', ed: '%', meaning: '20' },
  { key: '7', name: 'ИДК', ed: 'Ед.', meaning: '90' },
  { key: '8', name: 'Протеин', ed: '%', meaning: '11.8' },
  { key: '9', name: 'Число падений', ed: '%', meaning: '287' },
];

const flaxData = [
  { key: '1', name: 'МАСЛИЧНОСТЬ', percentage: '44-46%' },
  { key: '2', name: 'ВЛАЖНОСТЬ', percentage: 'до 13%' },
  { key: '3', name: 'НАТУРНЫЙ ВЕС', percentage: '98-99%' },
  { key: '4', name: 'СОРНАЯ ПРИМЕСЬ', percentage: 'до 2%' },
];

const wheatColumns = [
  { title: 'Параметр', dataIndex: 'name', key: 'name', width: 200 },
  { title: 'Единица измерения', dataIndex: 'ed', key: 'ed', width: 200 },
  { title: 'Значение', dataIndex: 'meaning', key: 'meaning', width: 200 },
];


const wheatParams = [
  { name: 'ПРОТЕИН', value: '11.8%', area: 'protein', range: [-10, 10] },
  { name: 'КЛЕЙКОВИНА', value: '20%', area: 'kl', range: [-10, 10] },
  { name: 'НАТУРНЫЙ ВЕС', value: '82.9', area: 'weight', range: [-10, 10] },
  { name: 'ВЛАЖНОСТЬ', value: '10.2%', area: 'vlaga', range: [-10, 10] },
];

const flaxIcons = [
  { img: protein, name: 'Масличность' },
  { img: drop, name: 'Влажность' },
  { img: scales, name: 'Натурный вес' },
  { img: wheatIcon, name: 'Сорная примесь' },
];

// ---- Анимация карточек ----
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.1, ease: 'easeOut' } }),
};

// ---- Компонент параллакса ----
function WheatParam({ param, index, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], param.range);
  return (
    <motion.div
      className={`${param.area} product_params-wheat will-change-transform`}
      style={{ y }}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >
      <span className="product_params-wheat-name">{param.name}</span>
      <span className="product_params-wheat-per">{param.value}</span>
    </motion.div>
  );
}

// ---- Главный компонент ----
export default function Product() {

  const wheatContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wheatContainerRef,
    offset: ['start 10%', 'end 20%'],
  });

  const yWheat = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const yBlur = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section className="section section_wheat farm_container">
      <div className='flex flex-col items-center mb-8 md:mb-12 px-4'>
        <span className='text-center text-2xl md:text-3xl lg:text-[42px] mb-4 md:mb-[20px] font-bold text-[#EADCC1]'>
          Наша продукция
        </span>
      </div>
      {/* ---- ПШЕНИЦА ---- */}
      <div className="block_wheat mb-[15%]">
        <div className="wheat_title flex items-center justify-start pr-[5%] product_block_wheat">
          <h2 id='wheat' className="product_h text-[36px] text-[#F7C35F] mr-5">ПШЕНИЦА</h2>
          <Image src={logo_wheat} width={40} height={40} alt="Логотип пшеницы Великанова" />
        </div>

        <div ref={wheatContainerRef} className="container_product-wheat-block relative">
          <motion.div className="wheat-item absolute top-[5%] right-[34%] z-[1] will-change-transform" style={{ y: yWheat }}>
            <Image src={bg_wheat} width={500} height={700} alt="Пшеница оптом Ростовская область, фермерское хозяйство Великанова" unoptimized />
          </motion.div>

          <motion.div className="blur-item absolute top-[5%] right-[29%] z-[-1] will-change-transform" style={{ y: yBlur }}>
            <Image src={ellipse} width={600} height={602} alt="Эллипс фон" unoptimized />
          </motion.div>

          {wheatParams.map((p, i) => (
            <WheatParam key={p.name} param={p} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        <div className="flex flex-col justify-center mt-[10%] z-[3] justify-center  ">

          <div className='flex flex-col items-center justify-center'>
            <p className="text-[#EADCC1] max-w-3xl text-center mb-6 px-4 text-sm md:text-base lg:text-lg">
              Продаем пшеницу высокого качества. Подходит для мельниц, производства комбикорма
              и экспорта. Цена за тонну — по запросу. Можете купить фуражную пшеницу оптом
              с доставкой по Ростовской области.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4'>
              <Link
                href="#contact"
                aria-label="Купить пшеницу оптом в Ростовской области"
                className='button custom-btn bg-[#F7C35F] inline-flex items-center justify-center w-full sm:w-auto'
              >
                Оставить заявку
              </Link>

              <Button
                className="button custom-btn w-full sm:w-auto"
                type="primary"

              >
                <Link href={'/pshenitsa'}>Подробнее о пшенице</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ---- ЛЕН ---- */}
      <div className="flax_block mt-[15%] mb-[10%]">
        <div className="flax_title flex items-center justify-start mb-12 md:mb-16 px-4">
          <h2 id='flex' className="product_h text-2xl md:text-3xl lg:text-[36px] text-[#F7C35F] mr-4 md:mr-5 font-bold">ЛЕН МАСЛИЧНЫЙ</h2>
          <Image src={logo_flax} width={40} height={40} alt="Логотип льна Великанова" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 mb-12 md:mb-16">
          {flaxData.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gradient-to-b from-[#3d3420] to-transparent p-6 md:p-8 rounded-2xl border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 transition-all duration-300 will-change-transform"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <div className="mb-4 md:mb-6 p-4 bg-[#2C2416]/50 rounded-full">
                <Image
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                  alt={`${product.name} Лен Ростовская область`}
                  width={80}
                  height={80}
                  src={flaxIcons[index].img}
                />
              </div>
              <p className="text-xs md:text-sm lg:text-base text-[#EADCC1] font-bold mb-2 md:mb-3 text-center uppercase tracking-wide">
                {product.name}
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-[#F7C35F] font-bold">
                {product.percentage}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center px-4">
          <p className="text-[#EADCC1] max-w-3xl text-center mb-8 md:mb-10 text-sm md:text-base lg:text-lg leading-relaxed">
            Реализуем семена льна масличного урожая 2025 года с высокой масличностью 44-46%.
            Идеально подходит для производства льняного масла, пищевой промышленности и комбикормов.
            Низкая влажность гарантирует длительное хранение. Полный пакет документов,
            лабораторный контроль качества каждой партии.
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto'>
            <Link
              href="#contact"
              aria-label="Купить лен масличный оптом в Ростовской области"
              className='button custom-btn bg-[#F7C35F] inline-flex items-center justify-center w-full sm:w-auto'
            >
              Оставить заявку
            </Link>

            <Button className="button custom-btn w-full sm:w-auto" type="primary">
              <Link href={'/len'}>Подробнее о льне</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ---- Schema.org JSON-LD ---- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "Пшеница",
                "description": "Продовольственная и фуражная пшеница с высоким содержанием клейковины. Ростовская область, Тацинский район.",
                "brand": "Фермерское хозяйство Великанова",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "RUB"
                }
              },
              {
                "@type": "Product",
                "name": "Лен масличный",
                "description": "Семена льна масличного с масличностью 44-46%, урожай 2025 года. Ростовская область, Тацинский район.",
                "brand": "Фермерское хозяйство Великанова",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "RUB"
                }
              }
            ]
          })
        }}
      />

    </section>
  );
}