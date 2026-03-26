import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import Dashboard from "./modules/dashboards/Dashboard";
import ProductsPricing from "./component/ProductsPricing";


// Lazy pages
const Home = lazy(() => import("./Page"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ContactPage = lazy(() => import("./Pages/ContactUs"));
const AuthPage = lazy(() => import("./modules/auth/AuthPage"));
const SocialsPage = lazy(() => import("./modules/socials/SocialsPage"));
const SocialMediaReports = lazy(() => import("./modules/socials/SocialMediaReports"));
const MarketingDashboard = lazy(() => import("./modules/marketing/MarketingDashboard"));
const TechDashboard = lazy(() => import("./modules/tech/TechDashboard"));
const CRMTickets = lazy(() => import("./modules/tech/CRMTickets"));
const LocationPage = lazy(() => import("./modules/location/LocationPage"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

        <Route path="/auth" element={<AuthPage />} />
        <Route path="/socials" element={<SocialsPage />} />
        <Route path="/social-reports" element={<SocialMediaReports />} />
        <Route path="/marketing" element={<MarketingDashboard />} />
        <Route path="/tech" element={<TechDashboard />} />
        <Route path="/crm-tickets" element={<CRMTickets />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="*" element={
          <>
            <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pricing" element={<ProductsPricing />} />
              <Route path="/products" element={<Dashboard />} />
            </Routes>
            <Footer/>
          </>
        } />

      </Routes>
    </Suspense>
  );
};

export default AppRouter;