const DashboardBanner = () => {
  return (
    <div className="w-full flex flex-col items-center mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4 md:px-6 pt-4 sm:pt-5 md:pt-7">

      {/* Top Gradient Banner */}
      <div className="relative w-full max-w-[96%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-gradient-to-r from-blue-600 via-violet-500 to-fuchsia-500 rounded-2xl px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 shadow-lg shadow-violet-500/20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <h1 className="relative text-white font-extrabold tracking-[0.15em] uppercase text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-6 px-2 sm:px-4 drop-shadow-md">
          TOOLS & APPS TO TRACK RECORD
        </h1>
      </div>

      {/* Bottom Strip */}
      <div className="w-full max-w-[90%] sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-2 sm:mt-3 bg-white/80 backdrop-blur-md rounded-xl px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 shadow-sm border border-gray-200/60 text-center">
        <p className="text-gray-600 font-medium tracking-wider text-[9px] sm:text-[11px] md:text-sm lg:text-base">
          DASHBOARD TO MANAGE REPORTS ON A SINGLE PAGE
        </p>
      </div>

    </div>
  );
};

export default DashboardBanner;