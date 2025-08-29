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

function BrandingPage() {
  const introParagraphs = [
    `Branding is not just about a logo or colour palette; it’s about creating a strong identity that connects with your audience on a deeper level. At Raja Vigyapan Agency Pvt. Ltd., we believe in building brands that not only stand out but also stand the test of time.`,
    `Our branding services are designed to help businesses define their unique identity, craft a compelling narrative, and communicate their values effectively. We start by understanding your business, your goals, and your audience. With this foundation, we create a branding strategy that encompasses everything from logo design and visual identity to brand voice and messaging.`,
    `Whether you’re launching a new product or rebranding an existing one, we help you establish a cohesive identity that reflects your brand’s essence. Our team of designers, strategists, and copywriters work collaboratively to ensure that every element of your brand, from your logo to your website, conveys the right message.`,
    `We’ve successfully helped a variety of clients, from startups to large corporations, create powerful brands that resonate with their target market. Our work spans across industries, including telecom, banking, education, and healthcare.`,
    `At Raja Vigyapan Agency Pvt. Ltd., we believe that great brands are built on consistency, creativity, and clarity. We ensure that your brand not only looks great but also communicates your values and connects with your audience emotionally.`,
    `When you partner with us for branding, you’re not just getting a design—you’re getting a complete strategy that helps your brand grow, thrive, and make an impact in the marketplace.`
  ];

  const whatSetsUsApart = [
    {
      title: "Strategy-Led Branding",
      desc: "We build your brand from the ground up with a focus on positioning, message, and identity.",
      color: "bg-indigo-50",
    },
    {
      title: "Complete Brand Identity Packages",
      desc: "From logos and taglines to typography and tone — we deliver cohesive branding.",
      color: "bg-blue-50",
    },
    {
      title: "Emotional Storytelling",
      desc: "We help your brand connect with customers through meaningful, story-driven visuals and messaging.",
      color: "bg-indigo-50",
    },
    {
      title: "Cross-Platform Consistency",
      desc: "We ensure your branding is consistent across all channels — digital and physical.",
      color: "bg-blue-50",
    },
    {
      title: "Support for Startups and Rebranding",
      desc: "Whether you’re launching or evolving, we build brands that are future-ready.",
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
            Branding
          </h1>
          <p className="text-indigo-700 text-lg md:text-xl mt-2">
            Building strong, future-ready brands that resonate
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

export default BrandingPage;
