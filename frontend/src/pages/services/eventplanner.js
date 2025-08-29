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

function EventPlanningPage() {
  const introParagraphs = [
    `At Raja Vigyapan Agency Pvt. Ltd., we understand that successful events are a reflection of your brand. Whether it’s a corporate seminar, product launch, government campaign, or a celebratory event, we specialize in creating unforgettable experiences that resonate with your audience.`,
    `Our event planning services encompass everything from initial concept design to final execution. We take the time to understand your goals and objectives for the event, ensuring that every detail is meticulously planned and executed. Whether you’re looking to make an impact in front of a large audience or create a more intimate gathering, we tailor each event to match your unique needs.`,
    `We manage all aspects of the event, including venue selection, theme development, audio-visual production, stage design, and guest management. Our team works in close collaboration with clients to ensure that the event aligns with their brand image and messaging.`,
    `Our experience in organizing successful events for clients like Airtel and Payments Bank has taught us that a great event is not just about logistics—it’s about delivering a memorable experience. We ensure that your guests are engaged and that your event delivers the desired results, whether that’s building relationships, promoting a new product, or raising brand awareness.`,
    `At Raja Vigyapan Agency Pvt. Ltd., we handle every element of your event with professionalism, creativity, and precision. Let us transform your vision into a reality and make your next event a resounding success.`
  ];

  const whatSetsUsApart = [
    {
      title: "Complete Event Management",
      desc: "From ideation to execution, we handle every detail with precision.",
      color: "bg-indigo-50",
    },
    {
      title: "Creative Concepts and Branding",
      desc: "We turn every event into a powerful brand experience that connects emotionally.",
      color: "bg-blue-50",
    },
    {
      title: "Diverse Industry Experience",
      desc: "Our team has successfully executed events across corporate, government, and institutional sectors.",
      color: "bg-indigo-50",
    },
    {
      title: "Seamless, Stress-Free Execution",
      desc: "You focus on your guests — we take care of everything else.",
      color: "bg-blue-50",
    },
    {
      title: "Personalized Planning",
      desc: "Every event is customized to reflect your brand identity and audience expectations.",
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
            Event Planning
          </h1>
          <p className="text-indigo-700 text-lg md:text-xl mt-2">
            Creating unforgettable experiences that reflect your brand
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

export default EventPlanningPage;
