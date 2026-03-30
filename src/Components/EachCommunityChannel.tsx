import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHashtag, FaArrowLeft, FaUsers, FaPaperPlane, FaFaceSmile, FaPlus, FaCircleInfo } from 'react-icons/fa6';

const EachCommunityChannel = () => {
    const { id } = useParams();
    const [message, setMessage] = useState("");

    // Mock Data for the specific channel
    const channelInfo = {
        id: id || "marketplace-help",
        name: id?.replace('-', ' ').toUpperCase() || "Marketplace Help",
        members: "2.4K",
        online: 18,
        description: "Official support and discussion room for buying and selling digital assets on Soko Digital."
    };

    // Mock Messages
    const [messages] = useState([
        { id: 1, user: "Kamau_Dev", text: "Hey everyone! Does anyone have a template for a SaaS landing page?", time: "10:30 AM", avatar: "KD" },
        { id: 2, user: "Wanjiku_Creative", text: "Check out the Templates category, TechWithMwangi just uploaded a great one.", time: "10:32 AM", avatar: "WC" },
        { id: 3, user: "Soko_Admin", text: "Welcome to the channel! Remember to follow our community guidelines.", time: "10:35 AM", avatar: "SA" },
        { id: 4, user: "Nairobi_Founder", text: "Just closed my first sale via M-Pesa STK push. The integration is seamless! 🚀", time: "11:05 AM", avatar: "NF" },
    ]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            // Logic to send message would go here
            setMessage("");
        }
    };

    return (
        <section className="h-screen bg-slate-950 flex flex-col overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-0 pointer-events-none" />

            {/* Top Navigation Bar */}
            <header className="h-20 bg-slate-900/40 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 relative z-10">
                <div className="flex items-center gap-6">
                    <Link to="/community/explore" className="text-slate-500 hover:text-white transition-colors">
                        <FaArrowLeft />
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600/20 p-2.5 rounded-xl text-blue-400">
                            <FaHashtag />
                        </div>
                        <div>
                            <h2 className="text-white font-black tracking-tight leading-none">{channelInfo.name}</h2>
                            <div className="flex items-center gap-2 mt-1.5">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{channelInfo.online} Online</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-4 text-slate-500 text-sm font-bold">
                    <FaUsers className="text-lg" />
                    <span>{channelInfo.members} Members</span>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden relative z-10">
                {/* Main Chat Feed */}
                <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
                        <div className="py-10 text-center border-b border-white/5 mb-10">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center text-white text-4xl font-black mx-auto mb-6 shadow-2xl">
                                <FaHashtag />
                            </div>
                            <h3 className="text-2xl font-black text-white">Welcome to #{channelInfo.id}!</h3>
                            <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">This is the start of the {channelInfo.name} channel. Be respectful and helpful.</p>
                        </div>

                        {messages.map((msg) => (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                key={msg.id}
                                className="flex gap-4 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 font-black text-xs flex-shrink-0 group-hover:border-blue-500/30 transition-colors">
                                    {msg.avatar}
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <span className="text-white font-bold text-sm hover:underline cursor-pointer">{msg.user}</span>
                                        <span className="text-slate-600 text-[10px] font-bold uppercase">{msg.time}</span>
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">{msg.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Message Input Area */}
                    <div className="p-6 bg-slate-950/50 backdrop-blur-md">
                        <form
                            onSubmit={handleSendMessage}
                            className="bg-white/5 border border-white/10 rounded-2xl p-2 flex items-center gap-2 focus-within:border-blue-500/50 transition-all"
                        >
                            <button type="button" className="p-3 text-slate-500 hover:text-white transition-colors">
                                <FaPlus />
                            </button>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={`Message #${channelInfo.id}`}
                                className="flex-1 bg-transparent border-none text-white placeholder:text-slate-600 focus:outline-none py-3 px-2 text-sm"
                            />
                            <div className="flex items-center gap-1">
                                <button type="button" className="p-3 text-slate-500 hover:text-white transition-colors hidden sm:block">
                                    <FaFaceSmile />
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                                >
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Sidebar - Info */}
                <aside className="hidden lg:block w-80 border-l border-white/5 bg-slate-900/20 p-8 space-y-10">
                    <div className="space-y-4">
                        <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                            <FaCircleInfo className="text-blue-400" /> About Channel
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {channelInfo.description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Guidelines</h4>
                        <ul className="space-y-4">
                            {["Be respectful to others", "No spamming or self-promo", "Use relevant categories", "Help others grow"].map((rule, i) => (
                                <li key={i} className="flex gap-3 text-xs text-slate-300 font-medium">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                                    {rule}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default EachCommunityChannel;