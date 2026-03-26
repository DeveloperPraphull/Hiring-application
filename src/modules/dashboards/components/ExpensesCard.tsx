import DashboardCard from "../DashboardCard";
import ListItem from "./ListItem";

export const ExpensesCard = ({ data }: any) => {
  return (
    <DashboardCard
      title="Expenses"
      value={data.total}
      headerColor="bg-orange-400"
    >
      <p className="text-sm text-gray-500 mt-1">
        Monthly Expenses
      </p>

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