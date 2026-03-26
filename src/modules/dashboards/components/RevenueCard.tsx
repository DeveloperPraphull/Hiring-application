import DashboardCard from "../DashboardCard";

export const RevenueCard = ({ data }: any) => {
  return (
    <DashboardCard
      title="Revenue"
      value={data.total}
      growth={data.growth}
      headerColor="bg-blue-500"
    >
      <p className="text-sm text-gray-500 mt-1">
        Monthly Revenue: {data.monthly}
      </p>

      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <p>📊 Total Revenue: {data.total}</p>
        <p>📈 Yearly: {data.yearly}</p>
      </div>
    </DashboardCard>
  );
};