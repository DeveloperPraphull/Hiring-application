
// // "use client"

// // import { Building2, TrendingUp, Monitor, Megaphone, Target, ClipboardCheck, Users, Headphones, Calculator, Scale, Settings, Truck, HeadphonesIcon, Lightbulb, BarChart3, ArrowRight, ArrowUp } from "lucide-react"

// // export default function HireACEO() {
// //   const departments = [
// //     {
// //       name: "TECH",
// //       color: "bg-blue-600",
// //       borderColor: "border-blue-600",
// //       items: ["Software", "App, Web", "AI, IT Support"],
// //       dotColor: "bg-blue-600"
// //     },
// //     {
// //       name: "MARKETING",
// //       color: "bg-green-600",
// //       borderColor: "border-green-600",
// //       items: ["Digital", "Branding", "Advertising"],
// //       dotColor: "bg-green-600"
// //     },
// //     {
// //       name: "SALES",
// //       color: "bg-red-600",
// //       borderColor: "border-red-600",
// //       items: ["Lead Gen", "CRM", "Revenue Growth"],
// //       dotColor: "bg-red-600"
// //     },
// //     {
// //       name: "AUDITING",
// //       color: "bg-orange-500",
// //       borderColor: "border-orange-500",
// //       items: ["Finance", "Compliance", "Tax Filing"],
// //       dotColor: "bg-orange-500"
// //     },
// //     {
// //       name: "HR",
// //       color: "bg-purple-600",
// //       borderColor: "border-purple-600",
// //       items: ["Recruitment", "Payroll", "Training"],
// //       dotColor: "bg-purple-600"
// //     },
// //     {
// //       name: "BPO",
// //       color: "bg-cyan-500",
// //       borderColor: "border-cyan-500",
// //       items: ["Customer Support", "Back Office", "KPO Services"],
// //       dotColor: "bg-cyan-500"
// //     }
// //   ]

// //   const operations = [
// //     { icon: Calculator, label: "Finance &\nAccounts", color: "text-blue-600" },
// //     { icon: Scale, label: "Legal &\nCompliance", color: "text-amber-700" },
// //     { icon: Settings, label: "Operations", color: "text-orange-500" },
// //     { icon: Truck, label: "Supply\nChain", color: "text-orange-400" },
// //     { icon: HeadphonesIcon, label: "Customer\nSupport", color: "text-gray-700" },
// //     { icon: Lightbulb, label: "Business\nStrategy", color: "text-yellow-500" },
// //     { icon: BarChart3, label: "Data Analytics\n& Reporting", color: "text-blue-500" }
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4 md:p-8">
// //       <div className="mx-auto max-w-7xl">
// //         {/* Header */}
// //         <div className="mb-8 text-center">
// //           <h1 className="flex flex-wrap items-center justify-center gap-2 text-2xl font-bold md:text-4xl">
// //             <span className="rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg md:px-6">
// //               HIRE A CEO
// //             </span>
// //             <span className="text-gray-800">— WE MANAGE YOUR</span>
// //             <span className="text-blue-600">COMPLETE BUSINESS</span>
// //           </h1>
// //         </div>

// //         {/* CEO Section */}
// //         <div className="relative mb-6">
// //           {/* CEO Card */}
// //           <div className="mx-auto w-fit">
// //             <div className="relative mx-auto flex flex-col items-center">
// //               {/* CEO Illustration */}
// //               <div className="relative">
// //                 <div className="relative flex h-32 w-40 items-end justify-center rounded-t-full bg-gradient-to-b from-blue-100 to-blue-200 md:h-40 md:w-48">
// //                   {/* Gear icons */}
// //                   <div className="absolute -right-2 top-2 text-gray-400">
// //                     <Settings className="h-5 w-5 md:h-6 md:w-6" />
// //                   </div>
// //                   <div className="absolute -right-4 top-8 text-gray-400">
// //                     <Settings className="h-4 w-4 md:h-5 md:w-5" />
// //                   </div>
// //                   {/* Money icon */}
// //                   <div className="absolute -left-2 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-white md:h-10 md:w-10">
// //                     <span className="text-sm font-bold md:text-base">$</span>
// //                   </div>
// //                   {/* CEO silhouette */}
// //                   <div className="mb-0 flex h-24 w-24 items-end justify-center md:h-32 md:w-32">
// //                     <svg viewBox="0 0 100 100" className="h-full w-full">
// //                       {/* Head */}
// //                       <ellipse cx="50" cy="25" rx="15" ry="18" fill="#2d3748" />
// //                       {/* Body/Suit */}
// //                       <path d="M25 100 L30 55 L45 50 L50 55 L55 50 L70 55 L75 100 Z" fill="#2d3748" />
// //                       {/* Tie */}
// //                       <path d="M48 50 L50 70 L52 50 Z" fill="#f6ad55" />
// //                       {/* Collar */}
// //                       <path d="M42 50 L50 58 L58 50 L55 48 L50 52 L45 48 Z" fill="white" />
// //                       {/* Arms on desk */}
// //                       <ellipse cx="30" cy="85" rx="12" ry="6" fill="#2d3748" />
// //                       <ellipse cx="70" cy="85" rx="12" ry="6" fill="#2d3748" />
// //                     </svg>
// //                   </div>
// //                 </div>
// //                 {/* Desk/Label */}
// //                 <div className="relative -mt-2 rounded-lg bg-gray-800 px-4 py-2 text-center shadow-lg md:px-8 md:py-3">
// //                   <div className="text-sm font-bold text-white md:text-lg">
// //                     DEDICATED <span className="text-yellow-400">CEO</span>
// //                   </div>
// //                   <div className="text-xs text-gray-300 md:text-sm">(Your Business Head)</div>
// //                 </div>
// //               </div>

// //               {/* Connection lines */}
// //               <div className="hidden h-8 w-px bg-gray-400 md:block"></div>
// //               <div className="hidden h-px w-[80%] max-w-4xl bg-gray-400 md:block"></div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Central Arrow Path from CEO to each department */}
// //         <div className="relative h-24 md:h-32">
// //           <svg className="absolute inset-0 h-full mt-[-3%] w-full overflow-visible pointer-events-none" viewBox="0 0 1200 220" preserveAspectRatio="none">
// //             <defs>
// //               <marker id="arrowHead" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto" markerUnits="strokeWidth">
// //                 <path d="M0 0 L10 4 L0 8 Z" fill="#4b5563" />
// //               </marker>
// //             </defs>
// //             {departments.map((_, index) => {
// //               const x = 100 + index * 180
// //               return (
// //                 <path
// //                   key={index}
// //                   d={`M600,20 C600,60 ${x},100 ${x},120`}
// //                   fill="none"
// //                   stroke="#4b5563"
// //                   strokeWidth="2"
// //                   markerEnd="url(#arrowHead)"
// //                   className="opacity-80"
// //                 />
// //               )
// //             })}
// //           </svg>
// //         </div>

// //         {/* Department Cards */}
// //         <div className="mb-6  mt-[-7    %] grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
// //           {departments.map((dept, index) => (
// //             <div key={index} className="relative">
// //               <div className={`overflow-hidden rounded-xl border-2 ${dept.borderColor} bg-white shadow-lg`}>
// //                 {/* Header */}
// //                 <div className={`${dept.color} px-3 py-2 text-center`}>
// //                   <span className="text-sm font-bold text-white md:text-base">{dept.name}</span>
// //                 </div>
// //                 {/* Items */}
// //                 <div className="space-y-2 p-3">
// //                   {dept.items.map((item, idx) => (
// //                     <div key={idx} className="flex items-center gap-2">
// //                       <div className={`h-2 w-2 rounded-full ${dept.dotColor}`}></div>
// //                       <span className="text-xs text-gray-700 md:text-sm">{item}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Middle Banner */}
// //         <div className="mb-6 flex justify-center">
// //           <div className="rounded-full border-2 border-yellow-400 bg-yellow-50 px-6 py-3 shadow-md md:px-10 md:py-4">
// //             <p className="text-center text-sm font-bold text-gray-800 md:text-lg">
// //               ALL BUSINESS OPERATIONS MANAGED BY OUR CEO
// //             </p>
// //           </div>
// //         </div>

// //         {/* Operations Section */}
// //         <div className="mb-8 flex items-center justify-between gap-4">
// //           {/* Your Company - Left Side */}
// //           <div className="hidden flex-col items-center md:flex">
// //             <div className="mb-2 flex items-end gap-1">
// //               <Building2 className="h-16 w-12 text-gray-600" />
// //               <Building2 className="h-12 w-8 text-gray-500" />
// //               <Building2 className="h-10 w-6 text-gray-400" />
// //             </div>
// //             <span className="text-center text-sm font-bold text-gray-700">
// //               Your<br />Company
// //             </span>
// //           </div>

// //           {/* Operations Cards */}
// //           <div className="flex-1">
// //             <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
// //               {/* Curved bracket left */}
// //               <div className="hidden text-4xl text-blue-300 md:block">⟨</div>

// //               {operations.map((op, index) => (
// //                 <div key={index} className="flex flex-col items-center">
// //                   <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-md md:h-14 md:w-14">
// //                     <op.icon className={`h-6 w-6 md:h-8 md:w-8 ${op.color}`} />
// //                   </div>
// //                   <span className="max-w-16 whitespace-pre-line text-center text-xs font-medium text-gray-700 md:max-w-20">
// //                     {op.label}
// //                   </span>
// //                 </div>
// //               ))}

// //               {/* Curved bracket right */}
// //               <div className="hidden text-4xl text-blue-300 md:block">⟩</div>
// //             </div>

// //             {/* Connecting bar */}
// //             <div className="mx-auto mt-3 h-1 w-[90%] rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400"></div>
// //           </div>

// //           {/* Business Growth - Right Side */}
// //           <div className="hidden flex-col items-center md:flex">
// //             <div className="mb-2 flex items-end gap-1">
// //               <div className="h-6 w-4 rounded-t bg-yellow-400"></div>
// //               <div className="h-10 w-4 rounded-t bg-yellow-500"></div>
// //               <div className="h-14 w-4 rounded-t bg-orange-400"></div>
// //               <div className="h-18 w-4 rounded-t bg-orange-500"></div>
// //               <TrendingUp className="h-8 w-8 -ml-2 -mb-1 text-green-500" />
// //             </div>
// //             <span className="text-center text-sm font-bold">
// //               <span className="text-gray-700">Business</span><br />
// //               <span className="text-green-600">Growth</span>
// //             </span>
// //           </div>
// //         </div>

// //         {/* Mobile Company/Growth indicators */}
// //         <div className="mb-6 flex justify-between md:hidden">
// //           <div className="flex flex-col items-center">
// //             <Building2 className="h-10 w-10 text-gray-600" />
// //             <span className="text-xs font-bold text-gray-700">Your Company</span>
// //           </div>
// //           <div className="flex flex-col items-center">
// //             <TrendingUp className="h-10 w-10 text-green-500" />
// //             <span className="text-xs font-bold text-green-600">Business Growth</span>
// //           </div>
// //         </div>

// //         {/* Result Banner */}
// //         <div className="flex justify-center">
// //           <div className="rounded-full border-2 border-gray-300 bg-white px-6 py-4 shadow-lg md:px-12 md:py-5">
// //             <p className="flex flex-wrap items-center justify-center gap-2 text-center text-base font-bold md:text-xl">
// //               <span className="text-gray-800">RESULT</span>
// //               <ArrowRight className="h-5 w-5 text-gray-600" />
// //               <span className="text-gray-700">You Focus on</span>
// //               <span className="text-green-600">Growth</span>
// //               <span className="text-gray-700">– We Handle the Rest!</span>
// //             </p>
// //           </div>
// //         </div>

// //         {/* Decorative elements */}
// //         <div className="pointer-events-none fixed left-4 top-1/4 opacity-20">
// //           <div className="h-8 w-8 rotate-12 rounded bg-blue-400"></div>
// //         </div>
// //         <div className="pointer-events-none fixed right-8 top-1/3 opacity-20">
// //           <div className="h-4 w-4 rotate-45 rounded-sm bg-yellow-400"></div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }



// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Building2,
//   TrendingUp,
//   FileText,
//   Gavel,
//   Settings,
//   Truck,
//   Headphones,
//   Lightbulb,
//   BarChart3
// } from "lucide-react";

// export default function CEOModel() {

// const topDepartments = [
// {
// title:"TECH",
// color:"bg-blue-600",
// items:["Software","App, Web","AI, IT Support"]
// },
// {
// title:"MARKETING",
// color:"bg-green-600",
// items:["Digital","Branding","Advertising"]
// },
// {
// title:"SALES",
// color:"bg-orange-600",
// items:["Lead Gen","CRM","Revenue Growth"]
// },
// {
// title:"AUDITING",
// color:"bg-yellow-500",
// items:["Finance","Compliance","Tax Filing"]
// },
// {
// title:"HR",
// color:"bg-purple-600",
// items:["Recruitment","Payroll","Training"]
// },
// {
// title:"BPO",
// color:"bg-cyan-600",
// items:["Customer Support","Back Office","KPO Services"]
// }
// ]

// const bottomOps = [
// {icon:FileText,label:"Finance & Accounts"},
// {icon:Gavel,label:"Legal & Compliance"},
// {icon:Settings,label:"Operations"},
// {icon:Truck,label:"Supply Chain"},
// {icon:Headphones,label:"Customer Support"},
// {icon:Lightbulb,label:"Business Strategy"},
// {icon:BarChart3,label:"Data Analytics & Reporting"}
// ]

// return (

// <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-10">

// {/* HEADER */}
// <div className="text-center mb-14">
// <div className="inline-flex bg-blue-800 text-white px-10 py-4 rounded-full text-3xl font-bold">
// HIRE A CEO — WE MANAGE YOUR COMPLETE BUSINESS
// </div>
// </div>

// <div className="relative max-w-7xl mx-auto border-4 border-dashed border-gray-300 rounded-3xl bg-white p-12">

// {/* TOP ROW */}
// <div className="grid grid-cols-6 gap-6 mb-16">

// {topDepartments.map((item,index)=>(
// <div
// key={index}
// className={`${item.color} text-white rounded-xl shadow-lg p-4 text-center`}
// >

// <h3 className="font-bold text-lg mb-2">{item.title}</h3>

// <ul className="text-sm space-y-1">
// {item.items.map((v,i)=>(

// <li key={i}>• {v}</li>

// ))}
// </ul>

// </div>
// ))}

// </div>

// {/* CENTER CEO */}
// <div className="flex justify-center mb-16">

// <motion.div
// initial={{scale:0}}
// animate={{scale:1}}
// transition={{duration:0.6}}
// className="bg-blue-900 text-white px-10 py-8 rounded-3xl shadow-2xl text-center relative"
// >

// <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow">
// <Briefcase className="w-12 h-12 text-blue-900"/>
// </div>

// <h2 className="text-2xl font-bold mt-6">
// DEDICATED <span className="text-yellow-400">CEO</span>
// </h2>

// <p className="text-sm">(Your Business Head)</p>

// </motion.div>

// </div>

// {/* MIDDLE BANNER */}

// <div className="text-center mb-14">

// <div className="bg-yellow-100 border border-yellow-300 px-10 py-3 rounded-lg font-bold">
// ALL BUSINESS OPERATIONS MANAGED BY OUR CEO
// </div>

// </div>

// {/* BOTTOM SERVICES */}

// <div className="grid grid-cols-7 gap-6 text-center">

// {bottomOps.map((item,i)=>{

// const Icon=item.icon

// return(

// <div key={i}>

// <div className="bg-gray-100 rounded-full p-4 inline-block mb-2 shadow">

// <Icon className="w-8 h-8 text-gray-700"/>

// </div>

// <p className="text-sm font-semibold text-gray-700">
// {item.label}
// </p>

// </div>

// )

// })}

// </div>

// {/* LEFT SIDE */}

// <div className="absolute -left-32 top-1/2 -translate-y-1/2 text-center">

// <Building2 className="w-20 h-20 text-blue-900 mx-auto mb-2"/>

// <p className="font-bold">
// Your Company
// </p>

// </div>

// {/* RIGHT SIDE */}

// <div className="absolute -right-32 top-1/2 -translate-y-1/2 text-center">

// <TrendingUp className="w-20 h-20 text-green-600 mx-auto mb-2"/>

// <p className="font-bold text-green-600">
// Business Growth
// </p>

// </div>

// </div>

// {/* RESULT */}

// <div className="mt-10 text-center">

// <div className="inline-block text-black bg-white px-10 py-4 rounded-full shadow font-bold text-xl border">

// RESULT → You Focus on <span className="text-green-600">Growth</span> — We Handle the Rest!

// </div>

// </div>

// </div>

// )

// }

// // 

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  TrendingUp,
  FileText,
  Gavel,
  Settings,
  Truck,
  Headphones,
  Lightbulb,
  BarChart3
} from "lucide-react";

/* ---------- Department Card ---------- */

function DepartmentCard({ title, color, dot, items }) {
  return (
    <div className="relative w-56">

      {/* Header bubble */}
      <div className={`${color} text-white font-bold text-center py-2 rounded-lg shadow relative`}>
        {title}

        <div className={`absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 rotate-45 ${color}`} />
      </div>

      {/* Body */}
      <div className="bg-white border border-dashed border-gray-300 rounded-xl p-4 pt-6 shadow-sm">
        <ul className="space-y-3 text-gray-700 font-medium text-sm">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full" style={{ background: dot }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

/* ---------- Bottom Service Card ---------- */

function ServiceCard({ icon: Icon, label }) {
  return (
    <div className="text-center w-36">

      <div className="bg-white shadow-md rounded-xl p-4 mb-2">
        <Icon className="w-8 h-8 mx-auto text-gray-700" />
      </div>

      <p className="text-sm font-semibold text-gray-700">{label}</p>

    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */

export default function CEOModel() {

  const services = [
    { icon: FileText, label: "Finance & Accounts" },
    { icon: Gavel, label: "Legal & Compliance" },
    { icon: Settings, label: "Operations" },
    { icon: Truck, label: "Supply Chain" },
    { icon: Headphones, label: "Customer Support" },
    { icon: Lightbulb, label: "Business Strategy" },
    { icon: BarChart3, label: "Data Analytics & Reporting" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-10">

      {/* HEADER */}
      <div className="text-center mb-12">
        <div className="inline-flex bg-blue-800 text-white px-10 py-4 rounded-full text-3xl font-bold shadow">
          HIRE A CEO — WE MANAGE YOUR COMPLETE BUSINESS
        </div>
      </div>

      {/* MAIN INFOGRAPHIC */}
      <div className="relative max-w-7xl mx-auto border-4 border-dashed border-gray-300 rounded-3xl bg-white p-12">

        {/* CEO CENTER */}
        <div className="flex justify-center mb-12">

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-900 text-white px-10 py-8 rounded-3xl shadow-xl text-center relative"
          >

            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow">
              <Briefcase className="w-12 h-12 text-blue-900" />
            </div>

            <h2 className="text-2xl font-bold mt-6">
              DEDICATED <span className="text-yellow-400">CEO</span>
            </h2>

            <p className="text-sm">(Your Business Head)</p>

          </motion.div>

        </div>

        {/* TOP DEPARTMENTS */}
        <div className="flex justify-between gap-6 mb-16 flex-wrap">

          <DepartmentCard
            title="TECH"
            color="bg-blue-600"
            dot="#2563eb"
            items={["Software", "App, Web", "AI, IT Support"]}
          />

          <DepartmentCard
            title="MARKETING"
            color="bg-green-600"
            dot="#16a34a"
            items={["Digital", "Branding", "Advertising"]}
          />

          <DepartmentCard
            title="SALES"
            color="bg-orange-600"
            dot="#ea580c"
            items={["Lead Gen", "CRM", "Revenue Growth"]}
          />

          <DepartmentCard
            title="AUDITING"
            color="bg-yellow-500"
            dot="#eab308"
            items={["Finance", "Compliance", "Tax Filing"]}
          />

          <DepartmentCard
            title="HR"
            color="bg-purple-600"
            dot="#9333ea"
            items={["Recruitment", "Payroll", "Training"]}
          />

          <DepartmentCard
            title="BPO"
            color="bg-cyan-600"
            dot="#0891b2"
            items={["Customer Support", "Back Office", "KPO Services"]}
          />

        </div>

        {/* OPERATIONS BANNER */}
        <div className="text-center mb-14">

          <div className="bg-yellow-100 border border-yellow-300 px-10 py-3 rounded-lg font-bold text-gray-700">
            ALL BUSINESS OPERATIONS MANAGED BY OUR CEO
          </div>

        </div>

        {/* BOTTOM SERVICES */}
        <div className="flex justify-between gap-6 flex-wrap">

          {services.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} label={s.label} />
          ))}

        </div>

        {/* LEFT COMPANY */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 text-center">

          <Building2 className="w-20 h-20 text-blue-900 mx-auto mb-2" />

          <p className="font-bold">
            Your <br /> Company
          </p>

        </div>

        {/* RIGHT GROWTH */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 text-center">

          <TrendingUp className="w-20 h-20 text-green-600 mx-auto mb-2" />

          <p className="font-bold text-green-600">
            Business <br /> Growth
          </p>

        </div>

      </div>

      {/* RESULT */}
      <div className="mt-10 text-center">

        <div className="inline-block bg-white px-10 py-4 rounded-full shadow font-bold text-xl border">
          RESULT → You Focus on <span className="text-green-600">Growth</span> — We Handle the Rest!
        </div>

      </div>

    </div>
  );
}