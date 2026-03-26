

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
  SiFirebase,
  SiGooglecloud,
  SiGithub,
  SiRedis,
  SiPostgresql,
  SiTailwindcss,
  SiGraphql,
  SiFigma,
} from "react-icons/si";

const brands = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiRubyonrails, name: "Rails", color: "#CC0000" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
  { icon: SiGithub, name: "GitHub", color: "#181717" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

export default function CircularBrandCarousel() {
  const duplicated = [...brands, ...brands, ...brands];

  return (
    <section className="w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2">
          Trusted Technologies
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Powered by Industry-Leading Tools
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-6 sm:mb-8">
        <div className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max gap-6 sm:gap-10 md:gap-14 lg:gap-20 items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {duplicated.map((brand, index) => (
            <BrandCard key={`row1-${index}`} brand={brand} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max gap-6 sm:gap-10 md:gap-14 lg:gap-20 items-center"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...duplicated].reverse().map((brand, index) => (
            <BrandCard key={`row2-${index}`} brand={brand} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BrandCard({ brand }: { brand: (typeof brands)[number] }) {
  const Icon = brand.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.12, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="flex flex-col items-center justify-center gap-1.5 sm:gap-2
        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
        rounded-xl sm:rounded-2xl
        bg-white border border-gray-100
        shadow-sm hover:shadow-lg
        transition-shadow duration-300
        cursor-pointer group flex-shrink-0"
    >
      <Icon
        className="text-gray-300 group-hover:transition-colors group-hover:duration-300"
        style={{ fontSize: "clamp(24px, 4vw, 44px)" }}
        color={undefined}
      />
      <span
        className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
      >
        {brand.name}
      </span>
      <style>{`
        .group:hover svg { color: ${brand.color} !important; }
      `}</style>
    </motion.div>
  );
}
