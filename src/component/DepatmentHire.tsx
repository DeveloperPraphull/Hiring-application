import React from "react";
import {
    Building2,
    Monitor,
    Calculator,
    Gavel,
    Settings,
    Truck,
    Headphones,
    Lightbulb,
    BarChart3,
} from "lucide-react";

type DepartmentColor = "blue" | "green" | "red" | "yellow" | "purple" | "cyan";

interface DepartmentProps {
    id: string;
    color?: DepartmentColor;
    title: string;
    items: string[];
}

interface ServiceProps {
    icon: React.ReactNode;
    title: string;
    color: string;
}

import { Xwrapper } from "react-xarrows";

export default function DeparmentHire() {
    return (
        <div className="bg-gray-100 min-h-screen p-10 flex justify-center">
            <div className="max-w-[1200px] w-full">

                {/* HEADER */}
                <div className="w-full flex justify-center mb-14">
                    <div className="flex items-center gap-4">

                        {/* HIRE A CEO PILL */}
                        <div className="
      bg-gradient-to-r
      from-[#0f4fa8]
      via-[#1b5fd1]
      to-[#2c7be5]
      text-white
      font-bold
      text-xl
      px-10
      py-3
      rounded-full
      shadow-[0_6px_15px_rgba(0,0,0,0.25)]
      whitespace-nowrap
      flex
      w-[2%]
    ">
                            HIRE A CEO
                        </div>

                        {/* CONNECTOR LINE */}
                        <div className="w-16 h-[3px] bg-gray-500 rounded"></div>

                        {/* HEADING */}
                        <h1 className="
      text-3xl
      font-bold
      text-gray-800
      tracking-wide
      whitespace-nowrap
    ">
                            WE MANAGE YOUR COMPLETE{" "}
                            <span className="text-blue-700">BUSINESS</span>
                        </h1>

                    </div>
                </div>

                {/* CEO BOX */}
                <Xwrapper>

                    <div className="bg-gray-100 min-h-screen p-10 flex justify-center">
                        <div className="max-w-[1200px] w-full">

                            {/* HEADER */}
                            <div className="flex justify-center mb-14">
                                <div className="flex items-center gap-4">

                                    <div className="bg-gradient-to-r from-[#0f4fa8] via-[#1b5fd1] to-[#2c7be5]
                text-white font-bold text-xl px-10 py-3 rounded-full shadow-lg">
                                        HIRE A CEO
                                    </div>

                                    <div className="w-16 h-[3px] bg-gray-500"></div>

                                    <h1 className="text-3xl font-bold text-gray-800">
                                        WE MANAGE YOUR COMPLETE{" "}
                                        <span className="text-blue-700">BUSINESS</span>
                                    </h1>

                                </div>
                            </div>

                          
                            {/* OPERATIONS SECTION */}
                            <div className="relative mt-24 flex items-center">

                                <div className="w-40 text-center">
                                    <Building2 size={70} className="mx-auto text-gray-700 mb-2" />
                                    <p className="text-lg font-semibold">Your Company</p>
                                </div>

                                <div className="grid grid-cols-7 gap-6 flex-1 px-8">

                                    <Service icon={<Monitor className="text-blue-600 w-9 h-9" />}
                                        title="Finance & Accounts"
                                        color="from-blue-400 to-green-500" />

                                    <Service icon={<Gavel className="text-orange-600 w-9 h-9" />}
                                        title="Legal & Compliance"
                                        color="from-green-500 to-orange-400" />

                                    <Service icon={<Settings className="text-orange-600 w-9 h-9" />}
                                        title="Operations"
                                        color="from-orange-400 to-orange-500" />

                                    <Service icon={<Truck className="text-orange-600 w-9 h-9" />}
                                        title="Supply Chain"
                                        color="from-orange-500 to-blue-400" />

                                    <Service icon={<Headphones className="text-blue-700 w-9 h-9" />}
                                        title="Customer Support"
                                        color="from-blue-400 to-blue-600" />

                                    <Service icon={<Lightbulb className="text-purple-600 w-9 h-9" />}
                                        title="Business Strategy"
                                        color="from-blue-600 to-purple-600" />

                                    <Service icon={<BarChart3 className="text-blue-600 w-9 h-9" />}
                                        title="Data Analytics & Reporting"
                                        color="from-purple-600 to-blue-600" />

                                </div>

                                <div className="w-40 text-center">
                                    <BarChart3 size={70} className="mx-auto text-green-600 mb-2" />
                                    <p className="text-lg font-semibold text-green-600">
                                        Business Growth
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                </Xwrapper>
                {/* BANNER */}
                <div className="relative flex justify-center mt-[-1%] my-16">

                    {/* LEFT CURVED CONNECTOR */}
                    <svg
                        className="absolute left-0 top-1/2 -translate-y-1/2"
                        width="200"
                        height="80"
                    >
                        <defs>
                            <marker
                                id="arrow-left"
                                markerWidth="10"
                                markerHeight="10"
                                refX="6"
                                refY="3"
                                orient="auto"
                            >
                                <path d="M0,0 L6,3 L0,6 Z" fill="#374151" />
                            </marker>
                        </defs>

                        <path
                            d="M200 20 C120 20 120 60 40 60"
                            stroke="#6b7280"
                            strokeWidth="2"
                            strokeDasharray="6,6"
                            fill="none"
                            markerEnd="url(#arrow-left)"
                        />
                    </svg>

                    {/* MAIN BANNER */}
                    <div
                        className="
      bg-gradient-to-r
      from-[#efe1bf]
      via-[#f5e7c6]
      to-[#efe1bf]
      border border-[#e0cfa0]
      px-16 py-4
      rounded-full
      shadow-md
      text-gray-800
      font-bold
      text-lg
      tracking-wide
      text-center
    "
                    >
                        ALL BUSINESS OPERATIONS MANAGED BY OUR CEO
                    </div>

                    {/* RIGHT CURVED CONNECTOR */}
                    <svg
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                        width="200"
                        height="80"
                    >
                        <defs>
                            <marker
                                id="arrow-right"
                                markerWidth="10"
                                markerHeight="10"
                                refX="6"
                                refY="3"
                                orient="auto"
                            >
                                <path d="M0,0 L6,3 L0,6 Z" fill="#374151" />
                            </marker>
                        </defs>

                        <path
                            d="M0 20 C80 20 80 60 160 60"
                            stroke="#6b7280"
                            strokeWidth="2"
                            strokeDasharray="6,6"
                            fill="none"
                            markerEnd="url(#arrow-right)"
                        />
                    </svg>

                </div>

                {/* OPERATIONS */}


                {/* OPERATIONS SECTION */}
                <div className="relative mt-[-3%] flex items-center">

                    {/* LEFT SIDE - YOUR COMPANY */}
                    <div className="w-40 text-center">
                        <Building2 size={70} className="mx-auto text-gray-700 mb-2" />
                        <p className="text-lg font-semibold">Your Company</p>
                    </div>


                    {/* SERVICES GRID */}
                    <div className="grid grid-cols-7 gap-6 flex-1 px-8">

                        <Service
                            icon={
                                <div className="flex">
                                    <Monitor className="text-blue-600 w-9 h-9" />
                                    <Calculator className="text-orange-500 w-7 h-7 -ml-2 mt-2" />
                                </div>
                            }
                            title="Finance & Accounts"
                            color="from-blue-400 to-green-500"
                        />

                        <Service
                            icon={<Gavel className="text-orange-600 w-9 h-9" />}
                            title="Legal & Compliance"
                            color="from-green-500 to-orange-400"
                        />

                        <Service
                            icon={<Settings className="text-orange-600 w-9 h-9" />}
                            title="Operations"
                            color="from-orange-400 to-orange-500"
                        />

                        <Service
                            icon={<Truck className="text-orange-600 w-9 h-9" />}
                            title="Supply Chain"
                            color="from-orange-500 to-blue-400"
                        />

                        <Service
                            icon={<Headphones className="text-blue-700 w-9 h-9" />}
                            title="Customer Support"
                            color="from-blue-400 to-blue-600"
                        />

                        <Service
                            icon={<Lightbulb className="text-purple-600 w-9 h-9" />}
                            title="Business Strategy"
                            color="from-blue-600 to-purple-600"
                        />

                        <Service
                            icon={
                                <div className="flex">
                                    <BarChart3 className="text-blue-600 w-9 h-9" />
                                    <Monitor className="text-gray-600 w-7 h-7 -ml-2 mt-2" />
                                </div>
                            }
                            title="Data Analytics & Reporting"
                            color="from-purple-600 to-blue-600"
                        />

                    </div>

                    {/* RIGHT SIDE - GROWTH */}
                    <div className="w-40 text-center">
                        <BarChart3 size={70} className="mx-auto text-green-600 mb-2" />
                        <p className="text-lg font-semibold text-green-600">Business Growth</p>
                    </div>

                </div>

                {/* RESULT */}
                <div className="relative flex justify-center mt-16">

                    {/* LEFT CONNECTOR */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
                        <div className="w-24 border-t-2 border-dashed border-gray-400"></div>
                        <div className="w-2 h-2 bg-gray-600 rotate-45 -ml-1"></div>
                    </div>

                    {/* RESULT PILL */}
                    <div
                        className="
      bg-gradient-to-r
      from-[#e9eef4]
      via-[#f3f6fb]
      to-[#e9eef4]
      border border-gray-300
      px-14 py-4
      rounded-full
      shadow-lg
      text-lg
      font-semibold
      text-gray-800
      tracking-wide
      flex items-center gap-2
    "
                    >
                        <span className="font-bold">RESULT</span>

                        <span className="text-orange-500 text-xl font-bold">→</span>

                        <span>You Focus on</span>

                        <span className="text-green-600 font-bold">Growth</span>

                        <span>– We Handle the Rest!</span>
                    </div>

                    {/* RIGHT CONNECTOR */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                        <div className="w-2 h-2 bg-gray-600 rotate-45 mr-1"></div>
                        <div className="w-24 border-t-2 border-dashed border-gray-400"></div>
                    </div>

                </div>

                <div className="mt-8">
                    <Department
                        id="dept-sample"
                        title="Additional Dept"
                        items={["Research", "Development", "Quality"]}
                        color="cyan"
                    />
                </div>

            </div>
        </div>
    );
}

/* Department Component */



export function Department({ id, color = "blue", title, items }: DepartmentProps) {

    const colors: Record<DepartmentColor, string> = {
        blue: "bg-blue-600",
        green: "bg-green-600",
        red: "bg-red-500",
        yellow: "bg-yellow-500",
        purple: "bg-purple-600",
        cyan: "bg-cyan-600"
    };

    const safeColor = colors[color] ?? colors.blue;

    return (
        <Xwrapper>


            <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-w-[180px]">

                {/* HEADER */}
                <div
                    id={id}
                    className={`${safeColor} text-white text-center py-3 font-semibold text-sm`}
                >
                    {title}
                </div>

                {/* CONTENT */}
                <ul className="p-4 text-sm text-gray-600 space-y-2">

                    {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">

                            <div className={`w-2 h-2 rounded-full ${safeColor}`} />

                            {item}

                        </li>
                    ))}

                </ul>

            </div>
        </Xwrapper>


    );
}
/* Service Component */

function Service({ icon, title, color }: ServiceProps) {
    return (
        <div className="relative text-center">

            <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition">
                <div className="flex justify-center mb-3">
                    {icon}
                </div>

                <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {title}
                </p>

                <div className={`h-1 mt-3 rounded-full bg-gradient-to-r ${color}`}></div>
            </div>

            {/* Vertical Arrow */}
            <svg
                className="absolute left-1/2 -bottom-6 -translate-x-1/2"
                width="20"
                height="30"
            >
                <line x1="10" y1="0" x2="10" y2="20" stroke="#475569" strokeWidth="2" />
                <polygon points="5,20 15,20 10,28" fill="#475569" />
            </svg>

        </div>
    );
}