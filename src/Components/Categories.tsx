import { FaBook, FaLaptopCode, FaFileLines, FaGraduationCap, FaBox } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Categories = () => {
    // Categories Data
    const categoriesData = [
        {
            name: "All Products",
            icon: FaBox,
            description: "Explore our entire collection of digital goods.",
            link: "/all-products",
        },
        {
            name: "Ebooks",
            icon: FaBook,
            description: "Dive into knowledge with our curated ebooks.",
            link: "/category/Ebooks",
        },
        {
            name: "Software",
            icon: FaLaptopCode,
            description: "Tools and applications to boost your productivity.",
            link: "/category/Software",
        },
        {
            name: "Templates",
            icon: FaFileLines,
            description: "Ready-to-use designs for your projects.",
            link: "/category/Templates",
        },
        {
            name: "Courses",
            icon: FaGraduationCap,
            description: "Learn new skills from industry experts.",
            link: "/category/Courses",
        },
    ];
    return (
        <motion.section
            id="categories"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden"
        >
            {/* Divider line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div variants={fadeUpVariant} className="text-center mb-16 space-y-4">
                    <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Discover</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Browse <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Categories</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {categoriesData.map((category) => (
                        <Link to={category.link} key={category.name}>
                            <motion.div
                                variants={fadeUpVariant}
                                className="group flex flex-col items-center justify-center p-8 glass-panel border border-white/5 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 h-full"
                            >
                                <category.icon className="text-blue-400 text-5xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-300 transition-colors">{category.name}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{category.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Categories