import { motion } from 'framer-motion';
import { User, Heart, Shield, Award, MapPin, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { AnimatedGradient } from '../components/effects/AnimatedGradient';
import { Particles } from '../components/effects/Particles';
import { LightBeams } from '../components/effects/LightBeams';

const AboutPage = () => {
    return (
        <div className="pb-16">
            <SEO
                title="About Kyle Stack & BrownBoot | Trusted Westmoreland County Remodeler"
                description="Meet Kyle Stack, founder of BrownBoot Repairs & Remodeling. Discover our local roots in Manor, PA and our commitment to quality craftsmanship and integrity."
                keywords="Kyle Stack, BrownBoot Repairs, Westmoreland County Remodeler, Manor PA Contractor, Honest Home Remodeling"
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

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">Trust & Local Roots</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            From our home base in Manor, PA, we've dedicated ourselves to elevating the standard of home remodeling across Westmoreland County.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative max-w-sm mx-auto"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border-8 border-white group">
                                <img
                                    src="/about-kyle.jpg"
                                    alt="Kyle Stack - Founder of BrownBoot"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-3xl shadow-xl hidden md:block z-20">
                                <p className="text-3xl font-display font-bold">15+</p>
                                <p className="text-sm font-medium opacity-90">Years Experience</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Meet the Founder: <span className="text-primary">Kyle Stack</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Growing up in <span className="font-bold text-slate-900">Irwin, PA</span>, Kyle Stack learned the value of hard work and community from a young age. His journey in the trades began with a simple passion for craftsmanship and a desire to see local homes reach their full potential.
                                </p>
                                <p>
                                    As an owner-led operation, Kyle remains personally involved in every project we take on. This isn't just business for him—it's a commitment to his neighbors in Westmoreland County. When you hire BrownBoot, you're not just getting a contractor; you're getting a dedicated partner who cares about your home as much as you do.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-8">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Heart className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Local Pride</h4>
                                            <p className="text-sm">Born and raised in the communities we serve.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Award className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Quality First</h4>
                                            <p className="text-sm">Driven by a personal standard of excellence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 tracking-tight">The BrownBoot Ethos</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We've built our reputation on three core pillars that define every interaction and every project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Reliability",
                                desc: "We show up on time, stay on schedule, and do what we say we're going to do. No exceptions.",
                                icon: <Clock className="w-6 h-6" />
                            },
                            {
                                title: "Transparency",
                                desc: "Honest pricing and clear communication from the first site visit to the final walkthrough.",
                                icon: <Shield className="w-6 h-6" />
                            },
                            {
                                title: "Longevity",
                                desc: "Our tagline isn't just for show. We build things to last using premium materials and techniques.",
                                icon: <CheckCircle2 className="w-6 h-6" />
                            }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                                    <div className="text-primary group-hover:text-white transition-colors duration-300">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-primary/20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
                                Work With a Builder <span className="text-slate-900">Who Cares.</span>
                            </h2>
                            <p className="text-xl text-white/80 mb-12 leading-relaxed font-medium">
                                Experience the difference of a local, owner-led remodeling operation. Let's start your home's transformation today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a
                                    href="tel:724-995-3320"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
                                >
                                    Contact Kyle Today
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Re-using icon component for consistency
const Clock = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
);

export default AboutPage;
