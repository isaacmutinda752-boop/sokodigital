import Footer from "../Components/Footer.tsx";
import { useState, useEffect } from "react";
import Header from "../Components/Header.tsx";
import {
    FaMoneyBillTrendUp, FaHandHoldingDollar, FaClockRotateLeft, FaCookieBite,
    FaBriefcase, FaCode, FaPalette, FaBookOpen, FaMusic, FaVideo,
    FaWhatsapp, FaYoutube, FaFacebook, FaInstagram,
    FaEnvelopeOpenText, FaChevronRight
} from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const AffiliateProgram = () => {
    const affiliateStats = [
        { label: "Max Commission Rate", value: "30%", icon: FaMoneyBillTrendUp },
        { label: "Minimum Payout", value: "KSh 0", icon: FaHandHoldingDollar },
        { label: "Payout Speed", value: "24hrs", icon: FaClockRotateLeft },
        { label: "Cookie Duration", value: "90 days", icon: FaCookieBite },
    ];

    const commissionRates = [
        { category: "Business Templates", rate: "30%", desc: "Earn KSh 255 on every 850 business plan sold.", avg: "Avg KSh 850/product", icon: FaBriefcase },
        { category: "Software and code", rate: "25%", desc: "Tech tools and scripts pay top commissions.", avg: "Avg KSh 2,000/product", icon: FaCode },
        { category: "Graphics and design", rate: "20%", desc: "Graphics and design assets are always in demand.", avg: "Avg KSh 150/product", icon: FaPalette },
        { category: "Ebooks and Guides", rate: "25%", desc: "Knowledge products are evergreen and easy to recommend.", avg: "Avg KSh 200/product", icon: FaBookOpen },
        { category: "Audio and Music", rate: "30%", desc: "Content creators always need quality audio.", avg: "Avg KSh 100/product", icon: FaMusic },
        { category: "Video and Animation", rate: "30%", desc: "Video is high demand and high value.", avg: "Avg KSh 300/product", icon: FaVideo },
    ];

    const sharingChannels = [
        { title: "WHATSAPP GROUPS", desc: "Join relevant WhatsApp groups and share valuable content with links.", tag: "Most effective", icon: FaWhatsapp },
        { title: "TikTok & YouTube", desc: "Create short videos reviewing or demonstrating products.", tag: "Highest potential", icon: FaYoutube },
        { title: "Facebook Groups", desc: "Post links in niche-specific Facebook groups.", tag: "Great for community", icon: FaFacebook },
        { title: "Blog & Website", desc: "Write reviews or tutorials featuring affiliate links.", tag: "Build authority", icon: FaEnvelopeOpenText },
        { title: "Instagram & X", desc: "Share visually appealing content and use link-in-bio tools.", tag: "Best for visual", icon: FaInstagram },
        { title: "Email Marketing", desc: "Build an email list and share valuable content.", tag: "High conversion", icon: FaEnvelopeOpenText },
    ];

    // State for the earnings calculator
    const [numProducts, setNumProducts] = useState(1);
    const [salesPerProduct, setSalesPerProduct] = useState(1);
    const [avgProductPrice, setAvgProductPrice] = useState(850);
    const [commissionRate, setCommissionRate] = useState(30);
    const [estimatedMonthlyEarnings, setEstimatedMonthlyEarnings] = useState(0);

    // Options for the calculator dropdowns
    const productOptions = [1, 3, 5, 10, 15, 20];
    const salesOptions = [1, 3, 5, 10, 15, 20];
    const priceOptions = [850, 1000, 1500, 2000, 2500, 3000];
    const commissionOptions = [30, 25, 20, 15, 10, 5];

    useEffect(() => {
        const calculateEarnings = () => {
            const totalSalesValue = numProducts * salesPerProduct * avgProductPrice;
            const earnings = (totalSalesValue * commissionRate) / 100;
            setEstimatedMonthlyEarnings(earnings);
        };
        calculateEarnings();
    }, [numProducts, salesPerProduct, avgProductPrice, commissionRate]);

    const formatCurrency = (amount: number) => `KSh ${amount.toLocaleString()}`;

    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-300">
            <Header />

            {/* Hero Section */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative py-28 px-6 overflow-hidden min-h-[60vh] flex flex-col justify-center"
            >
                <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
                    <motion.p variants={fadeUpVariant} className="text-blue-400 font-bold uppercase tracking-widest text-sm">Affiliate Program</motion.p>
                    <motion.h1 variants={fadeUpVariant} className="text-4xl md:text-7xl font-black text-white leading-tight">
                        Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">30%</span> on Every <br className="hidden md:block" /> Sale You Refer
                    </motion.h1>
                    <motion.p variants={fadeUpVariant} className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        You don't need to create products. Just share your unique link and earn commission every time someone buys — Paid to your M-Pesa daily.
                    </motion.p>
                    <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95">
                            <Link to="/AffiliateCreateAccount" className="decoration-none">Join Free - Start Earning</Link>
                        </button>
                        <button className="glass-panel hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all border-white/10 active:scale-95">
                            <Link to="/AffiliateLoginAccount" className="decoration-none">
                                Login to Your Account
                            </Link>
                        </button>
                    </motion.div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />
            </motion.section>

            {/* Quick Stats */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="py-12 px-6 relative z-10"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {affiliateStats.map((stat, i) => (
                        <motion.div variants={fadeUpVariant} key={i} className="glass-panel border-white/5 p-6 rounded-3xl text-center group hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300">
                            <stat.icon className="text-blue-400 text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Commission Rates */}
            <section className="py-24 px-6 relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.p variants={fadeUpVariant} className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Commission Rate by Category</motion.p>
                        <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-white tracking-tight">How Much Will You Earn?</motion.h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commissionRates.map((item, i) => (
                            <motion.div variants={fadeUpVariant} key={i} className="group p-8 glass-panel border-white/5 rounded-3xl hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 relative overflow-hidden">
                                <item.icon className="text-blue-400 text-4xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                                <h6 className="text-slate-300 font-bold uppercase text-xs mb-2 tracking-wider">{item.category}</h6>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-5xl font-black text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all">{item.rate}</span>
                                    <span className="text-blue-400 font-bold text-sm uppercase">Commission</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">{item.desc}</p>
                                <span className="inline-block bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg text-[10px] font-bold text-blue-300 uppercase tracking-widest">{item.avg}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Channels Section */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="py-24 px-6 bg-slate-900/30"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.p variants={fadeUpVariant} className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Where to share</motion.p>
                        <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-white tracking-tight">Best Channels to Promote</motion.h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sharingChannels.map((channel, i) => (
                            <motion.div variants={fadeUpVariant} key={i} className="group flex gap-6 p-6 glass-panel border-white/5 rounded-3xl items-start hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="bg-blue-600/20 p-4 rounded-2xl text-blue-400 text-3xl group-hover:scale-110 transition-transform duration-300">
                                    <channel.icon />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h4 className="text-white font-bold text-lg leading-tight group-hover:text-blue-300 transition-colors">{channel.title}</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{channel.desc}</p>
                                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{channel.tag}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* How it works */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="py-24 px-6 relative"
            >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.p variants={fadeUpVariant} className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">3 Simple Steps</motion.p>
                        <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-white tracking-tight">How It Works</motion.h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 -z-10" />

                        {[
                            { t: "1. Create Account", d: "Sign up with your details and get instant access to the affiliate dashboard." },
                            { t: "2. Pick Products", d: "Select products you love from our marketplace and get your unique links." },
                            { t: "3. Share & Earn", d: "Promote products on your channels and earn commissions on every sale." }
                        ].map((step, i) => (
                            <motion.div variants={fadeUpVariant} key={i} className="relative text-center group">
                                <div className="w-14 h-14 bg-slate-900 border-2 border-blue-500 text-white rounded-full flex items-center justify-center font-black text-xl mx-auto mb-8 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                                    {i + 1}
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4">{step.t}</h4>
                                <p className="text-slate-400 text-base leading-relaxed max-w-sm mx-auto">{step.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* FAQ */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="py-24 px-6 bg-slate-900/40 relative"
            >
                <div className="max-w-3xl mx-auto z-10 relative">
                    <div className="text-center mb-16">
                        <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl font-black text-white tracking-tight">Common Questions</motion.h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "How much does it cost to join?", a: "It's completely free. No hidden fees or monthly charges." },
                            { q: "When do I get paid?", a: "Payouts are processed within 24 hours of reaching your threshold, sent via M-Pesa." },
                            { q: "Can I promote multiple products?", a: "Yes! You can promote as many products as you want across different categories." },
                            { q: "What is cookie duration?", a: "We offer a 90-day cookie. If a customer clicks your link and buys within 90 days, you get the credit." }
                        ].map((faq, i) => (
                            <motion.div variants={fadeUpVariant} key={i} className="p-6 glass-panel border-white/5 rounded-2xl hover:border-blue-500/30 transition-colors duration-300">
                                <h5 className="text-white font-bold mb-3 flex items-center gap-3 text-lg">
                                    <span className="bg-blue-600/20 p-2 rounded-full"><FaChevronRight className="text-blue-400 text-sm" /></span> {faq.q}
                                </h5>
                                <p className="text-slate-400 text-base leading-relaxed pl-12">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Earnings Calculator */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="py-24 px-6 relative"
            >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.p variants={fadeUpVariant} className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Earnings Calculator</motion.p>
                        <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-white tracking-tight">How Much Can You Earn?</motion.h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeUpVariant} className="space-y-8 p-10 glass-panel border-white/10 rounded-[3rem] shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                            <div className="space-y-3">
                                <label htmlFor="products" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Products You Promote</label>
                                <select
                                    id="products"
                                    className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none transition-all focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-lg"
                                    value={numProducts}
                                    onChange={(e) => setNumProducts(Number(e.target.value))}
                                >
                                    {productOptions.map((option) => (
                                        <option key={option} value={option}>{option} product{option > 1 ? 's' : ''}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="sales" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Sales Per Product Per Month</label>
                                <select
                                    id="sales"
                                    className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none transition-all focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-lg"
                                    value={salesPerProduct}
                                    onChange={(e) => setSalesPerProduct(Number(e.target.value))}
                                >
                                    {salesOptions.map((option) => (
                                        <option key={option} value={option}>{option} sale{option > 1 ? 's' : ''}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="price" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Average Product Price (Ksh)</label>
                                <select
                                    id="price"
                                    className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none transition-all focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-lg"
                                    value={avgProductPrice}
                                    onChange={(e) => setAvgProductPrice(Number(e.target.value))}
                                >
                                    {priceOptions.map((option) => (
                                        <option key={option} value={option}>KSh {option.toLocaleString()}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="commission" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Commission Rate</label>
                                <select
                                    id="commission"
                                    className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none transition-all focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-lg"
                                    value={commissionRate}
                                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                                >
                                    {commissionOptions.map((option) => (
                                        <option key={option} value={option}>{option}%</option>
                                    ))}
                                </select>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeUpVariant} className="p-10 md:p-14 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/20 rounded-[3rem] text-center flex flex-col justify-center items-center h-full relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px] -z-10" />
                            <p className="text-blue-300 font-bold uppercase tracking-widest mb-6">Your Estimated Monthly Earnings</p>
                            <h3 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tighter">
                                {formatCurrency(estimatedMonthlyEarnings)}
                            </h3>
                            <p className="text-blue-100/70 text-base max-w-sm leading-relaxed">
                                Based on {numProducts} product{numProducts > 1 ? 's' : ''}, {salesPerProduct} sale{salesPerProduct > 1 ? 's' : ''} per product, an average price of {formatCurrency(avgProductPrice)}, and a {commissionRate}% commission rate.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Bottom CTA */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="py-20 px-6"
            >
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 p-10 md:p-16 rounded-[3rem] text-center space-y-6 relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.25)] border border-white/10">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Zero Investment. Real M-Pesa Money.</h2>
                        <p className="text-blue-100/90 text-xl mb-10">2,400+ Kenyans are already earning commission on SOKODIGITAL.</p>
                        <button className="bg-white text-blue-700 font-black px-10 py-5 rounded-2xl text-xl hover:bg-slate-100 transition-all active:scale-95 shadow-2xl hover:shadow-white/20">
                            <Link to="/AffiliateCreateAccount" className="decoration-none">Join Now - Start Earning Today</Link>
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/20 blur-[100px] rounded-full" />
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};
export default AffiliateProgram;