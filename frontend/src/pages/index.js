"use client";
import React from 'react'
import Slide1 from '@/components/homepage/Slide1';
import Slide2 from '@/components/homepage/Slide2';
import Slide3 from '@/components/homepage/Slide3';
import Slide4 from '@/components/homepage/Slide4';

const HomePage = () => {
  return (
    <div className='pt-30 bg-white  min-md:px-10 px-5 py-20'>
      {/* slide1 */}
      <Slide1 />

      {/* slide2 */}
      <Slide2 />

      {/* Slide 3 */}
      <Slide3 />

      {/* Slide 4 */}
      <Slide4 />

    </div>
  )
}

export default HomePage
