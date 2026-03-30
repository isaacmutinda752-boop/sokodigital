import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchAreaProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const SearchArea = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }: SearchAreaProps) => {
    const categories = ["All", "Courses", "Software", "Templates", "Ebooks", "Graphics"];
    const trending = [
        "Business", "Software and code", "Graphics and design",
        "Ebooks and Guides", "Audio and Music", "Video and Animation", "All Categories"
    ];

    return (
        <section className="bg-slate-950 py-12 px-6 md:px-12 border-b border-white/5">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Category Tabs */}
                <div className="flex flex-wrap items-center gap-6 md:gap-10 border-b border-white/5 pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`${selectedCategory === cat ? "text-blue-400" : "text-slate-400"} hover:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-widest transition-colors relative group`}
                        >
                            {cat}
                            <span className={`absolute -bottom-4 left-0 h-0.5 bg-blue-400 transition-all ${selectedCategory === cat ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </button>
                    ))}
                </div>

                {/* Search Input Area */}
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1 group">
                            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search digital products, courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all backdrop-blur-md"
                            />
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-4 rounded-2xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all">
                            Search
                        </button>
                    </div>
                </div>

                {/* Trending Tags */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] mr-2">Trending:</span>
                    {trending.map((item) => (
                        <button
                            key={item}
                            onClick={() => setSearchQuery(item === "All Categories" ? "" : item)}
                            className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-slate-300 text-xs font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap active:scale-95"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SearchArea