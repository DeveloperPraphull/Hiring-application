import React, { useEffect, useState } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import Settings from "../assets/Interlocking_orange.png"
import Custumers from "../assets/ChatGPT_custumer.png";
import Hammer from "../assets/ChatGPT Image Mar.png"
import Moniters from "../assets/Moniterscal.png";
import growb from "../assets/Groth_bussiness.png"
import Supply_chain from "../assets/Supply_chain.png";
// import Analaytics from "../assets/Groth_bussiness.png";
import companyLogo from "../assets/CompanyBuildingico.png";
import growChart from "../assets/GrothChart.png";
import Bulb_idea from "../assets/Buld_idea.png";
import CEOSection from "./CEOSection";
import bgImage from "../assets/ChatGPT Image Mar 20, 2026, 02_10_24 PM.png";

/* ---------- SCREEN DETECTOR ---------- */

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return isDesktop;
}

/* ---------- MAIN COMPONENT ---------- */

export default function DepartmentHire() {
    const isDesktop = useIsDesktop();

    return (
        <Xwrapper>

            <section
                className="min-h-screen px-4 py-8 sm:px-6 sm:py-10 md:px-[6%] md:py-12 lg:p-[10%] flex justify-center bg-white bg-center bg-no-repeat">
                <div className="w-full max-w-[100%]">

                    {/* HEADER */}

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-10 lg:mb-14">

                        <div className="bg-gradient-to-r from-[#0f4fa8] via-[#1b5fd1] to-[#2c7be5] text-white font-bold text-sm lg:text-4xl sm:text-lg px-5 sm:px-8 py-2 sm:py-3 rounded-2xl shadow-md">
                            HIRE A CEO
                        </div>

                        <div className="hidden lg:block w-14 h-[2px] bg-gray-400"></div>
                         
                         <div className="text-center text-gray-700 font-medium text-sm sm:text-base md:text-lg lg:text-xl">             
                         
                        <h1 className="text-lg sm:text-xl md:text-lg lg:text-sm font-bold text-gray-800 text-center">
                            WE MANAGE YOUR COMPLETE
                            <span className="text-blue-700 ml-2">BUSINESS</span>
                        </h1>
                          </div>

                    </div>


                    {/* CEO */}

                    <div className="flex justify-center ml-0 sm:ml-6 mt-6 mb-10 sm:mt-10 sm:mb-16 lg:mt-2 lg:mb-[-1%]">
                        <div id="ceo">
                            <CEOSection />
                        </div>
                    </div>

                    {/* DEPARTMENTS */}

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 md:gap-6 lg:gap-2 mt-6">

                        <Department id="tech" color="blue" title="TECH" items={["Software", "App, Web", "AI Support"]} />
                        <Department id="marketing" color="green" title="MARKETING" items={["Digital", "Branding", "Advertising"]} />
                        <Department id="sales" color="red" title="SALES" items={["Lead Gen", "CRM", "Revenue"]} />
                        <div id="hide" className="hidden lg:block"></div>
                        <Department id="audit" color="yellow" title="AUDITING" items={["Finance", "Compliance", "Tax Filing"]} />
                        <Department id="hr" color="purple" title="HR" items={["Recruitment", "Payroll", "Training"]} />
                        <Department id="bpo" color="cyan" title="BPO" items={["Customer Support", "Back Office", "KPO"]} />

                    </div>

                    {/* DESKTOP ARROWS */}

                    {isDesktop && (
                        <>
                            <Xarrow start="ceo" end="tech" startAnchor={{ position: "left", offset: { y: -40 } }} endAnchor="top" path="smooth" curveness={1.1} dashness showTail color="black" strokeWidth={2} />
                            <Xarrow start="ceo" end="marketing" startAnchor={{ position: "left", offset: { y: 0 } }} endAnchor="top" path="smooth" curveness={1.1} color="black" strokeWidth={2} />
                            <Xarrow start="ceo" end="sales" startAnchor={{ position: "left", offset: { y: 40 } }} endAnchor="top" path="smooth" curveness={1.1} showTail color="black" strokeWidth={2} />
                            <Xarrow start="ceo" end="audit" startAnchor={{ position: "right", offset: { y: 40 } }} endAnchor="top" path="smooth" curveness={1.1} showTail color="black" strokeWidth={2} />
                            <Xarrow start="ceo" end="hr" startAnchor={{ position: "right", offset: { y: 0 } }} endAnchor="top" path="smooth" curveness={1.1} color="black" strokeWidth={2} />
                            <Xarrow start="ceo" end="bpo" startAnchor={{ position: "right", offset: { y: -40 } }} endAnchor="top" path="smooth" curveness={1.1} dashness showTail color="black" strokeWidth={2} />
                            <Xarrow start="ceo" end="hide" startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 12, y: 150 } }} path="smooth" color="black" strokeWidth={2} />
                            <Xarrow
                                start="ceo"
                                end="sales"
                                startAnchor={{ position: "bottom", offset: { x: -40 } }}
                                endAnchor={{ position: "right", offset: { x: 90, y: 100 } }}
                                path="smooth"
                                curveness={0.9} // smoother curve
                                color="#ff8c42" // slightly brighter for glow
                                strokeWidth={2} // thicker for better visibility
                                passProps={{
                                    style: {
                                        filter: `drop-shadow(0 0 4px rgba(255,140,66,0.8)) drop-shadow(0 0 8px rgba(255,140,66,0.7))`,
                                        transition: "all 0.3s ease-in-out"
                                    }
                                }}
                            />
                            <Xarrow start="ceo" end="audit" startAnchor={{ position: "bottom", offset: { x: 40 } }} endAnchor={{ position: "left", offset: { x: -50, y: 100 } }} path="smooth" curveness={0.8} color="#ff8c42" strokeWidth={2} passProps={{
                                style: {
                                    filter: `drop-shadow(0 0 4px rgba(255,140,66,0.8)) drop-shadow(0 0 8px rgba(255,140,66,0.7))`,
                                    transition: "all 0.3s ease-in-out"
                                }
                            }} />

                        </>
                    )}


                    {/* OPERATIONS BANNER */}
                    <div className="flex justify-center w-full mb-8 lg:mb-12 px-4">

                        <div
                            id="operations-banner"
                            className="
      bg-gradient-to-r 
      from-[#f7e7be] via-[#f8edd1] to-[#f7e7be]
      border border-[#e0cfa0]
      px-6 sm:px-10 md:px-14 lg:px-16
      py-3 sm:py-4
      rounded-full
      shadow-md hover:shadow-xl
      text-gray-800
      font-bold
      text-sm sm:text-base md:text-lg lg:text-xl
      tracking-wide
      text-center
      w-full sm:w-fit
      transition-all duration-300
      hover:scale-105
      backdrop-blur-sm
      mt-[-1%]
    "
                        >
                            ALL BUSINESS OPERATIONS MANAGED BY OUR CEO
                        </div>

                    </div>


                    {/* SERVICES */}

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-4 lg:gap-2 mt-8 sm:mt-10 lg:mt-4">

                        {/* Company */}
                        <div
                            id="company"
                            className="text-center p-4 sm:p-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 cursor-pointer w-full sm:w-auto"
                        >
                            <img
                                src={companyLogo}
                                className="mx-auto w-36 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 transition-transform duration-300 hover:scale-110"
                            />
                            <p className="font-semibold mt-2 text-sm sm:text-base text-black">
                                Your Company
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-2 gap-3 sm:gap-4 md:gap-5 flex-1 w-full">
                            <Service id="finance" icon={Moniters} title="Finance & Accounts" color="from-blue-400 to-green-500" />
                            <Service id="legal" icon={Hammer} title="Legal & Compliance" color="from-green-500 to-orange-400" />
                            <Service id="operations" icon={Settings} title="Operations" color="from-orange-400 to-orange-500" />
                            <Service id="supply" icon={Supply_chain} title="Supply Chain" color="from-orange-500 to-blue-400" />
                            <Service id="support" icon={Custumers} title="Customer Support" color="from-blue-400 to-blue-600" />
                            <Service id="strategy" icon={Bulb_idea} title="Business Strategy" color="from-blue-600 to-purple-600" />
                            <Service id="analytics" icon={growb} title="Analytics" color="from-purple-600 to-blue-600" />
                        </div>

                        {/* Arrows (Desktop Only) */}
                        {isDesktop && (<div className="hidden lg:block">
                            <Xarrow start="operations-banner" end="finance" startAnchor={{ position: "left", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} path="smooth" curveness={1} dashness color="black" strokeWidth={2} />
                            <Xarrow start="operations-banner" end="legal" startAnchor={{ position: "bottom", offset: { x: -279 } }} endAnchor={{ position: "top", offset: { x: 0 } }} path="smooth" color="black" strokeWidth={2} />
                            <Xarrow start="operations-banner" end="operations" startAnchor={{ position: "bottom", offset: { x: -139 } }} endAnchor={{ position: "top", offset: { x: 0 } }} path="smooth" color="black" strokeWidth={2} />
                            <Xarrow start="operations-banner" end="supply" startAnchor={{ position: "bottom", offset: { x: 1 } }} endAnchor={{ position: "top", offset: { x: 0 } }} path="smooth" color="black" strokeWidth={2} />
                            <Xarrow start="operations-banner" end="support" startAnchor={{ position: "bottom", offset: { x: 141 } }} endAnchor={{ position: "top", offset: { x: 0 } }} path="smooth" color="black" strokeWidth={2} />
                            <Xarrow start="operations-banner" end="strategy" startAnchor={{ position: "bottom", offset: { x: 282 } }} endAnchor={{ position: "top", offset: { x: 0 } }} path="smooth" color="black" strokeWidth={2} />
                            <Xarrow start="operations-banner" end="analytics" startAnchor={{ position: "right", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} path="smooth" dashness color="black" strokeWidth={2} />
                        </div>)}

                        {/* Business Growth */}
                        <div
                            id="business_groth"
                            className="text-center p-4 sm:p-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 cursor-pointer w-full sm:w-auto"
                        >
                            <img
                                src={growChart}
                                alt="Business Growth"
                                className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 transition-transform duration-300 hover:scale-110"
                            />
                            <p className="font-semibold text-green-600 mt-2 text-sm sm:text-base">
                                Business Growth
                            </p>
                        </div>

                    </div>

                    {/* RESULT */}
                    <div className="flex justify-center mt-10 sm:mt-16 px-2">
                        <div id="result-split" className="bg-gradient-to-r from-[#e9eef4] via-[#f3f6fb] to-[#e9eef4] border border-gray-300 px-4 sm:px-6 md:px-10 lg:px-14 py-2.5 sm:py-3 rounded-full shadow-lg text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 text-center">
                            <span className="text-gray-800 font-bold ml-2">
                                RESULT
                            </span>
                            <span className="text-gray-800 font-bold ml-2">
                                →
                            </span>
                            You Focus on
                            <span className="text-green-600 font-bold ml-2">
                                Growth
                            </span>
                            – We Handle the Rest!
                        </div>

                        {isDesktop && (
                            <div>
                                <Xarrow start="result-split" end="finance" startAnchor="top" endAnchor="bottom" path="grid" strokeWidth={2} color="black" />
                                <Xarrow start="result-split" end="legal" startAnchor="top" endAnchor="bottom" path="grid" strokeWidth={2} color="black" />
                                <Xarrow start="result-split" end="operations" startAnchor="top" endAnchor="bottom" path="grid" strokeWidth={2} color="black" />
                                <Xarrow start="result-split" end="supply" startAnchor="top" endAnchor="bottom" path="grid" strokeWidth={2} color="black" />
                                <Xarrow start="result-split" end="support" startAnchor="top" endAnchor="bottom" path="grid" strokeWidth={2} color="black" />
                                <Xarrow start="result-split" end="strategy" startAnchor="top" endAnchor="bottom" path="grid" strokeWidth={2} color="black" />
                                <Xarrow start="result-split" end="analytics" startAnchor="top" endAnchor="bottom" path="grid" strokeWidth={2} color="black" />
                                <Xarrow start="result-split" end="business_groth" startAnchor="right" endAnchor="bottom" path="smooth" strokeWidth={2} color="black" showTail dashness curveness={1.1} />
                                <Xarrow start="result-split" end="company" startAnchor="left" endAnchor="bottom" path="smooth" strokeWidth={2} color="black" showTail dashness curveness={1.1} />

                            </div>)}
                    </div>

                </div>

            </section>

        </Xwrapper>
    );
}


/* ---------- DEPARTMENT CARD ---------- */

type DepartmentProps = {
    id: string;
    color: "blue" | "green" | "red" | "yellow" | "purple" | "cyan";
    title: string;
    items: string[];
};

function Department({ id, color, title, items }: DepartmentProps) {

    const headerColors = {
        blue: "bg-gradient-to-r from-blue-500 to-blue-600",
        green: "bg-gradient-to-r from-green-500 to-green-600",
        red: "bg-gradient-to-r from-red-500 to-red-500",
        yellow: "bg-gradient-to-r from-yellow-400 to-yellow-600",
        purple: "bg-gradient-to-r from-purple-500 to-purple-600",
        cyan: "bg-gradient-to-r from-cyan-500 to-cyan-600"
    };

    const bulletColors = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        red: "bg-red-500",
        yellow: "bg-yellow-500",
        purple: "bg-purple-500",
        cyan: "bg-cyan-500"
    };

    const getTailColor = (color: string) => {
        const map: any = {
            blue: "after:border-t-blue-500",
            green: "after:border-t-green-500",
            red: "after:border-t-red-500",
            yellow: "after:border-t-yellow-500",
            purple: "after:border-t-purple-500",
            cyan: "after:border-t-cyan-500"
        };

        return map[color] || "after:border-t-gray-500";
    };

    const bgColors = {
        blue: "bg-blue-50 ",
        green: "bg-green-50",
        red: "bg-red-50",
        yellow: "bg-yellow-50",
        purple: "bg-purple-50",
        cyan: "bg-cyan-50"
    };

    return (
        <>
            <div className="relative w-full justify-center">

                {/* Title outside card */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">

                    <div
                        id={id}
                        className={`relative ${headerColors[color]}
      text-white text-center px-3 py-1 w-full min-w-[60px]
      text-[10px] sm:text-xs md:text-sm lg:text-base
      font-bold
      rounded-lg
      shadow-lg
      whitespace-nowrap
      after:content-['']
      after:absolute
      after:left-1/2
      after:-translate-x-1/2
      after:top-full

      after:border-l-[8px]
      after:border-r-[8px]
      after:border-t-[8px]

      after:border-l-transparent
      after:border-r-transparent

      ${getTailColor(color)}
    `}
                    >
                        {title}
                    </div>

                </div>

                {/* Card */}
                <div
                    id={id}
                    className={`
    ${bgColors[color]}

    rounded-xl
    shadow-md
    border border-gray-200
    w-full
    overflow-hidden
    pt-6 sm:pt-8 px-2 sm:px-4 py-3 sm:py-4
    transition
    hover:shadow-xl
    hover:-translate-y-1
  `}
                >
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 font-medium">

                        {items.map((item, i) => (
                            <li
                                key={i}
                                className="
        flex items-start gap-1.5 sm:gap-2
        text-xs sm:text-sm md:text-base lg:text-lg
        min-h-[18px]
        leading-snug
        border-b border-dashed
        last:border-none
        break-words
        whitespace-normal
      "
                            >
                                <div
                    className={`mt-1.5 sm:mt-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0 ${bulletColors[color]}`}
                ></div>

                                <span className="flex-1">
                                    {item}
                                </span>

                            </li>
                        ))}

                    </ul>

                </div>

            </div>
        </>

    );
}


/* ---------- SERVICE CARD ---------- */

type ServiceProps = {
    id: string;
    icon: React.ReactNode | string;
    title: string;
    color: string;
};

function Service({ id, icon, title, color }: ServiceProps) {
    return (
        <div
            id={id}
            className="flex justify-center gap-2 md:gap-4 "
        >

            <div
                className="
        relative

        w-fit               
        min-w-[100%]        /* minimum size */
        bg-white
        rounded-2xl
        border border-gray-200
        px-2 py-3
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-2xl
        group
      "
            >

                {/* Glow */}
                <div
                    className={`
          absolute inset-0
          rounded-2xl
          opacity-0
          group-hover:opacity-25
          transition-opacity duration-300
          blur-xl
          bg-gradient-to-r ${color}
          -z-10
          `}
                />

                {/* Icon */}
                <div className="flex justify-center">
                    <div
                        className="
      flex items-center justify-center
      w-full   /* container size */
      transition-transform duration-300
      group-hover:scale-110 group-hover:rotate-6
      text-blue-600
    "
                    >
                        {typeof icon === "string" ? (
                            <img
                                src={icon}
                                alt={title}
                                className="object-contain"
                            />
                        ) : (
                            <div className="[&>svg]:w-8 [&>svg]:h-8">
                                {icon}
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full">
                    <p
                        className="
      text-center
      text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700

      break-words
      whitespace-normal
      line-clamp-2
    "
                    >
                        {title}
                    </p>
                </div>

                {/* Gradient bar */}
                {/* Bottom Color Strip */}
                <div
                    className={`
            absolute bottom-0 left-0
            w-full h-[6px]
            rounded-b-2xl
            bg-gradient-to-r ${color}
          `}
                />

            </div>

        </div>
    );
}