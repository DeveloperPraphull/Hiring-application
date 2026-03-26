import { FaShoppingBag, FaShieldAlt, FaHeadset } from "react-icons/fa";
import type { IconType } from "react-icons";

type SidebarItem = {
  name: string;
  Icon: IconType;
  bg: string;
  badge: number | null;
};

const data: SidebarItem[] = [
  { name: "CRM", Icon: FaShoppingBag, bg: "bg-red-500", badge: null },
  { name: "COMPLIANCE", Icon: FaShieldAlt, bg: "bg-orange-500", badge: 2 },
  { name: "SUPPORT", Icon: FaHeadset, bg: "bg-blue-500", badge: null },
];

const LeftSidebar = () => {
  return (
    <div className="w-full flex flex-row lg:flex-col items-center lg:items-stretch gap-2.5 sm:gap-3 p-2 sm:p-3">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center justify-center text-center w-1/3 lg:w-full aspect-square bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-2xl p-2 sm:p-2.5 md:p-3 hover:scale-105 hover:bg-white hover:shadow-lg hover:shadow-gray-300/40 transition-all duration-300 cursor-pointer group shadow-sm"
        >
          {item.badge && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-lg shadow-red-500/30 z-10 ring-2 ring-white">
              {item.badge}
            </span>
          )}

          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 flex items-center justify-center text-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow ${item.bg}`}
          >
            <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
          </div>

          <span className="mt-1.5 text-[8px] sm:text-[10px] md:text-xs lg:text-[9px] xl:text-[10px] font-semibold text-gray-500 group-hover:text-gray-700 leading-tight truncate w-full transition-colors">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;