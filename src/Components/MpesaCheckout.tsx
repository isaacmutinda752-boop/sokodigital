import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMobileScreenButton, FaLock, FaArrowLeft, FaCircleCheck, FaSpinner } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MpesaCheckout = () => {
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('processing');

        // Simulate M-Pesa STK Push timeout
        setTimeout(() => {
            setStatus('success');
        }, 3000);
    };

    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full relative z-10"
            >
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-green-500/5">
                    <AnimatePresence mode="wait">
                        {status !== 'success' ? (
                            <motion.div
                                key="payment-form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="text-center mb-10">
                                    <div className="w-16 h-16 bg-green-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <FaMobileScreenButton className="text-green-500 text-3xl" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white">M-Pesa Checkout</h3>
                                    <p className="text-slate-500 text-sm mt-2">Enter your Safaricom number to pay</p>
                                </div>

                                <form onSubmit={handlePayment} className="space-y-6">
                                    <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex justify-between items-center mb-8">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Amount</p>
                                            <p className="text-xl font-black text-white">KES 2,500.00</p>
                                        </div>
                                        <div className="bg-blue-600/20 px-3 py-1 rounded-lg">
                                            <p className="text-blue-400 text-[10px] font-black uppercase">Secured</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">M-Pesa Number</label>
                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                placeholder="07XXXXXXXX"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all text-lg font-bold"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        disabled={status === 'processing'}
                                        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-slate-800 text-white font-black py-5 rounded-2xl shadow-xl shadow-green-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg"
                                    >
                                        {status === 'processing' ? (
                                            <>Processing... <FaSpinner className="animate-spin" /></>
                                        ) : (
                                            <>Pay Now <FaLock className="text-sm opacity-50" /></>
                                        )}
                                    </button>

                                    <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                                        An STK Push will be sent to your phone
                                    </p>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success-screen"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                    <FaCircleCheck className="text-green-500 text-5xl" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4">Payment Initiated!</h3>
                                <p className="text-slate-400 leading-relaxed mb-10">
                                    Please check your phone and enter your <strong>M-Pesa PIN</strong> to complete the transaction.
                                </p>
                                <Link
                                    to="/all-products"
                                    className="inline-block bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border border-white/10 transition-all"
                                >
                                    Return to Store
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="text-center mt-10">
                    <Link to="/" className="text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-bold">
                        <FaArrowLeft className="text-xs" /> Cancel & Go Back
                    </Link>
                </div>
            </motion.div>

            {/* Branding Footer */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 flex items-center gap-2">
                <span className="text-white font-black italic text-2xl tracking-tighter">M-PESA</span>
                <span className="text-white text-[8px] font-bold uppercase tracking-[0.3em] border-l border-white/30 pl-2">Official Payment Partner</span>
            </div>
        </section>
    );
};

export default MpesaCheckout;