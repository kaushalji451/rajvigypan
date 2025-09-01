import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: 'homeRef' },
  { label: 'About', href: 'aboutRef' },
  { label: 'Services', href: 'servicesRef' },
  { label: 'Portfolio', href: 'projectRef' },
  { label: 'Clients', href: 'clientsRef' },
  { label: 'Contact', href: 'contactRef' },
]

const menuVariants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { y: '-100%', opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
}

const Navbar = ({ navRefs }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const lastScrollY = useRef(0)

  const handleScroll = (refName) => {
    const ref = navRefs[refName]
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const handleScrollEvent = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > window.innerHeight / 2) {
        setShowNavbar(false)
      } else if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [])

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          className="fixed top-0 left-0 w-full z-50 bg-[rgba(255,127,48,1)] py-3 px-10 rounded-full flex items-center justify-between shadow-lg"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.3 } }}
        >
          <Link href="/" className="w-1/3">
            <Image
              src="https://rajavigyapan.com/wp-content/uploads/2023/01/logo.jpg"
              alt="Raja Vigyapan Logo"
              width={80}
              height={48}
              className="h-15 w-15 rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-10">
            {navLinks.map(({ label, href }) => (
              <li key={label} className="cursor-pointer hover:underline">
                <button onClick={() => handleScroll(href)}>{label}</button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          {!menuOpen && (
            <button
              className="lg:hidden ml-auto z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="32" height="32" fill="black" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          )}

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="fixed inset-0 z-40 bg-[rgba(255,127,48,0.98)] flex flex-col items-center pt-20"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
              >
                <button
                  className="absolute top-6 right-8 text-black text-3xl"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  &times;
                </button>

                <ul className="flex flex-col gap-4 text-black text-2xl w-full items-center">
                  {navLinks.map(({ label, href }) => (
                    <li key={label} className="w-[80%] border-b">
                      <button
                        onClick={() => {
                          handleScroll(href)
                          setMenuOpen(false)
                        }}
                        className="block px-4 py-2"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Navbar
