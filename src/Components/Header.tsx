import { useState } from "react";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import logo from "../assets/marketplacelogo123.jpeg";
import { MdSell } from "react-icons/md";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Marketplace" },
  { to: "/for-sellers", label: "For Sellers" },
  { to: "/affiliate-program", label: "Affiliate Program" },
  { to: "/community", label: "Community" },
  { to: "/goal", label: "Goal" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col w-full font-sans sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <nav className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 flex justify-between items-center border-b border-white/5 px-4 md:px-12 py-2 text-xs md:text-sm">
        <p className="text-white font-medium tracking-wide">Kenya's First Digital Marketplace</p>
        <p className="text-white hidden sm:block">Affiliates Earn up to 30% commission per sale</p>
        <button className="flex items-center gap-1.5 text-yellow-300 font-semibold hover:text-yellow-200 transition-colors duration-200"
          onClick={() => window.location.href = "/WebrayzDev/AffiliateCreateAccount"}
        >
          Join Free <FaArrowRight className="text-xs" />
        </button>
      </nav>

      {/* Main Header */}
      <nav className="flex justify-between items-center bg-slate-950/60 backdrop-blur-xl border-b border-blue-500/20 px-4 md:px-8 py-4 relative">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10 md:h-12 w-auto object-contain rounded-md" />
          <h1 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">SOKO <span className="text-blue-400">DIGITAL</span></h1>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-4.5 md:gap-6 text-md font-medium text-slate-300">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="flex items-center gap-1.5 hover:text-white transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-blue-500">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/login" className="text-slate-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200">
            Login
          </Link>
          <Link to="/signup" className="bg-white/10 text-white px-5 py-2 rounded-lg hover:bg-white/20 font-medium transition-all duration-200">
            Sign Up
          </Link>
        </div>
        {/* Always visible CTA */}
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 ml-2"
          onClick={() => window.location.href = "/WebrayzDev/for-sellers"}
        >
          <MdSell className="text-base" />
          Start Selling
        </button>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center ml-2 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <span className="text-2xl">×</span> : <FaBars className="text-2xl" />}
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/20 flex flex-col items-center py-6 gap-4 z-50 animate-fade-in">
            <ul className="flex flex-col gap-4 w-full items-center">
              {navLinks.map((link) => (
                <li key={link.to} className="w-full text-center">
                  <Link
                    to={link.to}
                    className="block w-full py-2 text-lg font-semibold text-slate-200 hover:text-white hover:bg-blue-500/10 rounded transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 w-full items-center mt-2">
              <Link to="/login" className="block w-11/12 mx-auto text-slate-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 text-center" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="block w-11/12 mx-auto bg-white/10 text-white px-5 py-2 rounded-lg hover:bg-white/20 font-medium transition-all duration-200 text-center" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};



export default Header