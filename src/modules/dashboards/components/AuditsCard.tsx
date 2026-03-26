import DashboardCard from "../DashboardCard";
import ListItem from "./ListItem";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export const AuditsCard = ({ data }: any) => {
  
  // 🔥 Fix: ensure numeric values
  const chartData = data.breakdown.map((item: any) => ({
    ...item,
    value:
      typeof item.value === "string"
        ? parseFloat(item.value.replace(/[^0-9.]/g, ""))
        : item.value,
  }));

  return (
    <DashboardCard
      title="Audits"
      value={data.total}
      growth={data.growth}
      headerColor="bg-purple-500"
    >
      {/* Top Section */}
      <div className="flex justify-between items-center mt-2">
        
        {/* Increase */}
        <p className="text-green-500 text-sm font-medium">
          ▲ {data.increase}
        </p>

        {/* Chart */}
        <div className="w-24 h-24">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={30}
                outerRadius={45}
                paddingAngle={3}
                dataKey="value"
              >
                {chartData.map((entry: any, i: number) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* List */}
      <div className="mt-3 space-y-2">
        {data.breakdown.map((item: any, i: number) => (
          <ListItem
            key={i}
            color={item.color}
            label={item.name}
            value={item.value}
          />
        ))}
      </div>
    </DashboardCard>
  );
};