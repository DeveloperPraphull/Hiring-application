import type { LucideIcon } from "lucide-react";

type TopCardProps = {
  title: string;
  value?: string | number;
  subtitle?: string;
  color: string;
  badge?: number | string;
  icon?: LucideIcon | React.ComponentType<{ size?: number; className?: string }>;
  children?: React.ReactNode;
};

const TopCard = ({
  title,
  value,
  subtitle,
  color,
  badge,
  icon: Icon,
  children,
}: TopCardProps) => {
  return (
    <div className="min-w-[160px] sm:min-w-[180px] flex-1 bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl border border-gray-200/60 overflow-hidden hover:bg-white hover:shadow-lg hover:shadow-gray-300/30 transition-all duration-300 group shadow-sm">

      {/* Header */}
      <div className={`px-3 sm:px-4 py-2 sm:py-2.5 text-white text-[10px] sm:text-xs md:text-sm font-bold flex items-center justify-between ${color} bg-opacity-90`}>
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          {Icon && <Icon size={14} className="flex-shrink-0 drop-shadow-sm" />}
          <span className="truncate tracking-wide">{title}</span>
        </div>
        {badge !== undefined && (
          <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 rounded-full flex-shrink-0 ml-1 shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-2.5 sm:p-3.5 flex flex-col gap-0.5 sm:gap-1 text-xs sm:text-sm">
        {value && (
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-800">{value}</h2>
        )}
        {subtitle && (
          <p className="text-[10px] sm:text-xs text-gray-500">{subtitle}</p>
        )}
        <div className="mt-0.5 sm:mt-1 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default TopCard;