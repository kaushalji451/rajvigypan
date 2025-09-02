import React from "react";
import Image from "next/image";
import HoverCircle from "../HoveredCircle"
import { motion } from "framer-motion";
import projects from "../proejcts";
const Projects = () => {


  return (
    <div className="flex flex-col lg:flex-row h-auto lg:min-h-screen ">
      {/* Left Section */}
      <div className="bg-black text-white w-full lg:w-1/4 py-8 lg:py-20 px-6 lg:px-10 rounded-4xl flex flex-col justify-between">
        <div>
          <motion.h1
            className="text-2xl lg:text-5xl py-3 lg:py-5 text-[#ff7f30]"
            initial={{ y: 50, opacity: 0 }}       // Start below and invisible
            whileInView={{ y: 0, opacity: 1 }}    // Animate when in view
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible, only once
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Projects
          </motion.h1>
          <p className="text-sm lg:text-base py-2">
            We have successfully executed impactful events that inspired,
            entertained, and brought communities together with unforgettable
            experiences.
          </p>
          <p className="text-sm lg:text-base py-2">
            Our creative team ensures each event captures the right emotion,
            energy, and vision—leaving behind lasting impressions.
          </p>
        </div>

        <HoverCircle />
      </div>

      {/* Right Section */}
      <div className="bg-[#d4efff] w-full lg:w-3/4 flex flex-col items-center rounded-4xl px-4 sm:px-8 lg:px-20 py-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden flex flex-col max-w-sm mx-auto"
            >
              {/* Reserve space with a fixed container */}
              <motion.div
                className="w-full h-60 overflow-hidden rounded-2xl"
                initial={{ y: 100, opacity: 0 }}       // Start way below
                whileInView={{ y: 0, opacity: 1 }}     // Slide up to original position
                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              >
                <Image
                  width={300}
                  height={300}
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="p-4 flex flex-col flex-grow">
                <h1 className="py-2 text-lg font-semibold">{project.title}</h1>
                <p className="text-sm sm:text-base flex-grow">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
