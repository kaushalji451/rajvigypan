import React from 'react'
import Image from 'next/image'
const projects = () => {
  return (
    <div className='mt-21'>
      <div className='flex  max-h-100'>
        <div className='w-1/2 bg-[#c4c4c440] rounded-4xl flex flex-col px-15'>
          <h1 className='text-5xl pt-10 pb-15'>Our Projects</h1>
          <h2 className='text-2xl pb-2'>Agra Youth Fest – Sham-E-Sufi</h2>
          <p className='text-xl '>Held on 14th February 2025 at I Love Agra Selfie Point, the Agra Youth Fest brought together vibrant performances, creative showcases, and youthful energy. Raja Vigyapan Agency Pvt. Ltd. crafted an atmosphere that celebrated dreams, ambition, and the spirit of Agra’s next generation.</p>
        </div>
        <div className='w-1/2'>
          <Image
            src={"/Blogimg2.jpeg"}
            alt='image'
            width={100}
            height={100}
            className='w-full h-full rounded-4xl'
          ></Image>
        </div>
      </div>
      <div className='flex  max-h-100'>
        <div className='w-1/2'>
          <Image
            src={"/Blogimg1.jpeg"}
            alt='image'
            width={100}
            height={100}
            className='w-full h-full rounded-4xl'
          ></Image>
        </div>
        <div className='w-1/2 bg-[#c4c4c440] rounded-4xl flex flex-col px-15 pt-15'>
          <h2 className='text-2xl pb-2'>Women’s Celebration Event</h2>
          <p className='text-xl w-2/3'>On 19th January 2025 at Agra Chaupati, we organized a cultural tribute to women’s strength and achievements. Filled with live performances, inspiring activities, and community spirit, the event left behind joyful smiles and unforgettable memories.</p>
        </div>

      </div>
      <div className='flex  max-h-100'>
        <div className='w-1/2 bg-[#c4c4c440] rounded-4xl flex flex-col px-15 pt-15'>
          <h2 className='text-2xl pb-2'>DJ Night – Sham-E-Sufi</h2>
          <p className='text-xl w-2/3'>On 5th January 2025 at Atal Udyan, Agra, the city came alive with electrifying beats and high energy. Raja Vigyapan Agency Pvt. Ltd. hosted an unforgettable DJ Night where the crowd danced the night away, making it a true celebration of music and youth.</p>
        </div>
        <div className='w-1/2'>
          <Image
            src={"/Blogimg2.jpeg"}
            alt='image'
            width={100}
            height={100}
            className='w-full h-full rounded-4xl'
          ></Image>
        </div>
      </div>

    </div>
  )
}

export default projects
