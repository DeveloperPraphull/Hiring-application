import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { useRef, useState } from "react";

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

export default function UltraPremiumShowcase() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Apple smooth easing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 1
  });

  // Background color morph
  const bgColor = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["#f3f3f3", "#ffe5e0", "#f3f3f3"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor: bgColor }}
      className="relative h-[450vh] transition-colors duration-500"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Center Heading */}
        <motion.h1
          className="absolute text-[90px] font-bold text-red-500 z-10"
          style={{
            opacity: useTransform(
              smoothProgress,
              [0, 0.2, 0.8, 1],
              [0, 1, 1, 0]
            ),
            scale: useTransform(
              smoothProgress,
              [0, 0.5, 1],
              [0.8, 1, 0.8]
            )
          }}
        >
          Uniquely Yours
        </motion.h1>

        <div className="relative w-full max-w-6xl h-full">

          {cards.map((card, i) => {

            const y = useTransform(
              smoothProgress,
              [0, 1],
              [600 - i * 200, -900 - i * 200]
            );

            const rotate = useTransform(
              smoothProgress,
              [0, 1],
              [i % 2 === 0 ? 8 : -8, 0]
            );

            const scale = useTransform(
              smoothProgress,
              [0, 0.5, 1],
              [0.9, 1.05, 0.9]
            );

            const opacity = useTransform(
              smoothProgress,
              [0, 0.1 + i * 0.1, 0.9, 1],
              [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={card.id}
                style={{ y, rotate, scale, opacity }}
                onViewportEnter={() => setActiveIndex(i)}
                className={`absolute w-[400px] rounded-3xl p-6 bg-white
                ${i % 2 === 0 ? "right-16" : "left-16"}
                transition-all duration-500`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: -5
                  }}
                  className={`rounded-3xl overflow-hidden 
                  ${activeIndex === i
                      ? "shadow-[0_40px_80px_rgba(255,0,0,0.35)]"
                      : "shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
                    }`}
                >
                  <img
                    src={card.img}
                    className="w-full h-[240px] object-cover"
                  />
                </motion.div>

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
    </motion.div>
  );
}