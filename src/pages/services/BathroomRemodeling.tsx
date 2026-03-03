import { motion } from 'framer-motion';
import { Bath, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const BathroomRemodeling = () => {
    const items = [
        "Luxury Shower & Tub Conversions",
        "Custom Vanity & Storage Solutions",
        "Premium Tile & Waterproofing",
        "Modern Fixture & Hardware Updates",
        "Heated Flooring Installations",
        "Smart Lighting & Ventilation"
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Bathroom Remodeling | BrownBoot Repairs & Remodeling"
                description="Elevate your daily routine with expert bathroom remodeling in Westmoreland County. Custom design and master-class craftsmanship."
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1620626011761-9963d7b5947a?q=80&w=2069&auto=format&fit=crop"
                        alt="Luxury Bathroom"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
                    >
                        Luxury Bathroom Remodeling
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-200 max-w-2xl mx-auto mb-8"
                    >
                        Transform your bathroom into a private sanctuary with our expert design-build services.
                    </motion.p>
                </div>
            </section>

            {/* PAS Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">Modernize Your Experience</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Bathrooms are often the first place to show a home's age. Leaking fixtures, outdated tile, and poor storage don't just look bad—they impact your comfort. We bring master-class carpentry and modern design to create spaces that feel like a high-end spa.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                                <span className="font-semibold text-slate-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-6">Start Your Transformation</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Quality you can see. Built to last. Discover the BrownBoot difference in bathroom design.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
                    >
                        Request an Estimate <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default BathroomRemodeling;
