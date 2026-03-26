import {
  BarChart3,
  DollarSign,
  Users,
  Briefcase,
  LayoutDashboard,
} from "lucide-react";

const menuItems = [
  { name: "Analytics", icon: BarChart3 },
  { name: "Finance", icon: DollarSign },
  { name: "HR", icon: Users },
  { name: "BPO", icon: Briefcase },
];

const Sidebar = () => {
  return (
    <div className="w-full bg-white/70 backdrop-blur-md border border-gray-200/60 rounded-xl flex md:flex-col justify-between p-2.5 sm:p-3 md:p-4 shadow-sm">

      {/* Top Section */}
      <div className="w-full">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6 px-1.5 sm:px-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-md shadow-blue-500/20">
            <LayoutDashboard className="text-white w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <span className="font-semibold text-gray-700 text-xs sm:text-sm md:text-base tracking-wide">
            Dashboard
          </span>
        </div>

        {/* Menu */}
        <ul className="flex md:flex-col gap-1.5 sm:gap-2 md:gap-2.5 overflow-x-auto md:overflow-visible scrollbar-hide">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === 0;

            return (
              <li
                key={item.name}
                className={`flex items-center gap-2 sm:gap-2.5 md:gap-3 min-w-[80px] sm:min-w-[100px] md:min-w-0 justify-center md:justify-start p-2 sm:p-2.5 md:p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md shadow-blue-500/20"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium text-[10px] sm:text-xs md:text-sm">
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="hidden md:block mt-4 lg:mt-6 p-3 lg:p-4 bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100 rounded-xl text-center">
        <p className="text-xs lg:text-sm text-gray-600 font-medium">Upgrade your plan 🚀</p>
      </div>
    </div>
  );
};

export default Sidebar;