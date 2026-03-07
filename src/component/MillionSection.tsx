
// const MillionSection = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-[#ff3b1f] flex items-center justify-center">

//       {/* BIG TEXT */}
//       <h1 className="absolute text-white font-bold text-[140px] leading-[130px] text-center z-10">
//         1 million users,<br />
//         plus you.
//       </h1>

//       {/* TRIANGLE SHAPE */}
//       <div
//         className="absolute bottom-0 w-0 h-0"
//         style={{
//           borderLeft: "50vw solid transparent",
//           borderRight: "50vw solid transparent",
//           borderBottom: "45vh solid #f3f3f3",
//         }}
//       />

//     </section>
//   );
// };

// export default MillionSection;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MillionSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Smooth realistic animation timing */

  // Text scale slight zoom
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.08]);

  // Text fade out late
  const opacity = useTransform(scrollYProgress, [0.55, 0.8], [1, 0]);

  // Triangle comes up smoothly
  const triangleY = useTransform(scrollYProgress, [0.2, 1], [400, 0]);

  // Subtle upward motion for depth
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div ref={containerRef} className="h-[150vh] bg-[#ff3b1f]">
      <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center relative">

        {/* TEXT */}
        <motion.h1
          style={{ scale, opacity, y: textY }}
          className="absolute text-white font-bold text-[120px] leading-[115px] text-center z-10 tracking-tight"
        >
          1 million users,<br />
          plus you.
        </motion.h1>

        {/* TRIANGLE */}
        <motion.div
          style={{
            y: triangleY,
            borderLeft: "50vw solid transparent",
            borderRight: "50vw solid transparent",
            borderBottom: "45vh solid #f3f3f3",
          }}
          className="absolute bottom-0 w-0 h-0"
        />

      </section>
    </div>
  );
};

export default MillionSection;