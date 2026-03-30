import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaMagnifyingGlass, FaCircleExclamation } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import { useState } from "react";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const CategoriesProductsAll = () => {
    const { categoryName } = useParams();
    const [searchQuery, setSearchQuery] = useState("");

    // Mock Data (Consistent with ProductsAreaAll)
    const products = [
        { id: 1, title: "Advanced React & Next.js Masterclass", price: "2,500", category: "Courses", rating: 4.9, sales: 124, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop" },
        { id: 2, title: "Ultimate Python Automation Scripts", price: "1,200", category: "Software", rating: 4.7, sales: 89, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" },
        { id: 3, title: "Minimalist SaaS UI Kit (Figma)", price: "3,000", category: "Templates", rating: 5.0, sales: 45, image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800&auto=format&fit=crop" },
        { id: 4, title: "E-book: Financial Freedom in Kenya", price: "850", category: "Ebooks", rating: 4.8, sales: 312, image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop" },
        { id: 5, title: "Complete Flutter for Mobile Apps", price: "2,800", category: "Courses", rating: 4.6, sales: 210, image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" },
        { id: 6, title: "Modern Portfolio Jekyll Template", price: "1,500", category: "Templates", rating: 4.9, sales: 67, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
        { id: 7, title: "Data Science with Python & SQL", price: "3,500", category: "Courses", rating: 4.8, sales: 156, image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=800&auto=format&fit=crop" },
        { id: 8, title: "Premium Logo Mockup Bundle", price: "950", category: "Graphics", rating: 4.7, sales: 432, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" },
        { id: 9, title: "React Native UI kit", price: "1,800", category: "Templates", rating: 4.8, sales: 156, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" },
        { id: 10, title: "SEO Checklist for 2026", price: "500", category: "Ebooks", rating: 4.9, sales: 890, image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop" },
        { id: 11, title: "Machine Learning with Python", price: "4,500", category: "Courses", rating: 4.7, sales: 234, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop" },
        { id: 12, title: "Business Proposal Template", price: "1,200", category: "Templates", rating: 5.0, sales: 45, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" },
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = product.category.toLowerCase() === categoryName?.toLowerCase();
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                    <Link to="/" className="text-slate-500 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors group w-fit">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                </motion.div>

                <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="text-center mb-20 space-y-4">
                    <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Marketplace Category</p>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        Browsing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 capitalize">{categoryName}</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A curated selection of elite {categoryName} digital products and courses from Kenya's top digital entrepreneurs.
                    </p>
                </motion.div>

                {/* Category Search */}
                <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="max-w-2xl mx-auto mb-16">
                    <div className="relative group">
                        <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                        <input
                            type="text"
                            placeholder={`Search in ${categoryName}...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all backdrop-blur-md"
                        />
                    </div>
                </motion.div>

                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} key={product.id}>
                                    <ProductCard {...product} />
                                </motion.div>
                            ))
                        ) : (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="col-span-full py-20 text-center space-y-4">
                                <FaCircleExclamation className="text-slate-700 text-5xl mx-auto" />
                                <h4 className="text-xl font-bold text-white">No products found</h4>
                                <p className="text-slate-500">We couldn't find any products in {categoryName} {searchQuery && `matching "${searchQuery}"`}.</p>
                                <button onClick={() => setSearchQuery("")} className="text-blue-400 font-bold hover:underline">Clear Search</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default CategoriesProductsAll;