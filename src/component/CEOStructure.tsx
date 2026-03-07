
"use client"

import { Building2, TrendingUp, Monitor, Megaphone, Target, ClipboardCheck, Users, Headphones, Calculator, Scale, Settings, Truck, HeadphonesIcon, Lightbulb, BarChart3, ArrowRight } from "lucide-react"

export default function HireACEO() {
  const departments = [
    {
      name: "TECH",
      color: "bg-blue-600",
      borderColor: "border-blue-600",
      items: ["Software", "App, Web", "AI, IT Support"],
      dotColor: "bg-blue-600"
    },
    {
      name: "MARKETING",
      color: "bg-green-600",
      borderColor: "border-green-600",
      items: ["Digital", "Branding", "Advertising"],
      dotColor: "bg-green-600"
    },
    {
      name: "SALES",
      color: "bg-red-600",
      borderColor: "border-red-600",
      items: ["Lead Gen", "CRM", "Revenue Growth"],
      dotColor: "bg-red-600"
    },
    {
      name: "AUDITING",
      color: "bg-orange-500",
      borderColor: "border-orange-500",
      items: ["Finance", "Compliance", "Tax Filing"],
      dotColor: "bg-orange-500"
    },
    {
      name: "HR",
      color: "bg-purple-600",
      borderColor: "border-purple-600",
      items: ["Recruitment", "Payroll", "Training"],
      dotColor: "bg-purple-600"
    },
    {
      name: "BPO",
      color: "bg-cyan-500",
      borderColor: "border-cyan-500",
      items: ["Customer Support", "Back Office", "KPO Services"],
      dotColor: "bg-cyan-500"
    }
  ]

  const operations = [
    { icon: Calculator, label: "Finance &\nAccounts", color: "text-blue-600" },
    { icon: Scale, label: "Legal &\nCompliance", color: "text-amber-700" },
    { icon: Settings, label: "Operations", color: "text-orange-500" },
    { icon: Truck, label: "Supply\nChain", color: "text-orange-400" },
    { icon: HeadphonesIcon, label: "Customer\nSupport", color: "text-gray-700" },
    { icon: Lightbulb, label: "Business\nStrategy", color: "text-yellow-500" },
    { icon: BarChart3, label: "Data Analytics\n& Reporting", color: "text-blue-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="flex flex-wrap items-center justify-center gap-2 text-2xl font-bold md:text-4xl">
            <span className="rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg md:px-6">
              HIRE A CEO
            </span>
            <span className="text-gray-800">— WE MANAGE YOUR</span>
            <span className="text-blue-600">COMPLETE BUSINESS</span>
          </h1>
        </div>

        {/* CEO Section */}
        <div className="relative mb-6">
          {/* CEO Card */}
          <div className="mx-auto w-fit">
            <div className="relative mx-auto flex flex-col items-center">
              {/* CEO Illustration */}
              <div className="relative">
                <div className="relative flex h-32 w-40 items-end justify-center rounded-t-full bg-gradient-to-b from-blue-100 to-blue-200 md:h-40 md:w-48">
                  {/* Gear icons */}
                  <div className="absolute -right-2 top-2 text-gray-400">
                    <Settings className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="absolute -right-4 top-8 text-gray-400">
                    <Settings className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  {/* Money icon */}
                  <div className="absolute -left-2 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-white md:h-10 md:w-10">
                    <span className="text-sm font-bold md:text-base">$</span>
                  </div>
                  {/* CEO silhouette */}
                  <div className="mb-0 flex h-24 w-24 items-end justify-center md:h-32 md:w-32">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      {/* Head */}
                      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#2d3748" />
                      {/* Body/Suit */}
                      <path d="M25 100 L30 55 L45 50 L50 55 L55 50 L70 55 L75 100 Z" fill="#2d3748" />
                      {/* Tie */}
                      <path d="M48 50 L50 70 L52 50 Z" fill="#f6ad55" />
                      {/* Collar */}
                      <path d="M42 50 L50 58 L58 50 L55 48 L50 52 L45 48 Z" fill="white" />
                      {/* Arms on desk */}
                      <ellipse cx="30" cy="85" rx="12" ry="6" fill="#2d3748" />
                      <ellipse cx="70" cy="85" rx="12" ry="6" fill="#2d3748" />
                    </svg>
                  </div>
                </div>
                {/* Desk/Label */}
                <div className="relative -mt-2 rounded-lg bg-gray-800 px-4 py-2 text-center shadow-lg md:px-8 md:py-3">
                  <div className="text-sm font-bold text-white md:text-lg">
                    DEDICATED <span className="text-yellow-400">CEO</span>
                  </div>
                  <div className="text-xs text-gray-300 md:text-sm">(Your Business Head)</div>
                </div>
              </div>

              {/* Connection lines */}
              <div className="hidden h-8 w-px bg-gray-400 md:block"></div>
              <div className="hidden h-px w-[80%] max-w-4xl bg-gray-400 md:block"></div>
            </div>
          </div>
        </div>

        {/* Department Cards */}
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {departments.map((dept, index) => (
            <div key={index} className="relative">
              {/* Connector line from top */}
              <div className="absolute -top-4 left-1/2 hidden h-4 w-px -translate-x-1/2 bg-gray-400 md:block"></div>

              <div className={`overflow-hidden rounded-xl border-2 ${dept.borderColor} bg-white shadow-lg`}>
                {/* Header */}
                <div className={`${dept.color} px-3 py-2 text-center`}>
                  <span className="text-sm font-bold text-white md:text-base">{dept.name}</span>
                </div>
                {/* Items */}
                <div className="space-y-2 p-3">
                  {dept.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${dept.dotColor}`}></div>
                      <span className="text-xs text-gray-700 md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Banner */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full border-2 border-yellow-400 bg-yellow-50 px-6 py-3 shadow-md md:px-10 md:py-4">
            <p className="text-center text-sm font-bold text-gray-800 md:text-lg">
              ALL BUSINESS OPERATIONS MANAGED BY OUR CEO
            </p>
          </div>
        </div>

        {/* Operations Section */}
        <div className="mb-8 flex items-center justify-between gap-4">
          {/* Your Company - Left Side */}
          <div className="hidden flex-col items-center md:flex">
            <div className="mb-2 flex items-end gap-1">
              <Building2 className="h-16 w-12 text-gray-600" />
              <Building2 className="h-12 w-8 text-gray-500" />
              <Building2 className="h-10 w-6 text-gray-400" />
            </div>
            <span className="text-center text-sm font-bold text-gray-700">
              Your<br />Company
            </span>
          </div>

          {/* Operations Cards */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {/* Curved bracket left */}
              <div className="hidden text-4xl text-blue-300 md:block">⟨</div>

              {operations.map((op, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-md md:h-14 md:w-14">
                    <op.icon className={`h-6 w-6 md:h-8 md:w-8 ${op.color}`} />
                  </div>
                  <span className="max-w-16 whitespace-pre-line text-center text-xs font-medium text-gray-700 md:max-w-20">
                    {op.label}
                  </span>
                </div>
              ))}

              {/* Curved bracket right */}
              <div className="hidden text-4xl text-blue-300 md:block">⟩</div>
            </div>

            {/* Connecting bar */}
            <div className="mx-auto mt-3 h-1 w-[90%] rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400"></div>
          </div>

          {/* Business Growth - Right Side */}
          <div className="hidden flex-col items-center md:flex">
            <div className="mb-2 flex items-end gap-1">
              <div className="h-6 w-4 rounded-t bg-yellow-400"></div>
              <div className="h-10 w-4 rounded-t bg-yellow-500"></div>
              <div className="h-14 w-4 rounded-t bg-orange-400"></div>
              <div className="h-18 w-4 rounded-t bg-orange-500"></div>
              <TrendingUp className="h-8 w-8 -ml-2 -mb-1 text-green-500" />
            </div>
            <span className="text-center text-sm font-bold">
              <span className="text-gray-700">Business</span><br />
              <span className="text-green-600">Growth</span>
            </span>
          </div>
        </div>

        {/* Mobile Company/Growth indicators */}
        <div className="mb-6 flex justify-between md:hidden">
          <div className="flex flex-col items-center">
            <Building2 className="h-10 w-10 text-gray-600" />
            <span className="text-xs font-bold text-gray-700">Your Company</span>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="h-10 w-10 text-green-500" />
            <span className="text-xs font-bold text-green-600">Business Growth</span>
          </div>
        </div>

        {/* Result Banner */}
        <div className="flex justify-center">
          <div className="rounded-full border-2 border-gray-300 bg-white px-6 py-4 shadow-lg md:px-12 md:py-5">
            <p className="flex flex-wrap items-center justify-center gap-2 text-center text-base font-bold md:text-xl">
              <span className="text-gray-800">RESULT</span>
              <ArrowRight className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">You Focus on</span>
              <span className="text-green-600">Growth</span>
              <span className="text-gray-700">– We Handle the Rest!</span>
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none fixed left-4 top-1/4 opacity-20">
          <div className="h-8 w-8 rotate-12 rounded bg-blue-400"></div>
        </div>
        <div className="pointer-events-none fixed right-8 top-1/3 opacity-20">
          <div className="h-4 w-4 rotate-45 rounded-sm bg-yellow-400"></div>
        </div>
      </div>
    </div>
  )
}
