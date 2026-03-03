import { motion } from 'framer-motion';
import { ChefHat, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { AnimatedGradient } from '../../components/effects/AnimatedGradient';
import { Particles } from '../../components/effects/Particles';
import { LightBeams } from '../../components/effects/LightBeams';

const KitchenRemodeling = () => {
    const benefits = [
        "Custom Cabinetry & Island Design",
        "Premium Countertop Installations",
        "Modern Lighting & Electrical Updates",
        "Expert Plumbing & Appliance Integration",
        "Functional Layout Reconfigurations",
        "Professional Tile & Backsplash Work"
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Kitchen Remodeling | BrownBoot Repairs & Remodeling"
                description="Expert kitchen remodeling services in Westmoreland County. Transform your kitchen into a beautiful, functional heart of your home."
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />

                    {/* Premium Effects Layer */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                        <AnimatedGradient />
                        <Particles />
                        <LightBeams />
                    </div>

                    <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-6 grid-rows-6 h-full">
                            {Array.from({ length: 36 }).map((_, i) => (
                                <div key={i} className="border-[0.5px] border-white/20"></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Master-Class Craftsmanship</span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Kitchen <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">Remodeling</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            From custom cabinetry to complete layout overhauls, we build kitchens that serve as the beautiful, functional heart of your home.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PAS Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">Is Your Kitchen Holding You Back?</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Closed-off layouts, dated finishes, and poor lighting can make the most important room in your house feel small and uninspiring. We specialize in transforming these frustrations into a seamless, high-end culinary space tailored to your lifestyle.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                                <span className="font-semibold text-slate-800">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Build Your Dream Kitchen?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join the Westmoreland County homeowners who trust BrownBoot for exceptional craftsmanship and reliable service.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
                    >
                        Schedule Your Consult <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default KitchenRemodeling;
