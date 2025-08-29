"use client"; // Important for Next.js Client Component

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    captcha: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mathCaptcha, setMathCaptcha] = useState({ question: "", answer: 0 });

  // Generate captcha only on client
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    setMathCaptcha({ question: `${num1} + ${num2} = ?`, answer: num1 + num2 });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.captcha) !== mathCaptcha.answer) {
      alert("Captcha answer is incorrect!");
      generateCaptcha();
      return;
    }
    console.log("Form Data Submitted: ", formData);
    alert("Form submitted successfully!");
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      captcha: "",
    });
    generateCaptcha();
  };

  return (
      <div className="pb-20 max-sm:mt-25 mt-30 px-10 max-sm:px-5">
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex flex-col lg:flex-row gap-10 rounded-3xl">
          {/* Form Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">Contact Us</h2>

            {submitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
                Your message has been submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border border-slate-300 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="p-3 border border-slate-300 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border border-slate-300 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="p-3 border border-slate-300 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="p-3 border border-slate-300 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              {/* Captcha & Submit */}
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="captcha"
                    className="text-lg font-medium text-indigo-700 min-w-[120px]"
                  >
                    {mathCaptcha.question || "Loading..."}
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    id="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                    className="p-3 border border-slate-300 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 w-20"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 shadow-md transition-all duration-300 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

          {/* Map & Office Info */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-6"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Office Address</h3>
              <p>1st Floor, 1-B, Ishwarpuri,</p>
              <p>Sector -12, Near Ishwar Dham Mandir,</p>
              <p>Indiranagar, Lucknow-226016,</p>
              <p>Uttar Pradesh</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.3228543594055!2d80.99702027529352!3d26.877993976667874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a5a2891071%3A0xb5010bc6bc2aa6ab!2sRaja%20Vigyapan%20Agency%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1756453933632!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default ContactPage;
