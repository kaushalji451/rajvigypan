"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showInfoBar, setShowInfoBar] = useState(true);

  const services = [
    { name: "Web Development", link: "/services/web-development" },
    { name: "SEO Optimization", link: "/services/seo" },
    { name: "Graphic Design", link: "/services/graphic-design" },
  ];

  // Detect desktop width
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect scroll for blur and info bar hide/show
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY === 0) setShowInfoBar(true);
      else if (window.scrollY > lastScrollY) setShowInfoBar(false);
      else if (window.scrollY < lastScrollY) setShowInfoBar(window.scrollY < 50);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion animation for scroll
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const navClasses = `bg-white w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-lg bg-white/70 shadow-xl" : ""
    }`;

  return (
    <header ref={ref} className={navClasses}>
      {/* Top Info Bar */}
      <AnimatePresence>
        {showInfoBar && (
          <motion.div
            key="info-bar"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            exit={{ y: -50, opacity: 0, transition: { duration: 0.4 } }}
            className="hidden md:flex gap-3 items-center bg-red-600 text-white text-sm px-6 py-2"
          >
            <div className="flex space-x-4 items-center">
              <p className="flex items-center gap-1">
                <IoIosCall /> +91-8960011163
              </p>
              <p className="flex items-center gap-1">
                <IoMail /> <a href="mailto:info@rajavigyapan.com">info@rajavigyapan.com</a>
              </p>
            </div>
            <div className="flex space-x-3 items-center text-lg">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-3 border-b border-red-800">
        {/* Logo */}
        <div className="flex items-center md:flex-1">
          <Link href={"/"}>
            <Image
              src="https://rajavigyapan.com/wp-content/uploads/2023/01/logo.jpg"
              alt="Raja Vigyapan Logo"
              width={80}
              height={48}
              className="h-13 w-20"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        {isDesktop && (
          <div className="flex space-x-6 font-semibold text-zinc-700">
            {["Home", "About", "Services", "Clients", "Contact"].map((item) => (
              <div key={item} className="relative group">
                <motion.div  whileHover="hover">
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-red-700 transition px-2 py-1"
                  >
                    {item}{item === "Services" && <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 inline-block ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>}
                  </Link>
                </motion.div>

                {/* Services Dropdown */}
                {item === "Services" && (
                  <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 min-w-[180px]">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.link}
                        className="px-4 py-2 hover:bg-red-100 transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Mobile Hamburger */}
        {!isDesktop && (
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {!isOpen ? (
              <Image
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="28"
                height="28"
                alt="Menu"
              />
            ) : (
              <Image
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="28"
                height="28"
                alt="Close"
              />
            )}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && !isDesktop && (
          <motion.div
            key="mobile-menu"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="origin-top absolute top-full left-0 w-full h-screen flex flex-col md:hidden overflow-hidden"
            style={{
              backgroundImage: "url('/Ralogo.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-200/80"></div>

            {/* Menu Links */}
            <div className="relative z-10 flex flex-col">
              {["Home", "About", "Services", "Clients", "Contact"].map((item) => (
                <div key={item} className="flex flex-col">
                  <motion.div whileHover="hover">
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="block px-4 py-3 text-zinc-700 font-semibold hover:bg-red-200 transition"
                    >
                      {item}
                    </Link>
                  </motion.div>

                  {/* Mobile: show services links */}
                  {item === "Services" && (
                    <div className="pl-6 flex flex-col">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.link}
                          className="block px-4 py-2 text-zinc-700 font-medium hover:bg-red-100 transition"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
