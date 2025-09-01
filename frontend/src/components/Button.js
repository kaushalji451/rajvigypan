import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedButton({text}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ width: "100%" });
    }
  }, [controls, inView]);

  return (
    <button className="relative overflow-hidden rounded-full w-fit py-3 px-10 font-semibold group">
      {/* Animated background */}
      <motion.span
        ref={ref}
        initial={{ width: 0 }}
        animate={controls}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#ff7f30] z-0"
      ></motion.span>

      {/* Button text */}
      <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-[#ff7f30]">
        {text}
      </span>

      {/* Hover overlay to make bg black smoothly */}
      <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-full z-0"></span>
    </button>
  );
}
