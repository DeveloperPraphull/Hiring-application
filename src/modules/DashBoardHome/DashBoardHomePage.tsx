import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area,
} from "recharts";
import {
  ChevronDown, Mail, TrendingUp, Users, BarChart3,
  Sparkles, ChevronUp,
} from "lucide-react";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const itPieData = [
  { name: "Active", value: 235, color: "#22c55e" },
  { name: "Billing", value: 256, color: "#f59e0b" },
  { name: "PPO", value: 90, color: "#3b82f6" },
  { name: "Other", value: 120, color: "#ef4444" },
  { name: "Extra", value: 80, color: "#8b5cf6" },
];

const hrPieData = [
  { name: "Managers", value: 95, color: "#3b82f6" },
  { name: "Staff", value: 95, color: "#6366f1" },
  { name: "Other", value: 40, color: "#e2e8f0" },
];

const expensesData = [
  { name: "IT", value: 45, fill: "#3b82f6" },
  { name: "Marketing", value: 35, fill: "#22c55e" },
  { name: "Sales", value: 28, fill: "#f59e0b" },
  { name: "HR", value: 20, fill: "#ef4444" },
  { name: "Office", value: 15, fill: "#8b5cf6" },
];

const revenueData = [
  { name: "1am", value: 40000 },
  { name: "00mm", value: 55000 },
  { name: "3ar", value: 48000 },
  { name: "0.0om", value: 62000 },
  { name: "6Am", value: 58000 },
  { name: "5ul", value: 72000 },
  { name: "7hm", value: 85000 },
  { name: "8em", value: 110000 },
  { name: "6om", value: 130000 },
  { name: "9Ap", value: 152000 },
];

/* ═══════════════════════════════════════════
   REUSABLE CARD SHELL
   ═══════════════════════════════════════════ */

const DeptCard = ({
  headerBg,
  headerIcon,
  title,
  children,
}: {
  headerBg: string;
  headerIcon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
    {/* Colored header bar */}
    <div className={`${headerBg} px-4 py-2.5 flex items-center justify-between`}>
      <div className="flex items-center gap-2">
        {headerIcon}
        <span className="text-white font-bold text-base">{title}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
          <BarChart3 className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
          <Users className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </div>
    <div className="p-4 flex-1">{children}</div>
  </div>
);

/* stat row helper */
const StatRow = ({
  icon,
  iconColor,
  label,
  value,
  barColor,
}: {
  icon: string;
  iconColor: string;
  label: string;
  value: string;
  barColor: string;
}) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex items-center gap-2">
      <span className={`text-xs ${iconColor}`}>{icon}</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-gray-800">{value}</span>
      <div className={`w-8 h-2 ${barColor} rounded-full`} />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   MAIN DASHBOARD
   ═══════════════════════════════════════════ */

const tabs = ["Daily", "Weekly", "Monthly", "Custom"];

const DashboardHomePage = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-50/60 to-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-5">
        {/* ─── HEADER ─── */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard Home Page
            </h1>
            <div className="flex items-center gap-4">
              <Sparkles className="text-yellow-400 w-5 h-5" />
              <span className="text-2xl font-bold text-gray-800">$523,900</span>
              <button className="flex items-center gap-2 px-5 py-2 border-2 border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition">
                EXPORT
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tabs + Updates */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-full sm:w-auto overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div>
                <span className="text-xs text-gray-400 block">Updates :</span>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                    U
                  </div>
                  <span className="text-xs text-gray-600">
                    New sales strategy initiated in Marketing
                  </span>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                    A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════
           TOP ROW — 4 department cards
           ═══════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
          {/* ── IT CARD ── */}
          <DeptCard
            headerBg="bg-blue-500"
            headerIcon={<Mail className="w-4 h-4 text-white" />}
            title="IT"
          >
            <p className="text-sm text-gray-500 font-medium">IT Support Tickets</p>
            <div className="flex items-center justify-between mt-1">
              <div>
                <p className="text-2xl font-bold text-gray-900">$195,000</p>
                <p className="text-xs text-green-500 font-medium mt-0.5">
                  Amoun Stickets
                </p>
              </div>
              {/* Mini Donut */}
              <div className="w-16 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={itPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={16}
                      outerRadius={28}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {itPieData.map((d, i) => (
                        <Cell key={i} fill={d.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-3 space-y-0.5">
              <StatRow icon="📊" iconColor="text-green-500" label="Active Tickets" value="235" barColor="bg-green-400" />
              <StatRow icon="🟡" iconColor="text-yellow-500" label="Billing" value="256" barColor="bg-yellow-400" />
              <StatRow icon="🟦" iconColor="text-blue-500" label="PPO" value="9P" barColor="bg-red-400" />
            </div>
          </DeptCard>

          {/* ── MARKETING CARD ── */}
          <DeptCard
            headerBg="bg-green-500"
            headerIcon={<TrendingUp className="w-4 h-4 text-white" />}
            title="Marketing"
          >
            <p className="text-sm text-gray-500 font-medium">Website Traffic</p>
            <div className="flex items-center justify-between mt-1">
              <div>
                <p className="text-2xl font-bold text-gray-900">$135,000</p>
                <p className="text-xs text-green-500 font-medium mt-0.5">
                  Pusitmed Visitors
                </p>
              </div>
              {/* Mini Bars */}
              <div className="w-16 h-14 flex items-end gap-[3px]">
                {[40, 55, 70, 50, 65].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background: ["#3b82f6", "#f59e0b", "#22c55e", "#ef4444", "#8b5cf6"][i],
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-3 space-y-0.5">
              <StatRow icon="🟢" iconColor="text-green-500" label="Organic" value="58,300" barColor="bg-green-400" />
              <StatRow icon="🟡" iconColor="text-yellow-500" label="Paid" value="90,000" barColor="bg-blue-400" />
              <StatRow icon="🟠" iconColor="text-orange-500" label="Social" value="31,301" barColor="bg-orange-400" />
            </div>
          </DeptCard>

          {/* ── SALES CARD ── */}
          <DeptCard
            headerBg="bg-[#f47458]"
            headerIcon={<Users className="w-4 h-4 text-white" />}
            title="Sales"
          >
            <p className="text-sm text-gray-500 font-medium">Sales Funnel</p>
            <div className="flex items-center justify-between mt-1">
              <div>
                <p className="text-2xl font-bold text-gray-900">$90,720</p>
                <p className="text-xs text-green-500 font-medium mt-0.5">
                  Cuatorled Tickets
                </p>
              </div>
              {/* Stacked horizontal bars */}
              <div className="w-20 h-14 flex flex-col justify-center gap-1.5">
                <div className="flex h-3 rounded overflow-hidden">
                  <div className="bg-blue-500" style={{ width: "40%" }} />
                  <div className="bg-green-400" style={{ width: "35%" }} />
                  <div className="bg-yellow-400" style={{ width: "25%" }} />
                </div>
                <div className="flex h-3 rounded overflow-hidden">
                  <div className="bg-blue-500" style={{ width: "50%" }} />
                  <div className="bg-orange-400" style={{ width: "30%" }} />
                  <div className="bg-red-400" style={{ width: "20%" }} />
                </div>
                <div className="flex h-3 rounded overflow-hidden">
                  <div className="bg-green-500" style={{ width: "45%" }} />
                  <div className="bg-blue-400" style={{ width: "35%" }} />
                  <div className="bg-purple-400" style={{ width: "20%" }} />
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-0.5">
              <StatRow icon="🔴" iconColor="text-red-500" label="Leads" value="1,652" barColor="bg-red-400" />
              <StatRow icon="🟢" iconColor="text-green-500" label="Proposal" value="1,652" barColor="bg-green-400" />
              <StatRow icon="🟦" iconColor="text-blue-500" label="Won" value="1,643" barColor="bg-blue-400" />
            </div>
          </DeptCard>

          {/* ── HR CARD ── */}
          <DeptCard
            headerBg="bg-[#1e3a5f]"
            headerIcon={<Mail className="w-4 h-4 text-white" />}
            title="HR"
          >
            <p className="text-sm text-gray-500 font-medium">Active Employees</p>
            <div className="flex items-center justify-between mt-1">
              <div>
                <p className="text-2xl font-bold text-gray-900">$58,680</p>
                <p className="text-xs text-green-500 font-medium mt-0.5">
                  Active employees
                </p>
              </div>
              {/* Mini Pie */}
              <div className="w-16 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={hrPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={16}
                      outerRadius={28}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {hrPieData.map((d, i) => (
                        <Cell key={i} fill={d.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-3 space-y-0.5">
              <StatRow icon="👥" iconColor="text-blue-500" label="Managers" value="95" barColor="bg-green-400" />
              <StatRow icon="👥" iconColor="text-blue-500" label="Staff" value="95" barColor="bg-red-400" />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-gray-400">Setting hmploy pes</span>
              <div className="flex gap-1">
                <span className="text-xs">✅</span>
                <span className="text-xs">📧</span>
                <span className="text-xs">📋</span>
              </div>
            </div>
          </DeptCard>
        </div>

        {/* ═══════════════════════════════════
           BOTTOM ROW — BPO, Finance, Revenue
           ═══════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4">
          {/* ── BPO CARD ── */}
          <div className="xl:col-span-3 sm:col-span-1">
            <DeptCard
              headerBg="bg-[#f47458]"
              headerIcon={<span className="text-white text-sm">⊙</span>}
              title="BPO"
            >
              <p className="text-sm text-gray-500 font-medium">Customer Satisfaction</p>
              <div className="flex items-center justify-between mt-1">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-gray-900">90%</p>
                    <div className="flex gap-1">
                      <span className="text-blue-500 text-sm">▶</span>
                      <span className="text-green-500 text-sm">📧</span>
                    </div>
                  </div>
                  <p className="text-xs text-green-500 font-medium mt-0.5">
                    Positived Sxpent
                  </p>
                </div>
                {/* Smiley */}
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
                  😊
                </div>
              </div>
              <div className="mt-3 space-y-0.5">
                <StatRow icon="✅" iconColor="text-green-500" label="Positive" value="90%" barColor="bg-green-400" />
                <StatRow icon="📁" iconColor="text-blue-500" label="Nositive" value="2010" barColor="bg-blue-400" />
                <StatRow icon="📊" iconColor="text-gray-500" label="Neutral" value="90%" barColor="bg-red-400" />
              </div>
            </DeptCard>
          </div>

          {/* ── FINANCE CARD ── */}
          <div className="xl:col-span-3 sm:col-span-1">
            <DeptCard
              headerBg="bg-teal-500"
              headerIcon={<BarChart3 className="w-4 h-4 text-white" />}
              title="Finance"
            >
              <p className="text-sm text-gray-500 font-medium">Expenses Breakdown</p>
              <div className="mt-1">
                <p className="text-2xl font-bold text-gray-900">$65,700</p>
              </div>
              <div className="mt-2">
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={expensesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 9 }} interval={0} />
                    <YAxis tick={{ fontSize: 9 }} />
                    <Tooltip />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {expensesData.map((d, i) => (
                        <Cell key={i} fill={d.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-3 mt-1 flex-wrap">
                {["IT", "Marketging", "Sales", "HR", "Office"].map((l) => (
                  <span key={l} className="text-[10px] text-gray-500 font-medium">{l}</span>
                ))}
              </div>
            </DeptCard>
          </div>

          {/* ── REVENUE OVERVIEW ── */}
          <div className="xl:col-span-6 sm:col-span-2">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              {/* Revenue header */}
              <div className="p-4 pb-0">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">💰</span>
                    <span className="text-lg font-bold text-gray-800">Revenue Overview</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full font-semibold border border-green-200">
                      ⭐ +056.60EM
                    </span>
                    <span className="text-sm text-red-500 font-semibold flex items-center gap-1">
                      Sxpent Wone <ChevronUp className="w-4 h-4 text-red-500" />
                    </span>
                  </div>
                </div>

                <p className="text-3xl font-bold text-gray-900 mt-2">$152,890</p>
                <p className="text-sm text-green-500 font-medium">+ ₽9.5.55%</p>
              </div>

              {/* Area Chart */}
              <div className="flex-1 px-2 pb-3">
                <ResponsiveContainer width="100%" height={160}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 9 }} interval={0} />
                    <YAxis tick={{ fontSize: 9 }} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      fill="url(#revGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
