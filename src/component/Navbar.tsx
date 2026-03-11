import { useState } from "react";
import {
  FaInfoCircle,
  FaNewspaper,
  FaHandshake,
  FaImages,
  FaFileAlt,
  FaChartLine,
  FaUserTie,
  FaBuilding,
  FaBriefcase,
  FaPhone
} from "react-icons/fa";

function NavItem({ name, icon }) {
  return (
    <li className="flex items-center justify-between px-2 py-1 cursor-pointer
    rounded-lg group hover:bg-white/20 transition">

      <span className="group-hover:translate-x-1 transition">
        {name}
      </span>

      <span className="opacity-0 group-hover:opacity-100 transition">
        {icon}
      </span>

    </li>
  );
}

function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999]">
        <div
          className="flex items-center gap-3 px-6 py-3 rounded-full
          bg-white/20 backdrop-blur-xl
          border border-white/30
          shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative"
        >

          {/* Home */}
          <button className="w-10 h-10 flex items-center justify-center 
          rounded-full bg-white text-red-500 shadow-md hover:scale-110 transition">
            🏠
          </button>

          {/* PERSONAL */}
          <div
            className="relative"
            onMouseEnter={() => setActive("personal")}
            onMouseLeave={() => setActive(null)}
          >
            <button className="px-5 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition">
              Personal ▾
            </button>

            {active === "personal" && (
              <div className="absolute bottom-14 left-0 w-64 p-5 rounded-2xl bg-red-500 text-white shadow-2xl">
                <ul className="space-y-2">
                  <NavItem name="About" icon={<FaInfoCircle />} />
                  <NavItem name="Newsroom" icon={<FaNewspaper />} />
                  <NavItem name="Partnerships" icon={<FaHandshake />} />
                  <NavItem name="Media Assets" icon={<FaImages />} />
                  <NavItem name="Release Notes" icon={<FaFileAlt />} />
                </ul>
              </div>
            )}
          </div>

          {/* BUSINESS */}
          <div
            className="relative"
            onMouseEnter={() => setActive("business")}
            onMouseLeave={() => setActive(null)}
          >
            <button className="px-5 py-2 rounded-full text-gray-800 hover:bg-white/40 transition">
              Business ▾
            </button>

            {active === "business" && (
              <div className="absolute bottom-14 left-0 w-64 p-5 rounded-2xl bg-white text-gray-800 shadow-2xl">
                <ul className="space-y-2">
                  <NavItem name="Analytics" icon={<FaChartLine />} />
                  <NavItem name="Clients" icon={<FaUserTie />} />
                  <NavItem name="Companies" icon={<FaBuilding />} />
                </ul>
              </div>
            )}
          </div>

          {/* COMPANY */}
          <div
            className="relative"
            onMouseEnter={() => setActive("company")}
            onMouseLeave={() => setActive(null)}
          >
            <button className="px-5 py-2 rounded-full text-gray-800 hover:bg-white/40 transition">
              Company ▾
            </button>

            {active === "company" && (
              <div className="absolute bottom-14 left-0 w-64 p-5 rounded-2xl bg-white text-gray-800 shadow-2xl">
                <ul className="space-y-2">
                  <NavItem name="Careers" icon={<FaBriefcase />} />
                  <NavItem name="Contact Us" icon={<FaPhone />} />
                  <NavItem name="About Company" icon={<FaBuilding />} />
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;