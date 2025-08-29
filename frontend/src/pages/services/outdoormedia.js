import React from "react";
import { motion } from "framer-motion";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function OutdoorAdvertisingPage() {
  const introParagraphs = [
    `In today’s fast-paced world, outdoor advertising is a powerful way to ensure your brand stands out and gets noticed. At Raja Vigyapan Agency Pvt. Ltd., we specialize in creating high-visibility outdoor media campaigns that make a bold statement and grab attention.`,
    `Outdoor advertising has the unique advantage of reaching a broad audience in public spaces where people are naturally engaged. We offer a wide range of outdoor media options, including hoardings, unipoles, billboards, bus shelters, LED screens, and more. Our strategic approach ensures that your brand message is seen by the right audience in the right locations.`,
    `What makes our outdoor campaigns successful is our focus on both creativity and location. Our team conducts thorough research on traffic patterns, audience demographics, and high-traffic locations to ensure maximum visibility and engagement. We then design and execute visually striking ads that are aligned with your brand’s identity and message.`,
    `We’ve worked with top clients like Airtel and Payments Bank, delivering outdoor advertising campaigns that capture attention and leave a lasting impression. Whether it’s for a short-term promotional campaign or long-term brand visibility, we ensure your outdoor media stands out and delivers results.`,
    `With Raja Vigyapan Agency Pvt. Ltd., your brand gets the exposure it deserves in the most strategic and impactful outdoor spaces.`
  ];

  const whatSetsUsApart = [
    {
      title: "Prime Advertising Locations",
      desc: "We offer high-visibility spots in strategic locations for maximum brand exposure.",
      color: "bg-indigo-50",
    },
    {
      title: "Striking Visual Designs",
      desc: "Our creatives are bold, clear, and designed to grab attention — even from a distance.",
      color: "bg-blue-50",
    },
    {
      title: "Comprehensive Outdoor Planning",
      desc: "From permissions to installations, we manage the complete process under one roof.",
      color: "bg-indigo-50",
    },
    {
      title: "Modern Digital Displays",
      desc: "We use LED and smart digital billboards to enhance engagement and visibility.",
      color: "bg-blue-50",
    },
    {
      title: "Data-Driven Targeting",
      desc: "Our location selections are based on traffic analysis and audience behavior.",
      color: "bg-indigo-50 col-span-full",
    },
  ];

  return (
    <div className="pt-20 w-full bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 px-6 py-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="w-full text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-800 mb-2">
            Outdoor Media Advertising
          </h1>
          <p className="text-indigo-700 text-lg md:text-xl mt-2">
            High-visibility campaigns that make your brand stand out
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full bg-white/90 rounded-xl shadow-xl p-8 md:p-12 text-gray-700 text-lg space-y-4"
        >
          {introParagraphs.map((para, idx) => (
            <motion.p
              key={idx}
              variants={fadeUp}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>

        {/* What Sets Us Apart */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700 mb-8 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatSetsUsApart.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                viewport={{ once: true }}
                variants={fadeUp}
                custom={4 + idx * 0.2}
                className={`${item.color} rounded-xl p-6 shadow cursor-pointer transition-transform`}
              >
                <span className="font-bold text-indigo-600">{item.title}:</span> {item.desc}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default OutdoorAdvertisingPage;
