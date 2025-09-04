import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clientsImage from '../components/ClientImg';

const Clients = () => {
  return (
  <div className='mt-21'>
      <div className='bg-gradient-to-br rounded-4xl  from-[#ff7f30] to-[#ff9f50] w-full  flex flex-col justify-center items-center p-6 md:p-12 overflow-hidden'>
      
      {/* Heading */}
      <motion.h2
        className='text-4xl md:text-5xl font-extrabold text-black mb-12 text-center'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Our Clients
      </motion.h2>

      {/* Clients Logos Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 justify-items-center items-center w-full max-w-6xl'>
        {clientsImage.map((item, index) => (
          <motion.div
            key={index}
            className='flex items-center justify-center bg-white rounded-3xl p-6 shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.10 }}
          >
            <Image
              src={item.img}
              width={100}
              height={100}
              alt='Client Logo'
              className='object-contain'
            />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Clients;
