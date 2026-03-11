// import { motion } from "framer-motion";

import BrandsCarousel from "./component/BrandsCarousel";
import CenterScrollShowcase from "./component/CenterScrollShowcase";
import CEOStructure from "./component/CEOStructure";
import CircularBrandOrbit from "./component/CircularBrandOrbit";
import FigmaCEO from "./component/FIgmaCEO";
import FinanceActions from "./component/FinanceActions";
import GodModeGamingText from "./component/GodModeGamingText";
import HiringCard from "./component/HiringCard";
import HireCEOInfographic from "./component/HirngCeoInfo";
import LegendaryGameIntro from "./component/LegendaryGameIntro";
import MillionSection from "./component/MillionSection";
import MillionUsersSection from "./component/MillionUsersSection";
import PhysicsAlphabetDrop from "./component/PhysicsAlphabetDrop";
import PhysicsTechBalls from "./component/PhysicsTechBalls";
import Homea from "./Pagea";

// const Home = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden text-white min-w-screen">

//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-300"></div>

//       {/* Floating 3D Circles */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//           className="w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
//         />
//       </div>

//       {/* Navbar */}
//       <header className="relative z-10 flex justify-between items-center px-12 py-6">
//         <h1 className="text-3xl font-bold">Jeton</h1>

//         <div className="flex items-center gap-6">
//           <button className="text-sm opacity-90 hover:opacity-100">
//             EN ▾
//           </button>

//           <button className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10">
//             Log in
//           </button>

//           <button className="px-5 py-2 rounded-full bg-white text-red-500 font-semibold">
//             Sign up
//           </button>
//         </div>
//       </header>

//       {/* Hero Content */}
//       <section className="relative z-10 flex flex-col justify-center h-[80vh] px-20">

//         <h1 className="text-[110px] leading-[100px] font-bold max-w-3xl">
//           One app
//           <br />
//           for all needs
//         </h1>

//         <div className="absolute right-20 top-1/2 -translate-y-1/2 text-right">
//           <p className="text-lg opacity-90 mb-6">
//             Single account for all your payments.
//           </p>

//           <div className="flex gap-4 justify-end">
//             <button className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10">
//               App Store
//             </button>
//             <button className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10">
//               Google Play
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Bottom Navigation */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-red-500 rounded-full px-8 py-3 flex gap-8 text-sm">
//         <span>🏠 Personal</span>
//         <span>Business</span>
//         <span>Company</span>
//       </div>

//       {/* Support Button */}
//       <button className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
//         Support
//       </button>
//     </div>
//   );
// };

// export default Home;


const Home = () => {
    return (
        <>
            <div className="relative min-h-screen overflow-hidden text-white min-w-screen">

                {/* 🎥 Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full min-h-screen object-cover"
                >
                    <source
                        src="https://jetonbucket.fra1.cdn.digitaloceanspaces.com/jeton/2024-08-08T10-52-41.402Z-jeton-homepage-hd2.mp4#t=0.01"
                        type="video/mp4"
                    />
                </video>

                {/* Dark Overlay (Important for readability) */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Navbar */}
                <header className="relative z-10 flex justify-between items-center px-12 py-6">
                    <h1 className="text-3xl font-bold">Jeton</h1>

                    <div className="flex items-center gap-6">
                        <button className="text-sm opacity-90 hover:opacity-100">
                            EN ▾
                        </button>

                        <button className="px-4 py-2 rounded-full border border-white/40 hover:bg-white/10">
                            Log in
                        </button>

                        <button className="px-5 py-2 rounded-full bg-white text-red-500 font-semibold">
                            Sign up
                        </button>
                    </div>
                </header>

                {/* Hero Content */}
                <section className="relative z-10 flex flex-col justify-center h-[80vh] px-20">
                    <h1 className="text-[110px] leading-[100px] font-bold max-w-3xl">
                        One app
                        <br />
                        for all needs
                    </h1>

                    <div className="absolute right-20 top-1/2 -translate-y-1/2 text-right">
                        <p className="text-lg opacity-90 mb-6">
                            Single account for all your payments.
                        </p>

                        <div className="flex gap-4 justify-end">
                            <button className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10">
                                App Store
                            </button>
                            <button className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10">
                                Google Play
                            </button>
                        </div>
                    </div>
                </section>


                {/* Support Button */}
                <button className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full z-10">
                    Support
                </button>
            </div>
            <Homea />
            {/* <CEOStructure/> */}
            <HireCEOInfographic/>
            <FigmaCEO/>
            <LegendaryGameIntro/>
             {/* <PremiumScrollGallery/> */}
           <HiringCard/>
           <GodModeGamingText/>
           <FinanceActions/>
           <MillionUsersSection/>
           <CenterScrollShowcase/>
           <PhysicsAlphabetDrop/>
           {/* <ScrollImageQueue/> */}
           {/* <FloatingBalls/> */}
           <PhysicsTechBalls/>
           {/* <UltraPremiumShowcase/> */}
            <MillionSection/>
           <BrandsCarousel/>
           <CircularBrandOrbit/>
        </>
    );
};

export default Home;