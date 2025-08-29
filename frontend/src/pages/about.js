import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutPage = () => {
  return (
    <div className="mt-20">
      <motion.div
        className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-16 text-gray-800 font-sans"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-indigo-700"
          variants={itemVariants}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to Raja Vigyapan Agency Pvt. Ltd.
        </motion.h1>

        <motion.p
          className="text-center text-lg md:text-xl font-semibold mb-12 text-indigo-600 italic"
          variants={itemVariants}
        >
          Your Creative Partner Since 2004
        </motion.p>

        <motion.section className="max-w-5xl mx-auto space-y-10" variants={itemVariants}>
          <motion.article
            className="bg-white rounded-lg shadow-lg p-8"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Our Story</h2>
            <p className="leading-relaxed text-gray-700">
              Established in 2004 as a proprietorship under the name Raja Vigyapan Agency, the company was
              incorporated as Raja Vigyapan Agency Pvt. Ltd. on 24th December 2010. Headquartered in Lucknow,
              we have since grown into a trusted name in branding, advertising, and marketing communications.
              With over two decades of experience, we combine traditional expertise with modern techniques to
              deliver high-quality, impactful, and result-driven solutions across India.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-lg shadow-lg p-8"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Our Mission</h2>
            <p className="leading-relaxed text-gray-700 mb-4">
              To create impactful content and offer innovative advertising and marketing services that support
              our clients’ goals and growth. We are driven by creativity, strategy, and an understanding of
              what makes communication effective.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Understand your brand’s unique identity.</li>
              <li>Communicate your message clearly and powerfully.</li>
              <li>Help your brand stand out in a crowded market.</li>
              <li>Deliver results that create long-term value.</li>
            </ul>
          </motion.article>

          <motion.article
            className="bg-white rounded-lg shadow-lg p-8"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Our Vision & Values</h2>
            <p className="leading-relaxed text-gray-700 mb-4">
              We believe strong brands are built on trust, creativity, and consistency. Our guiding principles:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong>Integrity</strong> – Honesty, transparency, and accountability.</li>
              <li><strong>Innovation</strong> – Embracing change and fresh ideas.</li>
              <li><strong>Excellence</strong> – Striving for quality in everything.</li>
              <li><strong>Client Success</strong> – Growing when our clients grow.</li>
              <li><strong>Collaboration</strong> – Working closely to achieve common goals.</li>
            </ul>
          </motion.article>

          <motion.article
            className="bg-white rounded-lg shadow-lg p-8"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">What We Do Best</h2>
            <p className="leading-relaxed text-gray-700 mb-4">
              Our expertise spans a wide range of creative and marketing services, tailored to client needs:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Creative Campaigns: Concept development, content creation, graphic design for print, digital, and broadcast.</li>
              <li>Multimedia Production: Corporate films, jingles, video spots, sponsored TV programs, documentaries.</li>
              <li>Advertising Strategy: Multi-channel campaign planning and execution (indoor, outdoor, digital).</li>
              <li>Print & Outdoor Media: Hoardings, banners, signage, and high-visibility brand exposure.</li>
              <li>Event Support: Creative and branding solutions for event planning and execution.</li>
            </ul>
          </motion.article>

          <motion.article
            className="bg-white rounded-lg shadow-lg p-8"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Trusted Partnerships & Regional Presence</h2>
            <p className="leading-relaxed text-gray-700 mb-4">
              Proudly serving hundreds of clients across Uttar Pradesh and beyond, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Government departments and public sector units.</li>
              <li>Private brands and multinational companies.</li>
              <li>Educational institutions and healthcare providers.</li>
              <li>NGOs, cultural groups, and startups.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              No matter the scale, we bring energy, commitment, and passion to every project.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-lg shadow-lg p-8"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Our Team</h2>
            <p className="leading-relaxed text-gray-700 mb-4">
              Our success is powered by a passionate team of:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Graphic designers, creative designers, and art directors.</li>
              <li>Content writers and copy experts.</li>
              <li>Media planners and marketing strategists.</li>
              <li>Event coordinators and production managers.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              We believe in continuous learning and staying updated with the latest trends and technologies.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-lg shadow-lg p-8"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Staying Ahead</h2>
            <p className="leading-relaxed text-gray-700 mb-4">
              Advertising evolves rapidly, and so do we. Our focus areas include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Digital marketing and performance-based advertising.</li>
              <li>Content creation using AI and data insights.</li>
              <li>Smart media planning with programmatic tools.</li>
              <li>Sustainable and community-centered campaigns.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Our goal is to lead change while staying true to our values and client-centric approach.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-lg shadow-lg p-8 text-center"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Your Digital Growth Partner – RVA</h2>
            <p className="leading-relaxed text-gray-700 mb-4">
              Why choose Raja Vigyapan Agency Pvt. Ltd.?
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 max-w-xl mx-auto">
              <li>Over 20 years of industry experience with strong Pan India presence.</li>
              <li>End-to-end creative and marketing services.</li>
              <li>Customized solutions with regional understanding.</li>
              <li>Strong media network and production capabilities.</li>
              <li>Client-focused culture and consistent support.</li>
              <li>Budget-friendly services without compromising quality.</li>
            </ul>
          </motion.article>

          <motion.div
            className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center "
             whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
        
          >
            <p className="text-2xl font-bold mb-4 text-indigo-700 ">
              Let’s Grow Together
            </p>
            <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
              At Raja Vigyapan Agency Pvt. Ltd., we believe in growing together—with our clients, our people,
              and our partners. We don’t just create ads—we build brands, share stories, and inspire action.
              Let’s work together to make your brand unforgettable.
            </p>
            <p className="mt-6 font-bold text-indigo-800">Raja Vigyapan Agency Pvt. Ltd.<br />Established 2004 | Based in Lucknow | Trusted Across India</p>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutPage;
