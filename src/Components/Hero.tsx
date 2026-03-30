import { FaMobileScreenButton, FaCloudArrowDown, FaUsers, FaShieldHalved } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    // Header Features
    const features = [
        { text: "M-Pesa STK push", icon: FaMobileScreenButton },
        { text: "Instant Download", icon: FaCloudArrowDown },
        { text: "Earn 30% Affiliate", icon: FaUsers },
        { text: "Secure and Trusted", icon: FaShieldHalved },
    ];
    return (
        <>
            <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-20" style={{
                background: "linear-gradient(135deg, #363b52ff 0%, #2f426eff 50%, #837bfcff 100%)",
            }}>

                {/* === Animated Background Orbs === */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    {/* Top-right glow */}
                    <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
                            animation: "floatOrb 8s ease-in-out infinite",
                        }}
                    />
                    {/* Bottom-left glow */}
                    <div
                        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
                            animation: "floatOrb 10s ease-in-out infinite reverse",
                        }}
                    />
                    {/* Center subtle glow */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20"
                        style={{
                            background: "radial-gradient(ellipse, rgba(59,130,246,0.4) 0%, transparent 60%)",
                        }}
                    />
                    {/* Grid overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                {/* === Badge === */}
                <div
                    className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-sm"
                    style={{
                        background: "rgba(59,130,246,0.1)",
                        borderColor: "rgba(59,130,246,0.35)",
                        color: "#93c5fd",
                        backdropFilter: "blur(8px)",
                        boxShadow: "0 0 20px rgba(59,130,246,0.10)",
                    }}
                >
                    <span
                        className="w-2 h-2 rounded-full bg-blue-400 inline-block"
                        style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
                    />
                    Kenya's First Digital Marketplace
                </div>

                {/* === Headline === */}
                <h1
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-4 sm:mb-6"
                    style={{ color: "#f0f6ff" }}
                >
                    SELL. BUY. INSTANTLY{" "}
                    <br className="hidden md:block" />
                    <span
                        style={{
                            background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #a78bfa 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        WITH M-PESA
                    </span>
                </h1>

                {/* === Subtext === */}
                <p className="text-sm sm:text-base md:text-xl max-w-xl sm:max-w-2xl mb-8 sm:mb-12 leading-relaxed font-medium" style={{ color: "#cbd5e1" }}>
                    The ultimate hub for digital products — ebooks, templates, software, courses, and more.
                    Receive your payments within 24 hours directly to your account.
                </p>

                {/* === Feature Pills === */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-14">
                    {features.map((feature) => (
                        <div
                            key={feature.text}
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-default group"
                            style={{
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.10)",
                                color: "#cbd5e1",
                                backdropFilter: "blur(12px)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = "rgba(59,130,246,0.12)";
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(59,130,246,0.4)";
                                (e.currentTarget as HTMLDivElement).style.color = "#bfdbfe";
                                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(59,130,246,0.18)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.10)";
                                (e.currentTarget as HTMLDivElement).style.color = "#cbd5e1";
                                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                            }}
                        >
                            <feature.icon className="text-blue-400 text-base flex-shrink-0" />
                            {feature.text}
                        </div>
                    ))}
                </div>

                {/* === CTA Buttons === */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <button
                        className="relative overflow-hidden px-10 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 active:scale-95"
                        style={{
                            background: "linear-gradient(135deg, #2563eb, #4f46e5)",
                            boxShadow: "0 4px 32px rgba(59,130,246,0.45)",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 40px rgba(59,130,246,0.65)";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 32px rgba(59,130,246,0.45)";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                        }}
                        onClick={() => navigate("/all-products")}
                    >
                        View Products
                    </button>
                    <button
                        className="px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 active:scale-95"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1.5px solid rgba(255,255,255,0.18)",
                            color: "#e2e8f0",
                            backdropFilter: "blur(10px)",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.10)";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.18)";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                        }}
                        onClick={() => navigate("/for-sellers")}
                    >
                        Start Selling
                    </button>
                </div>

                {/* === Keyframe Styles === */}
                <style>{`
                @keyframes floatOrb {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -20px) scale(1.05); }
                    66% { transform: translate(-20px, 15px) scale(0.97); }
                }
            `}</style>
            </section>
        </>
    );
};

export default Hero;