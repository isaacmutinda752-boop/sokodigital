import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import {
    FaUsers, FaComments, FaCircleQuestion, FaClock,
    FaHashtag, FaArrowRight, FaAward,
    FaChevronRight, FaPlus
} from "react-icons/fa6";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const Community = () => {
    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-300">
            <Header />

            {/* Hero Section */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative py-28 px-6 text-center overflow-hidden"
            >
                <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                    <motion.p variants={fadeUpVariant} className="text-blue-400 font-bold uppercase tracking-widest text-sm">SokoDigital Community</motion.p>
                    <motion.h1 variants={fadeUpVariant} className="text-4xl md:text-7xl font-black text-white leading-tight">
                        Where Kenya's Digital Builders <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect & Grow.</span>
                    </motion.h1>
                    <motion.p variants={fadeUpVariant} className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
                        Join thousands of creators, developers and entrepreneurs shaping the future of Kenya's digital economy—from Nairobi to Mombasa and beyond.
                    </motion.p>
                    <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                        <Link to="/JoinTheCommunityAccount" className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-4 rounded-xl text-lg transition-all active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center">
                            Join The Community
                        </Link>
                        <Link to="/community/explore" className="glass-panel border border-white/10 text-white font-black px-10 py-4 rounded-xl text-lg hover:bg-white/5 transition-all flex items-center justify-center">
                            Explore Channels
                        </Link>
                    </motion.div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-blue-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />
            </motion.section>

            {/* Quick Stats */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-12 px-6"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { icon: FaUsers, label: "Members", value: "12K+" },
                        { icon: FaComments, label: "Active Discussion", value: "340+" },
                        { icon: FaCircleQuestion, label: "Question Answered", value: "89%" },
                        { icon: FaClock, label: "Online Support", value: "24/7" }
                    ].map((stat, i) => (
                        <motion.div key={i} variants={fadeUpVariant} className="glass-panel border-white/5 p-6 rounded-3xl text-center group">
                            <stat.icon className="text-blue-400 text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <h3 className="text-3xl font-black text-white">{stat.value}</h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Channels Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">CHANNELS</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Find Your Space</h2>
                        <p className="text-slate-400 mt-4">Focused rooms for every part of Kenya's digital ecosystem.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { id: "marketplace-help", desc: "Buy, sell and trade digital assets, services and opportunities.", members: "2.4K", online: 18 },
                            { id: "dev-corner", desc: "Frontend, backend, APIs, M-Pesa integration and all things code.", members: "3.4K", online: 34 },
                            { id: "design-studio", desc: "UI/UX, Figma, Adobe, branding and creative feedback.", members: "1.4K", online: 14 },
                            { id: "growth-hustle", desc: "Marketing, SEO, content, social media and scaling digital businesses.", members: "1.8K", online: 30 },
                            { id: "sellers-lounge", desc: "Product listings, pricing strategies and scaling your online store.", members: "1.2K", online: 24 },
                            { id: "mpesa-integration", desc: "M-Pesa integration, payment gateways and all things payments.", members: "2.0K", online: 14 }
                        ].map((channel, i) => (
                            <Link to={`/community/channel/${channel.id}`} key={i}>
                                <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group glass-panel border border-white/5 p-8 rounded-3xl hover:border-blue-500/40 transition-all cursor-pointer h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-blue-600/20 p-2.5 rounded-xl text-blue-400"><FaHashtag /></div>
                                        <h6 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">#{channel.id}</h6>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{channel.desc}</p>
                                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                                        <span>{channel.members} members</span>
                                        <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>{channel.online} online</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Discussions & Sidebar */}
            <section className="py-24 px-6 bg-slate-900/30">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Feed */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Recent Discussions</h2>
                            <button className="text-blue-400 text-sm font-bold flex items-center gap-2 hover:underline">New Post <FaPlus /></button>
                        </div>
                        {[
                            { tag: "DEV CORNER", title: "Best way to handle M-Pesa callback URLs in Node.js locally?", author: "Wanjiku Dev", replies: 27 },
                            { tag: "DESIGN STUDIO", title: "Roast my brand identity - building a digital products shop.", author: "Kibera Creative", replies: 23 },
                            { tag: "MARKETPLACE HELP", title: "How to increase affiliate conversion on WhatsApp groups?", author: "NairobiFounder", replies: 15 }
                        ].map((post, i) => (
                            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="glass-panel border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
                                <span className="text-blue-400 text-[10px] font-black tracking-widest mb-3 block">{post.tag}</span>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{post.title}</h4>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
                                    <span className="text-slate-300">By {post.author}</span>
                                    <span>123 views</span>
                                    <span>{post.replies} replies</span>
                                    <span>3 hours ago</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Trending */}
                        <div className="glass-panel border-white/5 p-8 rounded-[2rem]">
                            <h5 className="text-white font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2"><FaAward className="text-blue-400" /> Trending Topics</h5>
                            <ul className="space-y-6">
                                {[
                                    { t: "React vs Next.js for Kenya SaaS", c: 142 },
                                    { t: "M-Pesa API & workarounds", c: 123 },
                                    { t: "Best payment gateway for Kenyan startups", c: 98 }
                                ].map((topic, i) => (
                                    <li key={i} className="group cursor-pointer">
                                        <p className="text-sm font-bold text-slate-300 group-hover:text-blue-400 transition-colors">{topic.t}</p>
                                        <span className="text-[10px] text-slate-500 font-black">{topic.c} COMMENTS</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Online Now */}
                        <div className="glass-panel border-white/5 p-8 rounded-[2rem]">
                            <h5 className="text-white font-black text-sm uppercase tracking-widest mb-6">Online Now</h5>
                            <div className="flex flex-wrap gap-2">
                                {["Wanjiku .dev", "Kibera Creative", "DigitMaurice", "Msailabs", "NairobiFounder"].map((user, i) => (
                                    <span key={i} className="bg-white/5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 border border-white/5">{user}</span>
                                ))}
                                <span className="text-blue-400 text-xs font-bold pt-1.5">+67 others</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Members Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">MEMBERS</p>
                            <h2 className="text-4xl font-black text-white tracking-tight">Meet the Community</h2>
                            <p className="text-slate-400 mt-4">Connect with developers, designers, founders, and digital creators across Kenya.</p>
                        </div>
                        <button className="text-blue-400 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">View Directory <FaArrowRight /></button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Wanjiku .dev", role: "Frontend Developer", tags: ["React", "TypeScript"], initial: "WD" },
                            { name: "Kibera Creative", role: "UI/UX Designer", tags: ["Figma", "Adobe"], initial: "KC" },
                            { name: "NairobiFounder", role: "SaaS Founder", tags: ["Strategy", "Growth"], initial: "NF" },
                            { name: "Msailabs", role: "M-Pesa Specialist", tags: ["APIs", "Node.js"], initial: "ML" }
                        ].map((member, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} className="glass-panel border-white/5 p-6 rounded-3xl text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4 shadow-lg">
                                    {member.initial}
                                </div>
                                <h6 className="text-white font-bold text-lg leading-tight">{member.name}</h6>
                                <p className="text-slate-500 text-xs mb-4">{member.role}</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {member.tags.map((tag, j) => (
                                        <span key={j} className="text-[10px] font-bold text-blue-300 bg-blue-500/10 px-2 py-1 rounded-md uppercase">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-24 px-6 bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">EVENTS</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Upcoming Events</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            { date: "APR 12", cat: "LIVE AMA", title: "Selling Digital Products Q&A", reg: 234 },
                            { date: "APR 19", cat: "WORKSHOP", title: "M-Pesa + React Bootcamp", reg: 189 },
                            { date: "APR 26", cat: "MEETUP", title: "SokoDigital Nairobi IRL", reg: 234 }
                        ].map((event, i) => (
                            <div key={i} className="glass-panel border-white/5 p-8 rounded-3xl flex gap-6 items-start group hover:border-blue-500/30 transition-all">
                                <div className="text-center">
                                    <span className="block text-blue-400 font-black text-xl leading-none">{event.date.split(' ')[1]}</span>
                                    <span className="text-[10px] text-slate-500 font-bold uppercase">{event.date.split(' ')[0]}</span>
                                </div>
                                <div>
                                    <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">{event.cat}</span>
                                    <h4 className="text-white font-bold text-lg mb-4 mt-1 group-hover:text-blue-300 transition-colors leading-tight">{event.title}</h4>
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase">{event.reg} REGISTERED</span>
                                        <button className="bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all">RSVP FREE</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 tracking-tight">Questions?</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Is this community free to join?", a: "Yes—100% free. No hidden charges. No premium tiers." },
                            { q: "Who should join this community?", a: "Developers, designers, founders, and anyone building digital products in Kenya." },
                            { q: "Do I need to be a developer to join?", a: "No—we welcome all skill levels from beginners to experts." }
                        ].map((faq, i) => (
                            <div key={i} className="p-6 glass-panel border-white/5 rounded-2xl">
                                <h5 className="text-white font-bold mb-3 flex items-center gap-3">
                                    <FaChevronRight className="text-blue-400 text-xs" /> {faq.q}
                                </h5>
                                <p className="text-slate-400 text-sm leading-relaxed pl-6">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight">Ready to Join?</h2>
                        <p className="text-blue-100/80 text-lg max-w-2xl mx-auto font-medium">Connect with the most active community of digital builders in Kenya. It's free—always.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <Link to="/JoinTheCommunityAccount" className="bg-white text-blue-700 font-black px-10 py-4 rounded-xl text-lg hover:bg-slate-100 transition-all active:scale-95 flex items-center justify-center">
                                Join Now
                            </Link>
                            <Link to="/community/learn-more" className="glass-panel border border-white/20 text-white font-black px-10 py-4 rounded-xl text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/20 blur-[100px] rounded-full" />
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default Community;