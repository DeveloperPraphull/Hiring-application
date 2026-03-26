

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const MillionSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text animations
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.9, 1.08, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.55, 0.8], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -100]);
  const textBlur = useTransform(scrollYProgress, [0, 0.08, 0.6, 0.8], [8, 0, 0, 6]);

  // Subtitle
  const subOpacity = useTransform(scrollYProgress, [0.08, 0.2, 0.55, 0.75], [0, 1, 1, 0]);
  const subY = useTransform(scrollYProgress, [0.08, 0.2], [30, 0]);

  // Counter number
  const counterProgress = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);

  // Triangle
  const triangleY = useTransform(scrollYProgress, [0.15, 0.95], [500, 0]);
  const triangleScale = useTransform(scrollYProgress, [0.15, 0.95], [0.8, 1]);

  // Background color shift
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ff3b1f", "#e8321a", "#d42a14"]
  );

  // Floating particles parallax
  const particle1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const particle2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const particle3Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const particle4Y = useTransform(scrollYProgress, [0, 1], [50, -180]);

  // Side decorative lines
  const lineScaleL = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const lineScaleR = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);

  return (
    <div ref={containerRef} className="h-[180vh]">
      <motion.section
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center relative"
      >

        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white/[0.06] rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-yellow-400/[0.05] rounded-full blur-3xl" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            style={{ y: particle1Y }}
            className="absolute top-[20%] left-[10%] w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full"
          />
          <motion.div
            style={{ y: particle2Y }}
            className="absolute top-[30%] right-[15%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/15 rounded-full"
          />
          <motion.div
            style={{ y: particle3Y }}
            className="absolute top-[60%] left-[20%] w-1 h-1 sm:w-2 sm:h-2 bg-yellow-300/20 rounded-full"
          />
          <motion.div
            style={{ y: particle4Y }}
            className="absolute top-[50%] right-[25%] w-2 h-2 sm:w-3 sm:h-3 bg-orange-300/15 rounded-full"
          />
          <motion.div
            style={{ y: particle1Y }}
            className="absolute top-[70%] left-[60%] w-1 h-1 bg-white/10 rounded-full"
          />
          <motion.div
            style={{ y: particle2Y }}
            className="absolute top-[15%] left-[70%] w-1.5 h-1.5 bg-white/10 rounded-full"
          />
        </div>

        {/* Decorative side lines */}
        <motion.div
          style={{ scaleY: lineScaleL }}
          className="absolute left-6 sm:left-10 md:left-16 top-1/2 -translate-y-1/2 w-[2px] h-24 sm:h-32 md:h-40 bg-gradient-to-b from-transparent via-white/30 to-transparent origin-top"
        />
        <motion.div
          style={{ scaleY: lineScaleR }}
          className="absolute right-6 sm:right-10 md:right-16 top-1/2 -translate-y-1/2 w-[2px] h-24 sm:h-32 md:h-40 bg-gradient-to-b from-transparent via-white/30 to-transparent origin-top"
        />

        {/* Main content */}
        <div className="relative z-10 text-center px-4">

          {/* Animated counter */}
          <motion.div
            style={{ opacity: subOpacity, y: subY }}
            className="mb-3 sm:mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
              <CounterDisplay progress={counterProgress} />
              <span className="hidden sm:inline">users and counting</span>
              <span className="sm:hidden">users</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            style={{
              scale,
              opacity,
              y: textY,
              filter: useTransform(textBlur, (v) => `blur(${v}px)`),
            }}
            className="text-white font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[120px] leading-[1.05] tracking-tight"
          >
            <span className="block">
              1 million users,
            </span>
            <span className="block mt-1 sm:mt-2">
              plus{" "}
              <span className="relative inline-block">
                <span className="relative z-10">you.</span>
                <motion.span
                  className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 md:h-4 bg-white/20 rounded-full -z-0"
                  style={{
                    scaleX: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
                    transformOrigin: "left",
                  }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{ opacity: subOpacity, y: subY }}
            className="mt-4 sm:mt-6 text-white/60 text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed"
          >
            Join the fastest-growing community trusted by teams worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.15, 0.3, 0.55, 0.7], [0, 1, 1, 0]),
              y: useTransform(scrollYProgress, [0.15, 0.3], [20, 0]),
            }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-red-600 font-bold text-sm sm:text-base rounded-full shadow-lg shadow-black/20 hover:shadow-xl transition-shadow duration-300"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-white font-semibold text-sm sm:text-base rounded-full border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              See How It Works
            </motion.button>
          </motion.div>

          {/* Trust logos placeholder */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.25, 0.4, 0.55, 0.65], [0, 1, 1, 0]),
            }}
            className="mt-8 sm:mt-10 flex items-center justify-center gap-6 sm:gap-8"
          >
            {["Forbes", "TechCrunch", "Wired", "Bloomberg"].map((name) => (
              <span
                key={name}
                className="text-white/25 text-xs sm:text-sm font-bold tracking-wider uppercase"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* TRIANGLE */}
        <motion.div
          style={{
            y: triangleY,
            scale: triangleScale,
            borderLeft: "50vw solid transparent",
            borderRight: "50vw solid transparent",
            borderBottom: "50vh solid #f3f3f3",
          }}
          className="absolute bottom-0 w-0 h-0"
        />

        {/* Triangle inner shadow overlay */}
        <motion.div
          style={{ y: triangleY, scale: triangleScale }}
          className="absolute bottom-0 left-0 right-0 h-[15vh] bg-gradient-to-t from-[#f3f3f3]/50 to-transparent pointer-events-none"
        />

      </motion.section>
    </div>
  );
};

/* ---------- Counter Display ---------- */

function CounterDisplay({ progress }: { progress: MotionValue<number> }) {
  const display = useTransform(progress, (v: number) => {
    const num = Math.round(v * 1000000);
    return num.toLocaleString();
  });

  return <motion.span>{display}</motion.span>;
}

export default MillionSection;