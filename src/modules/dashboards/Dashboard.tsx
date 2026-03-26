import MarketingUpdate from "../../component/MarketingUpdate";
import DashboardHomePage from "../DashBoardHome/DashBoardHomePage";
import AuthPage from "../auth/AuthPage";
import MarketingDashboard from "../marketing/MarketingDashboard";
import SocialMediaReports from "../socials/SocialMediaReports";
import SocialsPage from "../socials/SocialsPage";
import CRMTickets from "../tech/CRMTickets";
import TechDashboard from "../tech/TechDashboard";
import MainLayout from "./MainLayout";
import { SalesLeadsCard } from "./SalesLeadsCard";
import { AuditsCard } from "./components/AuditsCard";
import { ExpensesCard } from "./components/ExpensesCard";
import { RevenueCard } from "./components/RevenueCard";
import TopTabs from "./components/TopTab";
import { useDashboardData } from "./components/useDashboardData";

const Dashboard = () => {
  const { revenue, sales, expenses, audits } = useDashboardData(); // ✅ FIX

  return (
    <>
      <MainLayout>

        {/* 🔹 Container */}
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 space-y-4 sm:space-y-6">

          {/* 🔹 Top Tabs */}
          <div className="overflow-x-auto">
            {/* <TopTabs /> */}
          </div>

          {/* 🔹 Cards Grid */}
          <div
            className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4
            gap-3 sm:gap-4 md:gap-5
          "
          >
            <RevenueCard data={revenue} />
            <SalesLeadsCard data={sales} />
            <ExpensesCard data={expenses} />
            <AuditsCard data={audits} />
          </div>

        </div>

      </MainLayout>
      <AuthPage />
      <DashboardHomePage />
      <MarketingDashboard />
      <MarketingUpdate />
      <SocialMediaReports />
      <SocialsPage />
      <CRMTickets />
      <TechDashboard />
    </>
  );
};

export default Dashboard;