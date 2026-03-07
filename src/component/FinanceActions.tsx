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
    <section className="h-screen flex items-center justify-center relative bg-[#f3f3f3] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-300/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex gap-20 z-10"
      >
        {actions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.6, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Icon Box */}
            <div
              className={`${item.color} w-24 h-24 rounded-3xl flex items-center justify-center text-white text-5xl shadow-xl`}
            >
              {item.symbol}
            </div>

            {/* Text */}
            <h1 className="mt-6 text-6xl font-bold text-gray-800">
              {item.title}
            </h1>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default FinanceActions;