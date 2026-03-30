
import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import { FaMoneyBillTrendUp, FaHandHoldingDollar, FaClockRotateLeft, FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Goal = () => {
    return (
        <>
            <div className="bg-slate-950 min-h-screen font-sans text-slate-300">
                <Header />

                {/* Hero Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative py-28 px-6 overflow-hidden text-center min-h-[60vh] flex flex-col justify-center"
                >
                    <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                        <motion.p variants={fadeUpVariant} className="text-blue-400 font-bold uppercase tracking-widest text-sm">OUR GOALS & MISSION - SOKODIGITAL 2026</motion.p>
                        <motion.h1 variants={fadeUpVariant} className="text-4xl md:text-7xl font-black text-white leading-tight">
                            Build Digital Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Together.</span>
                        </motion.h1>
                        <motion.p variants={fadeUpVariant} className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
                            SOKODIGITAL was built with one purpose—to give every Kenyan creator, seller, student, and entrepreneur a platform to earn real money digitally, paid directly to accounts across the country.
                        </motion.p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-blue-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />
                </motion.section>

                {/* Quick Stats */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="py-12 px-6 relative z-10"
                >
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: FaHandHoldingDollar, value: "KSh 0", label: "Cost to join & start selling" },
                            { icon: FaClockRotateLeft, value: "24/7", label: "Support" },
                            { icon: FaMoneyBillTrendUp, value: "30%", label: "Max affiliate commission paid to M-Pesa" }
                        ].map((stat, i) => (
                            <motion.div variants={fadeUpVariant} key={i} className="glass-panel border-white/10 p-8 rounded-3xl text-center group hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
                                <stat.icon className="text-blue-400 text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Feature List */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="py-12 px-6"
                >
                    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                        {[
                            "Made in Kenya",
                            "30% Affiliate Commission",
                            "8,400+ products",
                            "Instant Delivery",
                            "M-Pesa Powered",
                            "2,300+ sellers",
                            "Across the country",
                            "Secure & Trusted"
                        ].map((feature, i) => (
                            <motion.div variants={fadeUpVariant} key={i} className="glass-panel border-white/5 p-4 rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors duration-200">
                                <FaCircleCheck className="text-blue-400 mr-3 text-xl flex-shrink-0" />
                                <p className="text-sm font-semibold text-slate-200">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Six Goals Section */}
                <section className="py-24 px-6 relative">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="max-w-7xl mx-auto text-center mb-16"
                    >
                        <motion.p variants={fadeUpVariant} className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">WHAT WE ARE BUILDING</motion.p>
                        <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Six <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Goals</span></motion.h2>
                        <motion.h3 variants={fadeUpVariant} className="text-xl md:text-2xl font-semibold text-slate-300 mb-6">One Kenya, One Digital Economy</motion.h3>
                        <motion.p variants={fadeUpVariant} className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                            Every decision we make at SOKODIGITAL is driven by these six core goals. They guide how we build the product, who we serve, and how we measure success—lives improved through digital economic opportunity.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                goal: "GOAL 01",
                                title: "Empower Kenyan Sellers Earn Digitally",
                                desc: "Give every Kenyan creator, business, and entrepreneur a platform to sell products online and earn money.",
                                tag: "ZERO BARRIER TO ENTRY"
                            },
                            {
                                goal: "GOAL 02",
                                title: "Make M-Pesa the default Digital Payment",
                                desc: "77% of Kenyans use M-Pesa, making it the most popular payment method in the country.",
                                tag: "MPESA POWERED"
                            },
                            {
                                goal: "GOAL 03",
                                title: "Build Kenya's Largest Affiliate Earning Network",
                                desc: "Create an ecosystem where everyone—even without a product—can earn real income by sharing affiliate links on WhatsApp, TikTok, and Facebook.",
                                tag: "10,000 AFFILIATES BY 2027"
                            },
                            {
                                goal: "GOAL 04",
                                title: "Bridge the Gap Between buyers & sellers",
                                desc: "A farmer in Nakuru with farming knowledge cannot easily sell it to a student in Nairobi who needs it. SOKODIGITAL closes this gap—creating a trusted, verified marketplace where Kenyans transact with Kenyans confidently and safely.",
                                tag: "CONNECTING KENYANS ECONOMY"
                            },
                            {
                                goal: "GOAL 05",
                                title: "Build Kenya's Largest Digital Skills & Education Hub",
                                desc: "Build a super digital skills and education hub for everyone.",
                                tag: "DIGITAL ECONOMY GROWTH"
                            },
                            {
                                goal: "GOAL 06",
                                title: "Reach Every part in the country",
                                desc: "SOKODIGITAL must work equally in all parts of the country.",
                                tag: "EVERY PART ACTIVE"
                            }
                        ].map((item, i) => (
                            <motion.div variants={fadeUpVariant} key={i} className="group glass-panel border-white/5 p-8 rounded-3xl text-left hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black text-white -mt-4 -mr-4 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                                    0{i + 1}
                                </div>
                                <span className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4 block">{item.goal}</span>
                                <h5 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors duration-300">{item.title}</h5>
                                <p className="text-slate-400 text-base leading-relaxed mb-8">{item.desc}</p>
                                <span className="inline-block bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg text-xs font-bold text-blue-300 uppercase tracking-widest">{item.tag}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Quote Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpVariant}
                    className="py-32 px-6 relative"
                >
                    <div className="absolute inset-0 bg-blue-600/5 skew-y-3 -z-10" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <FaCircleCheck className="text-blue-500/30 text-6xl mx-auto mb-8" />
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-snug tracking-tight">
                            "Every Kenyan deserves to earn from their knowledge. We exist to make that possible, simple, and paid via <span className="text-blue-400">M-Pesa</span>."
                        </h3>
                        <p className="text-slate-400 text-xl leading-relaxed mb-12">
                            SOKODIGITAL is not just a marketplace. It is a movement to digitize Kenya's creator economy—giving power back to individuals, students, developers, teachers, and farmers who have valuable knowledge but no platform to sell it.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Made in Kenya",
                                "Zero Friction",
                                "M-Pesa Powered",
                                "Creator First",
                                "Trusted & Secured",
                                "24/7 Support"
                            ].map((item, i) => (
                                <span key={i} className="glass-panel border-white/5 text-blue-300 px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Impact Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="py-24 px-6 relative"
                >
                    <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
                        <motion.h3 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Our Impact on Kenya's <span className="text-blue-400">Economy</span></motion.h3>
                        <motion.p variants={fadeUpVariant} className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed">
                            Beyond revenue and users, we measure success in the real change SOKODIGITAL creates in Kenyan lives—income generated and communities empowered through the digital economy.
                        </motion.p>
                    </div>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {[
                            { value: "Ksh 42M+", label: "Paid to Kenyan sellers via M-Pesa" },
                            { value: "3,800+", label: "Students who downloaded free educational content" },
                            { value: "2,300+", label: "Sellers who have earned from their knowledge" },
                            { value: "420+", label: "Farming guides helping rural Kenyan farmers earn more" },
                            { value: "24hrs", label: "Maximum wait for M-Pesa payouts after sale—usually instant" },
                            { value: "Ksh 0", label: "Cost to join & start selling on SOKODIGITAL" }
                        ].map((item, i) => (
                            <motion.div variants={fadeUpVariant} key={i} className="glass-panel border-white/5 p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-4xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{item.value}</h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Call to Action Section */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="py-20 px-6"
                >
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 p-10 md:p-16 rounded-[2.5rem] text-center space-y-6 relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.25)] border border-white/10">
                        <div className="relative z-10">
                            <p className="text-blue-200 font-bold uppercase tracking-widest mb-2 text-sm">JOIN THE MOVEMENT</p>
                            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
                                Be part of Kenya's Digital Revolution
                            </h3>
                            <p className="text-blue-100/90 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                                Whether you are a seller with knowledge to share, a buyer looking for Kenyan-made digital products, or someone who wants to earn affiliate commission from their phone—SOKODIGITAL is built for you.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="bg-white text-blue-700 font-black px-10 py-4 rounded-xl text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-xl hover:shadow-2xl">
                                    <Link to="/SellersCreateAccount"> Start Selling</Link>
                                </button>
                                <button className="glass-panel border-white/20 text-white font-black px-10 py-4 rounded-xl text-lg hover:bg-white/10 transition-all active:scale-95 shadow-xl">
                                    <Link to="/affiliate-program">Join Affiliate Program</Link>
                                </button>
                            </div>
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-10 text-blue-200 text-sm font-semibold tracking-wide">
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Free to join</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>M-Pesa payments</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Kenya Built</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Instant Payouts</span>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 blur-[100px] rounded-full" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/20 blur-[100px] rounded-full" />
                    </div>
                </motion.section>

                {/* What SOKODIGITAL gives you */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="py-24 px-6 relative"
                >
                    <div className="max-w-4xl mx-auto relative z-10 glass-panel border-white/5 p-10 md:p-14 rounded-[3rem]">
                        <motion.h6 variants={fadeUpVariant} className="text-3xl font-black text-white mb-10 text-center tracking-tight">
                            What SOKODIGITAL gives you
                        </motion.h6>
                        <ul className="space-y-6 text-slate-400 text-lg">
                            {[
                                "Upload and sell unlimited digital products—ebooks, templates, software, courses—from your phone.",
                                "Receive 85% of every sale directly to your account within 24hrs.",
                                "Generate unique affiliate links for any product and earn 15-30% commission per sale.",
                                "Your products are visible to buyers from every corner in the country instantly.",
                                "Full seller and affiliate dashboards—track clicks, sales, commissions in real time.",
                                "Files delivered automatically and instantly after buyers pay—zero manual work.",
                                "90-day affiliate cookie—earn commission even if a buyer buys 3 months later.",
                                "SMS notification every time you make a sale or receive a payout."
                            ].map((text, i) => (
                                <motion.li variants={fadeUpVariant} key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                                    <div className="bg-blue-600/20 p-2 rounded-xl flex-shrink-0 mt-0.5">
                                        <FaCircleCheck className="text-blue-400 text-xl" />
                                    </div>
                                    <span className="leading-relaxed font-medium">{text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.section>
            </div>


            <Footer />
        </>
    )
}

export default Goal;