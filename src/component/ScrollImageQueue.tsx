import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
];

const ScrollImageQueue = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-white">
      
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        <div className="relative w-[800px] h-[600px]">

          {images.map((img, i) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [300 - i * 40, -400 - i * 40]
            );

            const scale = useTransform(
              scrollYProgress,
              [0, 1],
              [0.9 + i * 0.02, 1]
            );

            return (
              <motion.img
                key={i}
                src={img}
                style={{ y, scale }}
                className="absolute w-full h-[450px] object-cover rounded-3xl shadow-2xl"
              />
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default ScrollImageQueue;