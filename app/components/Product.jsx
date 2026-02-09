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
  { key: '1', name: 'ПРОТЕИН', percentage: '14%' },
  { key: '2', name: 'КЛЕЙКОВИНА', percentage: '21.6%' },
  { key: '3', name: 'НАТУРНЫЙ ВЕС', percentage: '82.2' },
  { key: '4', name: 'ВЛАЖНОСТЬ', percentage: '12.6%' },
];

const wheatColumns = [
  { title: 'Параметр', dataIndex: 'name', key: 'name', width: 200 },
  { title: 'Единица измерения', dataIndex: 'ed', key: 'ed', width: 200 },
  { title: 'Значение', dataIndex: 'meaning', key: 'meaning', width: 200 },
];

const flaxColumns = [
  { title: 'Параметр', dataIndex: 'name', key: 'name', width: 200 },
  { title: 'Значение', dataIndex: 'percentage', key: 'percentage', width: 200 },
];

const wheatParams = [
  { name: 'ПРОТЕИН', value: '11.8%', area: 'protein', range: [-10, 10] },
  { name: 'КЛЕЙКОВИНА', value: '20%', area: 'kl', range: [-10, 10] },
  { name: 'НАТУРНЫЙ ВЕС', value: '82.9', area: 'weight', range: [-10, 10] },
  { name: 'ВЛАЖНОСТЬ', value: '10.2%', area: 'vlaga', range: [-10, 10] },
];

const flaxIcons = [
  { img: protein, name: 'Протеин' },
  { img: wheatIcon, name: 'Клейковина' },
  { img: scales, name: 'Натурный вес' },
  { img: drop, name: 'Влажность' },
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
  const [isWheatModalOpen, setIsWheatModalOpen] = useState(false);
  const [isFlaxModalOpen, setIsFlaxModalOpen] = useState(false);

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
          Наша продукция льна и пшена
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
              и экспорта. Цена за тонну — по запросу. Купить фуражную пшеницу оптом
              можно с доставкой по Ростовской области.
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
                onClick={() => setIsWheatModalOpen(true)}
              >
                Подробнее о пшенице
              </Button>
            </div>
          </div>




          <Modal
            className="ant-modal custom-modal"
            title={null}
            open={isWheatModalOpen}
            onCancel={() => setIsWheatModalOpen(false)}
            footer={null}
            width={750}
            centered
            aria-label="Подробные данные о пшенице"
          >
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="p-4">
              <h2 className="text-xl font-bold text-center mb-4 text-[#8B5E00]">Характеристики пшеницы</h2>
              <Table pagination={false} dataSource={wheatData} columns={wheatColumns} className="custom-table" caption="Характеристики пшеницы — Ростовская область" />
              <div className="flex justify-center mt-6">
                <Button className="custom-btn" type="primary" onClick={() => setIsWheatModalOpen(false)}>
                  Закрыть
                </Button>
              </div>
            </motion.div>
          </Modal>
        </div>
      </div>

      {/* ---- ЛЕН ---- */}
      <div className="flax_block mt-[5%]">
        <div className="flax_title flex items-center justify-start mb-[10%]">
          <h2 id='flex' className="product_h text-[36px] text-[#F7C35F] mr-5">ЛЕН</h2>
          <Image src={logo_flax} width={40} height={40} alt="Логотип льна Великанова" />
        </div>

        <ul className="flex justify-around product_params-len">
          {flaxData.map((product, index) => (
            <motion.div
              key={index}
              className="flax_block-item will-change-transform"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <Image
                className="flax-img mt-10 mb-5"
                alt={`${product.name} Лен Ростовская область`}
                width={80}
                height={80}
                src={flaxIcons[index].img}
              />
              <p className="flax_product-name text-[8px] sm:text-[10px] md:text-xs lg:text-[16px] text-[#EADCC1] font-extrabold mb-3 sm:mb-0">
                {product.name}
              </p>
              <p className="flax_product-percentage text-lg sm:text-xl md:text-2xl lg:text-[36px] text-[#F7C35F]">
                {product.percentage}
              </p>
            </motion.div>
          ))}
        </ul>

        {/* <div className="flex justify-center mt-[10%]">
          <Button className="button custom-btn" type="primary" onClick={() => setIsFlaxModalOpen(true)}>
            Подробнее о льне
          </Button>

          <Modal
            className="ant-modal custom-modal"
            title={null}
            open={isFlaxModalOpen}
            onCancel={() => setIsFlaxModalOpen(false)}
            footer={null}
            width={750}
            centered
            aria-label="Подробные данные о льне"
          >
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="p-4">
              <h2 className="text-xl font-bold text-center mb-4 text-[#8B5E00]">Характеристики льна</h2>
              <Table pagination={false} dataSource={flaxData} columns={flaxColumns} className="custom-table" caption="Характеристики льна — Ростовская область" />
              <div className="flex justify-center mt-6">
                <Button className="custom-btn" type="primary" onClick={() => setIsFlaxModalOpen(false)}>
                  Закрыть
                </Button>
              </div>
            </motion.div>
          </Modal>
        </div> */}
      </div>

      {/* ---- Schema.org JSON-LD ---- */}
      {/* ---- Schema.org JSON-LD для пшеницы и льна ---- */}
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
                "name": "Лен",
                "description": "Льняное семя высокого качества. Ростовская область, Тацинский район.",
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
