import React, { useRef } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Parent container animation with stagger
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between children
      },
    },
  }

  // Individual text animation
  const textAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <div className="">
      <footer className="bg-[rgba(255,127,48,1)] py-10 rounded-4xl px-5 md:px-10 flex flex-col gap-5">
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-10 md:gap-5 flex-wrap"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section 1 */}
          <motion.div className="flex flex-col gap-2  md:w-1/3">
            {["Rajavigypana", "From Strategy to Success"].map((text, i) => (
              <motion.div key={i} variants={textAnimation} className={i === 1 ? "w-full md:w-2/3 text-4xl py-10" : "text-4xl"}>
                {text}
              </motion.div>
            ))}
            <motion.div className="flex gap-5 ">
              {[{
                href: "https://www.facebook.com/rajavigyapan",
                icon: <FaFacebookF />
              }, {
                href: "https://x.com/rajavigyapan",
                icon: <FaTwitter />
              }, {
                href: "https://www.instagram.com/rajavigyapan",
                icon: <FaInstagram />
              }].map((item, i) => (
                <motion.div key={i} variants={textAnimation}>
                  <Link href={item.href}>
                    <div className="w-10 h-10 text-[rgba(255,127,48,1)] bg-black p-2 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Section 2 */}
          <motion.div className="flex flex-col gap-2 md:w-1/4 text-sm">
            {[
              "+91-8960011163",
              "info@rajavigyapan.com",
              "1 st Floor, 1-B,",
              "Ishwarpuri, Sector-12,",
              "Near Ishwar Dham Mandir,",
              "Indiranagar, Lucknow",
              "-226016",
              "Uttar Pradesh"
            ].map((line, i) => (
              <motion.p key={i} variants={textAnimation}>{line}</motion.p>
            ))}
          </motion.div>

          {/* Section 3 */}
          <motion.div className="md:w-1/6">
            <Link href={"/policy"}>
              <motion.p variants={textAnimation}>Privacy Policy</motion.p >
            </Link>
            <Link href={"/accessibility"}>
              <motion.p variants={textAnimation}>Accessibility <br />  Statement</motion.p >
            </Link>
          </motion.div>

          {/* Section 4 */}
          <motion.div className="md:w-1/6">

          </motion.div>
        </motion.div>

        {/* Footer bottom */}
        <motion.div
          variants={textAnimation}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="border-t text-sm pt-5"
        >
          © {new Date().getFullYear()} by  Raja Vigyapan Agency Pvt Ltd. Powered and secured by US.
        </motion.div>
      </footer>
    </div>
  )
}

export default Footer
