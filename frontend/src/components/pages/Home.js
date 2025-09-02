import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AnimatedButton from "../Button";
import { motion } from "framer-motion";
import slides from "../homeSlides";
import { useRef, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";

const Home = ({ navRefs }) => {
  const lastScrollY = useRef(0)
  const handleScroll = (refName) => {
    const ref = navRefs[refName]
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const handleScrollEvent = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > window.innerHeight / 2) {
      } else if (currentScrollY < lastScrollY.current) {
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [])


  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row h-auto sm:h-[550px] lg:min-h-screen">
              {/* Left Content */}
              <div className="bg-[#c4c4c440] w-full lg:w-1/3 flex flex-col justify-center px-6 lg:px-20 gap-5 rounded-4xl py-10 lg:py-0">

                {/* Title with side animation */}
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                  className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight"
                >
                  {slide.title}
                </motion.h1>

                <p className="text-sm lg:text-base">{slide.text}</p>
                <div onClick={() => handleScroll("contactRef")} >
                  <AnimatedButton text={"Get Started"} />
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-2/3 rounded-4xl overflow-hidden">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={1920}
                  height={1080}
                  className="w-full h-[250px] sm:h-[400px] lg:h-screen object-cover rounded-4xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
