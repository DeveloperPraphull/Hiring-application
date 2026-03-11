"use client"

export default function HireCEOInfographic() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-50 p-4 md:p-8 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Decorative sparkles - exact positions from image */}
        <svg className="absolute left-4 top-40 w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
        </svg>
        <svg className="absolute left-2 top-56 w-3 h-3 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
        </svg>
        <svg className="absolute left-6 top-64 w-2 h-2 text-blue-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
        </svg>

        {/* Header - exact styling from image */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
          <span 
            className="bg-[#22a94e] text-[#f5e663] font-black text-lg md:text-2xl px-5 py-1.5 rounded-full shadow-md italic"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '1px' }}
          >
            HIRE A CEO
          </span>
          <span 
            className="text-lg md:text-2xl font-black text-[#1a365d]"
            style={{ fontFamily: 'Arial Black, sans-serif' }}
          >
            — WE MANAGE YOUR COMPLETE{" "}
            <span className="text-[#f5c518]">BUSINESS</span>
          </span>
        </div>

        {/* CEO Section with connecting lines */}
        <div className="relative">
          {/* CEO Avatar and Card Container */}
          <div className="flex justify-center mb-2 relative z-20">
            <div className="relative">
              {/* Thought bubble background */}
              <div className="absolute -top-2 -left-8 -right-8 -bottom-4 z-0">
                <svg viewBox="0 0 200 140" className="w-full h-full">
                  {/* Cloud shape */}
                  <ellipse cx="100" cy="60" rx="85" ry="50" fill="#e0f2fe" />
                  <ellipse cx="40" cy="70" rx="30" ry="25" fill="#e0f2fe" />
                  <ellipse cx="160" cy="70" rx="30" ry="25" fill="#e0f2fe" />
                </svg>
              </div>

              {/* Dollar coin - top right */}
              <div className="absolute -right-4 -top-2 z-30">
                <svg viewBox="0 0 40 40" className="w-9 h-9">
                  <circle cx="20" cy="20" r="18" fill="url(#coinGradient)" stroke="#b8860b" strokeWidth="2"/>
                  <text x="20" y="26" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">$</text>
                  <defs>
                    <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffd700"/>
                      <stop offset="50%" stopColor="#ffec8b"/>
                      <stop offset="100%" stopColor="#daa520"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Gears - right side */}
              <div className="absolute -right-10 top-6 z-30">
                <svg viewBox="0 0 50 50" className="w-12 h-12">
                  {/* Large gear */}
                  <g fill="#6b7280">
                    <circle cx="20" cy="20" r="8" />
                    <rect x="17" y="2" width="6" height="8" rx="1" />
                    <rect x="17" y="30" width="6" height="8" rx="1" />
                    <rect x="2" y="17" width="8" height="6" rx="1" />
                    <rect x="30" y="17" width="8" height="6" rx="1" />
                    <rect x="5" y="5" width="7" height="5" rx="1" transform="rotate(45 8 8)" />
                    <rect x="28" y="5" width="7" height="5" rx="1" transform="rotate(-45 32 8)" />
                    <rect x="5" y="28" width="7" height="5" rx="1" transform="rotate(-45 8 32)" />
                    <rect x="28" y="28" width="7" height="5" rx="1" transform="rotate(45 32 32)" />
                    <circle cx="20" cy="20" r="3" fill="#e0f2fe" />
                  </g>
                  {/* Small gear */}
                  <g fill="#9ca3af" transform="translate(28, 28) scale(0.6)">
                    <circle cx="15" cy="15" r="6" />
                    <rect x="13" y="2" width="4" height="6" rx="1" />
                    <rect x="13" y="22" width="4" height="6" rx="1" />
                    <rect x="2" y="13" width="6" height="4" rx="1" />
                    <rect x="22" y="13" width="6" height="4" rx="1" />
                    <circle cx="15" cy="15" r="2" fill="#e0f2fe" />
                  </g>
                </svg>
              </div>

              {/* CEO Avatar */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-b from-sky-200 to-sky-100 flex items-end justify-center relative z-10 overflow-hidden border-4 border-sky-100">
                <svg viewBox="0 0 100 95" className="w-full h-full">
                  {/* Head */}
                  <ellipse cx="50" cy="22" rx="13" ry="15" fill="#1a2d4d" />
                  {/* Ears */}
                  <ellipse cx="37" cy="24" rx="3" ry="4" fill="#1a2d4d" />
                  <ellipse cx="63" cy="24" rx="3" ry="4" fill="#1a2d4d" />
                  {/* Body/Suit jacket */}
                  <path d="M50 37 C25 37 15 65 15 90 L85 90 C85 65 75 37 50 37" fill="#1a2d4d" />
                  {/* Shirt/collar V-neck */}
                  <path d="M40 45 L50 68 L60 45 L55 40 L50 42 L45 40 Z" fill="#f5f5f5" />
                  {/* Tie */}
                  <path d="M48 48 L46 62 L50 72 L54 62 L52 48 L50 50 Z" fill="#8b6914" />
                  {/* Desk/table */}
                  <rect x="10" y="78" width="80" height="8" rx="2" fill="#2d9da8" />
                  {/* Laptop base */}
                  <rect x="35" y="72" width="18" height="8" rx="1" fill="#e5e5e5" />
                  {/* Laptop screen */}
                  <rect x="37" y="62" width="14" height="11" rx="1" fill="#333" />
                  <rect x="38" y="63" width="12" height="8" fill="#4a90a4" />
                  {/* Document/paper on desk */}
                  <rect x="58" y="73" width="10" height="6" fill="#fff" rx="0.5" />
                  <line x1="60" y1="75" x2="66" y2="75" stroke="#ccc" strokeWidth="0.5" />
                  <line x1="60" y1="77" x2="65" y2="77" stroke="#ccc" strokeWidth="0.5" />
                </svg>
              </div>

              {/* CEO Title Card */}
              <div className="mt-1 relative z-10">
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-[#1a365d]"></div>
                </div>
                <div className="bg-[#1a365d] px-6 py-2 rounded-xl shadow-lg text-center">
                  <div className="text-white font-bold text-sm md:text-base tracking-wide">
                    DEDICATED <span className="text-[#f5c518]">CEO</span>
                  </div>
                  <div className="text-gray-300 text-xs">(Your Business Head)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Lines SVG - Desktop only */}
          <svg className="absolute top-24 left-0 w-full h-40 pointer-events-none hidden lg:block z-10" viewBox="0 0 1400 160" preserveAspectRatio="xMidYMid meet">
            {/* Lines from CEO to each department */}
            {/* To TECH (leftmost) */}
            <path d="M 700 20 L 700 50 Q 700 70, 600 70 Q 180 70, 140 140" stroke="#4b5563" strokeWidth="2" fill="none" strokeDasharray="8,5" markerEnd="url(#arrowGray)" />
            {/* To MARKETING */}
            <path d="M 700 20 L 700 45 Q 700 60, 620 60 Q 360 60, 330 140" stroke="#4b5563" strokeWidth="2" fill="none" strokeDasharray="8,5" markerEnd="url(#arrowGray)" />
            {/* To SALES */}
            <path d="M 700 20 L 700 40 Q 700 55, 650 55 Q 560 55, 520 140" stroke="#d97706" strokeWidth="2" fill="none" strokeDasharray="8,5" markerEnd="url(#arrowOrange)" />
            {/* To AUDITING */}
            <path d="M 700 20 L 700 40 Q 700 55, 750 55 Q 840 55, 880 140" stroke="#d97706" strokeWidth="2" fill="none" strokeDasharray="8,5" markerEnd="url(#arrowOrange)" />
            {/* To HR */}
            <path d="M 700 20 L 700 45 Q 700 60, 780 60 Q 1040 60, 1070 140" stroke="#4b5563" strokeWidth="2" fill="none" strokeDasharray="8,5" markerEnd="url(#arrowGray)" />
            {/* To BPO (rightmost) */}
            <path d="M 700 20 L 700 50 Q 700 70, 800 70 Q 1220 70, 1260 140" stroke="#4b5563" strokeWidth="2" fill="none" strokeDasharray="8,5" markerEnd="url(#arrowGray)" />
            
            {/* Arrow markers */}
            <defs>
              <marker id="arrowGray" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#4b5563" />
              </marker>
              <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#d97706" />
              </marker>
            </defs>
          </svg>

          {/* Department Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 mt-20 lg:mt-28 mb-6 relative z-20 px-2">
            {/* TECH */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative">
              {/* Mobile icon for TECH - left side */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
                <svg viewBox="0 0 50 70" className="w-10 h-14">
                  {/* Phone body */}
                  <rect x="5" y="0" width="30" height="55" rx="4" fill="#29b6f6" />
                  <rect x="9" y="4" width="22" height="38" rx="2" fill="white" />
                  <circle cx="20" cy="48" r="3" fill="white" />
                  {/* Chat bubbles */}
                  <rect x="32" y="15" width="18" height="25" rx="3" fill="#1e88e5" />
                  <rect x="35" y="19" width="12" height="2" rx="1" fill="white" />
                  <rect x="35" y="23" width="10" height="2" rx="1" fill="white" />
                  <rect x="35" y="27" width="12" height="2" rx="1" fill="white" />
                  <rect x="35" y="31" width="8" height="2" rx="1" fill="white" />
                </svg>
              </div>
              <div className="bg-[#64b5f6] px-3 py-2 text-white font-bold text-center text-xs md:text-sm">
                TECH
              </div>
              <div className="p-3 space-y-1.5 bg-white">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#2196f3] shrink-0"></span>
                  Software
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#2196f3] shrink-0"></span>
                  App, Web
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#2196f3] shrink-0"></span>
                  AI, IT Support
                </div>
              </div>
            </div>

            {/* MARKETING */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#1976d2] px-3 py-2 text-white font-bold text-center text-xs md:text-sm">
                MARKETING
              </div>
              <div className="p-3 space-y-1.5 bg-white">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#1976d2] shrink-0"></span>
                  Digital
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#1976d2] shrink-0"></span>
                  Branding
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#1976d2] shrink-0"></span>
                  Advertising
                </div>
              </div>
            </div>

            {/* SALES */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#43a047] px-3 py-2 text-white font-bold text-center text-xs md:text-sm">
                SALES
              </div>
              <div className="p-3 space-y-1.5 bg-white">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#e53935] shrink-0"></span>
                  Lead Gen
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#e53935] shrink-0"></span>
                  CRM
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#e53935] shrink-0"></span>
                  Revenue Growth
                </div>
              </div>
            </div>

            {/* AUDITING */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#00acc1] px-3 py-2 text-white font-bold text-center text-xs md:text-sm">
                AUDITING
              </div>
              <div className="p-3 space-y-1.5 bg-white">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#00acc1] shrink-0"></span>
                  Finance
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#00acc1] shrink-0"></span>
                  Compliance
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#00acc1] shrink-0"></span>
                  Tax Filing
                </div>
              </div>
            </div>

            {/* HR */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#7b1fa2] px-3 py-2 text-white font-bold text-center text-xs md:text-sm">
                HR
              </div>
              <div className="p-3 space-y-1.5 bg-white">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#7b1fa2] shrink-0"></span>
                  Recruitment
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#7b1fa2] shrink-0"></span>
                  Payroll
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#7b1fa2] shrink-0"></span>
                  Training
                </div>
              </div>
            </div>

            {/* BPO */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#26c6da] px-3 py-2 text-white font-bold text-center text-xs md:text-sm">
                BPO
              </div>
              <div className="p-3 space-y-1.5 bg-white">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#26c6da] shrink-0"></span>
                  Customer Support
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#26c6da] shrink-0"></span>
                  Back Office
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#26c6da] shrink-0"></span>
                  KPO Services
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Banner */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-[#fef3c7] via-[#fef9c3] to-[#fef3c7] border-2 border-[#d4a216] px-5 md:px-10 py-2.5 rounded-full shadow-md">
            <span className="text-[#92400e] font-bold text-xs md:text-sm tracking-wide">
              ALL BUSINESS OPERATIONS MANAGED BY OUR CEO
            </span>
          </div>
        </div>

        {/* Operations Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-6 relative">
          {/* Your Company - Building illustration */}
          <div className="flex flex-col items-center gap-2 shrink-0 lg:w-28">
            <svg viewBox="0 0 100 120" className="w-20 h-24">
              {/* Background building (tallest, back) */}
              <rect x="30" y="10" width="45" height="80" fill="#5c6bc0" rx="2" />
              {/* Left building */}
              <rect x="5" y="35" width="30" height="55" fill="#7986cb" rx="2" />
              {/* Right small building */}
              <rect x="70" y="50" width="25" height="40" fill="#9fa8da" rx="2" />
              
              {/* Main building windows */}
              <rect x="36" y="16" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="48" y="16" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="60" y="16" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="36" y="28" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="48" y="28" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="60" y="28" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="36" y="40" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="48" y="40" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="60" y="40" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="36" y="52" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="48" y="52" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="60" y="52" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="36" y="64" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="48" y="64" width="8" height="8" fill="#bbdefb" rx="1" />
              <rect x="60" y="64" width="8" height="8" fill="#bbdefb" rx="1" />
              
              {/* Left building windows */}
              <rect x="10" y="42" width="7" height="7" fill="#bbdefb" rx="1" />
              <rect x="21" y="42" width="7" height="7" fill="#bbdefb" rx="1" />
              <rect x="10" y="53" width="7" height="7" fill="#bbdefb" rx="1" />
              <rect x="21" y="53" width="7" height="7" fill="#bbdefb" rx="1" />
              <rect x="10" y="64" width="7" height="7" fill="#bbdefb" rx="1" />
              <rect x="21" y="64" width="7" height="7" fill="#bbdefb" rx="1" />
              <rect x="10" y="75" width="7" height="7" fill="#bbdefb" rx="1" />
              <rect x="21" y="75" width="7" height="7" fill="#bbdefb" rx="1" />
              
              {/* Right building windows */}
              <rect x="75" y="56" width="6" height="6" fill="#bbdefb" rx="1" />
              <rect x="84" y="56" width="6" height="6" fill="#bbdefb" rx="1" />
              <rect x="75" y="66" width="6" height="6" fill="#bbdefb" rx="1" />
              <rect x="84" y="66" width="6" height="6" fill="#bbdefb" rx="1" />
              <rect x="75" y="76" width="6" height="6" fill="#bbdefb" rx="1" />
              <rect x="84" y="76" width="6" height="6" fill="#bbdefb" rx="1" />
              
              {/* Main entrance door */}
              <rect x="47" y="76" width="12" height="14" fill="#3949ab" rx="1" />
            </svg>
            <div className="text-center">
              <span className="font-bold text-[#1a365d] text-sm block">Your</span>
              <span className="font-bold text-[#1976d2] text-sm">Company</span>
            </div>
          </div>

          {/* Curved dashed line from Company */}
          <svg className="hidden lg:block absolute left-24 top-16 w-20 h-32 z-10" viewBox="0 0 80 130">
            <path d="M 0 0 Q 40 60, 80 70 L 80 130" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="6,4" />
          </svg>

          {/* Operations Cards with Blue Bar */}
          <div className="flex-1 relative px-2 lg:px-4">
            {/* Operations Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-2">
              {/* Finance & Accounts */}
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-2xl shadow-md border border-gray-100">
                <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12 mb-1">
                  {/* Monitor */}
                  <rect x="8" y="8" width="35" height="28" rx="2" fill="#1976d2" />
                  <rect x="11" y="11" width="29" height="20" fill="#bbdefb" />
                  {/* Chart bars on screen */}
                  <rect x="14" y="20" width="5" height="8" fill="#1976d2" />
                  <rect x="21" y="17" width="5" height="11" fill="#1565c0" />
                  <rect x="28" y="14" width="5" height="14" fill="#0d47a1" />
                  {/* Monitor stand */}
                  <rect x="20" y="36" width="12" height="4" fill="#90caf9" />
                  <rect x="17" y="40" width="18" height="3" rx="1" fill="#64b5f6" />
                  {/* Keyboard */}
                  <rect x="40" y="35" width="18" height="12" rx="2" fill="#90caf9" />
                  <rect x="43" y="38" width="12" height="2" rx="0.5" fill="#1976d2" />
                  <rect x="43" y="42" width="12" height="2" rx="0.5" fill="#1976d2" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold text-gray-700 text-center leading-tight">Finance &<br/>Accounts</span>
              </div>

              {/* Legal & Compliance */}
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-2xl shadow-md border border-gray-100">
                <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12 mb-1">
                  {/* Gavel head */}
                  <ellipse cx="30" cy="15" rx="20" ry="8" fill="#8d6e63" />
                  <ellipse cx="30" cy="13" rx="18" ry="6" fill="#a1887f" />
                  {/* Handle */}
                  <rect x="26" y="18" width="8" height="28" fill="#6d4c41" rx="1" />
                  {/* Base */}
                  <ellipse cx="30" cy="50" rx="18" ry="6" fill="#5d4037" />
                  <ellipse cx="30" cy="48" rx="16" ry="5" fill="#6d4c41" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold text-gray-700 text-center leading-tight">Legal &<br/>Compliance</span>
              </div>

              {/* Operations */}
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-2xl shadow-md border border-gray-100">
                <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12 mb-1">
                  {/* Large gear */}
                  <circle cx="22" cy="28" r="14" fill="#ff9800" />
                  <circle cx="22" cy="28" r="6" fill="#fff3e0" />
                  {/* Gear teeth - large */}
                  <rect x="19" y="10" width="6" height="8" fill="#ff9800" rx="1" />
                  <rect x="19" y="42" width="6" height="8" fill="#ff9800" rx="1" />
                  <rect x="4" y="25" width="8" height="6" fill="#ff9800" rx="1" />
                  <rect x="32" y="25" width="8" height="6" fill="#ff9800" rx="1" />
                  {/* Medium gear */}
                  <circle cx="42" cy="20" r="10" fill="#ffb74d" />
                  <circle cx="42" cy="20" r="4" fill="#fff3e0" />
                  {/* Gear teeth - medium */}
                  <rect x="40" y="6" width="4" height="6" fill="#ffb74d" rx="1" />
                  <rect x="40" y="28" width="4" height="6" fill="#ffb74d" rx="1" />
                  <rect x="28" y="18" width="6" height="4" fill="#ffb74d" rx="1" />
                  <rect x="50" y="18" width="6" height="4" fill="#ffb74d" rx="1" />
                  {/* Small gear */}
                  <circle cx="48" cy="42" r="8" fill="#ffa726" />
                  <circle cx="48" cy="42" r="3" fill="#fff3e0" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold text-gray-700 text-center leading-tight">Operations</span>
              </div>

              {/* Supply Chain */}
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-2xl shadow-md border border-gray-100">
                <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12 mb-1">
                  {/* Truck body */}
                  <rect x="4" y="18" width="32" height="22" rx="2" fill="#ff9800" />
                  {/* Cabin */}
                  <path d="M 36 22 L 36 40 L 52 40 L 52 30 L 44 22 Z" fill="#ffb74d" />
                  {/* Window */}
                  <path d="M 38 24 L 44 24 L 50 30 L 50 34 L 38 34 Z" fill="#bbdefb" />
                  {/* Wheels */}
                  <circle cx="15" cy="44" r="6" fill="#424242" />
                  <circle cx="15" cy="44" r="3" fill="#9e9e9e" />
                  <circle cx="44" cy="44" r="6" fill="#424242" />
                  <circle cx="44" cy="44" r="3" fill="#9e9e9e" />
                  {/* Lines on truck body */}
                  <line x1="8" y1="24" x2="32" y2="24" stroke="#e65100" strokeWidth="1" />
                  <line x1="8" y1="30" x2="32" y2="30" stroke="#e65100" strokeWidth="1" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold text-gray-700 text-center leading-tight">Supply<br/>Chain</span>
              </div>

              {/* Customer Support */}
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-2xl shadow-md border border-gray-100">
                <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12 mb-1">
                  {/* Headset band */}
                  <path d="M 12 28 Q 12 10, 30 10 Q 48 10, 48 28" stroke="#26c6da" strokeWidth="4" fill="none" />
                  {/* Head */}
                  <circle cx="30" cy="28" r="12" fill="#1a365d" />
                  {/* Body */}
                  <path d="M 30 40 C 15 40 10 55 10 60 L 50 60 C 50 55 45 40 30 40" fill="#1a365d" />
                  {/* Left earpiece */}
                  <rect x="6" y="24" width="8" height="14" rx="3" fill="#26c6da" />
                  {/* Right earpiece */}
                  <rect x="46" y="24" width="8" height="14" rx="3" fill="#26c6da" />
                  {/* Mic */}
                  <path d="M 6 34 Q 2 34, 2 40 L 2 44 Q 2 48, 8 48 L 16 48" stroke="#26c6da" strokeWidth="3" fill="none" />
                  <circle cx="18" cy="48" r="4" fill="#26c6da" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold text-gray-700 text-center leading-tight">Customer<br/>Support</span>
              </div>

              {/* Business Strategy */}
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-2xl shadow-md border border-gray-100">
                <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12 mb-1">
                  {/* Bulb top rays */}
                  <path d="M 30 4 L 30 10" stroke="#fdd835" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 14 12 L 18 16" stroke="#fdd835" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 46 12 L 42 16" stroke="#fdd835" strokeWidth="3" strokeLinecap="round" />
                  {/* Light bulb */}
                  <ellipse cx="30" cy="28" rx="16" ry="18" fill="#fff59d" />
                  <ellipse cx="30" cy="26" rx="14" ry="15" fill="#ffee58" />
                  {/* Highlight */}
                  <ellipse cx="24" cy="22" rx="4" ry="6" fill="#fffde7" />
                  {/* Bulb base */}
                  <rect x="22" y="44" width="16" height="4" fill="#fbc02d" rx="1" />
                  <rect x="24" y="48" width="12" height="3" fill="#f9a825" rx="1" />
                  <rect x="26" y="51" width="8" height="3" fill="#f57f17" rx="1" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold text-gray-700 text-center leading-tight">Business<br/>Strategy</span>
              </div>

              {/* Data Analytics & Reporting */}
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-2xl shadow-md border border-gray-100">
                <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12 mb-1">
                  {/* Monitor frame */}
                  <rect x="5" y="6" width="50" height="36" rx="3" fill="#1976d2" />
                  <rect x="8" y="9" width="44" height="28" fill="#e3f2fd" />
                  {/* Chart bars */}
                  <rect x="12" y="24" width="8" height="10" fill="#42a5f5" />
                  <rect x="23" y="18" width="8" height="16" fill="#1e88e5" />
                  <rect x="34" y="12" width="8" height="22" fill="#1565c0" />
                  <rect x="45" y="16" width="4" height="18" fill="#0d47a1" />
                  {/* Trend line */}
                  <path d="M 16 22 L 27 16 L 38 10 L 47 14" stroke="#4caf50" strokeWidth="2" fill="none" />
                  <circle cx="16" cy="22" r="2" fill="#4caf50" />
                  <circle cx="27" cy="16" r="2" fill="#4caf50" />
                  <circle cx="38" cy="10" r="2" fill="#4caf50" />
                  <circle cx="47" cy="14" r="2" fill="#4caf50" />
                  {/* Monitor stand */}
                  <rect x="24" y="42" width="12" height="6" fill="#90caf9" />
                  <rect x="20" y="48" width="20" height="4" rx="1" fill="#64b5f6" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold text-gray-700 text-center leading-tight">Data Analytics<br/>& Reporting</span>
              </div>
            </div>

            {/* Blue connecting bar */}
            <div className="h-3 bg-gradient-to-r from-[#1565c0] via-[#42a5f5] to-[#1565c0] rounded-full mx-2 hidden lg:block"></div>

            {/* Curved connector lines below operations */}
            <svg className="w-full h-10 mt-1 hidden lg:block" viewBox="0 0 1000 40" preserveAspectRatio="xMidYMid meet">
              <path d="M 70 5 Q 70 35, 140 35 Q 210 35, 210 5" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="6,4" />
              <path d="M 210 5 Q 210 35, 280 35 Q 350 35, 350 5" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="6,4" />
              <path d="M 350 5 Q 350 35, 420 35 Q 490 35, 490 5" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="6,4" />
              <path d="M 490 5 Q 490 35, 560 35 Q 630 35, 630 5" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="6,4" />
              <path d="M 630 5 Q 630 35, 700 35 Q 770 35, 770 5" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="6,4" />
              <path d="M 770 5 Q 770 35, 840 35 Q 910 35, 910 5" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="6,4" />
            </svg>
          </div>

          {/* Curved dashed line to Growth */}
          <svg className="hidden lg:block absolute right-24 top-16 w-20 h-32 z-10" viewBox="0 0 80 130">
            <path d="M 80 0 Q 40 60, 0 70 L 0 130" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="6,4" />
          </svg>

          {/* Business Growth - Chart illustration */}
          <div className="flex flex-col items-center gap-2 shrink-0 lg:w-28">
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              {/* Chart bars */}
              <rect x="10" y="60" width="16" height="30" fill="#ffcc80" rx="2" />
              <rect x="30" y="45" width="16" height="45" fill="#ffb74d" rx="2" />
              <rect x="50" y="30" width="16" height="60" fill="#ffa726" rx="2" />
              <rect x="70" y="15" width="16" height="75" fill="#ff9800" rx="2" />
              {/* Growth arrow */}
              <path d="M 18 55 L 38 40 L 58 25 L 78 10" stroke="#43a047" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* Arrow head */}
              <polygon points="90,5 75,8 80,18" fill="#43a047" />
            </svg>
            <div className="text-center">
              <span className="font-bold text-[#1a365d] text-sm block">Business</span>
              <span className="font-bold text-[#43a047] text-sm">Growth</span>
            </div>
          </div>
        </div>

        {/* Result Banner */}
        <div className="flex justify-center mt-4">
          <div className="bg-white border-2 border-gray-200 px-5 md:px-10 py-3 md:py-4 rounded-full shadow-lg">
            <span className="font-black text-[#1a365d] text-base md:text-xl tracking-wide">RESULT</span>
            <span className="mx-2 md:mx-3 text-gray-500 text-base md:text-xl">→</span>
            <span className="text-gray-700 text-sm md:text-lg">
              You Focus on{" "}
              <span className="font-bold text-[#43a047]">Growth</span>
              {" "}– We Handle the Rest!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
