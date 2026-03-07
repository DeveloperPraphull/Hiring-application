// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const MillionUsersSection = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   // Background color animation
//   const backgroundColor = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["#F63C20", "#ffffff"]
//   );

//   // Text color reverse animation
//   const textColor = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["#ffffff", "#F63C20"]
//   );

//   return (
//     <motion.section
//       ref={ref}
//       style={{ backgroundColor }}
//       className="relative h-[150vh] overflow-hidden flex items-center justify-center"
//     >
//       {/* Content */}
//       <motion.div className="text-center px-6">
//         <motion.h1
//           style={{ color: textColor }}
//           className="text-6xl md:text-7xl font-bold leading-tight"
//         >
//           1 million users, <br />
//           plus you.
//         </motion.h1>

//         <motion.p
//           style={{ color: textColor }}
//           className="mt-6 text-xl"
//         >
//           It only takes a few seconds to get started.
//         </motion.p>

//         <motion.div className="mt-8 flex justify-center gap-4">
//           <button className="border px-6 py-3 rounded-lg border-current text-current hover:bg-current hover:text-white transition">
//             App Store
//           </button>
//           <button className="border px-6 py-3 rounded-lg border-current text-current hover:bg-current hover:text-white transition">
//             Google Play
//           </button>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default MillionUsersSection;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MillionUsersSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Background color transition: Red → Water Blue → White
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#F63C20", "#3BA7F0", "#ffffff"]
  );

  // Wave opacity appears in middle & end
  const waveOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    [0, 1]
  );

  // Text color adjust
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ffffff", "#ffffff", "#F63C20"]
  );

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor }}
      className="relative h-[150vh] overflow-hidden flex items-center justify-center"
    >
      {/* 🌊 Animated Wave Layer */}
      <motion.div
        style={{ opacity: waveOpacity }}
        className="absolute bottom-0 w-full"
      >
        <svg
          className="w-full h-64"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#ffffff"
            fillOpacity="0.4"
            animate={{
              d: [
                "M0,160L80,170C160,180,320,200,480,180C640,160,800,100,960,110C1120,120,1280,180,1360,210L1440,240V320H0Z",
                "M0,180L80,160C160,140,320,120,480,140C640,160,800,200,960,210C1120,220,1280,200,1360,180L1440,160V320H0Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 5,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>

      {/* ✨ Content */}
      <motion.div className="text-center px-6 relative z-10">
        <motion.h1
          style={{ color: textColor }}
          className="text-6xl md:text-7xl font-bold leading-tight"
        >
          1 million users, <br />
          plus you.
        </motion.h1>

        <motion.p
          style={{ color: textColor }}
          className="mt-6 text-xl"
        >
          It only takes a few seconds to get started.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="border px-6 py-3 rounded-lg border-current text-current hover:bg-current hover:text-white transition">
            App Store
          </button>
          <button className="border px-6 py-3 rounded-lg border-current text-current hover:bg-current hover:text-white transition">
            Google Play
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default MillionUsersSection;