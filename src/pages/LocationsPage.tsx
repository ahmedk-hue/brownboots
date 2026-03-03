import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Phone, Home } from 'lucide-react';
import SEO from '../components/SEO';

const locationsData = [
    { name: "Irwin, PA", lat: 40.3340, lng: -79.7028 },
    { name: "Greensburg, PA", lat: 40.3015, lng: -79.5389 },
    { name: "Murrysville, PA", lat: 40.4212, lng: -79.6875 },
    { name: "Export, PA", lat: 40.4187, lng: -79.6209 },
    { name: "North Huntington, PA", lat: 40.3473, lng: -79.7428 },
    { name: "Jeanette, PA", lat: 40.3281, lng: -79.6153 },
];

const LocationsPage = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);
    const markersRef = useRef<{ [key: string]: any }>({});

    useEffect(() => {
        if (typeof window !== "undefined" && (window as any).L && mapRef.current && !mapInstance.current) {
            const L = (window as any).L;

            mapInstance.current = L.map(mapRef.current, {
                scrollWheelZoom: true
            }).setView([40.34, -79.63], 11);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstance.current);

            L.circle([40.34, -79.63], {
                color: '#FE0000',
                fillColor: '#FE0000',
                fillOpacity: 0.1,
                radius: 12000
            }).addTo(mapInstance.current);

            locationsData.forEach(loc => {
                const marker = L.marker([loc.lat, loc.lng]).addTo(mapInstance.current);
                marker.bindPopup(`<b>${loc.name}</b><br>Our Service Area`);
                markersRef.current[loc.name] = marker;
            });
        }

        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    const handleLocationClick = (loc: any) => {
        if (mapInstance.current && markersRef.current[loc.name]) {
            mapInstance.current.setView([loc.lat, loc.lng], 13, {
                animate: true,
                duration: 1
            });
            markersRef.current[loc.name].openPopup();

            // Scroll to map on small screens
            if (window.innerWidth < 1024) {
                mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };

    const additionalTowns = ["Penn Trafford", "Delmont", "Harrison City"];

    return (
        <div className="pt-24 pb-16">
            <SEO
                title="Service Areas | BrownBoot Repairs & Remodeling"
                description="We proudly serve Westmoreland County and surrounding areas, including Irwin, Greensburg, Murrysville, and more. Quality remodeling where you live."
            />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10">
                    <div className="grid grid-cols-6 grid-rows-6 h-full">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white/20"></div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Westmoreland County Proud</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                            Areas We <span className="text-primary">Serve</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Based in Manor, PA, we are your local experts for high-quality repairs and remodeling. Click a location below to view it on our interactive map.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Map Section */}
            <section className="py-24 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                        <div className="relative min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                            <div ref={mapRef} className="absolute inset-0 z-0 bg-slate-200" />
                            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-100 text-xs font-bold text-slate-600 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                Scroll to Zoom • Drag to Move
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 tracking-tight">Interactive Service Map</h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed italic">
                                "At BrownBoot, we don't just work in these neighborhoods—we live here. Being local means we understand the specific needs of Westmoreland County homes."
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {locationsData.map((loc, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleLocationClick(loc)}
                                        className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-left group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-primary transition-all">
                                            <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-800 group-hover:text-primary transition-colors">{loc.name}</span>
                                            <span className="text-xs text-slate-500 font-medium">Click to view</span>
                                        </div>
                                    </button>
                                ))}
                                {additionalTowns.map((town, index) => (
                                    <div
                                        key={index + 100}
                                        className="flex items-center gap-4 p-5 bg-slate-50/50 rounded-xl border border-dashed border-slate-200"
                                    >
                                        <MapPin className="w-5 h-5 text-slate-400" />
                                        <span className="font-bold text-slate-500">{town}, PA</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Local Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
                            <Home className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Community Knowledge</h3>
                            <p className="text-slate-600">Deep understanding of local architecture and building standards in Westmoreland County.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
                            <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Faster Response</h3>
                            <p className="text-slate-600">Proximity allows for efficient scheduling and high-priority customer support.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
                            <Phone className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Accountability</h3>
                            <p className="text-slate-600">We take pride in our reputation among our neighbors and community members.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 pb-16 text-center">
                <div className="bg-slate-900 rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to start your local project?</h2>
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

export default LocationsPage;
