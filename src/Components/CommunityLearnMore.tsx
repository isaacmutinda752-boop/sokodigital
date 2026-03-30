import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaRocket, FaHandshake, FaArrowLeft, FaShieldHeart, FaCubesStacked } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CommunityLearnMore = () => {
    const pillars = [
        {
            title: "Collaborative Growth",
            desc: "We believe in the power of shared knowledge. From code reviews to marketing strategies, our members help each other scale their digital businesses.",
            icon: <FaUsers className="text-blue-400" />
        },
        {
            title: "Innovation Hub",
            desc: "A space where new ideas are born. Showcase your latest projects, get honest feedback, and find potential co-founders or partners.",
            icon: <FaLightbulb className="text-purple-400" />
        },
        {
            title: "Kenya First",
            desc: "Tailored specifically for the Kenyan context. We focus on local payment integrations, regional market trends, and homegrown success stories.",
            icon: <FaRocket className="text-indigo-400" />
        }
    ];

    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                    <Link to="/community" className="text-slate-500 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors group w-fit">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Community
                    </Link>
                </motion.div>

                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-20 space-y-6"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
                        The Heart of Kenya's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Economy.</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Soko Digital is more than just a marketplace—it's a movement. We are building an ecosystem where every
                        creator, developer, and entrepreneur can find their voice and their market.
                    </p>
                </motion.div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:border-purple-500/30 transition-all group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-4">{pillar.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-purple-600/10 to-blue-600/5 border border-purple-500/20 rounded-[3rem] p-8 md:p-16 mb-24"
                >
                    <h3 className="text-3xl font-black text-white mb-12 text-center uppercase tracking-widest">Our Community Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex gap-6 items-start">
                            <div className="bg-purple-600/20 p-4 rounded-2xl">
                                <FaHandshake className="text-purple-400 text-2xl" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-xl mb-2">Inclusivity</h5>
                                <p className="text-slate-400 text-sm leading-relaxed">Whether you're a seasoned architect or just wrote your first line of code, there's a place for you here.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="bg-blue-600/20 p-4 rounded-2xl">
                                <FaShieldHeart className="text-blue-400 text-2xl" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-xl mb-2">Integrity</h5>
                                <p className="text-slate-400 text-sm leading-relaxed">We foster a culture of trust and respect. Plagiarism and malicious behavior have no home in our circle.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="bg-indigo-600/20 p-4 rounded-2xl">
                                <FaCubesStacked className="text-indigo-400 text-2xl" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-xl mb-2">Value Creation</h5>
                                <p className="text-slate-400 text-sm leading-relaxed">Our focus is on building products that solve real Kenyan problems and create sustainable income.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                                <FaRocket className="text-slate-300 text-2xl" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-xl mb-2">Future-Ready</h5>
                                <p className="text-slate-400 text-sm leading-relaxed">We embrace emerging technologies and stay ahead of the curve to lead the digital revolution.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <div className="text-center mt-24">
                    <Link
                        to="/JoinTheCommunityAccount"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-black px-12 py-5 rounded-2xl shadow-xl shadow-purple-600/20 transition-all active:scale-95 text-lg"
                    >
                        Join the Movement Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CommunityLearnMore;