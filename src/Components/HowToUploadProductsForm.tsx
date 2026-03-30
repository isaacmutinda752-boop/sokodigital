import { motion } from 'framer-motion';
import {
    FaCloudArrowUp, FaTag, FaMoneyBill1Wave,
    FaCircleInfo, FaImage, FaFileExport,
    FaCheckDouble
} from 'react-icons/fa6';

const HowToUploadProductsForm = () => {
    return (
        <section className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10"
            >
                {/* Left Side: Instructions & Tips */}
                <div className="space-y-10 lg:sticky lg:top-32">
                    <div className="space-y-6">
                        <span className="bg-blue-600/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                            Seller Guide
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            List Your Product <br />
                            <span className="text-blue-400">In 4 Easy Steps.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                            Provide clear details to help customers understand the value of your digital asset. Quality listings convert 3x better.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { step: "01", title: "Compelling Title", desc: "Use keywords that buyers search for (e.g., 'React Masterclass')." },
                            { step: "02", title: "Clear Description", desc: "Explain exactly what the buyer will receive after payment." },
                            { step: "03", title: "Fair Pricing", desc: "Set a competitive price in KES. Remember, we only take 10-15%." },
                            { step: "04", title: "High-Res Cover", desc: "Upload a professional thumbnail to grab attention." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 group">
                                <span className="text-2xl font-black text-blue-600/40 group-hover:text-blue-400 transition-colors">{item.step}</span>
                                <div>
                                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: The Upload Form */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 relative">
                    <div className="mb-10 text-center lg:text-left">
                        <h3 className="text-2xl font-black text-white">Product Details</h3>
                        <p className="text-slate-500 text-sm mt-2">Fill in the information below to publish your asset.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Title */}
                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Product Title</label>
                            <div className="relative group">
                                <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="e.g. Python Automation Scripts"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                        </div>

                        {/* Category & Price */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Category</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                                    <option className="bg-slate-900">Ebooks</option>
                                    <option className="bg-slate-900">Software</option>
                                    <option className="bg-slate-900">Courses</option>
                                    <option className="bg-slate-900">Templates</option>
                                    <option className="bg-slate-900">Graphics</option>
                                    <option className="bg-slate-900">Audio</option>
                                    <option className="bg-slate-900">Video</option>
                                    <option className="bg-slate-900">Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Price (KES)</label>
                                <div className="relative group">
                                    <FaMoneyBill1Wave className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Description</label>
                            <div className="relative group">
                                <FaCircleInfo className="absolute left-4 top-6 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                <textarea
                                    rows={4}
                                    placeholder="Describe your product features and benefits..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                                />
                            </div>
                        </div>

                        {/* Upload Blocks */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button className="flex flex-col items-center justify-center gap-3 p-6 border-2 border-dashed border-white/10 rounded-2xl hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group">
                                <FaImage className="text-2xl text-slate-500 group-hover:text-blue-400" />
                                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200">Thumbnail Image</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-3 p-6 border-2 border-dashed border-white/10 rounded-2xl hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group">
                                <FaFileExport className="text-2xl text-slate-500 group-hover:text-blue-400" />
                                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200">Digital Asset (ZIP/PDF)</span>
                            </button>
                        </div>

                        {/* Submit */}
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg mt-4">
                            Upload & Publish <FaCloudArrowUp />
                        </button>

                        <div className="flex items-center justify-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest pt-4">
                            <FaCheckDouble className="text-blue-400" />
                            Instant File Delivery Guaranteed
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default HowToUploadProductsForm;