import { motion } from 'framer-motion';
import { FaShield, FaBolt, FaMobileScreen, FaCircleCheck, FaArrowLeft } from 'react-icons/fa6';
import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const MpesaLearnMore = () => {
    const features = [
        {
            title: "Bank-Grade Security",
            desc: "Your transactions are processed through Safaricom's encrypted Daraja API. We never store your M-Pesa PIN or sensitive data.",
            icon: <FaShield className="text-blue-400" />
        },
        {
            title: "Instant Fulfillment",
            desc: "The moment you enter your PIN and the transaction is confirmed, your digital download link is sent via SMS and Email automatically.",
            icon: <FaBolt className="text-yellow-400" />
        },
        {
            title: "Zero Setup Required",
            desc: "No need for credit cards or complex bank transfers. If you have an active Safaricom line with M-Pesa balance, you're ready to go.",
            icon: <FaMobileScreen className="text-green-400" />
        }
    ];

    const faqs = [
        { q: "What is an STK Push?", a: "An STK Push is a secure pop-up that appears on your phone screen asking for your M-Pesa PIN. It eliminates the need to manually enter Paybill numbers." },
        { q: "Is there a transaction fee?", a: "Standard M-Pesa transaction charges apply based on Safaricom's current tariffs for Paybill payments." },
        { q: "What if I don't receive the link?", a: "Our system monitors transactions 24/7. In the rare event of a delay, our support team can verify your transaction code and push the file manually." }
    ];

    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                    <Link to="/" className="text-slate-500 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors group w-fit">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                </motion.div>

                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-20 space-y-6"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        Payments Reimagined with <span className="text-green-500 italic">M-PESA</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        At Soko Digital, we've integrated Kenya's most trusted payment system to ensure your
                        buying and selling experience is seamless, secure, and instant.
                    </p>
                </motion.div>

                {/* Core Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* The Process Flow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-blue-600/5 border border-blue-500/20 rounded-[3rem] p-8 md:p-16 mb-24"
                >
                    <h3 className="text-2xl font-black text-white mb-10 text-center uppercase tracking-widest">The Secure Flow</h3>
                    <div className="space-y-8">
                        {[
                            "You click 'Buy with M-Pesa' on any product.",
                            "A secure STK Push request is sent to your Safaricom number.",
                            "You enter your M-Pesa PIN on your phone.",
                            "Safaricom notifies our server via the Daraja API.",
                            "Our system verifies the payment and unlocks the product instantly."
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0 mt-1 shadow-lg shadow-blue-600/20">
                                    {i + 1}
                                </div>
                                <p className="text-slate-300 text-lg font-medium">{step}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Quick M-Pesa FAQ */}
                <div className="max-w-3xl mx-auto space-y-12">
                    <h3 className="text-3xl font-black text-white text-center flex items-center justify-center gap-3">
                        < FaQuestionCircle className="text-blue-400" /> Payment FAQ
                    </h3>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                                <h5 className="text-white font-bold mb-2 flex items-center gap-3">
                                    <FaCircleCheck className="text-green-500 text-xs" /> {faq.q}
                                </h5>
                                <p className="text-slate-500 text-sm leading-relaxed pl-6">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-24">
                    <Link
                        to="/all-products"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-2xl shadow-xl shadow-blue-600/20 transition-all active:scale-95"
                    >
                        Start Shopping with M-Pesa
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MpesaLearnMore;