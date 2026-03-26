import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiMongodb,
  SiRubyonrails,
  SiGooglecloud,
  SiGithub,
  SiRedis,
  SiPostgresql,
  SiTailwindcss,
  SiGraphql,
  SiFigma,
  SiFirebase,
} from "react-icons/si";

const brands = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
  { icon: SiGithub, name: "GitHub", color: "#181717" },
];

const outerBrands = [
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiRubyonrails, name: "Rails", color: "#CC0000" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
];

export default function CircularBrandOrbit() {
  const innerOrbitRef = useRef<HTMLDivElement>(null);
  const outerOrbitRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({
    containerSize: 520,
    innerRadius: 140,
    outerRadius: 230,
    iconSize: 38,
    outerIconSize: 30,
    textSize: "text-2xl",
  });

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setDimensions({ containerSize: 300, innerRadius: 90, outerRadius: 135, iconSize: 24, outerIconSize: 20, textSize: "text-base" });
      } else if (w < 640) {
        setDimensions({ containerSize: 360, innerRadius: 110, outerRadius: 160, iconSize: 28, outerIconSize: 22, textSize: "text-lg" });
      } else if (w < 1024) {
        setDimensions({ containerSize: 440, innerRadius: 125, outerRadius: 190, iconSize: 32, outerIconSize: 26, textSize: "text-xl" });
      } else {
        setDimensions({ containerSize: 520, innerRadius: 140, outerRadius: 230, iconSize: 38, outerIconSize: 30, textSize: "text-2xl" });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const inner = innerOrbitRef.current;
    const outer = outerOrbitRef.current;
    if (!inner || !outer) return;

    let angle = 0;
    let animId: number;

    const animate = () => {
      angle += 0.15;
      inner.style.transform = `rotate(${angle}deg)`;
      outer.style.transform = `rotate(${-angle * 0.6}deg)`;
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50/50 to-white px-4 py-12 sm:py-0 overflow-hidden relative">

      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-violet-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative" style={{ width: dimensions.containerSize, height: dimensions.containerSize }}>

        {/* Orbit ring guides */}
        <div
          className="absolute rounded-full border border-gray-200/60"
          style={{
            width: dimensions.innerRadius * 2,
            height: dimensions.innerRadius * 2,
            left: `calc(50% - ${dimensions.innerRadius}px)`,
            top: `calc(50% - ${dimensions.innerRadius}px)`,
          }}
        />
        <div
          className="absolute rounded-full border border-gray-200/40 border-dashed"
          style={{
            width: dimensions.outerRadius * 2,
            height: dimensions.outerRadius * 2,
            left: `calc(50% - ${dimensions.outerRadius}px)`,
            top: `calc(50% - ${dimensions.outerRadius}px)`,
          }}
        />

        {/* Center hub */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-violet-200/30 rounded-full blur-xl scale-150" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-xl shadow-blue-100/40">
              <div className="text-center">
                <p className={`${dimensions.textSize} font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent`}>
                  Tech
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wider uppercase mt-0.5">
                  Stack
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Inner orbit */}
        <div
          ref={innerOrbitRef}
          className="absolute inset-0"
          style={{ transformOrigin: "center center" }}
        >
          {brands.map((brand, index) => {
            const angle = (index / brands.length) * 2 * Math.PI;
            const x = dimensions.innerRadius * Math.cos(angle);
            const y = dimensions.innerRadius * Math.sin(angle);
            const Icon = brand.icon;
            const key = `inner-${index}`;
            const isHovered = hoveredIndex === key;

            return (
              <div
                key={key}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px - ${(dimensions.iconSize + 16) / 2}px)`,
                  top: `calc(50% + ${y}px - ${(dimensions.iconSize + 16) / 2}px)`,
                }}
              >
                <div
                  onMouseEnter={() => setHoveredIndex(key)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer"
                  style={{
                    width: dimensions.iconSize + 16,
                    height: dimensions.iconSize + 16,
                    background: isHovered
                      ? `linear-gradient(135deg, ${brand.color}22, ${brand.color}11)`
                      : "rgba(255,255,255,0.8)",
                    border: `1px solid ${isHovered ? brand.color + "44" : "rgba(0,0,0,0.06)"}`,
                    boxShadow: isHovered ? `0 0 20px ${brand.color}22, 0 0 40px ${brand.color}11` : "0 1px 3px rgba(0,0,0,0.06)",
                    transform: isHovered ? "scale(1.25)" : "scale(1)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Icon
                    size={dimensions.iconSize}
                    style={{ color: isHovered ? brand.color : "#94a3b8" }}
                    className="transition-colors duration-300"
                  />
                  {isHovered && (
                    <span
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-medium whitespace-nowrap px-1.5 py-0.5 rounded bg-white/90 shadow-sm border border-gray-100"
                      style={{ color: brand.color }}
                    >
                      {brand.name}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Outer orbit */}
        <div
          ref={outerOrbitRef}
          className="absolute inset-0"
          style={{ transformOrigin: "center center" }}
        >
          {outerBrands.map((brand, index) => {
            const angle = (index / outerBrands.length) * 2 * Math.PI + Math.PI / outerBrands.length;
            const x = dimensions.outerRadius * Math.cos(angle);
            const y = dimensions.outerRadius * Math.sin(angle);
            const Icon = brand.icon;
            const key = `outer-${index}`;
            const isHovered = hoveredIndex === key;

            return (
              <div
                key={key}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px - ${(dimensions.outerIconSize + 14) / 2}px)`,
                  top: `calc(50% + ${y}px - ${(dimensions.outerIconSize + 14) / 2}px)`,
                }}
              >
                <div
                  onMouseEnter={() => setHoveredIndex(key)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer"
                  style={{
                    width: dimensions.outerIconSize + 14,
                    height: dimensions.outerIconSize + 14,
                    background: isHovered
                      ? `linear-gradient(135deg, ${brand.color}22, ${brand.color}11)`
                      : "rgba(255,255,255,0.7)",
                    border: `1px solid ${isHovered ? brand.color + "44" : "rgba(0,0,0,0.05)"}`,
                    boxShadow: isHovered ? `0 0 16px ${brand.color}22` : "0 1px 2px rgba(0,0,0,0.04)",
                    transform: isHovered ? "scale(1.3)" : "scale(1)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Icon
                    size={dimensions.outerIconSize}
                    style={{ color: isHovered ? brand.color : "#9ca3af" }}
                    className="transition-colors duration-300"
                  />
                  {isHovered && (
                    <span
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-medium whitespace-nowrap px-1.5 py-0.5 rounded bg-white/90 shadow-sm border border-gray-100"
                      style={{ color: brand.color }}
                    >
                      {brand.name}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}