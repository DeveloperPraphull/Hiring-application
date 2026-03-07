import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HiringCard from "./component/HiringCard";
import FloatingTechBalls from "./component/FloatingBalls";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";

// Lazy pages
const Home = lazy(() => import("./Page"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer/>
    </Suspense>
  );
};

export default AppRouter;