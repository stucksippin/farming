'use client'
import React, { useState } from 'react'
import drop from '../assets/drop.png'
import protein from '../assets/protein.png'
import wheat from '../assets/wheat.png'
import scales from '../assets/scales.png'
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
    },
    {
      title: 'Единица измерения',
      dataIndex: 'ed',
      key: 'ed',
    },
    {
      title: 'Значение',
      dataIndex: 'meaning',
      key: 'meaning',
    }
  ];


  return (
    <div className='mt-20 mb-20'>
      <h2 className='text-white text-center text-8xl mb-[200px] font-extrabold product_main_title'>О ПРОДУКТЕ</h2>


      <ul className='flex justify-around product_items '>
        {products.map((product, index) => (
          <li className='flex-col bg-[#6D8C54] w-[350px] h-[350px] rounded-[40px] items-center flex product_block' key={index}>
            <Image className='mt-10 mb-2 product_image' alt={product.name} width={100} height={100} src={product.image} />
            <p className='text-[36px] font-extrabold product_name'>{product.name}</p>
            <p className='text-[70px] product_title'>{product.percentage}</p>
          </li>
        ))}
      </ul>


      <div className='flex justify-center mt-[5%]'>
        <Button className='bg-[#F7C35F] text-center text-[36px] p-10 rounded-[25px] flex  text-black product_button' type="primary" onClick={showModal}>
          ПОДРОБНЕЕ
        </Button>
        <Modal title="Подробные данные" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Table pagination={false} dataSource={dataSource} columns={columns} />;
        </Modal>
      </div>
    </div>
  )
}
