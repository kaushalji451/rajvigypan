import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clientsImage from '../ClientImg';

const Clients = () => {
  return (
    <div className='bg-[#ff7f30] rounded-4xl p-6 md:p-10 w-full 
                    h-auto  flex flex-col  justify-center overflow-hidden'>
      {/* Heading */}
      <motion.h2
        className='text-3xl md:text-4xl font-bold text-black mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Clients
      </motion.h2>

      {/* Clients Logos */}
      <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12'>
        {clientsImage.map((item, index) => (
          <motion.div
            key={index}
            className='flex items-center justify-center bg-white rounded-2xl p-4 shadow-lg hover:scale-110 transition-transform duration-300'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
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
  );
};

export default Clients;
