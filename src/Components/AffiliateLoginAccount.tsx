
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaArrowRight, FaCircleCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AffiliateLoginAccount = () => {
    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
            >
                {/* Left Side: Welcome Back Content */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <span className="bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                            Welcome Back, Affiliate
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                            Access Your <span className="text-indigo-400">Affiliate Dashboard.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                            Log in to track your earnings, generate new links, and access exclusive marketing resources.
                            Your next commission is just a click away.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { title: "Real-time Earnings", desc: "Monitor your commissions as they come in." },
                            { title: "M-Pesa Payouts", desc: "Daily payouts directly to your M-Pesa." },
                            { title: "Performance Tracking", desc: "Analyze clicks, conversions, and more." },
                            { title: "Marketing Resources", desc: "Access banners, swipe files, and product info." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600/20 transition-colors">
                                    <FaCircleCheck className="text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-snug mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-500/5 relative">
                    <div className="mb-10 text-center lg:text-left">
                        <h3 className="text-2xl font-black text-white">Login to Affiliate Account</h3>
                        <p className="text-slate-500 text-sm mt-2">Enter your credentials to access your dashboard.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Email Address</label>
                            <div className="relative group">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                <input
                                    type="email"
                                    placeholder="hello@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Password</label>
                                <a href="#" className="text-indigo-400 text-[10px] font-bold hover:underline">Forgot?</a>
                            </div>
                            <div className="relative group">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg mt-4">
                            Login to Dashboard <FaArrowRight />
                        </button>

                        <div className="text-center pt-4">
                            <p className="text-slate-500 text-sm">
                                Don't have an account?{" "}
                                <Link to="/AffiliateCreateAccount" className="text-indigo-400 font-bold hover:underline">Register Now</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    )
}
export default AffiliateLoginAccount
