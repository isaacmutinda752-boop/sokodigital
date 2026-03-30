import { FaStar, FaCartShopping } from "react-icons/fa6";
import { motion } from "framer-motion";

interface ProductCardProps {
    title: string;
    price: string;
    category: string;
    image: string;
    rating: number;
    sales: number;
}

const ProductCard = ({ title, price, category, image, rating, sales }: ProductCardProps) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="group relative bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                    <span className="bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="text-slate-200 font-medium">{rating}</span>
                        <span>({sales})</span>
                    </div>
                    <span className="font-medium text-blue-400">Digital Download</span>
                </div>

                <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 h-12">
                    {title}
                </h3>

                <div className="pt-2 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Price</span>
                        <span className="text-white text-xl font-black">
                            <span className="text-blue-400 text-sm mr-1">KES</span>
                            {price}
                        </span>
                    </div>

                    <button className="bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-white p-3 rounded-xl transition-all duration-300 active:scale-90">
                        <FaCartShopping className="text-lg" />.
                    </button>
                </div>
            </div>

            {/* Bottom Glow Decorative Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
};

export default ProductCard;