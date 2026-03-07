"use client"

import { motion } from "framer-motion"

const letters = ["H", "I", "R", "I", "N", "G"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const letterVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const dotVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 15,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

export default function HiringAnimation() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f2eb]">
      <motion.div
        className="flex items-end justify-center gap-2 md:gap-4 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            variants={letterVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative dot above each letter */}
            <motion.div
              className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-[#0f5c45] mb-2 md:mb-3 lg:mb-4"
              variants={dotVariants}
              animate={floatAnimation}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            />
            
            {/* Letter */}
            <span
              className="text-[#0f5c45] font-bold leading-none select-none"
              style={{
                fontSize: "clamp(3rem, 12vw, 10rem)",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              {letter}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
