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

const PremiumScrollGallery = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative h-[100vh] bg-neutral-100">
      
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        <div className="relative w-[900px] h-[600px] perspective-1000">

          {images.map((img, i) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [300 - i * 60, -600 - i * 60]
            );

            const scale = useTransform(
              scrollYProgress,
              [0, 1],
              [0.85 + i * 0.03, 1]
            );

            const opacity = useTransform(
              scrollYProgress,
              [0, 0.2, 0.8, 1],
              [0, 1, 1, 0]
            );

            const blur = useTransform(
              scrollYProgress,
              [0, 0.3, 0.7, 1],
              ["10px", "0px", "0px", "10px"]
            );

            return (
              <motion.div
                key={i}
                style={{ y, scale, opacity }}
                className="absolute w-full h-[500px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
              >
                <motion.img
                  src={img}
                  style={{ filter: blur }}
                  className="w-full h-full object-cover"
                />

                {/* Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PremiumScrollGallery;