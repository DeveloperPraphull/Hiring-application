// import { motion } from "framer-motion";

// const items = [
//   "🇮🇳","🇺🇸","🇬🇧","🇯🇵","🇨🇦","🇩🇪","🇫🇷","🇮🇹",
//   "⚛️","🟢","🟦","🐍","💎","🅰️","🔥"
// ];

// const FloatingBalls = () => {
//   return (
//     <div className="absolute bottom-0 left-0 w-full overflow-hidden h-64 pointer-events-none">

//       <div className="relative w-full h-full">

//         {items.map((item, index) => {
//           const randomLeft = Math.random() * 100;
//           const randomDelay = Math.random() * 2;

//           return (
//             <motion.div
//               key={index}
//               initial={{ y: 200 }}
//               animate={{
//                 y: [0, -30, 0],
//               }}
//               transition={{
//                 duration: 2 + Math.random(),
//                 repeat: Infinity,
//                 delay: randomDelay,
//                 ease: "easeInOut",
//               }}
//               className="absolute"
//               style={{ left: `${randomLeft}%` }}
//             >
//               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-xl">
//                 {item}
//               </div>
//             </motion.div>
//           );
//         })}

//       </div>
//     </div>
//   );
// };

// export default FloatingBalls;

import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiRuby,
  SiRubyonrails,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiFirebase,
} from "react-icons/si";

const techIcons = [
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiRuby,
  SiRubyonrails,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiFirebase,
];

const FloatingTechBalls = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-72 overflow-hidden pointer-events-none">

      {techIcons.map((Icon, index) => {
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomSize = 50 + Math.random() * 30;

        return (
          <motion.div
            key={index}
            initial={{ y: 150 }}
            animate={{ y: [0, -40, 0] }}
            transition={{
              duration: 3 + Math.random(),
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ left: `${randomLeft}%` }}
          >
            <div
              className="bg-white rounded-full flex items-center justify-center shadow-2xl"
              style={{ width: randomSize, height: randomSize }}
            >
              <Icon size={randomSize / 2} />
            </div>
          </motion.div>
        );
      })}

    </div>
  );
};

export default FloatingTechBalls;