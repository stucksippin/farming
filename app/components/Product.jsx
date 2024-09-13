'use client'
import React, { useState } from 'react'
import drop from '../assets/drop.png'
import protein from '../assets/protein.png'
import wheat from '../assets/wheat.png'
import scales from '../assets/scales.png'
import logo_wheat from '../assets/logo-wheat.png'
import logo_flax from '../assets/logo-flex.png'
import bg_wheat from '../assets/bg-wheat.png'

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
    <div className='mt-20 container mx-auto'>
      <div className='relative mb-[5%]'>

        <h2 className='text-white text-center text-[68px] mb-[200px] font-extrabold product_main_title'>О ПРОДУКТЕ</h2>

        <div className='flex items-center justify-start pr-[5%] mb-10 product_block_wheat'>
          <span className='text-[72px] text-[#F7C35F] mr-5 '>ПШЕНИЦА</span>
          <Image className='title_logo' src={logo_wheat} width={70} height={70} alt='wheat' />
        </div>




        <div className='flex justify-center mt-[5%] '>
          <Button className='bg-[#263C28]  text-center text-[36px] p-10 rounded-[25px] flex  text-[#6D8C54] border-[#6D8C54]  product_button' type="primary" onClick={showModal}>
            ПОДРОБНЕЕ
          </Button>
          <Modal title="Подробные данные" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Table size='large' pagination={false} dataSource={dataSource} columns={columns} />;
          </Modal>
        </div>
      </div>




      {/* ЛЕН */}

      <div className=' pb-[5%] pt-[5%]'>
        <div className='flex items-center justify-start pl-[5%] mb-10 product_block_flax'>
          <span className='text-[64px] text-white mr-5 '>ЛЕН</span>
          <Image className='title_logo' src={logo_flax} width={90} height={90} alt='wheat' />
        </div>

        <ul className='flex justify-around product_items '>
          {products.map((product, index) => (
            <li className='flex-col bg-[#F7C35F] w-[300px] h-[300px] rounded-[40px] items-center flex product_block' key={index}>
              <Image className='mt-10 mb-2 product_image' alt={product.name} width={100} height={100} src={product.image} />
              <p className='text-[28px] text-[#635438] font-extrabold product_name'>{product.name}</p>
              <p className='text-[70px] product_title text-[#635438]'>{product.percentage}</p>
            </li>
          ))}
        </ul>


        <div className='flex justify-center mt-[5%] '>
          <Button className='bg-[#F7C35F]  text-center text-[36px] p-10 rounded-[25px] flex  text-[#4B3D2B] border-[#4B3D2B]  product_button' type="primary" onClick={showModal}>
            ПОДРОБНЕЕ
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
