import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";
import {
  ChevronDown, Search, Heart, FileText,
  Mail, TrendingUp, Globe, ClipboardList,
} from "lucide-react";


/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const visitorsData = [
  { day: "Mon", visitors: 130 },
  { day: "Tue", visitors: 200 },
  { day: "Wed", visitors: 180 },
  { day: "Thu", visitors: 220 },
  { day: "Fri", visitors: 310 },
  { day: "Sat", visitors: 520 },
  { day: "Sun", visitors: 700 },
];

const trafficData = [
  { day: "Mon", organic: 300, paid: 200, social: 150, email: 100 },
  { day: "Tue", organic: 350, paid: 250, social: 180, email: 120 },
  { day: "Wed", organic: 400, paid: 280, social: 200, email: 140 },
  { day: "Thu", organic: 320, paid: 240, social: 170, email: 110 },
  { day: "Sat", organic: 450, paid: 300, social: 220, email: 160 },
  { day: "1,400", organic: 500, paid: 350, social: 250, email: 180 },
];

const spentData = [
  { name: "Paid\nMedia", value: 62600, label: "$62,600" },
  { name: "Social\nMedia", value: 52200, label: "$52,200" },
  { name: "Content", value: 33200, label: "$33,200" },
  { name: "Email", value: 13300, label: "13,300" },
  { name: "", value: 12140, label: "12,140" },
];

const conversionData = [
  { name: "Leads", value: 45, color: "#3b82f6" },
  { name: "Signups", value: 35, color: "#22c55e" },
  { name: "Purchase", value: 20, color: "#f59e0b" },
];

const sidebarMetrics = [
  {
    icon: Search,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Paid Search",
    amount: "$62,600",
    badge: "199,CLICK",
    stats: ["19,800 1.CTR", "5.2% ..."],
    statColor: "text-blue-500",
  },
  {
    icon: Heart,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    title: "Social Media",
    amount: "$35,200",
    badge: "238",
    stats: ["8.50M engagement"],
    statColor: "text-red-500",
  },
  {
    icon: FileText,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    title: "Content",
    amount: "$19,800",
    badge: null,
    stats: ["17 Posts | 7.2k Views"],
    statColor: "text-purple-500",
  },
  {
    icon: Mail,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Email",
    amount: "$17,400",
    badge: null,
    stats: ["6,800 Recipie"],
    statColor: "text-green-500",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    title: "SEO",
    amount: "$0",
    badge: null,
    stats: ["54.7k Visits | RankeK UP"],
    statColor: "text-teal-500",
  },
];

const footerTags = [
  { label: "r1", icon: "🏷️" },
  { label: "IT Partnership", icon: "💻" },
  { label: "Content", icon: "🎬" },
  { label: "Storage Ads", icon: "⭐" },
  { label: "Instagram", icon: "📱" },
  { label: "Content", icon: "🎯" },
  { label: "8.3TCI", icon: "📊" },
  { label: "Email", icon: "📧" },
];

/* ═══════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════ */

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-2xl shadow-md border border-gray-100 p-4 hover:shadow-lg transition-shadow ${className}`}>
    {children}
  </div>
);

const MetricCard = ({ metric }: { metric: typeof sidebarMetrics[0] }) => {
  const Icon = metric.icon;
  return (
    <Card className="flex items-start gap-3 p-3">
      <div className={`w-9 h-9 ${metric.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <Icon className={`${metric.iconColor} w-4 h-4`} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-gray-800">{metric.title}</span>
        </div>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-lg font-bold text-gray-900">{metric.amount}</span>
          {metric.badge && (
            <span className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded border border-blue-200 font-medium">
              {metric.badge}
            </span>
          )}
        </div>
        {metric.stats.map((s, i) => (
          <p key={i} className={`text-xs ${metric.statColor} mt-0.5`}>{s}</p>
        ))}
      </div>
    </Card>
  );
};

/* ═══════════════════════════════════════════
   MAIN DASHBOARD
   ═══════════════════════════════════════════ */

const tabs = ["Daily", "Weekly", "Monthly", "Custom"];

const MarketingDashboard = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-50/60 to-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-[1400px] mx-auto px-4 py-5">

        {/* ── HEADER ── */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Marketing Dashboard Home Page</h1>
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <TrendingUp className="text-blue-500 w-5 h-5 hidden sm:block" />
              <span className="text-lg sm:text-2xl font-bold text-gray-800">$135,000</span>
              <button className="ml-auto sm:ml-0 flex items-center gap-2 px-4 sm:px-5 py-2 border-2 border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition whitespace-nowrap">
                EXPORT
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tabs Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-sm text-gray-500">Amount sed: <b className="text-gray-800">$ M0Mars</b></span>
              <div className="w-9 h-9 rounded-full bg-blue-200 border-2 border-blue-300 overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  U
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* ── LEFT COLUMN (3 cols) ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">

            {/* Latest Updates */}
            <Card>
              <div className="flex items-center gap-2 mb-3">
                <ClipboardList className="text-blue-500 w-5 h-5" />
                <span className="font-bold text-gray-800">Latest Updates</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50/50 rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  U
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">New email campaign launched, targeting subscribers (6h ago)</p>
                </div>
              </div>
            </Card>

            {/* Total Visitors */}
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800">Total Visitors</span>
                <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> 1824
                </span>
              </div>
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={visitorsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#3b82f6"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: "#3b82f6" }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Amount Spent */}
            <Card>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="text-blue-500 w-4 h-4" />
                <span className="font-bold text-gray-800">Amount Spent</span>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={spentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 9 }} interval={0} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {spentData.map((_, i) => (
                      <Cell key={i} fill={["#3b82f6", "#f59e0b", "#22c55e", "#8b5cf6", "#ef4444"][i % 5]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-between text-[10px] text-gray-500 mt-1 px-1">
                {spentData.map((d, i) => (
                  <span key={i} className="font-semibold text-gray-700">{d.label}</span>
                ))}
              </div>
            </Card>
          </div>

          {/* ── CENTER COLUMN (6 cols) ── */}
          <div className="lg:col-span-6 flex flex-col gap-4">

            {/* Website Traffic */}
            <Card>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Globe className="text-blue-500 w-5 h-5" />
                  <span className="font-bold text-lg text-gray-800">Website Traffic</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="text-blue-500 w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <FileText className="text-yellow-500 w-4 h-4" />
                  </div>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-4">583,300</p>

              <div className="flex gap-6">
                {/* Legend */}
                <div className="space-y-2 text-sm text-gray-600 flex-shrink-0">
                  <p className="text-xs text-gray-500 font-medium mb-2">Traffic Sources:</p>
                  {[
                    { label: "Organic", color: "bg-green-500" },
                    { label: "Paid", color: "bg-blue-500" },
                    { label: "Social", color: "bg-cyan-400" },
                    { label: "Email", color: "bg-yellow-400" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <div className={`w-4 h-4 ${s.color} rounded`} />
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Stacked Bar Chart */}
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={trafficData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip />
                      <Bar dataKey="organic" stackId="a" fill="#22c55e" radius={[0, 0, 0, 0]} />
                      <Bar dataKey="paid" stackId="a" fill="#3b82f6" />
                      <Bar dataKey="social" stackId="a" fill="#22d3ee" />
                      <Bar dataKey="email" stackId="a" fill="#facc15" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>

            {/* Goal Conversions */}
            <Card>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">🎯</span>
                </div>
                <span className="font-bold text-lg text-gray-800">Goal Conversions</span>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-3">1,230</p>

              <div className="flex items-center gap-6">
                {/* Legend */}
                <div className="space-y-3 flex-shrink-0">
                  {conversionData.map((d) => (
                    <div key={d.name} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: d.color }} />
                      <span className="text-sm text-gray-600">{d.name}</span>
                      <span className="text-sm font-bold text-gray-800 ml-2">{d.value}%</span>
                    </div>
                  ))}
                </div>

                {/* Donut Chart */}
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie
                        data={conversionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={90}
                        paddingAngle={3}
                        dataKey="value"
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, value }: { cx?: number; cy?: number; midAngle?: number; innerRadius?: number; outerRadius?: number; value?: number }) => {
                          const RADIAN = Math.PI / 180;
                          const radius = (innerRadius ?? 0) + ((outerRadius ?? 0) - (innerRadius ?? 0)) * 1.4;
                          const x = (cx ?? 0) + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
                          const y = (cy ?? 0) + radius * Math.sin(-(midAngle ?? 0) * RADIAN);
                          return (
                            <text x={x} y={y} fill="#374151" textAnchor="middle" fontSize={11} fontWeight="bold">
                              {value}%
                            </text>
                          );
                        }}
                      >
                        {conversionData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </div>

          {/* ── RIGHT SIDEBAR (3 cols) ── */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {sidebarMetrics.map((m, i) => (
              <MetricCard key={i} metric={m} />
            ))}
          </div>

        </div>

        {/* ── FOOTER BAR ── */}
        <div className="mt-6 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-3 flex items-center gap-4 overflow-x-auto">
          {footerTags.map((tag, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm text-gray-600 whitespace-nowrap px-2 py-1 rounded-lg hover:bg-blue-50 cursor-pointer transition">
              <span>{tag.icon}</span>
              <span className="font-medium">{tag.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MarketingDashboard;
