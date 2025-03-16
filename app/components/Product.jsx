'use client'
import React, { useEffect, useState } from 'react';
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

export default function Product() {
  // Состояния для модалок
  const [isWheatModalOpen, setIsWheatModalOpen] = useState(false);
  const [isFlaxModalOpen, setIsFlaxModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalWidth, setModalWidth] = useState(800);
  const [columns, setColumns] = useState([
    {
      title: 'Параметр',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Единица измерения',
      dataIndex: 'ed',
      key: 'ed',
      width: 300,
    },
    {
      title: 'Значение',
      dataIndex: 'meaning',
      key: 'meaning',
      width: 300,
    },
  ]);
  // пшеница
  const showWheatModal = () => {
    setIsWheatModalOpen(true);
  };
  const handleWheatOk = () => {
    setIsWheatModalOpen(false);
  };
  const handleWheatCancel = () => {
    setIsWheatModalOpen(false);
  };

  // лен
  const showFlaxModal = () => {
    setIsFlaxModalOpen(true);
  };
  const handleFlaxOk = () => {
    setIsFlaxModalOpen(false);
  };
  const handleFlaxCancel = () => {
    setIsFlaxModalOpen(false);
  };

  const productsOfFlex = [
    {
      name: "ПРОТЕИН",
      percentage: "14%",
      image: protein,
    },
    {
      name: "КЛЕЙКОВИНА",
      percentage: "21.6%",
      image: wheat,
    },
    {
      name: "НАТУРНЫЙ ВЕС",
      percentage: "82.2",
      image: scales,
    },
    {
      name: "ВЛАЖНОСТЬ",
      percentage: "12.6%",
      image: drop,
    },
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setModalWidth('90%');
        setColumns([
          {
            title: 'Параметр',
            dataIndex: 'name',
            key: 'name',
            width: 150,
          },
          {
            title: 'Значение',
            dataIndex: 'meaning',
            key: 'meaning',
            width: 150,
          },
        ]);
      } else {
        setModalWidth(800);
        setColumns([
          {
            title: 'Параметр',
            dataIndex: 'name',
            key: 'name',
            width: 200,
          },
          {
            title: 'Единица измерения',
            dataIndex: 'ed',
            key: 'ed',
            width: 300,
          },
          {
            title: 'Значение',
            dataIndex: 'meaning',
            key: 'meaning',
            width: 300,
          },
        ]);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='section section_wheat farm_container'>
      <h2 className='title_for-block '>О ПРОДУКТЕ</h2>

      {/* ПШЕНИЦА */}
      <div className='block_wheat mb-[15%]'>
        <div className='wheat_title flex items-center justify-start pr-[5%] product_block_wheat'>
          <h1 className='product_h text-[36px] text-[#F7C35F] mr-5'>ПШЕНИЦА</h1>
          <Image className='title_logo' src={logo_wheat} width={40} height={40} alt='wheat' />
        </div>

        <div className='container_product-wheat-block relative'>
          <div className='wheat-item absolute top-[5%] right-[34%] z-[1]'>
            <Image className='wheat-img' src={bg_wheat} width={500} height={700} alt='stick of wheat' unoptimized />
          </div>
          <div className='blur-item absolute top-[5%] right-[29%] z-[-1]'>
            <Image className='blur-img' src={ellipse} width={600} height={602} alt='blur background' unoptimized />
          </div>

          <div className='protein product_params-wheat'>
            <span className='product_params-wheat-name'>ПРОТЕИН</span>
            <span className='product_params-wheat-per'>14%</span>
          </div>
          <div className='kl product_params-wheat'>
            <span className='product_params-wheat-name'>КЛЕЙКОВИНА</span>
            <span className='product_params-wheat-per'>22%</span>
          </div>
          <div className='weight product_params-wheat'>
            <span className='product_params-wheat-name'>НАТУРНЫЙ ВЕС</span>
            <span className='product_params-wheat-per'>11%</span>
          </div>
          <div className='vlaga product_params-wheat'>
            <span className='product_params-wheat-name'>ВЛАЖНОСТЬ</span>
            <span className='product_params-wheat-per'>20%</span>
          </div>
        </div>

        <div className='flex justify-center mt-[10%] z-[3]'>
          <Button className='button' type='primary' onClick={showWheatModal}>
            Подробнее
          </Button>
          <Modal
            className='ant-modal'
            title='Подробные данные (Пшеница)'
            open={isWheatModalOpen}
            onOk={handleWheatOk}
            onCancel={handleWheatCancel}
            width={750}
          >
            <Table className='ant-table' pagination={false} dataSource={dataSource} columns={columns} />
          </Modal>
        </div>
      </div>

      {/* ЛЕН */}
      <div className='flax_block mt-[5%]'>
        <div className='flax_title flex items-center justify-start mb-[100px]'>
          <h2 className='product_h text-[36px] text-[#F7C35F] mr-5'>ЛЕН</h2>
          <Image className='title_logo' src={logo_flax} width={40} height={40} alt='wheat' />
        </div>

        <ul className='flex justify-around product_params-len'>
          {productsOfFlex.map((product, index) => (
            <div className='flax_block-item' key={index}>
              <Image className='flax-img mt-10 mb-5' alt={product.name} width={80} height={80} src={product.image} />
              <p className='flax_product-name text-[16px] text-[#EADCC1] font-extrabold'>{product.name}</p>
              <p className='flax_product-percentage text-[36px] text-[#F7C35F]'>{product.percentage}</p>
            </div>
          ))}
        </ul>

        <div className='flex justify-center mt-[10%]'>
          <Button className='button' type='primary' onClick={showFlaxModal}>
            Подробнее
          </Button>
          <Modal
            className='ant-modal'
            title='Подробные данные (Лен)'
            open={isFlaxModalOpen}
            onOk={handleFlaxOk}
            onCancel={handleFlaxCancel}
            width={750}
          >
            <Table className='ant-table' pagination={false} dataSource={dataSource} columns={columns} />
          </Modal>
        </div>
      </div>
    </div>
  );
}