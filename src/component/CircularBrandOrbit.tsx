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
} from "react-icons/si";

const brands = [
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiMongodb,
  SiRubyonrails,
];

export default function CircularBrandOrbit() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    containerSize: 400,
    radius: 180,
    iconSize: 50,
    textSize: "text-2xl"
  });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      let containerSize, radius, iconSize, textSize;

      if (screenWidth < 640) {
        // Mobile
        containerSize = 280;
        radius = 120;
        iconSize = 30;
        textSize = "text-lg";
      } else if (screenWidth < 1024) {
        // Tablet
        containerSize = 320;
        radius = 140;
        iconSize = 40;
        textSize = "text-xl";
      } else {
        // Desktop/Laptop
        containerSize = 400;
        radius = 180;
        iconSize = 50;
        textSize = "text-2xl";
      }

      setDimensions({ containerSize, radius, iconSize, textSize });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    let angle = 0;

    const animate = () => {
      angle += 0.2; // speed
      orbit.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="min-h-screen sm:h-screen flex items-center justify-center bg-gray-50 px-4 py-8 sm:py-0">

      <div className="relative" style={{ width: dimensions.containerSize, height: dimensions.containerSize }}>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2 className={`${dimensions.textSize} font-semibold text-gray-800 text-center px-4`}>
            Our Tech Stack
          </h2>
        </div>

        {/* Orbit */}
        <div
          ref={orbitRef}
          className="absolute inset-0"
          style={{ transformOrigin: "center center" }}
        >
          {brands.map((Icon, index) => {
            const angle = (index / brands.length) * 2 * Math.PI;
            const x = dimensions.radius * Math.cos(angle);
            const y = dimensions.radius * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px - ${dimensions.iconSize / 2}px)`,
                  top: `calc(50% + ${y}px - ${dimensions.iconSize / 2}px)`
                }}
              >
                <Icon
                  size={dimensions.iconSize}
                  className="text-gray-400 hover:text-black transition duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}