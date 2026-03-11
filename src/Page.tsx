import BrandsCarousel from "./component/BrandsCarousel";
import CenterScrollShowcase from "./component/CenterScrollShowcase";
import CEOStructure from "./component/CEOStructure";
import CircularBrandOrbit from "./component/CircularBrandOrbit";
import FigmaCEO from "./component/FIgmaCEO";
import FinanceActions from "./component/FinanceActions";
import GodModeGamingText from "./component/GodModeGamingText";
import HiringCard from "./component/HiringCard";
import LegendaryGameIntro from "./component/LegendaryGameIntro";
import MillionSection from "./component/MillionSection";
import MillionUsersSection from "./component/MillionUsersSection";
import PhysicsAlphabetDrop from "./component/PhysicsAlphabetDrop";
import PhysicsTechBalls from "./component/PhysicsTechBalls";
import Homea from "./Pagea";

const Home = () => {
  return (
    <>
      <div className="relative min-w-screen overflow-hidden text-white w-full">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://jetonbucket.fra1.cdn.digitaloceanspaces.com/jeton/2024-08-08T10-52-41.402Z-jeton-homepage-hd2.mp4#t=0.01"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Navbar */}
        <header className="relative z-10 flex justify-between items-center px-6 md:px-10 lg:px-16 py-4">

          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Jeton
          </h1>

          <div className="flex items-center gap-3 md:gap-6">

            <button className="text-xs md:text-sm opacity-90 hover:opacity-100">
              EN ▾
            </button>

            <button className="px-3 md:px-4 py-1.5 md:py-2 text-sm rounded-full border border-white/40 hover:bg-white/10">
              Log in
            </button>

            <button className="px-4 md:px-5 py-1.5 md:py-2 text-sm rounded-full bg-white text-red-500 font-semibold">
              Sign up
            </button>

          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center h-[80vh] px-6 md:px-10 lg:px-20">

          {/* Left Text */}
          <h1 className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-[90px]
          leading-tight
          font-bold
          max-w-xl
          ">
            One app
            <br />
            for all needs
          </h1>

          {/* Right Content */}
          <div className="
          mt-8 lg:mt-0
          lg:absolute
          lg:right-20
          lg:top-1/2
          lg:-translate-y-1/2
          text-left lg:text-right
          ">

            <p className="text-sm md:text-lg opacity-90 mb-6">
              Single account for all your payments.
            </p>

            <div className="flex gap-3 md:gap-4 lg:justify-end">

              <button className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base border border-white/40 rounded-xl hover:bg-white/10">
                App Store
              </button>

              <button className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base border border-white/40 rounded-xl hover:bg-white/10">
                Google Play
              </button>

            </div>

          </div>

        </section>

        {/* Support Button */}
        <button className="
        fixed
        bottom-6
        right-6
        bg-white/20
        backdrop-blur-md
        px-4 md:px-6
        py-2 md:py-3
        text-sm md:text-base
        rounded-full
        z-10
        ">
          Support
        </button>

      </div>

      {/* Other Sections */}
      <Homea />
      <CEOStructure />
      <FigmaCEO />
      {/* <LegendaryGameIntro /> */}
      <HiringCard />
      {/* <GodModeGamingText /> */}
      <FinanceActions />
      <MillionUsersSection />
      {/* <CenterScrollShowcase /> */}
      {/* <PhysicsAlphabetDrop /> */}
      <PhysicsTechBalls />
      <MillionSection />
      <BrandsCarousel />
      <CircularBrandOrbit /> 
    </>
  );
};

export default Home;