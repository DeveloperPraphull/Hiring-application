

import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiMongodb,
  SiRubyonrails,
} from "react-icons/si";

const brands = [
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiMongodb,
  SiRubyonrails,
];

export default function CircularBrandCarousel() {
  return (
    <section className="w-screen overflow-hidden py-24 bg-white">
      <div className="relative">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max gap-28 items-center"
          animate={{ x: ["0px", "-1000px"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {[...brands, ...brands, ...brands].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center"
            >
              <Icon
                size={65}
                className="text-gray-300 hover:text-black transition duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
