import { motion } from 'framer-motion';
import { Home, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const BasementRemodeling = () => {
    const services = [
        "Complete Basement Finishing",
        "Home Theater & Entertainment Hubs",
        "Drywall, Insulation & Moisture Control",
        "Custom Wet Bars & Kitchenettes",
        "Bedroom & Bathroom Additions",
        "Structural Reinforcement & Framing"
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Basement Remodeling | BrownBoot Repairs & Remodeling"
                description="Unlock the full potential of your home with expert basement remodeling in Westmoreland County. High-end finishes and functional designs."
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=2071&auto=format&fit=crop"
                        alt="Finished Basement"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
                    >
                        Basement Finishing & Remodeling
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-200 max-w-2xl mx-auto mb-8"
                    >
                        Double your usable square footage with a basement renovation that feels like a natural extension of your upper floors.
                    </motion.p>
                </div>
            </section>

            {/* PAS Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">Beyond Just "Storage"</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        An unfinished or dated basement is a massive amount of wasted space. Whether you need a place for the kids to play, a professional home office, or a high-end entertainment lounge, we provide the master-class carpentry and technical expertise to bring it to life.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                                <span className="font-semibold text-slate-800">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-6">Unlock Your Home's Potential</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Reliable service. Transparent pricing. Master-level execution. Start your basement project today.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
                    >
                        Get Your Free Project Estimate <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default BasementRemodeling;
