import { motion } from 'framer-motion';
import { FaStore, FaMoneyBillTrendUp, FaArrowRight, FaChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AccountSelector = () => {
    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-0" />

            <div className="max-w-5xl w-full relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white"
                    >
                        Choose Your <span className="text-blue-400">Path</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Whether you have a product to sell or want to earn by sharing,
                        Soko Digital has a place for you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Seller Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="group relative p-1 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[2.5rem]"
                    >
                        <div className="h-full bg-slate-900/80 backdrop-blur-xl p-10 rounded-[2.4rem] border border-white/5 flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 text-3xl mb-8 group-hover:scale-110 transition-transform">
                                    <FaStore />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4">Be a Seller</h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    I have digital products (ebooks, software, courses) and I want to create a shop and start selling.
                                </p>
                                <ul className="space-y-3 mb-10">
                                    <li className="flex items-center gap-2 text-sm text-slate-300">
                                        <FaChevronRight className="text-blue-500 text-[10px]" /> Keep up to 90% earnings
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-300">
                                        <FaChevronRight className="text-blue-500 text-[10px]" /> Instant M-Pesa Payouts
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-300">
                                        <FaChevronRight className="text-blue-500 text-[10px]" /> Automated File Delivery
                                    </li>
                                </ul>
                            </div>
                            <Link to="/SellersCreateAccount" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/20">
                                Create Seller Account <FaArrowRight />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Affiliate Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="group relative p-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-[2.5rem]"
                    >
                        <div className="h-full bg-slate-900/80 backdrop-blur-xl p-10 rounded-[2.4rem] border border-white/5 flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400 text-3xl mb-8 group-hover:scale-110 transition-transform">
                                    <FaMoneyBillTrendUp />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4">Be an Affiliate</h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    I don't have a product, but I want to earn commission by sharing links to existing products.
                                </p>
                                <ul className="space-y-3 mb-10">
                                    <li className="flex items-center gap-2 text-sm text-slate-300">
                                        <FaChevronRight className="text-indigo-500 text-[10px]" /> Earn up to 30% per sale
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-300">
                                        <FaChevronRight className="text-indigo-500 text-[10px]" /> 90-day tracking cookie
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-300">
                                        <FaChevronRight className="text-indigo-500 text-[10px]" /> Daily M-Pesa payouts
                                    </li>
                                </ul>
                            </div>
                            <Link to="/AffiliateCreateAccount" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-indigo-600/20">
                                Join as Affiliate <FaArrowRight />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AccountSelector;