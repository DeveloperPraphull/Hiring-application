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
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden flex flex-col lg:flex-row">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-8 bg-[#f5f3ef] flex flex-col justify-center">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 leading-snug">
          Top Companies are <br /> Hiring in Your City
        </h2>

        <p className="text-gray-500 mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base">
          For Multiple Roles
        </p>

        <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 rounded-lg border border-yellow-500 text-yellow-600 font-medium text-sm sm:text-base hover:bg-yellow-50 transition w-fit">
          Register / Sign In
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3 bg-[#eef1f7] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden min-h-48 sm:min-h-56 lg:min-h-auto">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <p className="text-blue-600 text-xs sm:text-sm lg:text-base font-medium mb-3 sm:mb-4">
              {companies[index].name}
            </p>

            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img
                src={companies[index].logo}
                alt={companies[index].name}
                className="w-10 sm:w-12 lg:w-16 object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default HiringCard;