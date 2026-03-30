import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

interface FeaturedProductsProps {
    searchQuery: string;
    selectedCategory: string;
}

const FeaturedProducts = ({ searchQuery, selectedCategory }: FeaturedProductsProps) => {
    // Featured Products Data
    const products = [
        {
            id: 1,
            title: "Advanced React & Next.js Masterclass",
            price: "2,500",
            category: "Courses",
            rating: 4.9,
            sales: 124,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Ultimate Python Automation Scripts",
            price: "1,200",
            category: "Software",
            rating: 4.7,
            sales: 89,
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Minimalist SaaS UI Kit (Figma)",
            price: "3,000",
            category: "Templates",
            rating: 5.0,
            sales: 45,
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "E-book: Financial Freedom in Kenya",
            price: "850",
            category: "Ebooks",
            rating: 4.8,
            sales: 312,
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <motion.section
            id="featured-products"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-slate-950 py-24 px-6 md:px-12 relative"
        >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="space-y-4">
                        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Top Rated</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Products</span>
                        </h2>
                        <p className="text-slate-400 max-w-md text-lg leading-relaxed">
                            Hand-picked digital assets from top Kenyan creators, verified for quality and security.
                        </p>
                    </div>
                    <Link to="/all-products" className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2 group mb-2">
                        Browse All Marketplace <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    variants={fadeUpVariant}
                                    key={product.id}
                                >
                                    <ProductCard {...product} />
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center text-slate-500 font-medium">
                                No featured products match your current search criteria.
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default FeaturedProducts;