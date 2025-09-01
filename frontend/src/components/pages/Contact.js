import React, { useState } from 'react'

const Contact = () => {
  const [formData, setformdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted");
    setformdata({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="bg-black text-white w-full lg:w-1/4 py-10 lg:py-20 px-6 lg:px-10 rounded-4xl">
        <h1 className="text-3xl lg:text-5xl py-5">Contact Us</h1>
        <p className="text-sm lg:text-base">
          Drop us a message, give us a call, or send us an email—we’re all about making
          connections that matter. Let’s start this journey together and take your brand
          to new heights!
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-[#c4c4c440] w-full lg:w-3/4 flex flex-col justify-center items-center rounded-4xl px-6 sm:px-12 lg:px-20 py-10">
        <p className="text-lg lg:text-xl text-center lg:text-left mb-6">
          Get in Touch with Us Today
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-3xl">
          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="py-3">First Name *</label>
              <input
                type="text"
                id="name"
                className="border-b focus:outline-none p-2 bg-transparent"
                required
                value={formData.firstName}
                onChange={(e) => setformdata({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="py-3">Last Name *</label>
              <input
                type="text"
                id="lastName"
                className="border-b focus:outline-none p-2 bg-transparent"
                required
                value={formData.lastName}
                onChange={(e) => setformdata({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="py-3">Email *</label>
            <input
              type="text"
              id="email"
              className="border-b focus:outline-none p-2 bg-transparent"
              required
              value={formData.email}
              onChange={(e) => setformdata({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="py-3">Phone *</label>
            <input
              type="tel"
              id="phone"
              className="border-b focus:outline-none p-2 bg-transparent"
              required
              value={formData.phone}
              onChange={(e) => setformdata({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="py-3">Message *</label>
            <textarea
              id="message"
              rows="4"
              className="border-b focus:outline-none p-2 bg-transparent"
              required
              value={formData.message}
              onChange={(e) => setformdata({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button className="bg-black w-full text-white py-3 px-4 rounded-2xl hover:bg-gray-800 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
