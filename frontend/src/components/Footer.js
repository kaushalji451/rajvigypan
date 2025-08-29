"use client";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";

import Link from "next/link";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#" },
  {
    label: "SERVICES",
    subItems: [
      { label: "ADVERTISING & MARKETING", href: "#" },
      { label: "BRANDING", href: "#" },
      { label: "EVENT PLANNER", href: "#" },
      { label: "OUTDOOR MEDIA", href: "#" },
    ],
  },
  { label: "PORTFOLIO", href: "#" },
  { label: "CLIENTS", href: "#" },
  { label: "CONTACT", href: "#" },
];

const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    // Make sure window exists
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setShowScrollBtn(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Call handler on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 md:gap-24 text-sm md:text-base">
        {/* Navigation Menu */}
        <nav className="md:flex-1">
          <ul
            className="list-disc list-inside space-y-2  max-w-xs"
            aria-label="Primary Site Navigation"
          >
            {navItems.map((item, index) =>
              item.subItems ? (
                <li key={index}>
                  <details className="group open:first:list-disc" open>
                    <summary className="cursor-pointer font-semibold select-none flex items-center space-x-2 before:content-['▶'] before:inline-block before:text-white before:rotate-0 before:transition-transform before:mr-1 group-open:before:rotate-90">
                      <span>{item.label}</span>
                    </summary>
                    <ul className="pl-6 mt-2 space-y-1  text-white list-disc list-inside">
                      {item.subItems.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link className="hover:text-slate-300"
                            href={sub.href}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:underline hover:text-slate-300 focus:underline focus:outline-none"
                  >
                    {item.label} 
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Company Description */}
        <section className="md:flex-2 max-w-xl prose prose-invert">
          <p className="flex items-start gap-2">
            <span>
              Established in 2004 as a proprietorship under the name Raja
              Vigyapan Agency, the company was incorporated as Raja Vigyapan
              Agency Pvt. Ltd. on 24th December 2010. Headquartered in Lucknow,
              we have since grown into a trusted name in the fields of branding,
              advertising, and marketing communications. With a strong
              foundation and years of experience, we continue to deliver
              creative, impactful, and result-driven solutions to businesses
              and institutions across India.
            </span>
          </p>
        </section>

        {/* Office Address and Contact */}
        <section className="md:flex-1 max-w-xs">
          <h3 className="text-red-600 font-bold text-lg mb-4">Office Address</h3>
          <address className="not-italic mb-6 text-white font-semibold space-y-1">
            <p>1 st Floor, 1-B,</p>
            <p>Ishwarpuri, Sector-12,</p>
            <p>Near Ishwar Dham Mandir,</p>
            <p>Indiranagar, Lucknow</p>
            <p>-226016</p>
            <p>Uttar Pradesh</p>
          </address>
          <div className="font-semibold text-white space-y-1">
            <p>
              <strong>Call us:</strong>{" "}
              <Link
                href="tel:+918960011163"
                className="hover:text-red-400 focus:text-red-400 focus:outline-none"
              >
                +91-8960011163
              </Link>
            </p>
            <p>
              <strong>Mail us:</strong>{" "}
              <Link
                href="mailto:info@rajavigyapan.com"
                className="hover:text-red-400 focus:text-red-400 focus:outline-none"
              >
                info@rajavigyapan.com
              </Link>
            </p>
          </div>
        </section>
      </div>

      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <BiArrowToTop className="w-6 h-6" />
        </button>
      )}

      {/* Footer Bottom Bar */}
      <div className="bg-gray-800 text-gray-400 text-center py-4 text-sm flex items-center justify-center space-x-2">
        <span>Powered by:</span>
        <Link
          href="#"
          className="hover:text-red-600 focus:text-red-600 focus:outline-none font-semibold"
        >
          Raja Vigyapan Agency Pvt Ltd
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="bg-gray-900 border-t border-gray-800 py-4 flex justify-center items-center gap-8 text-gray-500">
        {/* Facebook */}
        <Link href={"https://www.facebook.com/rajavigyapan"}>
          <FaFacebookF className="w-6 h-6" />
        </Link>
        {/* Twitter */}
        <Link href={"https://x.com/rajavigyapan"}>
          <FaTwitter className="w-6 h-6" />
        </Link>
        {/* Instagram */}
        <Link href={"https://www.instagram.com/rajavigyapan"}>
          <FaInstagram className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
