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

const listItemHover = {
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" },
};

function AdvertisingMarketingPage() {
  const introParagraphs = [
    `At Raja Vigyapan Agency Pvt. Ltd., advertising and marketing are the pillars of our business. Since our establishment in 2004, we have dedicated ourselves to helping brands grow, engage with their audience, and make a lasting impact.`,
    `Our advertising strategies combine creativity, industry insights, and the latest trends to ensure that your brand stands out in a crowded market.`,
    `We specialize in creating integrated marketing solutions that encompass a variety of platforms, including print, television, radio, digital media, and outdoor advertising. Our creative team works tirelessly to craft messages that resonate with your target audience, whether it’s through compelling print ads, engaging social media campaigns, or memorable TV commercials.`
  ];

  const servicesParagraphs = [
    `What sets us apart is our ability to offer end-to-end services, from conceptualization to execution. We begin every campaign by understanding your brand’s goals, your target demographic, and the competitive landscape. This in-depth understanding allows us to develop a tailored marketing strategy that drives results.`,
    `At Raja Vigyapan Agency Pvt. Ltd., we work with leading brands like Airtel and Payments Bank to create impactful advertising campaigns that not only boost brand awareness but also drive conversions. Our campaigns are designed to meet specific business objectives, whether it’s building brand equity, increasing market share, or generating sales.`,
    `Our approach is data-driven, which means we use insights and analytics to ensure that your marketing dollars are being spent wisely. Whether it’s traditional media or the digital landscape, we ensure that your brand gets maximum exposure and engagement. Choose Raja Vigyapan Agency Pvt. Ltd. for innovative, results-oriented advertising and marketing solutions that make your brand unforgettable.`
  ];

  const whatSetsUsApart = [
    {
      title: "Integrated Campaign Solutions",
      desc: "We combine traditional and digital media to deliver 360-degree marketing strategies.",
      color: "bg-indigo-50",
    },
    {
      title: "Tailor-Made Strategies",
      desc: "Each campaign is custom-designed to meet the unique goals of your brand.",
      color: "bg-blue-50",
    },
    {
      title: "Result-Driven Execution",
      desc: "Our advertising focuses on measurable results — not just creativity but also conversions.",
      color: "bg-indigo-50",
    },
    {
      title: "Trusted by Leading Brands",
      desc: "We have successfully managed campaigns for reputed clients like Airtel and Payments Bank.",
      color: "bg-blue-50",
    },
    {
      title: "Deep Local Market Insight",
      desc: "Our regional understanding gives your brand an authentic and strategic edge.",
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
            Advertising and Marketing
          </h1>
          <p className="text-indigo-700 text-lg md:text-xl mt-2">
            Creative, results-driven campaigns since 2004
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

        {/* Services & Approach */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full bg-white/90 rounded-xl shadow-xl p-8 md:p-12 text-gray-700 text-lg space-y-4"
        >
          {servicesParagraphs.map((para, idx) => (
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

export default AdvertisingMarketingPage;
