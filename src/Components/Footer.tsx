import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa6";
import logo from "../assets/marketplacelogo123.jpeg";
import { Link } from "react-router-dom";



const Footer = () => {
    // Footer Links Data
    const footerLinks = [
        { title: "Marketplace", links: ["Browse Products", "Ebooks", "Software", "Templates", "Courses"], id: "marketplace" },
        { title: "Sellers", links: ["Start Selling", "Seller Dashboard", "Payouts", "Guidelines"], id: "for-sellers" },
        { title: "Affiliates", links: ["Join Program", "Affiliate Dashboard", "Commission Rates", "Marketing Assets"], id: "affiliate-program" },
        { title: "Company", links: ["About Us", "Our Goal", "Contact"], id: "company" },
        { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Refund Policy", "Cookie Policy"], id: "legal" },
    ];

    return (
        <footer className="bg-slate-950 border-t border-blue-500/20 pt-12 pb-6 px-4 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 md:gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="logo" className="h-10 w-auto object-contain rounded-md" />
                            <h2 className="text-2xl font-extrabold text-white tracking-tight">
                                SOKO <span className="text-blue-400">DIGITAL</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                            Kenya's premier digital marketplace. We empower creators to sell, buyers to access quality digital products, and affiliates to earn—all powered by M-Pesa.
                        </p>
                        <div className="space-y-3">
                            <p className="text-white text-sm font-bold">Subscribe to our newsletter</p>
                            <form className="flex flex-col sm:flex-row max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 text-sm text-white placeholder:text-slate-500 transition-all mb-2 sm:mb-0 sm:rounded-l-xl sm:rounded-r-none"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl sm:rounded-l-none sm:rounded-r-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                                    <Link to="/EmailConfirmation">Subscribe</Link> <FaArrowRight />
                                </button>
                            </form>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-slate-400 mt-2">
                            <a href="#" className="hover:text-blue-400 transition-colors duration-200 text-2xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"><FaXTwitter /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors duration-200 text-2xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"><FaFacebook /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors duration-200 text-2xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"><FaInstagram /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors duration-200 text-2xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"><FaLinkedin /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors duration-200 text-2xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"><FaGithub /></a>
                        </div>
                    </div>
                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="mt-8 sm:mt-0">
                            <h3 className="text-white font-bold mb-4 md:mb-6">{section.title}</h3>
                            <ul className="space-y-3 md:space-y-4">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-slate-400 hover:text-white text-sm transition-colors duration-200 block py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                    <div className="text-slate-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Soko Digital. All rights reserved.
                    </div>
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Built with Pride in Kenya
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                        <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Payments via</p>
                        <span className="text-green-500 font-bold italic text-lg tracking-tighter">M-PESA</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;