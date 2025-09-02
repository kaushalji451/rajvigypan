"use client";
import React from 'react'
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Services from '@/components/pages/Services';
import Proejcts from '@/components/pages/Proejcts';
import Clients from '@/components/pages/Clients';
import Contact from '@/components/pages/Contact';

const HomePage = ({ navRefs }) => {
  return (
    <div className='pt-21 bg-white'>
      {/* Home */}
      <section ref={navRefs.homeRef}>
        <Home navRefs={navRefs}/>
      </section>

      {/* About */}
      <section ref={navRefs.aboutRef}>
        <About />
      </section>

      {/* Services */}
      <section ref={navRefs.servicesRef}>
        <Services />
      </section>

      {/* Projects */}
      <section ref={navRefs.projectRef}>
        <Proejcts />
      </section>

      {/* Clients */}
      <section ref={navRefs.clientsRef}>
        <Clients />
      </section>

      {/* Contact */}
      <section ref={navRefs.contactRef}>
        <Contact />
      </section>
    </div>
  )
}

export default HomePage
