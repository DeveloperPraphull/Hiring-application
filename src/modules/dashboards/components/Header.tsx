import { FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";

const tabs = ["Dashboard", "Reports", "Projects", "Settings"];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="w-full bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-t-xl sm:rounded-t-2xl shadow-sm">

      {/* Main Bar */}
      <div className="px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-3">

          {/* LEFT */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <MdDashboard className="text-blue-600 text-lg sm:text-xl md:text-2xl flex-shrink-0" />
            <FiMenu className="text-gray-500 text-base sm:text-lg md:text-xl cursor-pointer flex-shrink-0 hover:text-gray-800 transition-colors" />

            {/* Desktop Tabs */}
            <nav className="hidden md:flex gap-1 lg:gap-1.5 xl:gap-2 ml-2 lg:ml-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-blue-100 text-blue-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* SEARCH (tablet+) */}
          <div className="hidden sm:flex items-center bg-gray-100/80 border border-gray-200 px-3 py-1.5 sm:py-2 rounded-lg min-w-0 w-28 sm:w-36 md:w-48 lg:w-60 xl:w-72 focus-within:border-blue-400 focus-within:bg-white transition-all">
            <FiSearch className="text-gray-400 mr-2 flex-shrink-0 text-sm" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-xs sm:text-sm w-full min-w-0 text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            <button
              className="sm:hidden p-1.5 text-gray-500 hover:text-blue-600 transition-colors"
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? <FiX className="text-base" /> : <FiSearch className="text-base" />}
            </button>

            <button className="relative p-1.5 text-gray-500 hover:text-blue-600 transition-colors">
              <FaBell className="text-sm sm:text-base md:text-lg" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>

            <button className="relative p-1.5 text-gray-500 hover:text-blue-600 transition-colors">
              <FaEnvelope className="text-sm sm:text-base md:text-lg" />
              <span className="absolute -top-0.5 -right-1 bg-red-500 text-white text-[8px] sm:text-[9px] min-w-[14px] sm:min-w-[16px] h-3.5 sm:h-4 flex items-center justify-center rounded-full font-bold leading-none ring-2 ring-white">
                9
              </span>
            </button>

            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center cursor-pointer shadow-lg shadow-blue-500/20">
              <FaUserCircle className="text-base sm:text-lg text-white/90" />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Search (animated) */}
      <div className={`sm:hidden overflow-hidden transition-all duration-200 ${showSearch ? "max-h-14 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-3 pb-2.5">
          <div className="flex items-center bg-gray-100 border border-gray-200 px-3 py-2 rounded-lg">
            <FiSearch className="text-gray-400 mr-2 flex-shrink-0 text-sm" />
            <input type="text" placeholder="Search..." className="bg-transparent outline-none text-xs w-full text-gray-700 placeholder-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Tabs */}
      <div className="md:hidden border-t border-gray-200/60">
        <div className="flex gap-1 sm:gap-2 px-3 py-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === tab
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Header;