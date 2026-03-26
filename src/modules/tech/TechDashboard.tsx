import { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ChevronDown, Mail, CheckCircle2, AlertTriangle, Shield,
  PlayCircle, Sparkles, Clock, BarChart3, Users,
} from "lucide-react";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const serverData = [
  { name: "Fri", value: 40000 },
  { name: "2m", value: 52000 },
  { name: "1an", value: 48000 },
  { name: "10m", value: 60000 },
  { name: "6Jul", value: 72000 },
  { name: "110m", value: 85000 },
  { name: "6.0nt", value: 95000 },
  { name: "13.m", value: 110000 },
  { name: "60ng", value: 135000 },
  { name: "6.0og", value: 152000 },
];

interface ProjectCard {
  headerBg: string;
  headerIcon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  badgeLabel: string;
  badgeBg: string;
  badgeText: string;
  progressPercent: number;
  progressColor: string;
  amount: string;
  amountIcon: React.ReactNode;
  statusLabel: string;
  statusColor: string;
  date: string;
  team: string;
  teamSub: string;
  avatarColors: string[];
}

const projects: ProjectCard[] = [
  {
    headerBg: "bg-blue-500",
    headerIcon: <Mail className="w-4 h-4 text-white" />,
    title: "CRM Upgrade",
    subtitle: "CRM Upgrade",
    description: "Implement new CRM platform",
    badgeLabel: "Overdue",
    badgeBg: "bg-red-500",
    badgeText: "text-white",
    progressPercent: 45,
    progressColor: "bg-red-500",
    amount: "185,000",
    amountIcon: <span className="text-gray-800">▲</span>,
    statusLabel: "▲N Risk",
    statusColor: "text-red-500",
    date: "hntrdS: Apn, 2024",
    team: "Backend Team",
    teamSub: "Backend Team",
    avatarColors: ["from-blue-400 to-blue-600", "from-green-400 to-green-600", "from-orange-400 to-orange-600"],
  },
  {
    headerBg: "bg-green-500",
    headerIcon: <PlayCircle className="w-4 h-4 text-white" />,
    title: "AI Integration",
    subtitle: "AI Integration",
    description: "Develop AI-driven chatbot",
    badgeLabel: "On Track",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    progressPercent: 75,
    progressColor: "bg-green-500",
    amount: "775,200",
    amountIcon: <CheckCircle2 className="w-4 h-4 text-green-500" />,
    statusLabel: "On Track",
    statusColor: "text-green-500",
    date: "Inde: App 04, 2024",
    team: "Frontend Team",
    teamSub: "Backend Team",
    avatarColors: ["from-purple-400 to-purple-600", "from-blue-400 to-blue-600", "from-teal-400 to-teal-600"],
  },
  {
    headerBg: "bg-[#f47458]",
    headerIcon: <Sparkles className="w-4 h-4 text-white" />,
    title: "App Optimization",
    subtitle: "App Optimization",
    description: "Improve app performance",
    badgeLabel: "At Risk",
    badgeBg: "bg-yellow-100",
    badgeText: "text-yellow-700",
    progressPercent: 50,
    progressColor: "bg-orange-500",
    amount: "5020",
    amountIcon: <AlertTriangle className="w-4 h-4 text-yellow-500" />,
    statusLabel: "At Risk",
    statusColor: "text-yellow-600",
    date: "nde: Jun 00, 2024",
    team: "Mobile Team",
    teamSub: "Chriss a, Mine",
    avatarColors: ["from-red-400 to-red-600", "from-yellow-400 to-yellow-600", "from-green-400 to-green-600"],
  },
  {
    headerBg: "bg-[#1e3a5f]",
    headerIcon: <Shield className="w-4 h-4 text-white" />,
    title: "Security Enhancement",
    subtitle: "Security Enhancement",
    description: "Upgrade security protocols",
    badgeLabel: "Dave",
    badgeBg: "bg-green-500",
    badgeText: "text-white",
    progressPercent: 35,
    progressColor: "bg-blue-500",
    amount: "29,200",
    amountIcon: <AlertTriangle className="w-4 h-4 text-red-500" />,
    statusLabel: "Delayed",
    statusColor: "text-red-500",
    date: "nde: May 05, 2024",
    team: "Security Team",
    teamSub: "Security Team",
    avatarColors: ["from-indigo-400 to-indigo-600", "from-blue-400 to-blue-600", "from-gray-400 to-gray-600"],
  },
];

interface TaskItem {
  icon: React.ReactNode;
  title: string;
  due: string;
  badgeLabel: string;
  badgeBg: string;
}

const tasks: TaskItem[] = [
  {
    icon: <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"><BarChart3 className="w-4 h-4 text-blue-500" /></div>,
    title: "Fix API Integration",
    due: "<In 2 days",
    badgeLabel: "Derroe",
    badgeBg: "bg-green-500",
  },
  {
    icon: <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center"><Mail className="w-4 h-4 text-orange-500" /></div>,
    title: "Update Service SLAs",
    due: "Tomorrow",
    badgeLabel: "Deetmnce",
    badgeBg: "bg-orange-500",
  },
  {
    icon: <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"><Mail className="w-4 h-4 text-red-500" /></div>,
    title: "Review Backup Plan",
    due: "<In 4 days",
    badgeLabel: "Derroe",
    badgeBg: "bg-green-500",
  },
];

const footerLabels = [
  { label: "HR", color: "bg-green-500" },
  { label: "Marketging", color: "bg-green-500" },
  { label: "Catcs", color: "bg-yellow-500" },
  { label: "HR", color: "bg-blue-500" },
  { label: "DRO", color: "bg-red-500" },
  { label: "Marketing", color: "bg-green-500" },
  { label: "Offtcs", color: "bg-blue-800" },
];

/* ═══════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════ */

const ProjectCardComponent = ({ project }: { project: ProjectCard }) => (
  <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
    {/* Colored header */}
    <div className={`${project.headerBg} px-4 py-2.5 flex items-center justify-between`}>
      <div className="flex items-center gap-2">
        {project.headerIcon}
        <span className="text-white font-bold text-sm">{project.title}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
          <AlertTriangle className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
          <Users className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </div>

    {/* Card body */}
    <div className="p-4 flex-1 flex flex-col">
      {/* Title + badge */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-base font-bold text-gray-800">{project.subtitle}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${project.badgeBg} ${project.badgeText}`}>
          {project.badgeLabel}
        </span>
      </div>
      <p className="text-xs text-green-500 mb-3">{project.description}</p>

      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold text-orange-500 bg-orange-50 border border-orange-200 rounded px-1.5 py-0.5">
          PROGRESS
        </span>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full ${project.progressColor} rounded-full transition-all`}
            style={{ width: `${project.progressPercent}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-gray-600">{project.progressPercent}%</span>
      </div>

      {/* Amount + status */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          {project.amountIcon}
          <span className="text-xl font-bold text-gray-900">{project.amount}</span>
        </div>
        <span className={`text-xs font-semibold ${project.statusColor}`}>{project.statusLabel}</span>
      </div>

      {/* Date + team row */}
      <div className="mt-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-gray-400">☐</span>
            <span className="text-[10px] text-gray-500">{project.date}</span>
          </div>
          {/* Avatars */}
          <div className="flex -space-x-2">
            {project.avatarColors.map((c, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full bg-gradient-to-br ${c} border-2 border-white flex items-center justify-center text-[8px] text-white font-bold`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 text-gray-400" />
            <span className="text-[11px] text-gray-600 font-medium">{project.team}</span>
          </div>
          <span className="text-[10px] text-gray-400">{project.teamSub}</span>
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════ */

const tabs = ["Daily", "Weekly", "Monthly", "Custom"];

const TechDashboard = () => {
  const [activeTab, setActiveTab] = useState("Weekly");

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
              TECH Dashboard Home Screen
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-gray-800 flex items-center gap-1">
                235
                <Sparkles className="text-yellow-400 w-5 h-5" />
              </span>
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
            {/* Updates */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-2 max-w-xs">
              <span className="text-xs text-gray-400 font-medium block mb-1">Updates :</span>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-[8px] text-white font-bold flex-shrink-0">
                    U
                  </div>
                  <span className="text-[11px] text-gray-600">
                    <b className="text-gray-800">CRM Upgrade</b> deadline missed
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-[8px] text-white font-bold flex-shrink-0">
                    A
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-[8px] text-white font-bold flex-shrink-0">
                    R
                  </div>
                  <span className="text-[11px] text-gray-600">
                    Reported 30 nt minutes ago
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-[8px] text-white font-bold flex-shrink-0">
                    B
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════
           TOP ROW — 4 Project Cards
           ═══════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
          {projects.map((p, i) => (
            <ProjectCardComponent key={i} project={p} />
          ))}
        </div>

        {/* ═══════════════════════════════════
           BOTTOM ROW — Tasks + Server Performance
           ═══════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* ── TASKS CARD ── */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow">
            {/* Tasks header */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-lg font-bold text-gray-800">Tasks</span>
              </div>
              <div className="flex items-center gap-3 ml-2">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  <span className="text-xs text-gray-500">Optant</span>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart3 className="w-3.5 h-3.5 text-blue-500" />
                  <span className="w-7 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                  <span className="text-xs text-gray-500">Saares</span>
                </div>
                <span className="text-xs text-gray-500 font-medium">Eiift</span>
                <span className="text-xs text-gray-400">&lt;&gt;</span>
              </div>
            </div>

            {/* Task list */}
            <div className="space-y-3">
              {tasks.map((task, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition">
                  {task.icon}
                  <span className="text-sm font-semibold text-gray-700 flex-1">
                    {task.title}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{task.due}</span>
                  </div>
                  <span className={`text-[11px] px-3 py-1 rounded-full text-white font-semibold ${task.badgeBg}`}>
                    {task.badgeLabel}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer labels */}
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              {footerLabels.map((f, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 ${f.color} rounded`} />
                  <span className="text-[10px] text-gray-500 font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── SERVER PERFORMANCE CARD ── */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
            {/* Header */}
            <div className="p-5 pb-0">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">💰</span>
                  <span className="text-lg font-bold text-gray-800">Server Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full font-semibold border border-green-200">
                    051.60EM
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-semibold border border-blue-200 flex items-center gap-1">
                    📊 Matt
                  </span>
                  <span className="text-xs px-2 py-1 bg-red-50 text-red-500 rounded-full font-semibold border border-red-200 flex items-center gap-1">
                    🔺 RRA
                  </span>
                  <span className="text-xs text-gray-600 font-semibold">Dink</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">$152,290</span>
                <span className="text-sm text-green-500 font-semibold">94/725%</span>
              </div>
            </div>

            {/* Area Chart */}
            <div className="flex-1 px-2 pb-3 pt-2">
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={serverData}>
                  <defs>
                    <linearGradient id="serverGrad" x1="0" y1="0" x2="0" y2="1">
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
                    fill="url(#serverGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechDashboard;
