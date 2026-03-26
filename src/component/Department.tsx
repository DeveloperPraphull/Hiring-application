import React from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import {
    Building2,
    Monitor,
    Gavel,
    Settings,
    Truck,
    Headphones,
    Lightbulb,
    BarChart3,
} from "lucide-react";
import CEOSection from "./CEOSection";

type DepartmentColor = "blue" | "green" | "red" | "yellow" | "purple" | "cyan";

interface DepartmentProps {
    id: string;
    color?: DepartmentColor;
    title: string;
    items: string[];
}

interface ServiceProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    color: string;
}

export default function DepartmentHire() {

    return (

        <Xwrapper>

            <div className="bg-gray-100 min-h-screen py-10 sm:py-16 flex justify-center">

                <div className="min-w-screen w-full px-4 sm:px-6">

                    {/* HEADER */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-12">

                        <div className="bg-gradient-to-r from-[#0f4fa8] via-[#1b5fd1] to-[#2c7be5]
              text-white font-bold text-lg sm:text-xl px-6 sm:px-10 py-3 rounded-full shadow-lg">

                            HIRE A CEO

                        </div>

                        <div className="hidden lg:block w-16 h-[3px] bg-gray-500"></div>

                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
                            WE MANAGE YOUR COMPLETE
                            <span className="text-blue-700 ml-2">BUSINESS</span>
                        </h1>

                    </div>


                    {/* ICONS */}
                    {/* <div className="flex justify-center gap-6 sm:gap-12 mb-10 text-blue-500"> */}
                        {/* <FileText size={26} /> */}
                        {/* <DollarSign size={26} /> */}
                        {/* <Settings size={26} /> */}
                    {/* </div> */}


                    {/* CEO */}
                    <div className="flex justify-center mb-40 mt-40 sm:mb-32">

                        <div id="ceo">
                            <CEOSection />
                        </div>

                    </div>


                    {/* DEPARTMENTS */}
                    <div className="grid grid-cols-2  p-32 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6">

                        <Department id="tech" color="blue"
                            title="TECH"
                            items={["Software", "App, Web", "AI Support"]} />

                        <Department id="marketing" color="green"
                            title="MARKETING"
                            items={["Digital", "Branding", "Advertising"]} />

                        <Department id="sales" color="red"
                            title="SALES"
                            items={["Lead Gen", "CRM", "Revenue"]} />

                        <div id="hide" className="hidden lg:block"></div>


                        <Department id="audit" color="yellow"
                            title="AUDITING"
                            items={["Finance", "Compliance", "Tax Filing"]} />

                        <Department id="hr" color="purple"
                            title="HR"
                            items={["Recruitment", "Payroll", "Training"]} />

                        <Department id="bpo" color="cyan"
                            title="BPO"
                            items={["Customer Support", "Back Office", "KPO"]} />

                    </div>


                    {/* ARROWS (desktop only for better layout) */}
                    <div className="hidden lg:block">

                        <Xarrow start="ceo" end="tech" startAnchor={{ position: "left", offset: { y: -40 } }} endAnchor="top" path="smooth" curveness={1.1} dashness showTail strokeWidth={3} />
                        <Xarrow start="ceo" end="marketing" startAnchor={{ position: "left", offset: { y: 0 } }} endAnchor="top" path="smooth" curveness={1.1} strokeWidth={2} />
                        <Xarrow start="ceo" end="sales" startAnchor={{ position: "left", offset: { y: 40 } }} endAnchor="top" path="smooth" curveness={1.1} dashness showTail strokeWidth={2} />
                        <Xarrow start="ceo" end="audit" startAnchor={{ position: "right", offset: { y: 40 } }} endAnchor="top" path="smooth" curveness={1.1} dashness showTail strokeWidth={2} />
                        <Xarrow start="ceo" end="hr" startAnchor={{ position: "right", offset: { y: 0 } }} endAnchor="top" path="smooth" curveness={1.1} strokeWidth={2} />
                        <Xarrow start="ceo" end="bpo" startAnchor={{ position: "right", offset: { y: -40 } }} endAnchor="top" path="smooth" curveness={1.1} dashness showTail strokeWidth={3} />
                        <Xarrow start="ceo" end="hide" startAnchor="bottom" endAnchor={{ position: "top", offset: { y: 200 } }} path="straight" strokeWidth={2} dashness showTail />
                        <Xarrow start="ceo" end="sales" startAnchor={{ position: "bottom", offset: { x: -40 } }} endAnchor={{ position: "right", offset: { x:10 } }} path="smooth" curveness={0.8} strokeWidth={2} dashness showTail />
                        <Xarrow start="ceo" end="audit" startAnchor={{ position: "bottom", offset: { x: 40 } }} endAnchor={{ position: "left", offset: { x: 0 } }} path="smooth" curveness={0.8} strokeWidth={2} dashness showTail />



                    </div>

                    <div className="relative flex justify-center mt-[-4%] my-16">
                        {/* MAIN BANNER */}
                        <div
                            id="operations-banner"
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


                    </div>


                    {/* OPERATIONS */}
                    <div className="flex flex-col lg:flex-row items-center mt-16 gap-40">

                        <div className="text-center w-full lg:w-40">
                            <Building2 size={60} className="mx-auto text-gray-700" />
                            <p className="font-semibold mt-2">Your Company</p>
                        </div>


                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 sm:gap-6 flex-1">

                            <Service
                                id="finance"
                                icon={<Monitor className="text-blue-600" />}
                                title="Finance & Accounts"
                                color="from-blue-400 to-green-500"
                            />

                            <Service
                                id="legal"
                                icon={<Gavel className="text-orange-600" />}
                                title="Legal & Compliance"
                                color="from-green-500 to-orange-400"
                            />

                            <Service
                                id="operations"
                                icon={<Settings className="text-orange-600" />}
                                title="Operations"
                                color="from-orange-400 to-orange-500"
                            />

                            <Service
                                id="supply"
                                icon={<Truck className="text-orange-600" />}
                                title="Supply Chain"
                                color="from-orange-500 to-blue-400"
                            />

                            <Service
                                id="support"
                                icon={<Headphones className="text-blue-700" />}
                                title="Customer Support"
                                color="from-blue-400 to-blue-600"
                            />

                            <Service
                                id="strategy"
                                icon={<Lightbulb className="text-purple-600" />}
                                title="Business Strategy"
                                color="from-blue-600 to-purple-600"
                            />

                            <Service
                                id="analytics"
                                icon={<BarChart3 className="text-blue-600" />}
                                title="Analytics"
                                color="from-purple-600 to-blue-600"
                            />
                        </div>


                        <div className="text-center w-full lg:w-40">
                            <BarChart3 size={60} className="mx-auto text-green-600" />
                            <p className="font-semibold text-green-600 mt-2">
                                Business Growth
                            </p>
                        </div>

                    </div>

                    <div className="hidden lg:block">

                        <Xarrow
                            start="operations-banner"
                            end="finance"
                            startAnchor={{ position: "left", offset: { x: 0 } }}
                            endAnchor={{ position: "top", offset: { x: 0 } }}
                            path="smooth"
                            curveness={1}
                            dashness
                            strokeWidth={2}
                        />

                        <Xarrow
                            start="operations-banner"
                            end="legal"
                            startAnchor={{ position: "bottom", offset: { x: -50 } }}
                            endAnchor={{ position: "top", offset: { x: 0 } }}
                            path="smooth"
                            dashness
                            strokeWidth={2}
                        />

                        <Xarrow
                            start="operations-banner"
                            end="operations"
                            startAnchor={{ position: "bottom", offset: { x: -10 } }}
                            endAnchor={{ position: "top", offset: { x: 0 } }}
                            path="smooth"
                            dashness
                            strokeWidth={2}
                        />

                        <Xarrow
                            start="operations-banner"
                            end="supply"
                            startAnchor="bottom"
                            endAnchor="top"
                            path="smooth"
                            dashness
                            strokeWidth={2}
                        />

                        <Xarrow
                            start="operations-banner"
                            end="support"
                            startAnchor={{ position: "bottom", offset: { x: 10 } }}
                            endAnchor="top"
                            path="smooth"
                            dashness
                            strokeWidth={2}
                        />

                        <Xarrow
                            start="operations-banner"
                            end="strategy"
                            startAnchor={{ position: "bottom", offset: { x: 50 } }}
                            endAnchor={{ position: "top", offset: { x: 0 } }}
                            path="smooth"
                            dashness
                            strokeWidth={2}
                        />

                        <Xarrow
                            start="operations-banner"
                            end="analytics"
                            startAnchor={{ position: "right", offset: { x: 0 } }}
                            endAnchor={{ position: "top", offset: { x: 0 } }}
                            path="smooth"
                            dashness
                            strokeWidth={2}
                        />

                    </div>


                    <div className="relative flex justify-center mt-16">

                        {/* LEFT CONNECTOR */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
                            <div className="w-24 border-t-2 border-dashed border-gray-400"></div>
                            <div className="w-2 h-2 bg-gray-600 rotate-45 -ml-1"></div>
                        </div>

                        {/* RESULT PILL */}
                        <div
                            id="result-split"
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
                    <Xarrow start="result-split" end="finance" startAnchor="top" endAnchor="bottom" path="grid"  strokeWidth={2} />
                    <Xarrow start="result-split" end="legal" startAnchor="top" endAnchor="bottom" path="grid"  strokeWidth={2} />
                    <Xarrow start="result-split" end="operations" startAnchor="top" endAnchor="bottom" path="grid"  strokeWidth={2} />
                    <Xarrow start="result-split" end="supply" startAnchor="top" endAnchor="bottom" path="grid"  strokeWidth={2} />
                    <Xarrow start="result-split" end="support" startAnchor="top" endAnchor="bottom" path="grid"  strokeWidth={2} />
                    <Xarrow start="result-split" end="strategy" startAnchor="top" endAnchor="bottom" path="grid"  strokeWidth={2} />
                    <Xarrow start="result-split" end="analytics" startAnchor="top" endAnchor="bottom" path="grid"  strokeWidth={2} />

                </div>

            </div>

        </Xwrapper>

    );
}

function Department({ id, color = "blue", title, items }: DepartmentProps) {

    const headerColors: Record<DepartmentColor, string> = {
        blue: "bg-gradient-to-r from-blue-500 to-blue-700",
        green: "bg-gradient-to-r from-green-500 to-green-700",
        red: "bg-gradient-to-r from-red-500 to-red-700",
        yellow: "bg-gradient-to-r from-yellow-400 to-yellow-600",
        purple: "bg-gradient-to-r from-purple-500 to-purple-700",
        cyan: "bg-gradient-to-r from-cyan-500 to-cyan-700"
    };

    const bulletColors: Record<DepartmentColor, string> = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        red: "bg-red-500",
        yellow: "bg-yellow-500",
        purple: "bg-purple-500",
        cyan: "bg-cyan-500"
    };

    const triangleColors: Record<DepartmentColor, string> = {
        blue: "border-t-blue-700",
        green: "border-t-green-700",
        red: "border-t-red-700",
        yellow: "border-t-yellow-600",
        purple: "border-t-purple-700",
        cyan: "border-t-cyan-700"
    };

    return (

        <div className="bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-md border border-gray-200 overflow-hidden">

            {/* HEADER */}
            <div className="relative flex justify-center pt-4">

                <div className="relative flex justify-center">

                    <div
                        id={id}
                        className={`
      ${headerColors[color]}
      text-white
      px-8
      py-2
      text-base
      font-bold
      rounded-xl
      shadow-xl
      tracking-wide
      -top-1
      relative
      
      flex items-center justify-center
    `}
                    >
                        {title}

                        {/* Bottom pointer */}
                        <span
                            className={`
        absolute
        left-1/2
        -bottom-2
        -translate-x-1/2
        w-0 h-0
        border-l-[10px] border-l-transparent
        border-r-[10px] border-r-transparent
        border-t-[10px]
        ${triangleColors[color]}
      `}
                        />
                    </div>

                </div>

            </div>


            {/* LIST */}
            <ul className="px-5 py-4 space-y-3 text-gray-700 text-sm font-medium">

                {items.map((item, i) => (
                    <li
                        key={i}
                        className="flex items-center gap-3 pb-2 border-b border-dashed border-gray-300 last:border-none"
                    >

                        <div className={`w-2.5 h-2.5 rounded-full ${bulletColors[color]}`} />

                        {item}

                    </li>
                ))}

            </ul>

        </div>

    );
}


function Service({ id, icon, title, color }: ServiceProps) {

    return (

        <div id={id} className="text-center">

            <div className="bg-white rounded-xl shadow-md p-3 sm:p-4">

                <div className="flex justify-center mb-3 transition-transform duration-300 hover:scale-110">
                    <div className="[&>svg]:w-10 [&>svg]:h-10 text-blue-600">
                        {icon}
                    </div>
                </div>

                <p className="text-sm font-semibold text-gray-700">
                    {title}
                </p>

                <div className={`h-1 mt-2 rounded-full bg-gradient-to-r ${color}`} />

            </div>

        </div>

    );
}