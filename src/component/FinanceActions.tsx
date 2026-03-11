// import { motion } from "framer-motion";

// const AddSection = () => {
//   return (
//     <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[#f3f3f3]">

//       {/* Background Glow Effect */}
//       <div className="absolute w-[500px] h-[500px] bg-green-300/30 rounded-full blur-3xl"></div>

//       {/* Animated Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         viewport={{ once: false }}
//         className="flex items-center gap-8 z-10"
//       >
//         {/* Plus Icon Box */}
//         <motion.div
//           initial={{ rotate: -180, scale: 0 }}
//           whileInView={{ rotate: 0, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="bg-green-500 w-24 h-24 rounded-3xl flex items-center justify-center text-white text-5xl shadow-xl"
//         >
//           +
//         </motion.div>

//         {/* Add Text */}
//         <motion.h1
//           initial={{ scale: 0.8 }}
//           whileInView={{ scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-[110px] font-bold text-green-500"
//         >
//           Add
//         </motion.h1>
//       </motion.div>

//     </section>
//   );
// };

// export default AddSection;

import { motion } from "framer-motion";

const actions = [
  { title: "Add", color: "bg-green-500", symbol: "+" },
  { title: "Send", color: "bg-blue-500", symbol: "➜" },
  { title: "Exchange", color: "bg-red-500", symbol: "⇄" },
];

const FinanceActions = () => {
  return (
    <section className="min-h-screen sm:h-screen flex items-center justify-center relative bg-[#f3f3f3] overflow-hidden px-4 py-8 sm:py-0">

      {/* Background Glow - Responsive */}
      <div className="absolute w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] bg-green-300/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 z-10 flex-wrap sm:flex-nowrap justify-center"
      >
        {actions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.6, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center w-full sm:w-auto"
          >
            {/* Icon Box - Responsive */}
            <div
              className={`${item.color} w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl shadow-xl`}
            >
              {item.symbol}
            </div>

            {/* Text - Responsive */}
            <h1 className="mt-3 sm:mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              {item.title}
            </h1>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default FinanceActions;