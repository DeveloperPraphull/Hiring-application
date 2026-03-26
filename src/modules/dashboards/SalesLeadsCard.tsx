import DashboardCard from "./DashboardCard";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import ListItem from "./components/ListItem";

export const SalesLeadsCard = ({ data }: any) => {
  return (
    <DashboardCard
      title="Sales Leads"
      value={data.total}
      growth={data.growth}
      headerColor="bg-red-500"
    >
      <div className="flex justify-between items-center mt-2">
        <div className="w-24 h-24">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data.breakdown}
                innerRadius={30}
                outerRadius={45}
                dataKey="value"
              >
                {data.breakdown.map((entry: any, i: number) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {data.breakdown.map((item: any, i: number) => (
          <ListItem
            key={i}
            color={item.color}
            label={item.name}
            value={`$${item.value}K`}
          />
        ))}
      </div>
    </DashboardCard>
  );
};