import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
];

const HiringCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % companies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[650px] rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden flex">

      {/* LEFT SIDE */}
      <div className="w-2/3 p-6 bg-[#f5f3ef]">
        <h2 className="text-xl font-semibold text-gray-900 leading-snug">
          Top Companies are <br /> Hiring in Your City
        </h2>

        <p className="text-gray-500 mt-3 text-sm">
          For Multiple Roles
        </p>

        <button className="mt-6 px-6 py-2 rounded-lg border border-yellow-500 text-yellow-600 font-medium hover:bg-yellow-50 transition">
          Register / Sign In
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/3 bg-[#eef1f7] flex flex-col items-center justify-center p-6 relative overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <p className="text-blue-600 text-sm font-medium mb-4">
              {companies[index].name}
            </p>

            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img
                src={companies[index].logo}
                alt={companies[index].name}
                className="w-16 object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default HiringCard;