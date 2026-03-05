import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { QuoteFunnel } from '../components/sections/QuoteFunnel';
import { AnimatedGradient } from '../components/effects/AnimatedGradient';
import { Particles } from '../components/effects/Particles';
import { LightBeams } from '../components/effects/LightBeams';

const QuotePage = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Get Your Free Remodeling Quote | BrownBoot Repairs & Remodeling"
                description="Start your Westmoreland County remodeling project today. Get a free, honest quote for kitchens, bathrooms, basements, and more."
                keywords="Free Remodeling Quote Irwin PA, Home Improvement Estimate Greensburg, Custom Remodeling Quote Westmoreland County"
                canonical="https://brownbootrr.com/quote"
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white pt-40 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-950/80 z-10" />
                    <img
                        src="/hero-home-v3.jpg"
                        alt="Luxury Remodeling"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
                        <AnimatedGradient />
                        <Particles />
                        <LightBeams />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block underline decoration-primary/30 underline-offset-8">Step 1: Your Dream Home</span>
                        <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Let's Build It <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary italic">Together.</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Answer 5 quick questions and we'll send you our exclusive homeowner's guide to adding value when you remodel.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Funnel Section */}
            <section className="py-24 relative z-20 bg-white -mt-12 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
                <div className="container mx-auto px-4">
                    <QuoteFunnel />
                </div>
            </section>

            {/* Why Us / Trust Section (Optional but good for funnel conversion) */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Why Westmoreland County Trusts BrownBoot</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-primary text-4xl font-bold mb-2">24-48h</div>
                            <div className="text-slate-900 font-bold mb-1">Response Time</div>
                            <p className="text-sm text-slate-500">We respect your time and respond fast.</p>
                        </div>
                        <div>
                            <div className="text-primary text-4xl font-bold mb-2">100%</div>
                            <div className="text-slate-900 font-bold mb-1">Local Pros</div>
                            <p className="text-sm text-slate-500">Founded and led by Irwin PA natives.</p>
                        </div>
                        <div>
                            <div className="text-primary text-4xl font-bold mb-2">No-BS</div>
                            <div className="text-slate-900 font-bold mb-1">Estimates</div>
                            <p className="text-sm text-slate-500">Honest pricing with zero hidden fees.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuotePage;
