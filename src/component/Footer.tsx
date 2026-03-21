"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

type LinkItem = {
  label: string
  href: string
}

const navLinks: LinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const legalLinks: LinkItem[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
]

const brandLetters = ["H", "I", "R", "I", "N", "G"]

// Dot positions for each letter (relative positioning)
const dotPositions = [
  { hasTopDot: true, hasDiagonalDots: false }, // H
  { hasTopDot: true, hasDiagonalDots: false }, // I
  { hasTopDot: true, hasDiagonalDots: false }, // R
  { hasTopDot: true, hasDiagonalDots: false }, // I
  { hasTopDot: true, hasDiagonalDots: false }, // N
  { hasTopDot: true, hasDiagonalDots: true }, // G (has two dots)
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "ease-out",
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.5 + i * 0.1,
      ease: "ease-out",
    },
  }),
}

const floatAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "ease-in-out",
  },
}

const pulseAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "ease-in-out",
  },
}

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(247,59,32,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,59,32,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(247,59,32,0.08),transparent_50%)]" />

        {/* Floating particles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-2 h-2 bg-[#f73b20] rounded-full opacity-60"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-20 w-1 h-1 bg-[#f73b20] rounded-full opacity-40"
        />
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#f73b20] rounded-full opacity-50"
        />
      </div>

      <div className="relative z-10 pt-16 pb-8">
        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            {/* Brand Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-4"
              >
                Hiring
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-gray-400 mb-6 max-w-md"
              >
                Connecting talent with opportunity. We help companies find the perfect candidates
                and professionals discover their dream careers.
              </motion.p>

              {/* Social Links */}
              <motion.div
                variants={containerVariants}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    variants={itemVariants}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-[#f73b20] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h4
                variants={itemVariants}
                className="text-lg font-semibold text-white mb-4"
              >
                Quick Links
              </motion.h4>
              <nav className="space-y-2" aria-label="Quick links">
                {navLinks.map((link) => (
                  <motion.div key={link.label} variants={itemVariants}>
                    <a
                      href={link.href}
                      className="block text-gray-400 hover:text-[#f73b20] transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h4
                variants={itemVariants}
                className="text-lg font-semibold text-white mb-4"
              >
                Get In Touch
              </motion.h4>
              <div className="space-y-3 text-sm text-gray-400">
                <motion.p variants={itemVariants}>
                  <span className="block font-medium text-white">Email</span>
                  hello@hiring.com
                </motion.p>
                <motion.p variants={itemVariants}>
                  <span className="block font-medium text-white">Phone</span>
                  +1 (555) 123-4567
                </motion.p>
                <motion.p variants={itemVariants}>
                  <span className="block font-medium text-white">Address</span>
                  123 Business St, Suite 100<br />
                  New York, NY 10001
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Legal Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 border-t border-gray-800"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm"
            >
              © 2026 Hiring, all rights reserved.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <motion.div key={link.label} variants={itemVariants}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#f73b20] text-sm underline underline-offset-2 hover:no-underline transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brand Typography Section */}
      <div className="relative w-full mt-8 md:mt-16 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center items-end"
        >
          {brandLetters.map((letter, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Floating Dots */}
              {dotPositions[index].hasTopDot && (
                <motion.div
                  custom={index}
                  variants={dotVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  animate={floatAnimation}
                  className="w-8 h-8 md:w-12 lg:w-16 md:h-12 lg:h-16 bg-[#f73b20] rounded-full mb-2 shadow-lg shadow-[#f73b20]/30"
                />
              )}
              {dotPositions[index].hasDiagonalDots && (
                <motion.div
                  custom={index + 0.5}
                  variants={dotVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  animate={{
                    y: [-3, 7, -3],
                    transition: {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "ease-in-out",
                      delay: 0.5,
                    },
                  }}
                  className="absolute w-6 h-6 md:w-10 lg:w-12 md:h-10 lg:h-12 bg-[#f73b20] rounded-full -right-2 md:-right-4 top-8 md:top-10 lg:top-12 shadow-lg shadow-[#f73b20]/30"
                />
              )}
              {/* Letter */}
              <motion.span
                custom={index}
                variants={letterVariants}
                className="text-white font-bold leading-none select-none drop-shadow-lg"
                style={{
                  fontSize: "clamp(4rem, 15vw, 16rem)",
                  lineHeight: 0.85,
                }}
              >
                {letter}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="w-full h-2 bg-gradient-to-r from-[#f73b20] via-red-500 to-orange-500" />
    </footer>
  )
}
