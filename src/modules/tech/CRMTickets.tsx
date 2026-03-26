import { useState } from "react";
import {
  Plus, Settings, Lock, Clock, ExternalLink,
  CheckCircle2, AlertCircle, Home, Upload, BarChart3,
  Video, Mail, ChevronUp,
} from "lucide-react";

/* ═══════════════════════════════════════════
   AVATAR HELPER — generates face-like gradient circles
   ═══════════════════════════════════════════ */
const Avatar = ({
  gradient,
  letter,
  size = "w-10 h-10",
  border = "border-2 border-white",
}: {
  gradient: string;
  letter: string;
  size?: string;
  border?: string;
}) => (
  <div
    className={`${size} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold shadow-sm ${border} relative overflow-hidden`}
  >
    {/* Inner highlight for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/20 rounded-full" />
    <span className="relative z-10 text-sm">{letter}</span>
  </div>
);

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

interface Ticket {
  id: number;
  title: string;
  assignee: string;
  timeLabel: string;
  timeAgo: string;
  statusLabel: string;
  statusBg: string;
  statusText: string;
  statusIcon?: string;
  subStatus: string;
  subStatusColor: string;
  avatarGradient: string;
  borderColor: string;
}

const tickets: Ticket[] = [
  {
    id: 45,
    title: "CRM Fields Not Updating",
    assignee: "Sarah",
    timeLabel: ":",
    timeAgo: "hours pays ago",
    statusLabel: "Senred",
    statusBg: "bg-red-500",
    statusText: "text-white",
    statusIcon: "🟥",
    subStatus: "Overdue",
    subStatusColor: "text-red-500",
    avatarGradient: "from-amber-200 via-orange-300 to-rose-300",
    borderColor: "border-l-blue-500",
  },
  {
    id: 27,
    title: "Sync Issue with Leads",
    assignee: "John",
    timeLabel: ":",
    timeAgo: "1 hour ago",
    statusLabel: "At Track",
    statusBg: "bg-yellow-50 border border-yellow-300",
    statusText: "text-yellow-600",
    subStatus: "Oferdue",
    subStatusColor: "text-gray-400",
    avatarGradient: "from-emerald-200 via-green-300 to-teal-400",
    borderColor: "border-l-green-500",
  },
  {
    id: 63,
    title: "Integration with Payments",
    assignee: "Mike",
    timeLabel: ":",
    timeAgo: "hours ago",
    statusLabel: "On Track",
    statusBg: "bg-green-500",
    statusText: "text-white",
    statusIcon: "✅",
    subStatus: "On Track",
    subStatusColor: "text-green-500",
    avatarGradient: "from-sky-200 via-blue-300 to-indigo-400",
    borderColor: "border-l-blue-400",
  },
  {
    id: 52,
    title: "Reports Not Generating",
    assignee: "Emma",
    timeLabel: ":",
    timeAgo: "1 hours ago",
    statusLabel: "Completed",
    statusBg: "bg-red-50 border border-red-300",
    statusText: "text-red-500",
    subStatus: "On't 6rack",
    subStatusColor: "text-gray-400",
    avatarGradient: "from-violet-200 via-purple-300 to-fuchsia-400",
    borderColor: "border-l-purple-400",
  },
  {
    id: 89,
    title: "Dashboard UI Optimization",
    assignee: "David",
    timeLabel: ":",
    timeAgo: "days ago",
    statusLabel: "Etared",
    statusBg: "bg-green-50 border border-green-300",
    statusText: "text-green-600",
    statusIcon: "✅",
    subStatus: "On Track",
    subStatusColor: "text-green-500",
    avatarGradient: "from-teal-200 via-cyan-300 to-sky-400",
    borderColor: "border-l-teal-500",
  },
];

const activityItems = [
  {
    icon: <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"><AlertCircle className="w-3.5 h-3.5 text-blue-500" /></div>,
    text: (
      <>
        Overdue due date set by <b className="text-gray-800">Sarah</b> 35 mins ago
      </>
    ),
  },
  {
    icon: <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"><AlertCircle className="w-3.5 h-3.5 text-blue-400" /></div>,
    text: (
      <>
        Status changed from <b className="text-gray-800">On Track</b> to{" "}
        <b className="text-gray-800">Overdue</b> 1 hour ago
      </>
    ),
  },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

const CRMTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(45);
  const selected = tickets.find((t) => t.id === selectedTicket) ?? tickets[0];

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-[#dce8f8] via-[#e4eef9] to-[#f0f6fd]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-5 py-6">
        {/* ─── BREADCRUMB + PROGRESS ─── */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span className="text-sm text-gray-400 tracking-wider font-medium">
            TECH / CRM Upgrade / Tickets
          </span>
          <div className="flex items-center gap-3">
            <div className="w-28 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: "45%" }} />
            </div>
            <span className="text-sm font-bold text-gray-600">45%</span>
          </div>
        </div>

        {/* ─── PAGE TITLE ─── */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-1 tracking-tight">
          CRM Upgrade
        </h1>
        <p className="text-gray-400 text-base mb-6">Implement new CRM platform</p>

        {/* ─── MAIN 2-COLUMN LAYOUT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* ════════════════════════════════
             LEFT — TICKET LIST
             ════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Tab bar */}
            <div className="flex items-center gap-2 sm:gap-4 mb-5 w-full overflow-x-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 bg-white rounded-xl shadow-sm border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition whitespace-nowrap">
                <Plus className="w-4 h-4 text-blue-500" />
                Tickets
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 transition whitespace-nowrap">
                <Settings className="w-4 h-4 text-yellow-500" />
                ER Commante
                <span className="text-xs text-gray-400">▾</span>
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 transition whitespace-nowrap">
                <Lock className="w-4 h-4" />
                2ats
              </button>
            </div>

            {/* Ticket list */}
            <div className="space-y-2.5 flex-1">
              {tickets.map((ticket) => {
                const isSelected = selectedTicket === ticket.id;
                return (
                  <button
                    key={ticket.id}
                    onClick={() => setSelectedTicket(ticket.id)}
                    className={`w-full text-left rounded-xl shadow-sm p-3.5 flex items-start gap-3 transition-all
                      ${isSelected
                        ? `bg-white border-l-[5px] ${ticket.borderColor} border border-gray-100 shadow-md`
                        : "bg-white/70 border border-gray-100 border-l-[5px] border-l-transparent hover:bg-white hover:shadow-md"
                      }`}
                  >
                    {/* Avatar */}
                    <Avatar
                      gradient={ticket.avatarGradient}
                      letter={ticket.assignee[0]}
                      size="w-11 h-11"
                      border="border-2 border-white"
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded font-bold leading-none">
                          {ticket.id}
                        </span>
                        <span className="text-[13px] font-bold text-gray-800 truncate">
                          {ticket.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                        <span className="font-medium text-gray-500">{ticket.assignee}</span>
                        <span>{ticket.timeLabel}</span>
                        <Clock className="w-3 h-3" />
                        <span>{ticket.timeAgo}</span>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span
                        className={`text-[10px] px-2.5 py-1 rounded font-bold leading-none ${ticket.statusBg} ${ticket.statusText}`}
                      >
                        {ticket.statusIcon && <span className="mr-0.5">{ticket.statusIcon}</span>}
                        {ticket.statusLabel}
                      </span>
                      <span className={`text-[10px] font-medium ${ticket.subStatusColor}`}>
                        • {ticket.subStatus}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom toolbar */}
            <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-100 px-3 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <ChevronUp className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-bold text-gray-700">45</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer">
                  <Home className="w-4 h-4 text-white" />
                </div>
                {[Upload, Upload, BarChart3, Video, Mail].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 cursor-pointer transition"
                  >
                    <Icon className="w-4 h-4 text-gray-500" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>1</span>
                <span className="flex items-center gap-1">
                  <Settings className="w-3.5 h-3.5" /> Sickets
                </span>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════
             RIGHT — TICKET DETAIL
             ════════════════════════════════ */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7">
              {/* Header */}
              <div className="flex items-start justify-between mb-6 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-gray-400 font-bold text-lg">#</span>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-bold">
                    {selected.id}
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900">
                    CR* Fields Not Updating
                  </h2>
                </div>
                <span className="px-5 py-2 bg-red-500 text-white rounded-lg text-sm font-bold flex items-center gap-1.5 shadow-sm">
                  Overdue <span className="text-white/70">≡</span>
                </span>
              </div>

              {/* Assignee */}
              <div className="flex items-center gap-3.5 mb-7">
                <Avatar
                  gradient={selected.avatarGradient}
                  letter={selected.assignee[0]}
                  size="w-12 h-12"
                  border="border-2 border-gray-100"
                />
                <div>
                  <p className="font-bold text-gray-800 text-base">{selected.assignee}</p>
                  <p className="text-xs text-gray-400">Updated 35 mins ago</p>
                </div>
              </div>

              {/* Story Points / Estimated / Priority */}
              <div className="border-b border-gray-100 pb-6 mb-6">
                <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Story Points — wide */}
                  <div className="col-span-6">
                    <p className="text-sm text-gray-400 mb-2">Storry Pioints</p>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
                        5 points
                      </span>
                      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-400 rounded-full"
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Estimated */}
                  <div className="col-span-3 border-l border-gray-100 pl-4">
                    <p className="text-sm text-gray-400 mb-2">Estimated</p>
                    <span className="text-lg font-bold text-gray-900">6 hr 30 min</span>
                  </div>
                  {/* Priority */}
                  <div className="col-span-3">
                    <p className="text-sm text-gray-400 mb-2">Priority</p>
                    <span className="text-xs px-3.5 py-1.5 bg-red-500 text-white rounded font-bold">
                      Prrgient
                    </span>
                  </div>
                </div>
              </div>

              {/* Git Repository */}
              <div className="mb-6 border-b border-gray-100 pb-6">
                <p className="text-sm text-gray-400 mb-2">Git Repository</p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="text-sm text-gray-700 break-all">
                    https://github.com/repo/update-crm-fields
                  </span>
                  <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 font-medium hover:bg-gray-50 transition whitespace-nowrap">
                    Go to repo
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* User Story */}
              <div className="mb-6 border-b border-gray-100 pb-6">
                <p className="text-sm text-gray-400 mb-2">User Story</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  As a <b className="text-gray-900">sales user</b> → I need to be able to
                  update custom fields for leads and contacts
                </p>
              </div>

              {/* Component / Milestone */}
              <div className="mb-4 flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <span className="text-sm text-gray-400">Component</span>
                  <span className="text-sm px-3.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg font-medium text-gray-700 flex items-center gap-1.5">
                    Backend <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-sm text-gray-400">Milestone :</span>
                  <span className="text-sm px-3.5 py-1.5 border border-gray-200 rounded-lg font-medium text-gray-700">
                    CRM Upgrade Phase 1
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-7 flex items-center gap-2.5">
                <span className="text-sm text-gray-400">Tags :</span>
                <span className="text-xs px-3 py-1 bg-red-50 text-red-500 rounded-md font-semibold border border-red-200">
                  Bug
                </span>
                <span className="text-xs px-3 py-1 bg-orange-50 text-orange-500 rounded-md font-semibold border border-orange-200">
                  Overdue
                </span>
                <span className="text-xs px-3 py-1 bg-blue-50 text-blue-500 rounded-md font-semibold border border-blue-200">
                  Sales
                </span>
              </div>

              {/* Activity */}
              <div>
                <p className="text-base font-bold text-gray-800 mb-4">Activity</p>
                <div className="space-y-3.5">
                  {activityItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {item.icon}
                      <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMTickets;
