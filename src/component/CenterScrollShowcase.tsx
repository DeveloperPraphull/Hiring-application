// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const cards = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
//     title: "Total control over your card",
//     desc: "Freeze, unfreeze your card anytime."
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
//     title: "Secure Payments",
//     desc: "Your transactions are safe."
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//     title: "Smart Wallet",
//     desc: "Manage everything in one place."
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
//     title: "Fast Transfers",
//     desc: "Send money instantly worldwide."
//   }
// ];

// const CenterScrollShowcase = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"]
//   });

//   return (
//     <div ref={ref} className="relative h-[350vh] bg-[#f5f5f5]">

//       {/* Sticky Section */}
//       <div className="sticky top-0 h-screen flex items-center justify-center">

//         {/* Center Text */}
//         <motion.h1
//           className="absolute text-[80px] font-bold text-red-500 z-10"
//           style={{
//             opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
//           }}
//         >
//           Uniquely Yours
//         </motion.h1>

//         {/* Cards Container */}
//         <div className="relative w-full max-w-6xl h-full">

//           {cards.map((card, i) => {

//             const y = useTransform(
//               scrollYProgress,
//               [0, 1],
//               [400 - i * 120, -600 - i * 120]
//             );

//             const scale = useTransform(
//               scrollYProgress,
//               [0, 1],
//               [0.9, 1]
//             );

//             return (
//               <motion.div
//                 key={card.id}
//                 style={{ y, scale }}
//                 className={`absolute w-[350px] bg-white rounded-3xl shadow-2xl p-5
//                   ${i % 2 === 0 ? "left-10" : "right-10"}
//                 `}
//               >
//                 <img
//                   src={card.img}
//                   className="w-full h-[200px] object-cover rounded-xl"
//                 />
//                 <h3 className="mt-4 text-xl font-semibold text-red-500">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 mt-2">
//                   {card.desc}
//                 </p>
//               </motion.div>
//             );
//           })}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CenterScrollShowcase;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    title: "Total control over your card",
    desc: "Freeze, unfreeze your card anytime."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Secure Payments",
    desc: "Your transactions are safe."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Smart Wallet",
    desc: "Manage everything in one place."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Fast Transfers",
    desc: "Send money instantly worldwide."
  }
];

const CenterScrollShowcase = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={ref} className="relative h-[400vh] bg-[#f3f3f3]">

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Center Heading */}
        <motion.h1
          className="absolute text-[90px] font-bold text-red-500 z-10"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0, 0.2, 0.8, 1],
              [0, 1, 1, 0]
            ),
            scale: useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [0.8, 1, 0.8]
            )
          }}
        >
          Uniquely Yours
        </motion.h1>

        {/* Cards */}
        <div className="relative w-full max-w-6xl h-full">

          {cards.map((card, i) => {

            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [500 - i * 150, -800 - i * 150]
            );

            const x = useTransform(
              scrollYProgress,
              [0, 1],
              [i % 2 === 0 ? 150 : -150, 0]
            );

            const opacity = useTransform(
              scrollYProgress,
              [0, 0.1 + i * 0.1, 0.9, 1],
              [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={card.id}
                style={{ y, x, opacity }}
                className={`absolute w-[380px] bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] p-6
                ${i % 2 === 0 ? "right-16" : "left-16"}`}
              >
                <img
                  src={card.img}
                  className="w-full h-[220px] object-cover rounded-xl"
                />

                <h3 className="mt-5 text-xl font-semibold text-red-500">
                  {card.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default CenterScrollShowcase;