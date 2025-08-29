import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const slides = [
  {
    title: "Outdoor Media",
    subtitle: "High-Impact Outdoor Advertising",
    description:
      "Maximize your reach with high-impact Outdoor advertising solutions. We offer billboards, hoardings, and transit media across key locations. Get seen, get remembered day and night, citywide.",
    img: "https://rajavigyapan.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-24-at-1.03.46-PM-400x284.jpeg",
  },
  {
    title: "Branding",
    subtitle: "Define Your Brand Identity",
    description:
      "Your brand is your identity — We help you define it with clarity and style. From logo design to brand voice, we build a strong, consistent image. Stand out with branding that resonates, engages, and inspires loyalty.",
    img: "https://rajavigyapan.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-22-at-5.47.20-PM-400x284.jpeg",
  },
  {
    title: "Advertising & Marketing",
    subtitle: "Strategic Marketing Solutions",
    description:
      "We craft smart campaigns that connect your brand with the right audience. From digital to print, we blend creativity with strategy to boost visibility. Let your message stand out in a crowded market with result-driven solutions.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
  },
  {
    title: "Event Planning",
    subtitle: "Creating Unforgettable Events",
    description:
      "From corporate events to cultural festivals, we turn your ideas into unforgettable experiences. Our team handles everything from concept and coordination to flawless execution. With attention to every detail, we create events that leave a lasting impact.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
  },
];



const Slide1 = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[60vh] min-md:h-screen overflow-hidden mb-10 rounded-3xl border border-slate-300 shadow-inner">
      {slides.map((slide, index) => (
        <AnimatePresence key={index}>
          {index === current && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border-slate-300 shadow-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Background Image for all views */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-40 lg:opacity-60 transition-all duration-700"
                  style={{ objectPosition: "center", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 lg:to-indigo-100"></div>
              </div>

              {/* Left Side Content */}
              <motion.div
                className="relative z-10 lg:w-1/2 space-y-6 text-center lg:text-left"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-indigo-700">
                  {slide.title}
                </h1>
                <h2 className="text-2xl lg:text-3xl text-indigo-600">
                  {slide.subtitle}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                  <Link href={"/about"}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 transition"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                  <Link href={"/contact"}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded shadow hover:bg-indigo-100 transition"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </motion.div>


              {/* Right Side Image - Desktop Only */}
              <motion.div
                className="hidden lg:flex lg:w-full mt-8 lg:mt-0  justify-end items-center relative z-10"
                initial={{ x: 50, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full lg:w-4/5 h-auto rounded-xl shadow-lg object-cover"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 h-full transform -translate-y-1/2  text-indigo-700 p-4 rounded-full  hover:text-black text-xl font-extrabold"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 h-full transform -translate-y-1/2  text-indigo-700 p-4 rounded-full  hover:text-black text-xl font-extrabold"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slide1;
