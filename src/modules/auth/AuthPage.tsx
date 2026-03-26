import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaLinkedinIn,
  FaMicrosoft,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import {
  Mail,
  Users,
  TrendingUp,
  Shield,
  Headphones,
  FileText,
} from "lucide-react";

/* ═══════════════════════════════════════════
   BUSINESSMAN SVG (back view with briefcase)
   ═══════════════════════════════════════════ */
const BusinessmanSVG = () => (
  <svg
    viewBox="0 0 200 420"
    className="w-[160px] h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head - back of hair */}
    <ellipse cx="100" cy="42" rx="28" ry="30" fill="#1a1a2e" />
    {/* Skin neck */}
    <rect x="88" y="66" width="24" height="14" rx="4" fill="#d4a574" />
    {/* Suit jacket */}
    <path
      d="M56 80 C56 80 62 74 100 74 C138 74 144 80 144 80 L150 200 L50 200 Z"
      fill="#1e3a6e"
    />
    {/* Suit jacket shadows */}
    <path
      d="M100 74 L100 200"
      stroke="#152d55"
      strokeWidth="1"
      opacity="0.3"
    />
    {/* Collar */}
    <path
      d="M85 78 L100 90 L115 78"
      fill="white"
      stroke="white"
      strokeWidth="2"
    />
    {/* Tie */}
    <polygon points="96,88 104,88 102,140 98,140" fill="#d97706" />
    <polygon points="95,140 105,140 100,152" fill="#b45309" />
    {/* Left arm */}
    <path
      d="M56 86 C44 90 38 140 40 180 L52 180 C52 150 54 110 60 90 Z"
      fill="#1e3a6e"
    />
    {/* Left hand */}
    <ellipse cx="45" cy="184" rx="8" ry="6" fill="#d4a574" />
    {/* Right arm */}
    <path
      d="M144 86 C156 90 162 140 160 180 L148 180 C148 150 146 110 140 90 Z"
      fill="#1e3a6e"
    />
    {/* Right hand */}
    <ellipse cx="155" cy="184" rx="8" ry="6" fill="#d4a574" />
    {/* Pants */}
    <path
      d="M58 200 L54 340 L80 340 L96 210 L104 210 L120 340 L146 340 L142 200 Z"
      fill="#152d55"
    />
    {/* Belt */}
    <rect x="56" y="196" width="88" height="8" rx="2" fill="#111827" />
    <rect x="94" y="196" width="12" height="8" rx="1" fill="#d97706" />
    {/* Shoes */}
    <ellipse cx="66" cy="348" rx="16" ry="8" fill="#111827" />
    <ellipse cx="134" cy="348" rx="16" ry="8" fill="#111827" />
    {/* Briefcase */}
    <rect x="148" y="170" width="36" height="28" rx="4" fill="#374151" />
    <rect x="158" y="162" width="16" height="10" rx="3" fill="none" stroke="#4b5563" strokeWidth="2" />
    <rect x="162" y="180" width="8" height="4" rx="1" fill="#d97706" />
    {/* Ear */}
    <ellipse cx="128" cy="42" rx="5" ry="7" fill="#d4a574" />
  </svg>
);

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-[#dce8f8] via-[#e8f0fb] to-[#f0f6fd] flex items-center justify-center px-4 py-8 overflow-hidden relative"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Background city silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.04] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 100%22><rect x=%2220%22 y=%2230%22 width=%2230%22 height=%2270%22 fill=%22%23333%22/><rect x=%2260%22 y=%2250%22 width=%2225%22 height=%2250%22 fill=%22%23333%22/><rect x=%2295%22 y=%2215%22 width=%2235%22 height=%2285%22 fill=%22%23333%22/><rect x=%22140%22 y=%2240%22 width=%2220%22 height=%2260%22 fill=%22%23333%22/></svg>')] bg-repeat-x bg-bottom" />

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-14 relative z-10">

        {/* ════════════════════════════════
           LEFT — AUTH CARD
           ════════════════════════════════ */}
        <div className="w-full max-w-[430px] flex-shrink-0">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/50">

            {/* Toggle Tabs */}
            <div className="flex rounded-full bg-gray-50 border border-gray-100 p-1.5 mb-9">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  isLogin
                    ? "bg-[#1e3a6e] text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  !isLogin
                    ? "bg-[#1e3a6e] text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name (Sign Up only) */}
              {!isLogin && (
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition bg-gray-50/30"
                  />
                </div>
              )}

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition bg-gray-50/30"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition bg-gray-50/30"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#1e3a6e] hover:bg-[#163058] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm tracking-wide"
              >
                {isLogin ? "Log In" : "Sign Up"}
              </button>
            </form>

            {/* Forgot Password */}
            {isLogin && (
              <div className="text-center mt-6">
                <button className="text-sm text-gray-400 hover:text-blue-600 transition font-medium">
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Divider line */}
            <div className="flex items-center my-7">
              <div className="flex-1 h-px bg-gray-200" />
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Login — Google, LinkedIn, Microsoft */}
            <div className="flex justify-center gap-5">
              <button className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center hover:shadow-xl hover:border-gray-200 transition-all hover:-translate-y-0.5">
                <FaGoogle className="text-2xl text-red-500" />
              </button>
              <button className="w-16 h-16 rounded-2xl bg-[#0077b5] shadow-md flex items-center justify-center hover:shadow-xl transition-all hover:-translate-y-0.5">
                <FaLinkedinIn className="text-2xl text-white" />
              </button>
              <button className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center hover:shadow-xl hover:border-gray-200 transition-all hover:-translate-y-0.5">
                <FaMicrosoft className="text-2xl text-[#00a4ef]" />
              </button>
            </div>

            {/* Social Footer Icons */}
            <div className="flex justify-center gap-3 mt-8 pt-5 border-t border-gray-100">
              {[
                { icon: <FaFacebookF />, key: "fb" },
                { icon: <FaYoutube />, key: "yt" },
                { icon: <FaInstagram />, key: "ig" },
                { icon: <FaTwitter />, key: "tw" },
                { icon: <FaGithub />, key: "gh" },
                { icon: <FaEnvelope />, key: "em" },
              ].map((item) => (
                <button
                  key={item.key}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all text-[14px]"
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
           RIGHT — BUSINESSMAN + MONITOR
           ════════════════════════════════ */}
        <div className="hidden lg:flex flex-1 items-end justify-center relative min-h-[560px]">

          {/* ── Floating coins & sparkles ── */}
          <div className="absolute top-0 right-12 animate-bounce" style={{ animationDuration: "3s" }}>
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-sm border-2 border-yellow-400">
              $
            </div>
          </div>
          <div className="absolute top-6 right-4 text-yellow-500 text-xl">✨</div>
          <div className="absolute top-16 right-24 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
            <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-md" />
          </div>

          {/* ── Dashboard Monitor ── */}
          <div className="absolute top-0 right-0 w-[440px]">
            {/* Monitor outer frame */}
            <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden">
              {/* Browser chrome bar */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 bg-white/20 rounded-full h-4 mx-3" />
                <span className="text-[8px] text-white/60">Dashboard</span>
                <span className="text-[8px] text-white/60 ml-1">Set Status</span>
              </div>

              {/* Dashboard content area */}
              <div className="p-3 bg-gradient-to-b from-gray-50 to-white">
                {/* Department icon row */}
                <div className="flex justify-center gap-2.5 mb-3">
                  {[
                    { icon: Mail, bg: "bg-blue-500", label: "Tech" },
                    { icon: TrendingUp, bg: "bg-green-500", label: "Marketing" },
                    { icon: Users, bg: "bg-cyan-500", label: "Sales" },
                    { icon: FileText, bg: "bg-orange-500", label: "Auditing" },
                    { icon: Shield, bg: "bg-[#1e3a5f]", label: "HRR" },
                    { icon: Headphones, bg: "bg-red-400", label: "BPO" },
                  ].map((dept) => (
                    <div key={dept.label} className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 ${dept.bg} rounded-xl flex items-center justify-center shadow-sm`}
                      >
                        <dept.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[7px] text-gray-500 mt-1 font-medium">
                        {dept.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CEO badge figure */}
                <div className="flex justify-center mb-2">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-b from-[#1e3a6e] to-[#152d55] rounded-full flex items-center justify-center shadow-md">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-blue-200 rounded-full opacity-50" />
                  </div>
                </div>

                {/* Department checklist row */}
                <div className="flex justify-center gap-3 mb-3 text-[8px]">
                  {[
                    { label: "Tech", color: "text-blue-500", icon: "☑" },
                    { label: "Marketing", color: "text-green-500", icon: "☑" },
                    { label: "Sales", color: "text-red-500", icon: "☑" },
                    { label: "Auditing", color: "text-orange-500", icon: "●" },
                    { label: "HR", color: "text-purple-500", icon: "●" },
                    { label: "BPO", color: "text-blue-400", icon: "" },
                  ].map((d) => (
                    <span key={d.label} className="text-gray-500 font-medium flex items-center gap-0.5">
                      <span className={d.color}>{d.icon}</span>
                      {d.label}
                    </span>
                  ))}
                </div>

                {/* Mini stat cards row */}
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: "REVENUE", value: "$93,900S", borderColor: "border-t-blue-500", bg: "bg-blue-50", barColors: ["bg-blue-400", "bg-blue-300"] },
                    { label: "SALES LEADS", value: "1,200", borderColor: "border-t-green-500", bg: "bg-green-50", barColors: ["bg-green-400", "bg-green-300"] },
                    { label: "EXPENSES", value: "$93,400", borderColor: "border-t-red-500", bg: "bg-red-50", barColors: ["bg-red-400", "bg-red-300"] },
                    { label: "AUDITS", value: "332", borderColor: "border-t-purple-500", bg: "bg-purple-50", barColors: ["bg-purple-400", "bg-purple-300"] },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`${stat.bg} border-t-[3px] ${stat.borderColor} rounded-lg p-2 shadow-sm`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[6px] text-gray-500 font-bold tracking-wider uppercase">
                          {stat.label}
                        </span>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-blue-200 rounded-sm" />
                        </div>
                      </div>
                      <p className="text-[11px] font-extrabold text-gray-800 mb-1">{stat.value}</p>
                      <div className="space-y-0.5 text-[5px] text-gray-400">
                        <div className="w-full h-0.5 bg-gray-200 rounded" />
                        <div className="w-3/4 h-0.5 bg-gray-200 rounded" />
                      </div>
                      <div className="flex items-center gap-1 mt-1.5">
                        <div className={`w-3 h-3 ${stat.barColors[0]} rounded-sm opacity-60`} />
                        <div className="flex flex-col gap-0.5 flex-1">
                          <div className="w-full h-[2px] bg-gray-200 rounded" />
                          <div className="w-2/3 h-[2px] bg-gray-200 rounded" />
                          <div className="w-1/2 h-[2px] bg-gray-200 rounded" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Monitor stand */}
            <div className="flex justify-center">
              <div className="w-14 h-5 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-md" />
            </div>
            <div className="flex justify-center">
              <div className="w-28 h-2.5 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-lg shadow-sm" />
            </div>
          </div>

          {/* ── Businessman (back view) ── */}
          <div className="relative z-10 mr-10 mb-0">
            <BusinessmanSVG />
          </div>

          {/* ── Floating bottom-left: Report paper ── */}
          <div className="absolute bottom-12 left-4">
            <div className="w-24 h-28 bg-white rounded-xl shadow-xl border border-gray-100 p-2.5 rotate-[-6deg] hover:rotate-0 transition-transform">
              <div className="text-[7px] text-gray-400 font-bold tracking-wider mb-1 uppercase">Reporting</div>
              <div className="flex justify-center mb-1">
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="30 70" strokeDashoffset="0" />
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="-30" />
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="15 85" strokeDashoffset="-55" />
                </svg>
              </div>
              <div className="text-[8px] text-blue-600 font-bold text-center">Inkdlls</div>
            </div>
          </div>

          {/* Cardboard boxes */}
          <div className="absolute bottom-4 left-32">
            <div className="relative">
              <div className="w-10 h-8 bg-gradient-to-b from-amber-300 to-amber-400 rounded-sm shadow-md border border-amber-400">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-amber-500" />
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-amber-500" />
              </div>
              <div className="w-8 h-6 bg-gradient-to-b from-amber-200 to-amber-300 rounded-sm shadow-sm border border-amber-300 -mt-1 ml-3 rotate-6">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-amber-400" />
              </div>
            </div>
          </div>

          {/* Plant / leaf */}
          <div className="absolute bottom-4 right-4">
            <div className="relative">
              <div className="w-6 h-8 bg-gradient-to-t from-amber-600 to-amber-700 rounded-t-sm mx-auto" style={{ width: "10px" }} />
              <div className="absolute -top-2 left-1 w-5 h-8 bg-gradient-to-tr from-green-500 to-green-400 rounded-full rotate-[-30deg] opacity-80" />
              <div className="absolute -top-4 left-3 w-5 h-8 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full rotate-[15deg] opacity-80" />
              <div className="absolute -top-1 left-0 w-4 h-6 bg-gradient-to-tr from-green-600 to-green-500 rounded-full rotate-[-50deg] opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
