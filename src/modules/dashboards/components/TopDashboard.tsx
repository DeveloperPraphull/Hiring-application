import TopCard from "./TopCard";
import {
  CheckCircle,
  BarChart3,
  DollarSign,
  Headphones,
  FolderPlus,
  Rocket,
  FileText,
  ClipboardCheck,
  Phone,
} from "lucide-react";
import { SiCivicrm } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const TopDashboard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 pb-2 px-2 sm:px-4 md:px-6 lg:px-8">

      {/* ── Tasks ── */}
      <TopCard icon={ClipboardCheck} title="Tasks" badge={97} color="bg-emerald-600">
        <div className="space-y-2 text-xs w-full">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <FolderPlus size={14} className="text-blue-500" />
              Project <span className="text-blue-500 font-bold">+</span>
            </span>
            <span className="font-semibold text-gray-800">27</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Rocket size={14} className="text-orange-500" />
              Project Launch
            </span>
            <span className="font-semibold text-gray-800">2</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <FileText size={14} className="text-purple-500" />
              Tech Update
            </span>
            <span className="font-semibold text-gray-500">T</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ClipboardCheck size={14} className="text-green-500" />
              Quarterly Audit
            </span>
            <span className="flex gap-0.5">
              <CheckCircle size={14} className="text-green-500" />
              <CheckCircle size={14} className="text-green-500" />
            </span>
          </div>
        </div>
      </TopCard>

      {/* ── Analytics ── */}
      <TopCard icon={BarChart3} title="Analytics" badge={27} color="bg-indigo-600">
        <div className="space-y-1.5 text-xs w-full">
          <div className="flex items-center gap-1.5">
            <CheckCircle size={14} className="text-green-500" />
            <span className="font-semibold text-gray-800">Tasks:</span>
            <span className="text-gray-500">Overdue: %</span>
          </div>
          <div className="space-y-1 text-gray-500 pl-1">
            <p className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              Project-Launch
            </p>
            <p className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
              Tech Update
            </p>
            <p className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Quarterly Audit
            </p>
          </div>
          <div className="border-t border-gray-200 pt-1.5 mt-1 flex justify-between text-[10px] text-gray-500">
            <span>10,405</span>
            <span>19,005</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="font-bold text-gray-800">$14,990</span>
            <span className="text-green-600 font-semibold">Scrn2D 55%</span>
          </div>
        </div>
      </TopCard>

      {/* ── CRM Pipeline ── */}
      <TopCard icon={SiCivicrm} title="CRM Pipeline" badge={29} color="bg-orange-600">
        <div className="space-y-1.5 text-xs w-full">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-800">10,450</span>
            <span className="text-green-600 text-xs font-semibold">↑22%</span>
          </div>
          <div className="flex gap-0.5 items-end h-8">
            {[5, 8, 6, 10, 7, 12, 9, 4].map((h, i) => (
              <div
                key={i}
                className="bg-orange-400 rounded-t w-2.5"
                style={{ height: `${h * 3}px` }}
              />
            ))}
          </div>
          <div className="border-t border-gray-200 pt-1.5 mt-1 space-y-1 text-gray-500">
            <div className="flex justify-between">
              <span>Metrics</span>
              <span className="font-semibold text-gray-800">$13,310</span>
            </div>
            <div className="flex justify-between">
              <span>Software</span>
              <span className="font-semibold text-gray-800">$17.2K</span>
            </div>
          </div>
        </div>
      </TopCard>

      {/* ── FRM Pipeline ── */}
      <TopCard icon={FaWpforms} title="FRM Pipeline" color="bg-red-600">
        <div className="space-y-1.5 text-xs w-full">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-red-500" />
            <span className="text-lg font-bold text-gray-800">584</span>
            <span className="text-green-600 text-xs font-semibold">↑5%</span>
          </div>
          <div className="space-y-1.5 text-gray-500 mt-1">
            <div className="flex justify-between">
              <span>Lead</span>
              <span className="font-semibold text-gray-800">$93,740</span>
            </div>
            <div className="flex justify-between">
              <span>Qualified</span>
              <span className="font-semibold text-gray-800">$13,310</span>
            </div>
            <div className="flex justify-between">
              <span>Software</span>
              <span className="font-semibold text-gray-800">$17.2K</span>
            </div>
          </div>
        </div>
      </TopCard>

      {/* ── Finance Overview ── */}
      <TopCard icon={GiTakeMyMoney} title="Finance Overview" color="bg-teal-600">
        <div className="space-y-1.5 text-xs w-full">
          <div className="flex items-center gap-2">
            <DollarSign size={14} className="text-teal-600" />
            <span className="text-lg font-bold text-gray-800">$85,700</span>
            <span className="text-red-500 text-xs font-semibold">-$9.9%</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {/* Mini donut chart */}
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 36 36" className="w-8 h-8">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#14b8a6" strokeWidth="4"
                  strokeDasharray="60 40" strokeDashoffset="25" />
              </svg>
            </div>
            <div className="text-[10px] text-gray-500">
              <p>Pending/Recent</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-1.5 mt-1 space-y-1 text-gray-500">
            <div className="flex justify-between">
              <span>Loads</span>
              <span className="font-semibold text-green-600">3.55%</span>
            </div>
            <div className="flex justify-between">
              <span>65 Transactions</span>
              <span className="font-semibold text-green-600">↑65%</span>
            </div>
          </div>
        </div>
      </TopCard>

      {/* ── Support Center ── */}
      <TopCard icon={Headphones} title="Support Center" color="bg-blue-600">
        <div className="space-y-1.5 text-xs w-full">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-800">1205</span>
            <span className="text-gray-500 text-xs">Tickets</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-red-500 font-bold text-sm">-52</span>
            <span className="text-gray-500">Open tickets</span>
          </div>
          <p className="text-[10px] text-gray-400 italic">Wait in process</p>
          <div className="border-t border-gray-200 pt-1.5 mt-1 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
              <span className="text-gray-700">Paul M</span>
              <span className="text-gray-400 ml-auto">— Unresolved</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              <span className="text-gray-700">Corell I</span>
              <span className="text-gray-400 ml-auto">— In Progress</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              <span className="text-gray-700">John R</span>
              <span className="text-gray-400 ml-auto">— Resolved</span>
            </div>
          </div>
        </div>
      </TopCard>

    </div>
  );
};

export default TopDashboard;