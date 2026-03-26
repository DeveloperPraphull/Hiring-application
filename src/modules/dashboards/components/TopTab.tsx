import {
  FaLaptopCode,
  FaChartLine,
  FaClipboardList,
  FaUserTie,
  FaShieldAlt,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

const tabs = [
  { name: "Tech", icon: <FaLaptopCode />, color: "bg-blue-500" },
  { name: "Marketing", icon: <FaChartLine />, color: "bg-green-500" },
  { name: "Sales", icon: <FaClipboardList />, color: "bg-cyan-500" },
  { name: "Auditing", icon: <FaShieldAlt />, color: "bg-orange-500" },
  { name: "HR", icon: <FaUsers />, color: "bg-purple-500" },
  { name: "BPO", icon: <FaHeadset />, color: "bg-blue-400" },
];

const TopTabs = () => {
  return (
    <div
      className="
        w-full 
        bg-white 
        rounded-2xl 
        shadow

        px-3 sm:px-4 md:px-6 
        py-3 sm:py-4

        flex flex-col lg:flex-row
        items-center
        justify-between

        gap-4
      "
    >
      {/* 🔹 Tabs Container */}
      <div
        className="
          w-full
          flex 
          lg:flex-1

          justify-start lg:justify-between
          items-center

          gap-2 sm:gap-2 md:gap-2

          overflow-x-auto lg:overflow-visible
        "
      >
        {/* 🔹 Left Tabs */}
        {tabs.slice(0, 3).map((tab) => (
          <div
            key={tab.name}
            className="flex flex-col items-center min-w-[50px] sm:min-w-[60px]"
          >
            <div
              className={`
                flex items-center justify-center
                text-white rounded-xl shadow

                w-10 h-10 
                sm:w-16 sm:h-16 
                md:w-18 md:h-18 
                lg:w-20 lg:h-20

                ${tab.color}
              `}
            >
              <span className="text-lg sm:text-xl md:text-2xl">
                {tab.icon}
              </span>
            </div>

            <span className="text-[10px] sm:text-xs md:text-sm mt-1 text-gray-600 text-center">
              {tab.name}
            </span>
          </div>
        ))}

        {/* 🔹 CEO (center on desktop, inline on mobile) */}
        <div
          className="
            flex flex-col items-center
            mx-2 sm:mx-4
            min-w-[80px]
          "
        >
          <div
            className="
              flex items-center justify-center
              bg-gray-200 rounded-full

              w-16 h-16 
              sm:w-18 sm:h-18 
              md:w-20 md:h-20
            "
          >
            <FaUserTie className="text-lg sm:text-xl md:text-2xl text-gray-700" />
          </div>

          <div
            className="
              mt-2
              px-2 sm:px-3 md:px-4
              py-1
              bg-blue-600 text-white
              rounded-full
              text-[10px] sm:text-xs md:text-sm
              font-semibold
              shadow
              whitespace-nowrap
            "
          >
            DEDICATED CEO
          </div>
        </div>

        {/* 🔹 Right Tabs */}
        {tabs.slice(3).map((tab) => (
          <div
            key={tab.name}
            className="flex flex-col items-center min-w-[70px] sm:min-w-[80px]"
          >
            <div
              className={`
                flex items-center justify-center
                text-white rounded-xl shadow

                w-14 h-14 
                sm:w-16 sm:h-16 
                md:w-18 md:h-18 
                lg:w-20 lg:h-20

                ${tab.color}
              `}
            >
              <span className="text-lg sm:text-xl md:text-2xl">
                {tab.icon}
              </span>
            </div>

            <span className="text-[10px] sm:text-xs md:text-sm mt-1 text-gray-600 text-center">
              {tab.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTabs;