import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaArrowLeft, FaAward, FaXTwitter, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa6";
import ProductCard from "./ProductCard";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GreatCreatorsStore = () => {
    const { id } = useParams();

    // Mock Creator Data (Matches GreatCreators.tsx IDs)
    const creators = [
        { id: 1, name: "TechWithMwangi", niche: "Software Architect", sales: "1.4k+", rating: 4.9, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", bio: "Building scalable enterprise solutions and mentoring the next generation of Kenyan developers. Specializing in Cloud Architecture and React masterclasses." },
        { id: 2, name: "DesignByAchieng", niche: "UI/UX Designer", sales: "850+", rating: 5.0, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", bio: "Passionate about creating user-centric digital experiences. Helping startups build beautiful and functional products." },
        { id: 3, name: "TheReactMaster", niche: "Frontend Specialist", sales: "2.1k+", rating: 4.8, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", bio: "Frontend developer focused on performance and clean code. Creator of some of the most downloaded React templates in Kenya." },
        { id: 4, name: "DataGeekKenya", niche: "AI & ML Expert", sales: "620+", rating: 4.7, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop", bio: "Deep diving into data to extract meaningful insights. Providing comprehensive courses on Machine Learning and AI applications." }
    ];

    const creator = creators.find(c => c.id === Number(id)) || creators[0];

    // Mock Products for this specific creator
    const creatorProducts = [
        {
            id: 101,
            title: "Premium SaaS Dashboard Template",
            price: "2,500",
            category: "Templates",
            rating: 4.9,
            sales: 124,
            image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 102,
            title: "Advanced TypeScript Utility Types Library",
            price: "1,200",
            category: "Software",
            rating: 4.7,
            sales: 89,
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 103,
            title: "Full-Stack E-commerce Starter Kit",
            price: "4,500",
            category: "Software",
            rating: 5.0,
            sales: 45,
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                    <Link to="/" className="text-slate-500 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors group w-fit">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Marketplace
                    </Link>
                </motion.div>

                {/* Profile Header */}
                <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                        <div className="relative group">
                            <img src={creator.avatar} alt={creator.name} className="w-40 h-40 rounded-3xl border-4 border-blue-500/20 shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute -bottom-3 -right-3 bg-blue-600 p-2 rounded-xl shadow-xl">
                                <FaAward className="text-white text-xl" />
                            </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">{creator.name}</h2>
                                <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">{creator.niche}</p>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{creator.bio}</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <button className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-xl border border-white/10 transition-all active:scale-95"><FaXTwitter /></button>
                                <button className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-xl border border-white/10 transition-all active:scale-95"><FaGithub /></button>
                                <button className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-xl border border-white/10 transition-all active:scale-95"><FaGlobe /></button>
                                <button className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 font-bold px-6 py-3 rounded-xl border border-blue-500/20 transition-all active:scale-95 flex items-center gap-2">
                                    <FaEnvelope /> Contact Creator
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full lg:w-64">
                            {[
                                { label: "Rating", value: creator.rating, icon: <FaStar className="text-yellow-400" /> },
                                { label: "Sales", value: creator.sales },
                                { label: "Products", value: "12" },
                                { label: "Followers", value: "2.4k" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
                                    <div className="flex items-center justify-center gap-1 text-white font-black text-xl mb-1">{stat.icon} {stat.value}</div>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-10">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">Creator's Portfolio</h3>
                        <p className="text-slate-500 text-sm font-bold">{creatorProducts.length} Results</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {creatorProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreatCreatorsStore;