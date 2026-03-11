
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Homea = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Title animation
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.35]);
  const opacity = useTransform(scrollYProgress, [0.45, 0.65], [1, 0]);

  // Floating cards movement
  const leftTopX = useTransform(scrollYProgress, [0, 1], [-400, -150]);
  const leftTopY = useTransform(scrollYProgress, [0, 1], [-200, -40]);

  const rightTopX = useTransform(scrollYProgress, [0, 1], [400, 150]);
  const rightTopY = useTransform(scrollYProgress, [0, 1], [-200, -40]);

  const leftBottomX = useTransform(scrollYProgress, [0, 1], [-300, -80]);
  const leftBottomY = useTransform(scrollYProgress, [0, 1], [250, 80]);

  const rightBottomX = useTransform(scrollYProgress, [0, 1], [300, 80]);
  const rightBottomY = useTransform(scrollYProgress, [0, 1], [250, 80]);

  return (
    <div ref={containerRef} className="h-[200vh] bg-[#f4f4f4]">
      <section className="sticky top-0 h-screen flex items-center justify-center relative overflow-hidden">

        {/* TITLE */}
        <motion.h1
          style={{ scale, opacity }}
          className="absolute text-[120px] font-bold text-[#ff3b1f] text-center leading-[110px]"
        >
          Unify your <br /> finances
        </motion.h1>

        {/* LEFT TOP CARD */}
        <motion.div
          style={{ x: leftTopX, y: leftTopY }}
          className="absolute bg-green-500 text-white p-6 rounded-3xl w-64 shadow-2xl"
        >
          <p className="text-sm opacity-80">Exchange</p>
          <h2 className="text-2xl font-bold mt-2">+ €2,179.92</h2>
          <p className="mt-3 text-xs bg-white/20 inline-block px-3 py-1 rounded-full">
            Approved
          </p>
        </motion.div>

        {/* RIGHT TOP CARD */}
        <motion.div
          style={{ x: rightTopX, y: rightTopY }}
          className="absolute bg-white p-6 rounded-3xl w-64 shadow-2xl border"
        >
          <p className="text-sm text-gray-500">EUR</p>
          <h2 className="text-3xl font-bold mt-2">€100</h2>
          <p className="text-sm text-gray-400 mt-1">
            Balance: €4,921.22
          </p>
          <button className="mt-4 w-full bg-[#4f8cff] text-white py-2 rounded-xl">
            Send
          </button>
        </motion.div>

        {/* LEFT BOTTOM CARD */}
        <motion.div
          style={{ x: leftBottomX, y: leftBottomY }}
          className="absolute bg-[#e9c8ef] p-6 rounded-3xl w-64 shadow-2xl"
        >
          <div className="bg-white rounded-2xl p-4 text-center shadow">
            <p className="font-semibold">Jane Thomas</p>
            <p className="text-xs text-gray-400 mt-1">Secure payment</p>
          </div>
          <button className="mt-4 w-full bg-white py-2 rounded-xl shadow">
            Send
          </button>
        </motion.div>

        {/* RIGHT BOTTOM CARD */}
        <motion.div
          style={{ x: rightBottomX, y: rightBottomY }}
          className="absolute bg-orange-200 p-6 rounded-3xl w-64 shadow-2xl"
        >
          <p className="text-lg font-medium">Enjoy the coffee ☕</p>
        </motion.div>

      </section>
    </div>
  );
};

export default Homea;


