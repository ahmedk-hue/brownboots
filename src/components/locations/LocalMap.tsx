
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

interface Direction {
    from: string;
    text: string;
}

interface LocalMapProps {
    city: string;
    mapEmbedUrl: string;
    directions: Direction[];
}

const LocalMap = ({ city, mapEmbedUrl, directions }: LocalMapProps) => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Directions Panel */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Local Presence</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                                Serving the {city} Community
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We are proudly based in Westmoreland County and serve families throughout {city} and surrounding neighborhoods. Our local presence ensures we're never far from your doorstep when you need us most.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-display font-bold text-slate-800 flex items-center gap-2">
                                <Navigation className="w-5 h-5 text-primary" />
                                Directions & Neighborhoods
                            </h3>
                            {directions.map((dir, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 italic">
                                    <h4 className="font-bold text-slate-900 not-italic mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        {dir.from}
                                    </h4>
                                    <p className="text-slate-600">{dir.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-slate-900 rounded-2xl text-white">
                            <h4 className="font-bold mb-2">Service Radius</h4>
                            <p className="text-slate-400 text-sm">
                                We serve all of {city} proper, including nearby townships and residential subdivisions within a 15-mile radius of our Manor headquarters.
                            </p>
                        </div>
                    </div>

                    {/* Map Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative min-h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
                    >
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${city} Area Map`}
                        />
                        <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-slate-100 text-xs font-bold text-slate-600">
                            <MapPin className="w-3 h-3 text-primary inline mr-1" />
                            Core Service Area
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocalMap;
