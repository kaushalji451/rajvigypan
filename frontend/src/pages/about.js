import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="mt-20 ">

      {/* Hero Section */}
      <div className="flex h-screen  ">
        <div className="w-1/2 px-10 flex flex-col justify-center bg-[#c4c4c440] rounded-4xl">
          <h1 className="text-5xl font-bold py-5">
            Welcome to Raja Vigyapan Agency Pvt. Ltd.
          </h1>
          <h2 className="text-2xl text-gray-600 mb-5">
            Your Creative Partner Since 2004
          </h2>
          <p className="w-5/6 leading-relaxed">
            Established in 2004 as a proprietorship under the name Raja Vigyapan Agency, 
            the company was incorporated as Raja Vigyapan Agency Pvt. Ltd. on 24th December 2010. 
            Headquartered in Lucknow, we have since grown into a trusted name in branding, advertising, 
            and marketing communications across India. With over two decades of experience, 
            we continue to deliver impactful, creative, and result-driven solutions for businesses and institutions.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
            width={800}
            height={600}
            alt="Raja Vigyapan Agency"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* Mission & Vision */}
           {/* Mission & Vision */}
      <div className="">
        <div className="grid grid-cols-2">

          {/* Mission Card */}
          <div className="bg-[#ff7f30] text-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="mb-6 leading-relaxed">
              To create impactful content and offer innovative advertising and 
              marketing services that support our clients’ goals and growth. 
              We are driven by creativity, strategy, and an understanding of 
              what makes communication effective.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Understand your brand’s unique identity.</li>
              <li>Communicate your message clearly and powerfully.</li>
              <li>Help your brand stand out in a crowded market.</li>
              <li>Deliver results that create long-term value.</li>
            </ul>
          </div>

          {/* Vision & Values Card */}
          <div className="bg-black text-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition">
            <h1 className="text-4xl font-bold mb-6">Our Vision & Values</h1>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-lg">Integrity</p>
                <p className="text-gray-300">Honesty, transparency, and accountability.</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Innovation</p>
                <p className="text-gray-300">Embracing change and delivering fresh ideas.</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Excellence</p>
                <p className="text-gray-300">Striving for quality in everything we do.</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Client Success</p>
                <p className="text-gray-300">We grow when our clients grow.</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Collaboration</p>
                <p className="text-gray-300">Working hand-in-hand to achieve goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* What We Do Best */}
      <div className="bg-black text-white py-20 px-10 rounded-3xl">
        <h1 className="text-5xl font-bold mb-8">What We Do Best</h1>
        <p className="w-2/3 mb-8 leading-relaxed">
          Our expertise lies in combining traditional knowledge with modern strategies 
          to deliver high-quality branding, media production, and marketing solutions.
        </p>
        <ul className="grid grid-cols-2 gap-6 text-lg">
          <li>Creative Campaigns : Content, design & concepts.</li>
          <li>Multimedia Production : Films, jingles, TV programs.</li>
          <li>Advertising Strategy : Multi-channel campaigns.</li>
          <li>Print & Outdoor Media : Hoardings, banners, signage.</li>
          <li>Event Support : Branding & creative execution.</li>
        </ul>
      </div>

      {/* Trusted Partnerships */}
      <div className="px-10 bg-[#c4c4c440] rounded-4xl py-6">
        <h1 className="text-4xl font-bold mb-6">Trusted Partnerships & Regional Presence</h1>
        <p className="w-3/4 leading-relaxed mb-6">
          We’ve worked with government departments, public sector units, private brands, 
          multinational companies, educational institutions, healthcare providers, NGOs, 
          cultural groups, and startups. No matter the scale, we bring energy, commitment, 
          and passion to every project.
        </p>
      </div>

      {/* Our Team */}
      <div className="bg-[#ff7f30] text-black rounded-3xl px-10 py-16">
        <h1 className="text-5xl font-bold mb-10">Meet Our Team</h1>
        <p className="w-2/3 mb-10 leading-relaxed">
          Our success is powered by a team of creative minds and technical experts. 
          From designers and writers to strategists and production managers, 
          we bring together diverse talent to deliver exceptional results.
        </p>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="text-3xl font-semibold">Graphic Designers & Art Directors</p>
            <p className="text-gray-800">Bringing brands to life visually.</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Content Writers & Copy Experts</p>
            <p className="text-gray-800">Crafting compelling stories.</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Media Planners & Strategists</p>
            <p className="text-gray-800">Optimizing reach and impact.</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Event Coordinators & Managers</p>
            <p className="text-gray-800">Executing flawless brand experiences.</p>
          </div>
        </div>
      </div>

      {/* Staying Ahead */}
      <div className="px-10  bg-[#c4c4c440] rounded-4xl py-6">
        <h1 className="text-4xl font-bold mb-6">Staying Ahead</h1>
        <p className="w-3/4 leading-relaxed mb-6">
          Advertising evolves fast—and so do we. By integrating AI, digital marketing, 
          data-driven content, and sustainable campaigns, we ensure our clients 
          remain future-ready in a digital-first world.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#ff7f30] rounded-3xl px-10 py-16">
        <h1 className="text-5xl font-bold mb-10">Why Choose Raja Vigyapan Agency?</h1>
        <ul className="list-disc pl-6 w-2/3 space-y-3">
          <li>20+ years of experience with a strong Pan-India presence.</li>
          <li>End-to-end creative and marketing services.</li>
          <li>Customized solutions with regional expertise.</li>
          <li>Strong media network and production capabilities.</li>
          <li>Client-first approach and consistent support.</li>
          <li>Budget-friendly services without compromising quality.</li>
        </ul>
      </div>

      {/* Let’s Grow Together */}
      <div className="px-10 py-20 text-center bg-[#c4c4c440] rounded-4xl">
        <h1 className="text-5xl font-bold mb-6">Let’s Grow Together</h1>
        <p className="w-2/3 mx-auto text-lg leading-relaxed">
          At Raja Vigyapan Agency Pvt. Ltd., we don’t just create ads—we build brands, 
          share stories, and inspire action. Together, let’s make your brand unforgettable.
        </p>
        <p className="mt-10 text-gray-600">
          Established 2004 | Based in Lucknow | Trusted Across India
        </p>
      </div>

    </div>
  )
}

export default About
