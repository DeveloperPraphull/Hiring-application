import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import TopDashboard from "./components/TopDashboard";
import DashboardBanner from "./components/DashboardBanner";
import LeftSidebar from "./components/LeftSidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 via-slate-50 to-gray-200 flex flex-col overflow-x-hidden">

      {/* Ambient glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-200/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Banner */}
        <DashboardBanner />

        {/* Main Layout */}
        <div className="w-full flex flex-col lg:flex-row items-stretch px-2 sm:px-3 lg:px-4 flex-1">

          {/* Left Icon Sidebar */}
          <div className="w-full lg:w-20 xl:w-24 2xl:w-28 flex-shrink-0 order-1">
            <RightSidebar />
          </div>

          {/* Center Content */}
          <div className="flex-1 flex justify-center px-1 sm:px-2 md:px-3 lg:px-4 min-w-0 order-2">

            {/* Glass Frame */}
            <div className="w-full max-w-screen-2xl bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-300/40 border border-white/60 overflow-hidden p-2 sm:p-3 md:p-4 lg:p-5 my-2 sm:my-3 md:my-4">

              <div className="flex flex-col md:flex-row gap-3 md:gap-0">

                {/* Inner Sidebar */}
                <div className="w-full md:w-48 lg:w-56 xl:w-60 flex-shrink-0 md:mr-3 lg:mr-4">
                  <Sidebar />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">
                  <Header />
                  <div className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-gray-50 to-slate-100 backdrop-blur-sm rounded-b-xl min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px] border border-gray-200/50">
                    {children}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Icon Sidebar */}
          <div className="w-full lg:w-20 xl:w-24 2xl:w-28 flex-shrink-0 order-3">
            <LeftSidebar />
          </div>

        </div>

        {/* Bottom Dashboard */}
        <div className="w-full overflow-x-auto px-2 sm:px-3 md:px-4 lg:px-6 pb-4 sm:pb-5">
          <TopDashboard />
        </div>

      </div>
    </div>
  );
};

export default MainLayout;