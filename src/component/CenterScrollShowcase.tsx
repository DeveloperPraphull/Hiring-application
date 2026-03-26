import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { FaShieldAlt, FaBolt, FaGlobe, FaChartLine, FaLock, FaRocket, FaCreditCard, FaUsers } from "react-icons/fa";

const cards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop",
    title: "Total Control Over Your Card",
    desc: "Freeze, unfreeze your card anytime. Full transparency at your fingertips.",
    accent: "from-blue-500 to-cyan-400",
    icon: FaCreditCard,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    title: "Secure Payments",
    desc: "Bank-grade encryption keeps your transactions safe and sound.",
    accent: "from-violet-500 to-purple-400",
    icon: FaShieldAlt,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    title: "Smart Wallet",
    desc: "Manage cards, budgets, and savings — all in one place.",
    accent: "from-emerald-500 to-teal-400",
    icon: FaChartLine,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=400&fit=crop",
    title: "Fast Transfers",
    desc: "Send money instantly worldwide with zero hidden fees.",
    accent: "from-orange-500 to-amber-400",
    icon: FaBolt,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    title: "Global Coverage",
    desc: "Accepted in 180+ countries. No borders, no limits.",
    accent: "from-rose-500 to-pink-400",
    icon: FaGlobe,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    title: "Real-Time Analytics",
    desc: "Track spending patterns with beautiful, actionable insights.",
    accent: "from-indigo-500 to-blue-400",
    icon: FaChartLine,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    title: "Privacy First",
    desc: "Your data stays yours. End-to-end encryption on every transaction.",
    accent: "from-slate-600 to-gray-500",
    icon: FaLock,
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1553729459-uj8bt2b1c3f?w=600&h=400&fit=crop",
    title: "Team Accounts",
    desc: "Manage your whole team's spending with shared wallets and controls.",
    accent: "from-teal-500 to-emerald-400",
    icon: FaUsers,
  },
];

const stats = [
  { value: "10M+", label: "Active Users" },
  { value: "$2.4B", label: "Processed Daily" },
  { value: "180+", label: "Countries" },
  { value: "99.99%", label: "Uptime" },
];

const features = [
  { icon: FaShieldAlt, text: "Bank-Grade Security" },
  { icon: FaBolt, text: "Instant Transfers" },
  { icon: FaGlobe, text: "Global Coverage" },
  { icon: FaRocket, text: "Lightning Fast" },
];

/* ---------- Scroll Card (hooks at top level) ---------- */

function ScrollCard({
  card,
  index,
  scrollYProgress,
  total,
}: {
  card: (typeof cards)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}) {
  const isLeft = index % 2 === 0;

  // Each card has its own scroll window for staggered entrance
  const segmentSize = 0.7 / total;
  const start = 0.05 + index * segmentSize;
  const peak = start + segmentSize * 0.5;
  const end = Math.min(start + segmentSize * 1.8, 0.95);

  // Vertical travel — cards rise from below into view then continue up
  const y = useTransform(
    scrollYProgress,
    [0, start, peak, end, 1],
    [600, 200, 0, -150, -500]
  );

  // Horizontal slide — cards sweep in from the side then settle center
  const x = useTransform(
    scrollYProgress,
    [0, start, peak, 1],
    [isLeft ? 200 : -200, isLeft ? 80 : -80, 0, isLeft ? -40 : 40]
  );

  // Opacity — fade in during card's window, hold, fade out at section end
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.02, start + 0.05, peak, 0.88, 1],
    [0, 1, 1, 1, 0]
  );

  // Rotation — tilt in, straighten, slight reverse tilt out
  const rotate = useTransform(
    scrollYProgress,
    [0, start, peak, 1],
    [isLeft ? 8 : -8, isLeft ? 3 : -3, 0, isLeft ? -2 : 2]
  );

  // Scale — start small, grow to full, shrink slightly on exit
  const scale = useTransform(
    scrollYProgress,
    [start - 0.02, peak, 0.9, 1],
    [0.85, 1, 1, 0.92]
  );

  // Blur — start blurry, sharpen on entrance
  const filterBlur = useTransform(
    scrollYProgress,
    [start - 0.02, start + 0.06],
    [8, 0]
  );

  return (
    <motion.div
      style={{
        y,
        x,
        opacity,
        rotate,
        scale,
        filter: useTransform(filterBlur, (v) => `blur(${v}px)`),
      }}
      className={`absolute w-[85vw] sm:w-[340px] md:w-[380px] lg:w-[400px]
        bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl
        shadow-xl hover:shadow-2xl
        border border-gray-100
        p-4 sm:p-5 md:p-6
        transition-shadow duration-300
        ${isLeft ? "right-4 sm:right-10 md:right-16" : "left-4 sm:left-10 md:left-16"}
      `}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
        <img
          src={card.img}
          alt={card.title}
          loading="lazy"
          className="w-full h-[140px] sm:h-[170px] md:h-[200px] object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${card.accent} opacity-10`} />

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white bg-gradient-to-r ${card.accent} shadow-lg`}
        >
          0{card.id}
        </span>

        {/* Icon */}
        <div className={`absolute bottom-3 right-3 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center shadow-lg`}>
          <card.icon className="text-white text-sm sm:text-base" />
        </div>
      </div>

      {/* Content */}
      <h3 className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-bold text-gray-800 leading-snug">
        {card.title}
      </h3>
      <p className="text-gray-500 mt-1 sm:mt-1.5 text-[11px] sm:text-xs md:text-sm leading-relaxed">
        {card.desc}
      </p>

      {/* Bottom accent line */}
      <div className={`mt-2.5 sm:mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r ${card.accent}`} />
    </motion.div>
  );
}

/* ---------- Main Component ---------- */

const CenterScrollShowcase = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth spring for progress bar
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Heading transforms
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75, 0.9],
    [0, 1, 1, 0]
  );

  const headingScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.7, 0.9],
    [0.7, 1, 1, 0.85]
  );

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.7, 1],
    [60, 0, 0, -40]
  );

  const headingBlur = useTransform(
    scrollYProgress,
    [0, 0.08, 0.8, 0.95],
    [6, 0, 0, 8]
  );

  // Parallax on background glows
  const glow1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const glow3X = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div ref={ref} className="relative h-[600vh] bg-gradient-to-b from-gray-50 via-white to-gray-50">

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-orange-400 z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Background decorative elements — parallax */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-100/40 rounded-full blur-3xl"
            style={{ y: glow1Y }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-violet-100/40 rounded-full blur-3xl"
            style={{ y: glow2Y }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-50/50 rounded-full blur-3xl"
            style={{ x: glow3X }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-rose-100/30 rounded-full blur-3xl"
            style={{ y: glow1Y, x: glow3X }}
          />
        </div>

        {/* Center Heading */}
        <motion.div
          className="absolute z-10 text-center px-4"
          style={{
            opacity: headingOpacity,
            scale: headingScale,
            y: headingY,
            filter: useTransform(headingBlur, (v) => `blur(${v}px)`),
          }}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2 sm:mb-3">
            Discover What&apos;s Possible
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none">
            <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-orange-400 bg-clip-text text-transparent">
              Uniquely
            </span>
            <br className="sm:hidden" />
            <span className="text-gray-800 ml-2 sm:ml-4">Yours</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 max-w-md mx-auto">
            Scroll to explore our premium features
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative w-full max-w-6xl h-full">
          {cards.map((card, i) => (
            <ScrollCard
              key={card.id}
              card={card}
              index={i}
              total={cards.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Floating Feature Pills — appear mid-scroll */}
        <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 pointer-events-auto"
            style={{
              opacity: useTransform(scrollYProgress, [0.25, 0.35, 0.7, 0.8], [0, 1, 1, 0]),
              y: useTransform(scrollYProgress, [0.25, 0.35], [30, 0]),
            }}
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-md"
              >
                <feat.icon className="text-blue-500 text-xs sm:text-sm" />
                <span className="text-[10px] sm:text-xs font-semibold text-gray-700">{feat.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar — appears in later scroll */}
        <motion.div
          className="absolute top-8 sm:top-12 left-0 right-0 z-20 flex justify-center pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]),
            y: useTransform(scrollYProgress, [0.45, 0.55], [-30, 0]),
          }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 px-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA — appears at end of scroll */}
        <motion.div
          className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-20 flex flex-col items-center pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0.82, 0.92], [0, 1]),
            y: useTransform(scrollYProgress, [0.82, 0.92], [40, 0]),
            scale: useTransform(scrollYProgress, [0.82, 0.92], [0.9, 1]),
          }}
        >
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 mb-3 sm:mb-4 text-center px-4">
            Ready to experience the future of finance?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="pointer-events-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-400 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-shadow duration-300"
          >
            Get Started Free
          </motion.button>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-2">
            No credit card required
          </p>
        </motion.div>

        {/* Scroll dot indicator */}
        <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1.5 sm:gap-2">
          {cards.map((_, i) => {
            const segSize = 0.7 / cards.length;
            const cardPeak = 0.05 + i * segSize + segSize * 0.5;
            return (
              <ScrollDot key={i} index={i} cardPeak={cardPeak} scrollYProgress={scrollYProgress} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ---------- Scroll Dot ---------- */

function ScrollDot({
  cardPeak,
  scrollYProgress,
}: {
  index: number;
  cardPeak: number;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [cardPeak - 0.08, cardPeak, cardPeak + 0.08],
    [0.3, 1, 0.3]
  );
  const scale = useTransform(
    scrollYProgress,
    [cardPeak - 0.08, cardPeak, cardPeak + 0.08],
    [0.6, 1.2, 0.6]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
    />
  );
}

export default CenterScrollShowcase;