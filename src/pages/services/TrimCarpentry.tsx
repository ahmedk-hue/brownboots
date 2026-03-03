import { motion } from 'framer-motion';
import { PenTool, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const TrimCarpentry = () => {
    const features = [
        "Custom Built-ins & Shelving",
        "Crown Molding & Baseboard Installation",
        "Wainscoting & Wood Paneling",
        "Custom Handrails & Stair Parts",
        "Door Hanging & Hardware Updates",
        "Fireplace Mantel Customizations"
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Trim Carpentry & Built-ins | BrownBoot Repairs & Remodeling"
                description="Fine finish carpentry and custom built-ins in Westmoreland County. High-end trim work that defines your home's character."
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1516156008625-3a9d60da923c?q=80&w=1974&auto=format&fit=crop"
                        alt="Fine Finish Carpentry"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
                    >
                        Master-Class Trim Carpentry
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-200 max-w-2xl mx-auto mb-8"
                    >
                        The beauty is in the details. Elevate your home with precision trim work and custom wood features.
                    </motion.p>
                </div>
            </section>

            {/* PAS Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">Character is in the Craft</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Standard tract homes often lack the architectural detail that makes a house feel like a home. Our master carpenters specialize in the fine details—crown molding, custom built-ins, and precision trim—that add lasting value and sophistication to every room.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                                <span className="font-semibold text-slate-800">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-6">Elevate Your Home's Interior</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Built to last. Designed for life. Contact us for a consultation on your custom woodwork project.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
                    >
                        Start Your Carpentry Project <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TrimCarpentry;
