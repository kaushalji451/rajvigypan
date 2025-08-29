import React from 'react'
import { motion } from 'framer-motion';
import events from '@/components/events';

const PortfolioPage = () => {
    return (
        <div className='mt-20 bg-white min-h-screen flex items-center px-10 mb-10'>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-10 px-6 rounded-3xl border border-slate-300 shadow-inner w-full ">
                {/* Buttons */}
                <div className="flex gap-4 justify-center mb-8">
                    <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 transition">
                        All Events
                    </button>
                    <button className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded shadow hover:bg-indigo-100 transition">
                        Events
                    </button>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={event.img} alt={event.title} className="w-full h-60 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-indigo-700">{event.title}</h2>
                                <p className="text-gray-600 font-medium">{event.type}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default PortfolioPage;
