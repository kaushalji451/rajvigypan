import { useState } from "react";
import { motion } from "framer-motion";

export default function HoverCircle() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="py-6 lg:py-10 flex items-center justify-center">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`rounded-full border border-[#ff7f30] h-40 w-40 lg:h-50 lg:w-50 flex items-center justify-center text-center text-xs sm:text-sm lg:text-2xl px-4 transition-colors duration-500  ${
          hovered ? "bg-[#ff7f30] text-black" : "bg-black text-white"
        }`}
        initial={{ scale: 0, opacity: 0 }}      // start from center (0 scale)
        whileInView={{ scale: 1, opacity: 1 }}  // scale to full size when in view
        viewport={{ once: true, amount: 0.5 }}  // trigger when 50% visible
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {hovered ? "Trusted by 100+ customers in India" : "Hover & Uncover"}
      </motion.div>
    </div>
  );
}
