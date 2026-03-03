
import { motion } from 'framer-motion';

interface LocationHeroProps {
    city: string;
    subtitle: string;
    image: string;
}

const LocationHero = ({ city, subtitle, image }: LocationHeroProps) => {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={`${city} landmark`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
                {/* Decorative Grid Overlay to match brand */}
                <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 grid-rows-6 h-full">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white/20"></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                        Now Serving {city}, PA
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                        BrownBoot Repairs & Remodeling - <span className="text-primary">{city}</span>
                    </h1>
                    <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
                        {subtitle}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="tel:724-995-3320"
                            className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-primary/20"
                        >
                            Call (724) 995-3320
                        </a>
                        <a
                            href="#contact"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all font-display"
                        >
                            Get Local Estimate
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LocationHero;
