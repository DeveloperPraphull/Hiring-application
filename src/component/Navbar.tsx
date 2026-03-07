
function Navbar() {
    return (
        <div>
            {/* Premium Bottom Navigation */}
            {/* Sticky Premium Bottom Navbar */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999]">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full
      bg-white/20 backdrop-blur-xl
      border border-white/30
      shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

                    <button className="w-10 h-10 flex items-center justify-center 
        rounded-full bg-white text-red-500 shadow-md 
        hover:scale-105 transition">
                        🏠
                    </button>

                    <button className="px-5 py-2 rounded-full 
        bg-red-500  font-medium 
        hover:bg-red-600 transition">
                        Personal ▾
                    </button>

                    <button className="px-5 py-2 rounded-full 
        text-gray-800 hover:bg-white/40 transition">
                        Business ↗
                    </button>

                    <button className="px-5 py-2 rounded-full 
        text-gray-800 hover:bg-white/40 transition">
                        Company ▾
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
