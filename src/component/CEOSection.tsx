import { Settings, FileText, DollarSign } from "lucide-react";
import CEOAVATAR from "../assets/ChatGPT Image Mar 13, 2026, 01_14_34 PM.png";

interface IconWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const IconWrapper = ({ children, className }: IconWrapperProps) => (
    <div className={`absolute ${className}`}>{children}</div>
);

export default function CEOSection() {
    return (
        <section className="relative flex justify-center mb-2">

            {/* Background Halo */}
            <div className="absolute w-[320px] h-[200px] bg-blue-100 rounded-full blur-md" />

            <div className="relative flex flex-col items-center">


                {/* CEO Avatar */}
                <div className="w-52 h-48 mt-4 overflow-hidden hover:scale-105 transition">
                    <img
                        src={CEOAVATAR}
                        alt="CEO Avatar"
                        className="w-full h-full  object-cover"
                    />
                </div>

                {/* Main Badge */}
                <div
                    className="
      relative

      px-10 py-3
      mb-4
      rounded-full
      bg-[#0d2b4d]   /* dark navy */

      text-white
      font-bold
      text-lg md:text-xl

      shadow-xl
      flex items-center gap-2
    "
                >
                    <span>DEDICATED</span>
                    <span className="text-yellow-400">CEO</span>
                </div>


                {/* Subtitle */}
                <div
                    className="
      -mt-6

      px-8 py-2

      rounded-full
      bg-[#e6f0f7]

      text-gray-800
      text-xl md:text-md
      font-medium
      shadow-md
    "
                >
                    Your Business Head
                </div>


            </div>



            {/* Arrow Marker */}
            <svg width="0" height="0">
                <defs>
                    <marker
                        id="arrow"
                        markerWidth="8"
                        markerHeight="8"
                        refX="5"
                        refY="3"
                        orient="auto"
                    >
                        <path d="M0,0 L6,3 L0,6 Z" fill="#333" />
                    </marker>
                </defs>
            </svg>

        </section>
    );
}