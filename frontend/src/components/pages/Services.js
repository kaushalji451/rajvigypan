import React, { useEffect } from 'react';
import AnimatedButton from '../Button';
import { MdCampaign, MdOutlineCampaign } from "react-icons/md";
import { FaUserTie, FaBullhorn } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import services from '../services';

// Map subtitles to icons
const iconMap = {
  "Integrated Campaigns": <MdOutlineCampaign className="text-3xl text-[#ff7f30]" />,
  "Identity & Strategy": <FaUserTie className="text-3xl text-[#ff7f30]" />,
  "High-Visibility Ads": <FaBullhorn className="text-3xl text-[#ff7f30]" />,
};

// Right section data with refs and controls
const useServiceAnimations = (services) => {
  return services.map(() => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
      if (inView) controls.start({ scaleX: 1 });
    }, [controls, inView]);

    return { ref, controls };
  });
};

const Services = () => {

  // Generate refs and controls for animations
  const animations = useServiceAnimations(services);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full flex flex-col px-6 lg:px-20 pt-10 lg:pt-20 max-sm:pb-10 bg-[#c4c4c440] rounded-4xl">
        <div className="w-full">
          <h1 className="text-3xl lg:text-5xl pb-6">Services</h1>
          <p className="pb-7">
            At <strong>Raja Vigyapan Agency Pvt. Ltd.</strong>, we provide
            <strong> end-to-end creative and marketing solutions</strong> designed to elevate your brand, engage your audience, and deliver measurable results across industries.
          </p>

          <p className="pb-7">
            With over <strong>20 years of experience</strong>, we specialize in:
          </p>
          <ul className="list-disc pl-6 space-y-2 pb-7">
            <li>Advertising & Marketing — Integrated 360° campaigns across digital, print, and broadcast.</li>
            <li>Branding — Cohesive brand identities with storytelling, logos, and messaging.</li>
            <li>Event Planning — Memorable experiences through seamless execution and design.</li>
            <li>Outdoor Media — High-visibility placements with bold, impactful designs.</li>
          </ul>

          <h2 className="text-xl lg:text-2xl pt-6 pb-4 text-[#ff7f30]">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2 pb-7">
            <li>Proven track record with 100+ successful campaigns.</li>
            <li>Creative storytelling backed by market insights.</li>
            <li>Full-service team — design, strategy, media, and events.</li>
            <li>Strong regional & cultural understanding of audiences.</li>
          </ul>

          <h2 className="text-xl lg:text-2xl pt-6 pb-4 text-[#ff7f30]">Trusted By</h2>
          <p className="pb-7">
            We’ve had the privilege of working with leading brands and organizations including:
          </p>
          <ul className="list-disc pl-6 space-y-2 pb-7">
            <li>Airtel</li>
            <li>Payments Bank</li>
            <li>Government & cultural institutions</li>
            <li>Emerging startups & local businesses</li>
          </ul>

          <p className="pb-7">
            Our <strong>data-driven approach</strong> and regional insights ensure that every campaign not only looks good but also drives real growth. Whether you are a startup or an enterprise, we turn <strong>ideas into lasting impact.</strong>
          </p>
        </div>

        <div className="flex justify-center lg:justify-start items-center pt-5">
          <AnimatedButton text={"Discover More"} />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full bg-black pb-10 text-white rounded-4xl">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={animations[index].ref}
            className="pt-10 pb-10 px-6 lg:ms-20 lg:w-2/3 last:border-b-0 relative "
          >
            <div className="flex items-center gap-4 pt-4">
              {iconMap[service.subtitle] || <MdCampaign className="text-3xl text-[#ff7f30]" />}
              <p>{service.subtitle}</p>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl py-5">{service.title}</h1>
              <p>{service.description}</p>
            </div>

            {/* Animated overlay border */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={animations[index].controls}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 bottom-0 h-[2px] bg-[#fff] origin-left w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
