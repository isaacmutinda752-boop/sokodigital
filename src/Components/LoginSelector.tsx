import { motion } from 'framer-motion';
import { FaStore, FaMoneyBillTrendUp, FaUsers, FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const LoginSelector = () => {
    const options = [
        {
            title: "Seller Login",
            desc: "Manage your products, track sales, and request payouts.",
            icon: FaStore,
            color: "blue",
            path: "/SellersLoginAccount",
            glow: "bg-blue-600/10"
        },
        {
            title: "Affiliate Login",
            desc: "Track your commissions and generate referral links.",
            icon: FaMoneyBillTrendUp,
            color: "indigo",
            path: "/AffiliateLoginAccount",
            glow: "bg-indigo-600/10"
        },
        {
            title: "Community Login",
            desc: "Join discussions and connect with other builders.",
            icon: FaUsers,
            color: "purple",
            path: "/CommunityLogin",
            glow: "bg-purple-600/10"
        }
    ];

    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-0" />

            <div className="max-w-6xl w-full relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white"
                    >
                        Welcome <span className="text-blue-400">Back</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Please select your account type to continue to your dashboard.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {options.map((opt, i) => (
                        <motion.div
                            key={opt.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative p-px bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem]`}
                        >
                            <div className="h-full bg-slate-900/80 backdrop-blur-xl p-8 rounded-[2.4rem] border border-white/5 flex flex-col justify-between items-center text-center">
                                <div className={`w-20 h-20 ${opt.glow} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <opt.icon className={`text-4xl ${opt.color === 'blue' ? 'text-blue-400' :
                                            opt.color === 'indigo' ? 'text-indigo-400' : 'text-purple-400'
                                        }`} />
                                </div>

                                <div className="space-y-4 mb-10">
                                    <h3 className="text-2xl font-black text-white">{opt.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {opt.desc}
                                    </p>
                                </div>

                                <Link
                                    to={opt.path}
                                    className={`w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-3 transition-all ${opt.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20' :
                                            opt.color === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20' :
                                                'bg-purple-600 hover:bg-purple-700 shadow-purple-600/20'
                                        } shadow-lg`}
                                >
                                    Login <FaArrowRight />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoginSelector;