import React from "react";

type Props = {
  title: string;
  value: string | number;
  growth?: string;
  headerColor: string;
  children: React.ReactNode;
};

const DashboardCard = ({
  title,
  value,
  growth,
  headerColor,
  children,
}: Props) => {
  return (
    <div className="w-[100%] bg-white rounded-xl shadow border overflow-hidden">
      
      {/* Header */}
      <div className={`flex justify-between px-4 py-2 text-white ${headerColor}`}>
        <h3 className="font-semibold">{title}</h3>
        {growth && <span className="text-sm">{growth}</span>}
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;