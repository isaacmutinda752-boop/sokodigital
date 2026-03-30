
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaBriefcase, FaArrowRight, FaUsers, FaComments, FaCircleQuestion, FaAward } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const JoinTheCommunityAccount = () => {
    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
            >
                {/* Left Side: Community Content */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <span className="bg-purple-600/10 text-purple-400 border border-purple-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                            Built for Builders
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                            Connect with the <span className="text-purple-400">Best.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                            Join over 12,000 creators, developers, and entrepreneurs.
                            Share ideas, get feedback, and build the future of Kenya's digital economy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { title: "Networking", desc: "Connect with like-minded builders.", icon: <FaUsers /> },
                            { title: "Peer Support", desc: "Get help from the community 24/7.", icon: <FaComments /> },
                            { title: "Exclusive AMA", desc: "Learn from top industry experts.", icon: <FaAward /> },
                            { title: "Skill Growth", desc: "Collaborate on projects and grow.", icon: <FaCircleQuestion /> }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-600/20 transition-colors">
                                    <div className="text-purple-400">{item.icon}</div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-snug mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Signup Form */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-purple-500/5 relative">
                    <div className="mb-10 text-center lg:text-left">
                        <h3 className="text-2xl font-black text-white">Join the Community</h3>
                        <p className="text-slate-500 text-sm mt-2">Create your profile and start connecting.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Display Name</label>
                            <div className="relative group">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Email Address</label>
                            <div className="relative group">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
                                <input
                                    type="email"
                                    placeholder="hello@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">I am a...</label>
                            <div className="relative group">
                                <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
                                <select
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all cursor-pointer"
                                >
                                    <option value="" disabled selected className="bg-slate-900">Select your role</option>
                                    <option value="developer" className="bg-slate-900">Developer</option>
                                    <option value="designer" className="bg-slate-900">Designer</option>
                                    <option value="seller" className="bg-slate-900">Seller</option>
                                    <option value="entrepreneur" className="bg-slate-900">Entrepreneur</option>
                                    <option value="student" className="bg-slate-900">Student</option>
                                </select>
                            </div>
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-purple-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg mt-4">
                            Access Community <FaArrowRight />
                        </button>

                        <div className="text-center pt-4 border-t border-white/5">
                            <p className="text-slate-500 text-sm">
                                Already a member?{" "}
                                <Link to="/CommunityLogin" className="text-purple-400 font-bold hover:underline">Login here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default JoinTheCommunityAccount