import { motion } from 'motion/react';
import { ChefHat, Bath, Box, Scaling, DoorOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { AnimatedGradient } from '../components/effects/AnimatedGradient';
import { Particles } from '../components/effects/Particles';
import { LightBeams } from '../components/effects/LightBeams';

const ServicesPage = () => {
    const services = [
        {
            title: "Kitchen Remodeling",
            description: "From custom cabinetry to modern layouts, we create kitchens that serve as the heart of your home.",
            icon: ChefHat,
            link: "/services/kitchen-remodeling",
            features: ["Custom Cabinetry", "Quartz/Granite Counters", "Modern Lighting"]
        },
        {
            title: "Bathroom Remodeling",
            description: "Transform your dated bathroom into a luxury spa-like retreat with expert tile work and fixtures.",
            icon: Bath,
            link: "/services/bathroom-remodeling",
            features: ["Custom Tile Showers", "Vanity Installation", "Space Optimization"]
        },
        {
            title: "Basement Remodeling",
            description: "Unlock the full potential of your home by converting your basement into a usable, beautiful space.",
            icon: Box,
            link: "/services/basement-remodeling",
            features: ["Finished Living Areas", "Home Offices", "Custom Bars"]
        },
        {
            title: "Trim Carpentry",
            description: "The fine details that define a custom home. Master-class crown molding, baseboards, and built-ins.",
            icon: Scaling,
            link: "/services/trim-carpentry",
            features: ["Crown Molding", "Custom Built-ins", "Decorative Trim"]
        },
        {
            title: "Windows & Door Installation",
            description: "Improve energy efficiency and curb appeal with precision-installed windows and doors.",
            icon: DoorOpen,
            link: "/services/windows-doors",
            features: ["Energy Efficient Options", "Entry Door Systems", "Expert Sealing"]
        }
    ];

    return (
        <div className="pb-16">
            <SEO
                title="Our Services | BrownBoot Repairs & Remodeling"
                description="Explore our range of professional home remodeling services in Westmoreland County, PA. From kitchens to custom trim, we bring quality craftsmanship to every project."
                keywords="Home Remodeling Services, Kitchen Remodeling, Bathroom Renovations, Basement Finishing, Trim Carpentry, Window Installation"
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
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

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Craftsmanship First</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Our Remodeling <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">Services</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            We specialize in high-quality home transformations across Westmoreland County. Each project is handled with precision, care, and a commitment to longevity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    <service.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 mb-6 line-clamp-2 italic">
                                    "{service.description}"
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-center gap-2 text-slate-700 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={service.link}
                                    className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 pb-16 text-center">
                <div className="bg-slate-900 rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to start your project?</h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                            Whether it's a small repair or a full-scale remodel, we're here to help you build something that lasts.
                        </p>
                        <a
                            href="tel:724-995-3320"
                            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
                        >
                            Call (724) 995-3320
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
