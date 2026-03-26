import { useDashboardData } from "./useDashboardData";
import { RevenueCard } from "./RevenueCard";
import { SalesLeadsCard } from "../SalesLeadsCard";
import { ExpensesCard } from "./ExpensesCard";
import { AuditsCard } from "./AuditsCard";

const Dashboard = () => {
  const data = useDashboardData();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap gap-4">
        <RevenueCard data={data.revenue} />
        <SalesLeadsCard data={data.sales} />
        <ExpensesCard data={data.expenses} />
        <AuditsCard data={data.audits} />
      </div>
    </div>
  );
};

export default Dashboard;