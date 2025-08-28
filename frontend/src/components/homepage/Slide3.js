import React from 'react'
import { motion } from 'framer-motion'
const Slide3 = () => {
  return (
      <div className=' py-10'>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-8 bg-gradient-to-r from-blue-50 to-indigo-50  border border-slate-300 rounded-3xl shadow-inner">

          {/* Video Section */}
          <motion.div
            className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <iframe
              className="w-full h-64 lg:h-80"
              src="https://www.youtube.com/embed/FkQuawiGWUw?si=vH6z1TzW-LjhODtj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-indigo-700">
              Let’s Grow Together
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-semibold text-indigo-600">Raja Vigyapan Agency Pvt. Ltd.</span>, we thrive on collaboration—with our clients, teams, and partners. We don’t just make ads; we craft stories, build brands, and inspire action. Let’s create an unforgettable journey together.
            </p>

            <h2 className="text-2xl lg:text-3xl font-semibold text-indigo-700">
              Your Digital Growth Partner – RVA
            </h2>
            <ul className="list-decimal list-inside text-gray-700 space-y-2 text-lg leading-relaxed">
              <li>20+ years of industry experience with Pan India presence.</li>
              <li>Comprehensive creative and marketing solutions.</li>
              <li>Tailored strategies with regional expertise.</li>
              <li>Strong media network and production capabilities.</li>
              <li>Client-first approach with dedicated support.</li>
              <li>Cost-effective solutions without compromising quality.</li>
            </ul>

            <motion.div
              className="mt-4 p-4 bg-indigo-100 rounded-lg text-indigo-800 font-medium text-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p>Raja Vigyapan Agency Pvt. Ltd.</p>
              <p>Established 2004 | Based in Lucknow | Trusted Across India</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
  )
}

export default Slide3
