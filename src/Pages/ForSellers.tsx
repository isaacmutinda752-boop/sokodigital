
import { FaCircleCheck, FaStar } from "react-icons/fa6";
import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import { FaUserPlus, FaCloudArrowUp, FaDollarSign, FaMoneyBillTransfer } from "react-icons/fa6";
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

const ForSellers = () => {
    // For Sellers Pricing Plans Data
    const pricingPlans = [
        {
            name: "Starter",
            price: "Free",
            tagline: "Forever Free",
            features: ["Up to 3 products", "15% platform commission", "M-Pesa payouts", "Basic analytics", "Email Support"],
            buttonText: "Get Started",
            planKey: "Starter"
        },
        {
            name: "Pro Seller",
            price: "999",
            tagline: "Per Month",
            features: ["Unlimited Products", "10% platform commission", "Priority in search results", "Affiliate program access", "Advanced analytics", "Customer seller storefront", "Priority support"],
            buttonText: "Go Pro - Ksh 999/mo",
            popular: true,
            planKey: "Pro"
        },
        {
            name: "Enterprise",
            price: "2,999",
            tagline: "Per Month",
            features: ["Everything Pro", "5% platform commission", "Featured homepage listing", "Dedicated account manager", "Custom integration", "Multiple product pricing"],
            buttonText: "Get Business Plan",
            planKey: "Enterprise"
        }
    ];
    const sellerSteps = [
        {
            title: "Register Free",
            desc: "Create your seller account in seconds. No hidden fees, no upfront costs. Just pure opportunity.",
            icon: FaUserPlus
        },
        {
            title: "Upload Your Products",
            desc: "Easily list your digital products—ebooks, templates, software, courses—with our intuitive uploader.",
            icon: FaCloudArrowUp
        },
        {
            title: "Set Your Price",
            desc: "You control your earnings. Set competitive prices and watch your sales grow.",
            icon: FaDollarSign
        },
        {
            title: "Get Paid",
            desc: "Receive your earnings directly to your M-Pesa account within 24 hours of a successful sale.",
            icon: FaMoneyBillTransfer
        }
    ];
    return (
        <>
            <Header />
            <section className="bg-slate-950 py-24 px-6 md:px-12 min-h-screen flex flex-col justify-center">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Header Section */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center mb-16 space-y-4"
                    >
                        <motion.p variants={fadeUpVariant} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">For Sellers</motion.p>
                        <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            Turn Your Knowledge into <span className="text-gradient">Cash</span>
                        </motion.h2>
                        <motion.p variants={fadeUpVariant} className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Sell ebooks, templates, courses, software, and more across Kenya. Get paid within 24 hours!
                        </motion.p>
                        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <Link to="/SellersCreateAccount" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center">
                                Create Seller Account
                            </Link>
                            <Link to="/SellersLoginAccount" className="bg-white/10 border border-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 active:scale-95 flex items-center justify-center">
                                Login To Your Account
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* How It Works Section */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mb-24"
                    >
                        <motion.h3 variants={fadeUpVariant} className="text-3xl md:text-4xl font-black text-white text-center mb-12">
                            How It <span className="text-blue-400">Works</span>
                        </motion.h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {sellerSteps.map((step, index) => (
                                <motion.div variants={fadeUpVariant} key={index} className="group p-6 glass-panel rounded-2xl text-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                    <step.icon className="text-blue-400 text-5xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                                    <h4 className="text-white font-bold text-xl mb-2">{step.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Pricing Section */}
                    <motion.div
                        id="pricing"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center mb-24"
                    >
                        <motion.p variants={fadeUpVariant} className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Choose Your Plan</motion.p>
                        <motion.h3 variants={fadeUpVariant} className="text-3xl md:text-4xl font-black text-white mb-12">
                            Simple, Transparent <span className="text-blue-400">Pricing</span>
                        </motion.h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {pricingPlans.map((plan, index) => (
                                <motion.div variants={fadeUpVariant} key={index} className={`relative p-8 glass-panel rounded-3xl text-center flex flex-col justify-between transition-all duration-300 ${plan.popular ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'}`}>
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2">
                                            <FaStar className="text-yellow-300" /> Most Popular
                                        </div>
                                    )}
                                    <div className="mb-8">
                                        <p className="text-white font-bold text-2xl mb-2">{plan.name}</p>
                                        <h2 className="text-5xl font-black text-white mb-2">
                                            {plan.price === "Free" ? "Free" : <><span className="text-blue-400 text-3xl mr-1">Ksh</span>{plan.price}</>}
                                        </h2>
                                        <p className="text-slate-400 text-sm">{plan.tagline}</p>
                                    </div>
                                    <ul className="text-slate-300 text-sm space-y-3 text-left mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FaCircleCheck className="text-green-500 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to={`/seller-registration?plan=${plan.planKey}`}
                                        className={`w-full py-3 rounded-lg font-bold transition-all duration-200 active:scale-95 flex items-center justify-center ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
                                    >
                                        {plan.buttonText}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Call to Action Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-panel rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Real Numbers</p>
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
                                Our Top Sellers Earn over <span className="text-blue-400">Ksh 200,000</span> per Month
                            </h3>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                                Join 2,300+ sellers from everywhere over the country who are earning real income from their knowledge and skills—paid directly to their accounts.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 text-lg">
                                <Link to="/HowToUploadProductsForm"> Start Selling Today</Link>
                            </button>
                        </div>
                        {/* Subtle background glow decorative element */}
                        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
                        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForSellers