import { motion } from 'framer-motion';
import { FaHashtag, FaArrowLeft, FaUsers, FaArrowRight, FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CommunityExploreChannels = () => {
    const [searchQuery, setSearchQuery] = useState("");

    // Channels Data (Expanded from Community.tsx)
    const channels = [
        { id: "marketplace-help", name: "Marketplace Help", desc: "Buy, sell and trade digital assets, services and opportunities.", members: "2.4K", online: 18, category: "Business" },
        { id: "dev-corner", name: "Dev Corner", desc: "Frontend, backend, APIs, M-Pesa integration and all things code.", members: "3.4K", online: 34, category: "Tech" },
        { id: "design-studio", name: "Design Studio", desc: "UI/UX, Figma, Adobe, branding and creative feedback.", members: "1.4K", online: 14, category: "Creative" },
        { id: "growth-hustle", name: "Growth Hustle", desc: "Marketing, SEO, content, social media and scaling digital businesses.", members: "1.8K", online: 30, category: "Marketing" },
        { id: "sellers-lounge", name: "Sellers Lounge", desc: "Product listings, pricing strategies and scaling your online store.", members: "1.2K", online: 24, category: "Business" },
        { id: "mpesa-integration", name: "M-Pesa Integration", desc: "M-Pesa integration, payment gateways and all things payments.", members: "2.0K", online: 14, category: "Tech" }
    ];

    const filteredChannels = channels.filter(channel =>
        channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        channel.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                    <Link to="/community" className="text-slate-500 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors group w-fit">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Community
                    </Link>
                </motion.div>

                <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="text-center mb-20 space-y-4">
                    <p className="text-purple-400 font-bold uppercase tracking-widest text-sm">Discover Your Space</p>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Channels</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Find the right conversation. Join specialized channels designed for Kenyan digital creators and builders.
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="max-w-2xl mx-auto mb-16">
                    <div className="relative group">
                        <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search channels..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-md"
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredChannels.map((channel, i) => (
                        <motion.div
                            key={channel.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass-panel border border-white/5 p-8 rounded-[2.5rem] hover:border-purple-500/30 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="bg-purple-600/20 p-3 rounded-2xl text-purple-400 text-2xl group-hover:scale-110 transition-transform">
                                        <FaHashtag />
                                    </div>
                                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        {channel.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                    {channel.name}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    {channel.desc}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-tighter">
                                        <FaUsers className="text-slate-600" />
                                        <span>{channel.members} Members</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-500">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        {channel.online} Online
                                    </div>
                                </div>
                                <Link to={`/community/channel/${channel.id}`} className="w-full bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 group/btn">
                                    Join Channel <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredChannels.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No channels found matching "{searchQuery}"</p>
                        <button onClick={() => setSearchQuery("")} className="text-purple-400 font-bold hover:underline mt-4">
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CommunityExploreChannels;