import React from 'react'
import {motion} from "framer-motion";


const services = [
  {
    title: "EVENT PLANNER",
    img: "https://rajavigyapan.com/wp-content/uploads/2025/05/dddd.png",
    desc: "At Raja Vigyapan Agency Pvt. Ltd., we understand that successful events are a reflection of your brand. Whether it’s a corporate seminar, product launch, government campaign, or a celebratory event, we specialize in creating unforgettable …",
  },
  {
    title: "ADVERTISING & MARKETING",
    img: "https://rajavigyapan.com/wp-content/uploads/2025/05/aaa.png",
    desc: "At Raja Vigyapan Agency Pvt. Ltd., advertising and marketing are the pillars of our business. Since our establishment in 2004, we have dedicated ourselves to helping brands grow, engage with their audience, and make a lasting impact …",
  },
  {
    title: "BRANDING",
    img: "https://rajavigyapan.com/wp-content/uploads/2025/05/out-door.png",
    desc: "Branding is not just about a logo or colour palette; it’s about creating a strong identity that connects with your audience on a deeper level. At Raja Vigyapan Agency Pvt. Ltd., we believe in building brands that not only stand out but also stand the test of time …",
  },
  {
    title: "OUTDOOR MEDIA",
    img: "https://rajavigyapan.com/wp-content/uploads/2025/05/ad-marketting.png",
    desc: "In today’s fast-paced world, outdoor advertising is a powerful way to ensure your brand stands out and gets noticed. At Raja Vigyapan Agency Pvt. Ltd., we specialize in creating high-visibility outdoor media campaigns that make a bold statement and …",
  },
];

const Slide2 = () => {
  return (
   <div className="flex flex-wrap justify-center items-stretch gap-6 max-sm:gap-10 min-md:p-10 px-5 py-10  bg-gradient-to-r from-blue-50 my-10 to-indigo-50 rounded-3xl border border-slate-300 shadow-inner">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-200 transition-all duration-300 rounded-2xl overflow-hidden w-full sm:w-[45%] lg:w-[22%] flex flex-col"
          >
            <div className="h-40 overflow-hidden">
              <motion.img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h1 className="text-lg font-bold text-gray-800 mb-2 text-center tracking-wide">
                {service.title}
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
  )
}

export default Slide2
