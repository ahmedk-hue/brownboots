import { motion } from 'framer-motion';
import { DoorOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const WindowDoorInstallation = () => {
    const options = [
        "Energy-Efficient Window Replacements",
        "Entry & Storm Door Installations",
        "Sliding Glass & Patio Door Systems",
        "Custom Casing & Exterior Trim",
        "Superior Weather Stripping & Sealing",
        "Hardware & Security Upgrades"
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Windows & Door Installation | BrownBoot Repairs & Remodeling"
                description="Expert window and door installation in Westmoreland County. Enhance your home's energy efficiency and curb appeal with precision fitting."
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10">
                    <div className="grid grid-cols-6 grid-rows-6 h-full">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white/20"></div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Master-Class Craftsmanship</span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
                            Windows & <span className="text-primary">Doors</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Improve your home's efficiency, security, and curb appeal with expertly installed windows and doors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PAS Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">Stop Throwing Money Out the Window</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Drafty windows and poorly fitted doors are more than just an annoyance—they lead to massive energy loss and security risks. We provide precision installation services that ensure a perfect fit every time, utilizing the latest in energy-efficient technology and master-class carpentry.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {options.map((option, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                                <span className="font-semibold text-slate-800">{option}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-6">Enhance Your Home's Performance</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Quality you can see. Built to last. Secure your home and lower your bills with BrownBoot.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
                    >
                        Get a Free Estimate <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default WindowDoorInstallation;
