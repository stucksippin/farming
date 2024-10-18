'use client'
import React, { useState } from 'react'
import drop from '../assets/drop.png'
import protein from '../assets/protein.png'
import wheat from '../assets/wheat.png'
import scales from '../assets/scales.png'
import logo_wheat from '../assets/logo-wheat.png'
import logo_flax from '../assets/logo-flex.png'
import bg_wheat from '../assets/product-wheat.png'
import ellipse from '../assets/ellipse_underwheat.png'

import Image from 'next/image';
import { Button, Modal, Table } from 'antd';



export default function Product() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const products = [
    {
      name: "ПРОТЕИН",
      percentage: "14%",
      image: protein
    },
    {
      name: "КЛЕЙКОВИНА",
      percentage: "21.6%",
      image: wheat
    },
    {
      name: "НАТУРНЫЙ ВЕС",
      percentage: "82.2",
      image: scales
    },
    {
      name: "ВЛАЖНОСТЬ",
      percentage: "12.6%",
      image: drop
    }
  ];
  const dataSource = [
    {
      key: '1',
      name: 'Влажность',
      ed: '%',
      meaning: '12.6',
    },
    {
      key: '2',
      name: 'Натурный вес',
      ed: 'Гл/л',
      meaning: '82.2',
    },
    {
      key: '3',
      name: 'Поврежденные клопом-Черепашкой',
      ed: '%',
      meaning: '1.77',
    },
    {
      key: '4',
      name: 'Зерновая примесь',
      ed: '%',
      meaning: '3.3',
    },
    {
      key: '5',
      name: 'Сорная примесь',
      ed: '%',
      meaning: '2',
    },
    {
      key: '6',
      name: 'Клейковина по ГОСТ',
      ed: '%',
      meaning: '21.6',
    },
    {
      key: '7',
      name: 'ИДК',
      ed: 'Ед.',
      meaning: '90',
    },
    {
      key: '8',
      name: 'Протеин',
      ed: '%',
      meaning: '12.8',
    },

  ];
  const columns = [
    {
      title: 'Параметр',
      dataIndex: 'name',
      key: 'name',

      width: '40%',
    },
    {
      title: 'Единица измерения',
      dataIndex: 'ed',
      key: 'ed',

      width: '40%',
    },
    {
      title: 'Значение',
      dataIndex: 'meaning',
      key: 'meaning',

      width: '40%',
    }
  ];


  return (
    <div className='section section_wheat farm_container'>

      <h2 className='title_for-block'>О ПРОДУКТЕ</h2>




      {/* ПШЕНИЦА */}
      <div className='block_wheat mb-[15%]'>
        <div className='flex items-center justify-start pr-[5%]  product_block_wheat'>
          <span className='text-[48px]  text-[#F7C35F] mr-5 '>ПШЕНИЦА</span>
          <Image className='title_logo' src={logo_wheat} width={40} height={40} alt='wheat' />
        </div>

        <div class="container_product-wheat-block relative">

          <div className='wheat-item absolute top-[5%] right-[35%] z-[1]'>
            <Image src={bg_wheat} width={600} height={700} unoptimized />
          </div>
          <div className='wheat-item absolute top-[5%] right-[32%] z-[-1]'>
            <Image src={ellipse} width={700} height={602} unoptimized />
          </div>

          <div class="protein product_params-wheat">
            <span className='product_params-wheat-name '>ПРОТЕИН</span>
            <span className='product_params-wheat-per'>14%</span>
          </div>
          <div class="kl product_params-wheat">
            <span className='product_params-wheat-name '>КЛЕЙКОВИНА</span>
            <span className='product_params-wheat-per'>22%</span>
          </div>
          <div class="weight product_params-wheat">
            <span className='product_params-wheat-name '>НАТУРНЫЙ ВЕС</span>
            <span className='product_params-wheat-per'>11%</span>
          </div>
          <div class="vlaga product_params-wheat">
            <span className='product_params-wheat-name '>ВЛАЖНОСТЬ</span>
            <span className='product_params-wheat-per'>20%</span>
          </div>
        </div>


        <div className='flex justify-center mt-[10%] z-[3]'>
          <Button className='button' type="primary" onClick={showModal}>
            Подробнее
          </Button>
          <Modal title="Подробные данные" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Table size='large' pagination={false} dataSource={dataSource} columns={columns} />;
          </Modal>
        </div>
      </div>




      {/* ЛЕН */}
      <div className='flax_block mt-[5%]'>
        <div className='flex items-center justify-start mb-[100px]'>
          <span className='text-[48px] text-[#F7C35F] mr-5 '>ЛЕН</span>
          <Image className='title_logo' src={logo_flax} width={40} height={40} alt='wheat' />
        </div>

        <ul className='flex justify-around product_params-len '>
          {products.map((product, index) => (
            <div className='flax_block-item' key={index}>
              <Image className='mt-10 mb-5' alt={product.name} width={80} height={80} src={product.image} />
              <p className='text-[24px] text-[#EADCC1] font-extrabold'>{product.name}</p>
              <p className='text-[36px] text-[#F7C35F] '>{product.percentage}</p>
            </div>
          ))}
        </ul>


        <div className='flex justify-center mt-[5%] '>
          <Button className='button' type="primary" onClick={showModal}>
            Подробнее
          </Button>
          <Modal title="Подробные данные" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Table pagination={false} dataSource={dataSource} columns={columns} style={{
              marginBottom: "10px",
              fontSize: "26px"
            }} />;
          </Modal>
        </div>
      </div>
    </div>



  )
}
