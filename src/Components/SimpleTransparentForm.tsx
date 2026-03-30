import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaStore, FaPhone, FaArrowRight, FaCircleCheck, FaStar, FaArrowLeft } from 'react-icons/fa6';

const SimpleTransparentForm = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState("Starter");

    const plans = {
        Starter: { price: "Free", color: "text-slate-400", features: ["3 Products", "15% Commission"] },
        Pro: { price: "Ksh 999", color: "text-blue-400", features: ["Unlimited Products", "10% Commission"] },
        Enterprise: { price: "Ksh 2,999", color: "text-purple-400", features: ["Featured Listing", "5% Commission"] }
    };

    useEffect(() => {
        const plan = searchParams.get('plan');
        if (plan && plans[plan as keyof typeof plans]) {
            setSelectedPlan(plan);
        }
    }, [searchParams]);

    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
            >
                {/* Left Side: Summary */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Secure Your <span className="text-blue-400">Spot.</span>
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Join the elite group of Kenyan creators earning directly via M-Pesa.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl space-y-6">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Selected Plan</span>
                            {selectedPlan === 'Pro' && <span className="bg-blue-600/20 text-blue-400 text-[10px] font-black px-2 py-1 rounded-md uppercase">Popular</span>}
                        </div>
                        <div className="flex items-baseline gap-3">
                            <h3 className="text-3xl font-black text-white">{selectedPlan}</h3>
                            <p className={`font-bold ${plans[selectedPlan as keyof typeof plans].color}`}>
                                {plans[selectedPlan as keyof typeof plans].price}
                            </p>
                        </div>
                        <ul className="space-y-3">
                            {plans[selectedPlan as keyof typeof plans].features.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                    <FaCircleCheck className="text-blue-500" /> {f}
                                </li>
                            ))}
                        </ul>
                        <Link to="/for-sellers#pricing" className="text-blue-400 text-xs font-bold hover:underline block pt-2">Change Plan</Link>
                    </div>
                </div>

                {/* Right Side: Registration Form */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-8 group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Back to pricing
                    </button>

                    <div className="mb-10">
                        <h3 className="text-2xl font-black text-white">Create Your Shop</h3>
                        <p className="text-slate-500 text-sm mt-2">Fill in your details to get started.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Full Name</label>
                            <div className="relative group">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Isaac Mwangi"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Shop / Brand Name</label>
                            <div className="relative group">
                                <FaStore className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="e.g. Soko Creative"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Email Address</label>
                            <div className="relative group">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                <input
                                    type="email"
                                    placeholder="isaac@webrayz.dev"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">M-Pesa Number (Payouts)</label>
                            <div className="relative group">
                                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                <input
                                    type="tel"
                                    placeholder="07XXXXXXXX"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg">
                            Get Started with {selectedPlan} <FaArrowRight />
                        </button>

                        <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-widest pt-4">
                            By clicking, you agree to our Terms of Service
                        </p>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default SimpleTransparentForm;