import React from "react";
import {
  FaBuilding,
  FaGlobe,
  FaCogs,
  FaChartLine,
  FaBullhorn,
  FaUsers,
  FaClipboardCheck,
  FaHeadset,
  FaCog,
  FaLightbulb,
  FaPhoneAlt,
  FaBalanceScale,
  FaCube,
  FaChartBar,
  FaFileAlt,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";

interface DepartmentCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  titleColor: string;
  iconColor: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  icon,
  title,
  subtitle,
  titleColor,
  iconColor,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 border border-gray-100 hover:shadow-xl transition-shadow">
      <div className={`text-4xl ${iconColor} flex-shrink-0`}>
        {icon}
      </div>
      <div className="min-w-0">
        <h3
          className={`font-bold text-base ${titleColor} leading-tight`}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-gray-600 text-xs mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default function FigmaCEO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Header */}
        <div className="relative mb-6">
          <div className="bg-gradient-to-r from-[#1a4d7a] to-[#2563a0] rounded-[2.5rem] py-5 px-8 flex items-center justify-center gap-4 shadow-2xl relative overflow-hidden">
            {/* Dotted line from top left */}
            <div className="absolute -left-20 top-1/2 w-20 border-t-2 border-dashed border-gray-300 hidden lg:block"></div>

            <FaBuilding className="text-white text-5xl z-10" />
            <div className="text-center flex-1 z-10">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                  Any Company Can Come on Our Website
                </h1>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-12 bg-white/70"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                  &{" "}
                  <span className="text-[#ff9f43]">
                    Hire a CEO
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="h-0.5 w-12 bg-white/70"></div>
                </div>
              </div>
            </div>

            {/* Dotted line to right */}
            <div className="absolute -right-20 top-1/2 w-20 border-t-2 border-dashed border-gray-300 hidden lg:block"></div>
          </div>

          {/* Dotted arrow pointing down to subtitle */}
          <div className="absolute right-12 top-full w-0.5 h-8 bg-gradient-to-b from-gray-400 via-gray-300 to-transparent hidden md:block"></div>
          <div className="absolute right-[2.85rem] top-full mt-7">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-gray-400"></div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-full py-3 px-8 text-center mb-16 max-w-3xl mx-auto shadow-md border border-gray-300">
          <p className="text-lg md:text-xl font-semibold text-gray-800">
            (CEO Will Manage All Business Operations)
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr_1fr] xl:grid-cols-[380px_1fr_2fr] gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Section - Flow Diagram */}
          <div className="flex flex-col items-center space-y-6 lg:space-y-10">
            {/* Company */}
            <div className="border-[3px] border-dashed border-gray-400 rounded-xl p-8 bg-white flex flex-col items-center shadow-md w-full max-w-[280px]">
              <FaBuilding className="text-[#1a4d7a] text-6xl mb-4" />
              <p className="text-2xl font-bold text-gray-800">
                Company
              </p>
            </div>

            {/* Arrow Down */}
            <FaArrowRight className="text-green-500 text-4xl rotate-90" />

            {/* Website */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-[4px] border-[#2563a0] flex flex-col items-center relative w-full max-w-[280px]">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="bg-white rounded-full p-4 shadow-lg border-2 border-blue-200">
                  <FaGlobe className="text-[#3b82f6] text-5xl" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-gray-800 leading-tight">
                  Visit Website
                </p>
                <p className="text-xl font-bold text-gray-800">
                  & Hire CEO
                </p>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-4 bg-gradient-to-b from-gray-300/50 to-transparent rounded-full blur-md"></div>
            </div>
          </div>

          {/* Center Section - CEO Circle */}
          <div className="flex flex-col items-center justify-start pt-8 relative">
            {/* Dotted line from top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-16 border-l-2 border-dashed border-gray-400 -mt-16 hidden lg:block"></div>

            {/* Arrow from left */}
            <div className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-full hidden lg:flex items-center">
              <div className="w-12 border-t-2 border-dashed border-blue-400"></div>
              <FaArrowRight className="text-blue-500 text-3xl -ml-1" />
            </div>

            {/* CEO Circle */}
            <div className="relative">
              {/* Outer dashed circle */}
              <div className="border-[3px] border-dashed border-gray-400 rounded-full p-3">
                {/* Inner solid circle */}
                <div className="bg-gradient-to-br from-[#0f2a42] via-[#1a3a52] to-[#0f2a42] rounded-full p-14 shadow-2xl relative overflow-hidden">
                  {/* CEO Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <FaUserTie className="text-[#2d5470] text-8xl mb-1" />
                    <p className="text-white text-6xl font-bold tracking-wider">
                      CEO
                    </p>
                  </div>
                </div>
              </div>

              {/* Central Leader Label */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white border-2 border-dashed border-gray-400 rounded-full px-6 py-2 whitespace-nowrap shadow-md">
                <p className="text-base font-semibold text-gray-700">
                  (Central Leader)
                </p>
              </div>
            </div>

            {/* Arrows pointing to departments */}
            <div className="hidden xl:block">
              <div className="absolute right-0 top-[12%]">
                <div className="flex items-center">
                  <div className="w-8 border-t-2 border-black"></div>
                  <FaArrowRight className="text-black text-xl -ml-1" />
                </div>
              </div>
              <div className="absolute right-0 top-[28%]">
                <div className="flex items-center">
                  <div className="w-8 border-t-2 border-black"></div>
                  <FaArrowRight className="text-black text-xl -ml-1" />
                </div>
              </div>
              <div className="absolute right-0 top-[44%]">
                <div className="flex items-center">
                  <div className="w-8 border-t-2 border-black"></div>
                  <FaArrowRight className="text-black text-xl -ml-1" />
                </div>
              </div>
              <div className="absolute right-0 top-[60%]">
                <div className="flex items-center">
                  <div className="w-8 border-t-2 border-black"></div>
                  <FaArrowRight className="text-black text-xl -ml-1" />
                </div>
              </div>
              <div className="absolute right-0 top-[76%]">
                <div className="flex items-center">
                  <div className="w-8 border-t-2 border-black"></div>
                  <FaArrowRight className="text-black text-xl -ml-1" />
                </div>
              </div>
            </div>

            {/* Dotted lines going down to bottom section */}
            <div className="absolute bottom-0 left-[25%] translate-y-full h-24 border-l-2 border-dashed border-orange-400 hidden lg:block"></div>
            <div className="absolute bottom-0 left-[50%] translate-y-full h-24 border-l-2 border-dashed border-orange-500 hidden lg:block"></div>
            <div className="absolute bottom-0 left-[75%] translate-y-full h-24 border-l-2 border-dashed border-gray-700 hidden lg:block"></div>
          </div>

          {/* Right Section - Department Grid (2 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4">
            {/* Column 1 */}
            <div className="space-y-3">
              <DepartmentCard
                icon={<FaCogs />}
                title="TECH"
                subtitle="(Development & IT)"
                titleColor="text-blue-600"
                iconColor="text-blue-500"
              />
              <DepartmentCard
                icon={<FaChartLine />}
                title="SALES"
                subtitle="(Target & Revenue)"
                titleColor="text-gray-900"
                iconColor="text-orange-500"
              />
              <DepartmentCard
                icon={<FaBullhorn />}
                title="MARKETING"
                subtitle="(Digital & Growth)"
                titleColor="text-gray-900"
                iconColor="text-orange-600"
              />
              <DepartmentCard
                icon={<FaUsers />}
                title="HR"
                subtitle="(Hiring & Management)"
                titleColor="text-gray-900"
                iconColor="text-purple-500"
              />
              <DepartmentCard
                icon={<FaClipboardCheck />}
                title="AUDITING"
                subtitle="(Finance & Compliance)"
                titleColor="text-orange-500"
                iconColor="text-orange-500"
              />
              <DepartmentCard
                icon={<FaHeadset />}
                title="BPO"
                subtitle="(Support & Operations)"
                titleColor="text-teal-600"
                iconColor="text-teal-500"
              />
              <DepartmentCard
                icon={<FaChartLine />}
                title="FINANCE"
                subtitle="(Accounts & Planning)"
                titleColor="text-[#0f4c75]"
                iconColor="text-green-600"
              />
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <DepartmentCard
                icon={<FaCog />}
                title="OPERATIONS"
                subtitle="(Process & Logistics)"
                titleColor="text-gray-900"
                iconColor="text-orange-500"
              />
              <DepartmentCard
                icon={<FaLightbulb />}
                title="STRATEGY"
                subtitle="(Business Growth)"
                titleColor="text-blue-700"
                iconColor="text-blue-500"
              />
              <DepartmentCard
                icon={<FaPhoneAlt />}
                title="CUSTOMER SUPPORT"
                subtitle=""
                titleColor="text-gray-900"
                iconColor="text-orange-500"
              />
              <DepartmentCard
                icon={<FaBalanceScale />}
                title="LEGAL"
                subtitle="(Contracts & Policies)"
                titleColor="text-orange-500"
                iconColor="text-orange-600"
              />
              <DepartmentCard
                icon={<FaCube />}
                title="PRODUCT"
                subtitle="(Planning & Delivery)"
                titleColor="text-teal-700"
                iconColor="text-purple-600"
              />
              <DepartmentCard
                icon={<FaChartBar />}
                title="DATA & ANALYTICS"
                subtitle=""
                titleColor="text-blue-600"
                iconColor="text-blue-500"
              />
              <DepartmentCard
                icon={<FaFileAlt />}
                title="ADMIN & BACK OFFICE"
                subtitle=""
                titleColor="text-orange-600"
                iconColor="text-red-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-32 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-3xl p-10 border-[3px] border-dashed border-gray-300 relative shadow-lg">
          {/* Dotted lines coming from above - properly positioned */}
          <div className="absolute -top-24 left-[25%] h-24 border-l-2 border-dashed border-green-500 hidden lg:block"></div>
          <div className="absolute -top-24 left-[50%] h-24 border-l-2 border-dashed border-orange-400 hidden lg:block"></div>
          <div className="absolute -top-24 left-[75%] h-24 border-l-2 border-dashed border-teal-500 hidden lg:block"></div>

          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
              <FaArrowRight className="text-green-500 text-3xl" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Business Run Smoothly &{" "}
                <span className="text-green-600">
                  Efficiently
                </span>
              </h2>
              <FaArrowRight className="text-orange-500 text-3xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* One CEO */}
            <div className="flex flex-col items-center relative">
              <FaUserTie className="text-[#1a4d7a] text-7xl mb-4" />
              <p className="text-2xl font-bold text-gray-800 mb-4">
                One CEO
              </p>
              <div className="hidden md:flex items-center absolute -right-12 top-1/2 -translate-y-1/2">
                <div className="w-16 border-t-2 border-dashed border-gray-400"></div>
                <FaArrowRight className="text-gray-400 text-2xl -ml-1" />
              </div>
            </div>

            {/* Manages All */}
            <div className="flex flex-col items-center relative">
              <FaCogs className="text-orange-500 text-7xl mb-4" />
              <p className="text-2xl font-bold text-gray-800 mb-4">
                Manages All
              </p>
              <div className="hidden md:flex items-center absolute -right-12 top-1/2 -translate-y-1/2">
                <div className="w-16 border-t-2 border-dashed border-gray-400"></div>
                <FaArrowRight className="text-gray-400 text-2xl -ml-1" />
              </div>
            </div>

            {/* Grow Business */}
            <div className="flex flex-col items-center">
              <FaChartLine className="text-teal-500 text-7xl mb-4" />
              <p className="text-2xl font-bold text-gray-800">
                Grow Business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}