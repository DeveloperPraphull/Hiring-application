import { useEffect, useRef } from "react";
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

  const radius = 180;

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">

      <div className="relative w-[400px] h-[400px]">

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2 className="text-2xl font-semibold text-gray-800">
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
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px - 25px)`,
                  top: `calc(50% + ${y}px - 25px)`
                }}
              >
                <Icon
                  size={50}
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