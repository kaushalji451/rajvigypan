import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const slides = [
  {
    title: "Grow Your Brand with RVA",
    subtitle: "Digital Solutions for Every Business",
    description:
      "We help businesses create impactful stories, engage audiences, and achieve growth.",
    img: "https://rajavigyapan.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-24-at-1.03.46-PM-400x284.jpeg",
  },
  {
    title: "Creative Campaigns",
    subtitle: "Reach Your Audience Effectively",
    description:
      "Tailored campaigns designed to maximize engagement and ROI for your brand.",
    img: "https://rajavigyapan.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-22-at-5.47.20-PM-400x284.jpeg",
  },
  {
    title: "Events & Promotions",
    subtitle: "Memorable Experiences",
    description:
      "We organize events that leave lasting impressions and strengthen your brand identity.",
    img: "https://rajavigyapan.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-24-at-1.03.46-PM-400x284.jpeg",
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
              {/* Mobile Background Image */}
              <div className="absolute inset-0 lg:hidden">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50"></div>
              </div>

              {/* Left Side Text */}
              <motion.div
                className="relative lg:w-1/2 space-y-6 text-center lg:text-left"
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
                className="hidden lg:flex lg:w-1/2 mt-8 lg:mt-0 justify-center items-center"
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
