import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="mt-20">
      {/* Project 1 */}
      <div className="flex flex-col lg:flex-row max-h-auto">
        <div className="w-full lg:w-1/2 bg-[#c4c4c440] rounded-3xl flex flex-col px-6 lg:px-10 py-8">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Our Projects
          </motion.h1>
          <h2 className="text-xl sm:text-2xl font-semibold pb-2">
            Agra Youth Fest – Sham-E-Sufi
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Held on 14th February 2025 at I Love Agra Selfie Point, the Agra
            Youth Fest brought together vibrant performances, creative
            showcases, and youthful energy. Raja Vigyapan Agency Pvt. Ltd.
            crafted an atmosphere that celebrated dreams, ambition, and the
            spirit of Agra’s next generation.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video">
            <Image
              src={"/Blogimg2.jpeg"}
              alt="Agra Youth Fest"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col lg:flex-row max-h-auto ">
        <div className="w-full lg:w-1/2  order-2 lg:order-1">
          <div className="relative w-full aspect-video">
            <Image
              src={"/Blogimg1.jpeg"}
              alt="Women’s Celebration Event"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#c4c4c440] rounded-3xl flex flex-col px-6 lg:px-10 py-8 order-1 lg:order-2">
          <h2 className="text-xl sm:text-2xl font-semibold pb-2 min-md:pt-20">
            Women’s Celebration Event
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            On 19th January 2025 at Agra Chaupati, we organized a cultural
            tribute to women’s strength and achievements. Filled with live
            performances, inspiring activities, and community spirit, the event
            left behind joyful smiles and unforgettable memories.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="flex flex-col lg:flex-row max-h-auto ">
        <div className="w-full lg:w-1/2 bg-[#c4c4c440] rounded-3xl flex flex-col px-6 lg:px-10 py-8">
          <h2 className="text-xl sm:text-2xl font-semibold pb-2 min-md:pt-20">
            DJ Night – Sham-E-Sufi
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            On 5th January 2025 at Atal Udyan, Agra, the city came alive with
            electrifying beats and high energy. Raja Vigyapan Agency Pvt. Ltd.
            hosted an unforgettable DJ Night where the crowd danced the night
            away, making it a true celebration of music and youth.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video">
            <Image
              src={"/Blogimg2.jpeg"}
              alt="Agra Youth Fest"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
