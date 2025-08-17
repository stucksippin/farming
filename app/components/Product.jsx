'use client';

import React, { useState, useRef } from 'react';
import drop from '../assets/drop.png';
import protein from '../assets/protein.png';
import wheat from '../assets/wheat.png';
import scales from '../assets/scales.png';
import logo_wheat from '../assets/logo-wheat.png';
import logo_flax from '../assets/logo-flex.png';
import bg_wheat from '../assets/product-wheat.png';
import ellipse from '../assets/ellipse_underwheat.png';
import Image from 'next/image';
import { Button, Modal, Table } from 'antd';
import { motion, useScroll, useTransform } from 'framer-motion';

// анимация появления карточек
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.6, ease: 'easeOut' },
  }),
};

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

export default function Product() {
  // состояния модалок
  const [isWheatModalOpen, setIsWheatModalOpen] = useState(false);
  const [isFlaxModalOpen, setIsFlaxModalOpen] = useState(false);

  // ✅ колонки для таблицы пшеницы
  const wheatColumns = [
    { title: 'Параметр', dataIndex: 'name', key: 'name', width: 200 },
    { title: 'Единица измерения', dataIndex: 'ed', key: 'ed', width: 200 },
    { title: 'Значение', dataIndex: 'meaning', key: 'meaning', width: 200 },
  ];

  // ✅ колонки для таблицы льна
  const flaxColumns = [
    { title: 'Параметр', dataIndex: 'name', key: 'name', width: 200 },
    { title: 'Значение', dataIndex: 'percentage', key: 'percentage', width: 200 },
  ];

  // данные льна
  const productsOfFlex = [
    { key: '1', name: 'ПРОТЕИН', percentage: '14%' },
    { key: '2', name: 'КЛЕЙКОВИНА', percentage: '21.6%' },
    { key: '3', name: 'НАТУРНЫЙ ВЕС', percentage: '82.2' },
    { key: '4', name: 'ВЛАЖНОСТЬ', percentage: '12.6%' },
  ];

  // данные пшеницы
  const productOfWheat = [
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

  // параметры пшеницы + их area-классы
  const wheatParams = [
    { name: 'ПРОТЕИН', value: '11.8%', area: 'protein', range: [-50, 50] },
    { name: 'КЛЕЙКОВИНА', value: '20%', area: 'kl', range: [-60, 60] },
    { name: 'НАТУРНЫЙ ВЕС', value: '82.9', area: 'weight', range: [-50, 50] },
    { name: 'ВЛАЖНОСТЬ', value: '10.2%', area: 'vlaga', range: [-60, 60] },
  ];

  // ----- ПАРАЛЛАКС -----
  const wheatContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wheatContainerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const yWheat = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const yBlur = useTransform(scrollYProgress, [0, 1], [120, -120]); // эллипс

  return (
    <section className="section section_wheat farm_container">
      <h2 className="title_for-block">О ПРОДУКТЕ</h2>

      {/* ПШЕНИЦА */}
      <div className="block_wheat mb-[15%]">
        <div className="wheat_title flex items-center justify-start pr-[5%] product_block_wheat">
          <h1 className="product_h text-[36px] text-[#F7C35F] mr-5">ПШЕНИЦА</h1>
          <Image className="title_logo" src={logo_wheat} width={40} height={40} alt="wheat" />
        </div>

        <div ref={wheatContainerRef} className="container_product-wheat-block relative">
          {/* Параллакс объекты */}
          <motion.div
            className="wheat-item absolute top-[5%] right-[34%] z-[1] will-change-transform"
            style={{ y: yWheat }}
          >
            <Image src={bg_wheat} width={500} height={700} alt="stick of wheat" unoptimized />
          </motion.div>

          <motion.div
            className="blur-item absolute top-[5%] right-[29%] z-[-1] will-change-transform"
            style={{ y: yBlur }}
          >
            <Image src={ellipse} width={600} height={602} alt="blur background" unoptimized />
          </motion.div>

          {wheatParams.map((p, i) => (
            <WheatParam key={p.name} param={p} index={i} scrollYProgress={scrollYProgress} />
          ))}

        </div>

        <div className="flex justify-center mt-[10%] z-[3]">
          <Button className="button custom-btn" type="primary" onClick={() => setIsWheatModalOpen(true)}>
            Подробнее
          </Button>

          {isWheatModalOpen && (
            <Modal
              className="ant-modal custom-modal"
              title={null}
              open={isWheatModalOpen}
              onCancel={() => setIsWheatModalOpen(false)}
              footer={null}
              width={750}
              centered
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="p-4"
              >
                <h2 className="text-xl font-bold text-center mb-4 text-[#8B5E00]">
                  Подробные данные (Пшеница)
                </h2>
                <Table pagination={false} dataSource={productOfWheat} columns={wheatColumns} className="custom-table" />
                <div className="flex justify-center mt-6">
                  <Button className='custom-btn' type="primary" onClick={() => setIsWheatModalOpen(false)}>
                    Закрыть
                  </Button>
                </div>
              </motion.div>
            </Modal>
          )}
        </div>
      </div>

      {/* ЛЕН */}
      <div className="flax_block mt-[5%]">
        <div className="flax_title flex items-center justify-start  mb-[10%]">
          <h2 className="product_h text-[36px] text-[#F7C35F] mr-5">ЛЕН</h2>
          <Image className="title_logo" src={logo_flax} width={40} height={40} alt="flax" />
        </div>

        <ul className="flex justify-around product_params-len">
          {productsOfFlex.map((product, index) => (
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
                alt={product.name}
                width={80}
                height={80}
                src={[protein, wheat, scales, drop][index]}
              />
              <p className="flax_product-name text-[16px] text-[#EADCC1] font-extrabold">{product.name}</p>
              <p className="flax_product-percentage text-[36px] text-[#F7C35F]">{product.percentage}</p>
            </motion.div>
          ))}
        </ul>

        <div className="flex justify-center mt-[10%]">
          <Button className="button custom-btn" type="primary" onClick={() => setIsFlaxModalOpen(true)}>
            Подробнее
          </Button>

          {isFlaxModalOpen && (
            <Modal
              className="ant-modal custom-modal"
              title={null}
              open={isFlaxModalOpen}
              onCancel={() => setIsFlaxModalOpen(false)}
              footer={null}
              width={750}
              centered
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="p-4"
              >
                <h2 className="text-xl font-bold text-center mb-4 text-[#8B5E00]">
                  Подробные данные (Лен)
                </h2>
                <Table pagination={false} dataSource={productsOfFlex} columns={flaxColumns} className="custom-table" />
                <div className="flex justify-center mt-6">
                  <Button className='custom-btn' type="primary" onClick={() => setIsFlaxModalOpen(false)}>
                    Закрыть
                  </Button>
                </div>
              </motion.div>
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
}
