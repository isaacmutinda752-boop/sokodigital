import { FaStar, FaAward } from "react-icons/fa6";
import { Link } from "react-router-dom";



const GreatCreators = () => {
    // Great Creators Data
    const creators = [
        { id: 1, name: "TechWithMwangi", niche: "Software Architect", sales: "1.4k+", rating: 4.9, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
        { id: 2, name: "DesignByAchieng", niche: "UI/UX Designer", sales: "850+", rating: 5.0, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
        { id: 3, name: "TheReactMaster", niche: "Frontend Specialist", sales: "2.1k+", rating: 4.8, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
        { id: 4, name: "DataGeekKenya", niche: "AI & ML Expert", sales: "620+", rating: 4.7, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop" }
    ];

    // removed unused footerLinks


    return (
        <section id="great-creators" className="bg-slate-950 py-16 sm:py-20 px-4 sm:px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white">
                        Great <span className="text-blue-400">Creators</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
                        Meet the elite digital entrepreneurs shaping Kenya's tech landscape.
                        Top verified sellers with consistent quality delivery.
                    </p>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    {creators.map((creator) => (
                        <div key={creator.id} className="group p-6 sm:p-8 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl text-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                            <div className="relative z-10">
                                <img src={creator.avatar} alt={creator.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 sm:mb-6 border-4 border-blue-500/20 group-hover:border-blue-500/50 transition-all object-cover" />
                                <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{creator.name}</h3>
                                <p className="text-blue-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 uppercase tracking-tighter">{creator.niche}</p>
                                <div className="flex items-center justify-center gap-3 sm:gap-4 text-slate-300 text-xs sm:text-sm py-2 sm:py-3 border-y border-white/5 mb-4 sm:mb-6">
                                    <div className="flex items-center gap-1"><FaStar className="text-yellow-400" /> {creator.rating}</div>
                                    <div className="flex items-center gap-1 font-bold text-white">{creator.sales} <span className="text-slate-500 font-normal">Sales</span></div>
                                </div>
                                <Link to={`/creator-store/${creator.id}`} className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-2 rounded-xl sm:py-2.5 border border-white/10 transition-all active:scale-95 block text-center">
                                    View Store
                                </Link>
                            </div>
                            <FaAward className="absolute -bottom-2 -right-2 text-7xl sm:text-8xl text-blue-500/5 rotate-12 group-hover:text-blue-500/10 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GreatCreators