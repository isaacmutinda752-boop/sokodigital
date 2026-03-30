import { FaHandPointer, FaMobileScreenButton, FaCircleDot, FaDownload } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";


const PaymentMethod = () => {
    // Payment Method Steps Data
    const paymentSteps = [
        { title: "Choose Your Product", description: "Browse thousands of Kenyan-made digital products.", icon: FaHandPointer },
        { title: "Click \"Buy with M-Pesa\"", description: "Enter your Safaricom number—that's it!", icon: FaMobileScreenButton },
        { title: "STK Push Arrives on Your Phone", description: "Enter your M-Pesa PIN to confirm payment.", icon: FaCircleDot },
        { title: "Download Instantly", description: "Your product is delivered immediately via email and SMS.", icon: FaDownload },
    ];

    const navigate = useNavigate();

    return (
        <section id="payment-method" className="bg-slate-950 py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header Section */}
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
                    POWERED BY M-PESA DARAJA API
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                    Lipa na <span className="text-green-500 italic">M-PESA</span>. Instant Payment.
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
                    No credit card. No bank account. Pay with M-Pesa and receive your product instantly.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
                    <button
                        className="relative overflow-hidden px-8 py-3 rounded-xl font-bold text-lg text-white transition-all duration-300 active:scale-95"
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
                        onClick={() => navigate('/checkout')}
                    >
                        Try M-Pesa Checkout
                    </button>
                    <button
                        className="px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 active:scale-95"
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
                    >
                        <Link to="/mpesa-learn-more">Learn More</Link>
                    </button>
                </div>

                {/* Steps Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {paymentSteps.map((step, index) => (
                        <div key={index} className="group p-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl text-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                            <step.icon className="text-blue-400 text-5xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaymentMethod