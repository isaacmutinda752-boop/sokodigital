import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const About = () => {
  // About Section Stats
  const stats = [
    { value: "22,000+", label: "Products Listed" },
    { value: "2,300+", label: "Active Sellers" },
    { value: "1,200+", label: "Active Affiliates" },
    { value: "Ksh.42M+", label: "Paid To Creators" },
    { value: "Ksh. 8M+", label: "Affiliate Earnings" },
  ];
  return (
    <motion.section 
      id="about" 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-slate-950 py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Impact</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Empowering the next generation of Kenyan digital entrepreneurs with
            secure payments and a global reach.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              variants={fadeUpVariant}
              key={index}
              className="group p-8 glass-panel border border-white/5 rounded-3xl text-center transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-2"
            >
              <h3 className="text-3xl font-black text-white mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all">{stat.value}</h3>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] -z-0 pointer-events-none" />
    </motion.section>
  )
}

export default About