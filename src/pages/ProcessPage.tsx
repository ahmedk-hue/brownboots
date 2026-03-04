import { motion } from 'framer-motion';
import { ClipboardCheck, Calendar, PencilRuler, HardHat, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { AnimatedGradient } from '../components/effects/AnimatedGradient';
import { Particles } from '../components/effects/Particles';
import { LightBeams } from '../components/effects/LightBeams';

const steps = [
    {
        name: "Free Home Visit",
        description: "Our process begins with a personal assessment of your project. We offer a 24-48 hour response time to schedule your initial consultation.",
        icon: <Calendar className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
        details: ["Project scope discussion", "Initial measurements", "Budget alignment", "Owner-led consultation"]
    },
    {
        name: "Detailed Estimate",
        description: "Transparency is key. We'll provide a comprehensive quote back to you within 2-3 days of our visit, ensuring no surprises down the line.",
        icon: <ClipboardCheck className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1503387762-592eda58efaf?auto=format&fit=crop&q=80",
        details: ["Itemized pricing", "Material options", "Project timeline", "Clear contract terms"]
    },
    {
        name: "Selection & Planning",
        description: "We help you pick finishes and handle the logistics. From material samples to local permits, we set the stage for a perfect build.",
        icon: <PencilRuler className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        details: ["Material source assistance", "Structural reviews", "Local permit filing", "Project schedule finalization"]
    },
    {
        name: "Precision Construction",
        description: "Our team brings your vision to life with precision and respect for your home. We maintain a clean, safe job site throughout the build.",
        icon: <HardHat className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
        details: ["Skilled craftsmanship", "Daily clean-up", "Progress updates", "Structural integrity focus"]
    },
    {
        name: "Final Walkthrough",
        description: "We don't consider the job done until you're completely satisfied. We'll walk through every detail together to ensure perfection.",
        icon: <CheckCircle className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
        details: ["Final inspection", "Detail touch-ups", "Maintenance guidance", "Project sign-off"]
    }
];

const ProcessPage = () => {
    return (
        <div className="pb-16 text-slate-900">
            <SEO
                title="Our Remodeling Process | The BrownBoot Way"
                description="Discover our systematic 5-step approach to home remodeling in Westmoreland County. From free home visits to final walkthroughs, we prioritize quality."
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
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
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">How We Work</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
                            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">Proven Process</span> for Your Peace of Mind
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            We've refined our approach over hundreds of projects to ensure a seamless, stress-free remodeling experience for every Westmoreland County homeowner.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Timeline Line (Desktop) */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />

                        {steps.map((step, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 last:mb-0 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="w-full lg:w-1/2 space-y-6"
                                >
                                    <div className="flex items-center gap-4 text-primary font-bold text-sm tracking-widest uppercase">
                                        <span className="bg-primary/10 px-4 py-2 rounded-full">Step 0{idx + 1}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">{step.name}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-primary/20 pl-6">
                                        {step.description}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                        {step.details.map((detail, dIdx) => (
                                            <div key={dIdx} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Icon Circle (Timeline node) */}
                                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-slate-50 rounded-full items-center justify-center shadow-lg z-10 text-primary">
                                    {step.icon}
                                </div>

                                {/* Placeholder for visual balance/image on other side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="w-full lg:w-1/2"
                                >
                                    <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white group relative">
                                        <img
                                            src={step.image}
                                            alt={step.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 grid-rows-6 h-full">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white/20"></div>
                        ))}
                    </div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Our Quality Promise</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
                        "We don't believe in cutting corners. Every project phase is executed with the same level of care and precision as if it were our own home. That's the BrownBoot standard."
                    </p>
                    <div className="mt-12 flex justify-center">
                        <div className="w-24 h-1 bg-primary rounded-full" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-xl">
                        <div className="max-w-3xl mx-auto relative z-10">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Ready to Start <span className="text-primary">Step 1?</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                                Schedule your free home visit today and experience the clarity of our remodeling process firsthand.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a
                                    href="tel:724-995-3320"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
                                >
                                    Schedule Your Home Visit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProcessPage;
