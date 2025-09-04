"use client";
import React from 'react'
import Slide1 from '@/components/pages/Slide1';
import Slide2 from '@/components/pages/Slide2';
import Slide3 from '@/components/pages/Slide3';
import Slide4 from '@/components/pages/Slide4';
import Slide6 from '@/components/pages/Slide6';
import Contact from '@/components/pages/Contact';

const HomePage = ({ navRefs }) => {
  return (
    <div className='pt-21 bg-white'>
      {/* Home */}
      <section>
        <Slide1/>
      </section>

      {/* About */}
      <section>
        <Slide2 />
      </section>

      {/* Services */}
      <section>
        <Slide3 />
      </section>

      {/* Projects */}
      <section>
        <Slide4 />
      </section>

      {/* Clients */}
      <section>
        <Slide6 />
      </section>

      {/* Contact */}
      <section ref={navRefs.contactRef}>
        <Contact />
      </section>
    </div>
  )
}

export default HomePage
