import { motion } from 'framer-motion';
import { FaEnvelopeCircleCheck, FaArrowRight, FaRotateRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const EmailConfirmation = () => {
    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full relative z-10"
            >
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 text-center">
                    <div className="mb-10">
                        <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <FaEnvelopeCircleCheck className="text-blue-400 text-4xl" />
                        </div>
                        <h3 className="text-3xl font-black text-white">Verify Your Email</h3>
                        <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                            We've sent a 6-digit verification code to your email address.
                            Please enter it below to confirm your account.
                        </p>
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Verification Code</label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    maxLength={6}
                                    placeholder="000000"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 text-center text-3xl font-black tracking-[0.5em] text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg">
                            Verify Email <FaArrowRight />
                        </button>

                        <div className="pt-6 border-t border-white/5 space-y-4">
                            <p className="text-slate-500 text-sm">
                                Didn't receive the code?
                            </p>
                            <button
                                type="button"
                                className="text-blue-400 font-bold hover:underline flex items-center justify-center gap-2 mx-auto text-sm transition-all active:scale-95"
                            >
                                <FaRotateRight className="text-xs" /> Resend Code
                            </button>
                        </div>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <Link to="/login" className="text-slate-500 text-sm hover:text-white transition-colors flex items-center justify-center gap-2">
                        Back to Login
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default EmailConfirmation;