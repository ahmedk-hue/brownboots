import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Phone, Home, Users, ShieldCheck, Clock } from 'lucide-react';
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
                description="Proudly serving Westmoreland County, PA. Discover the BrownBoot difference in Irwin, Greensburg, Murrysville, and surrounding communities."
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
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Westmoreland County Roots</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                            Your Local <span className="text-primary">Remodeling Partners</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Based in Manor, PA, we've built our reputation on quality, integrity, and deep community roots. We don't just work here—we're your neighbors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The BrownBoot Difference Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Built for Westmoreland County Homeowners
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                At BrownBoot Repairs & Remodeling, we understand that your home is more than just a property—it's an investment in your family's future. Our local expertise means we know the specific architectural styles, building codes, and community standards that matter most in our region.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xl mb-1">Unwavering Integrity</h4>
                                        <p className="text-slate-600 italic">We believe in transparent pricing and honest timelines. No surprises, just results.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xl mb-1">Community First</h4>
                                        <p className="text-slate-600 italic">Our reputation is our most valuable asset. We treat every home as if it were our own.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xl mb-1">Reliable Commitment</h4>
                                        <p className="text-slate-600 italic">Being local allows us to be present and responsive throughout your entire project.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Our Promise to You</h3>
                                <p className="text-slate-700 italic mb-8 border-l-4 border-primary pl-6 py-2">
                                    "When we step into your home, we bring decades of combined experience and a personal commitment to excellence. We don't consider a job finished until it exceeds your expectations."
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-800 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        Direct Communication with Owners
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-800 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        Precision Craftsmanship in Every Detail
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-800 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        Clean & Respectful Job Sites
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-800 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        Lifetime Quality Materials
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Communities Grid Section with Map */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Communities We Proudly Serve</h2>
                        <p className="text-lg text-slate-600">
                            Based in Manor, PA, our primary service area includes a 15-20 mile radius. Click a community below to see it on our interactive area map.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="space-y-4 order-2 lg:order-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {locationsData.map((loc, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleLocationClick(loc)}
                                        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all hover:shadow-md text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                                <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="font-bold text-slate-800 text-lg">{loc.name}</span>
                                        </div>
                                    </button>
                                ))}
                                {additionalTowns.map((town, index) => (
                                    <div
                                        key={index + 100}
                                        className="bg-slate-50/50 p-6 rounded-2xl border border-dashed border-slate-200 flex items-center gap-4"
                                    >
                                        <MapPin className="w-5 h-5 text-slate-400" />
                                        <span className="font-bold text-slate-500 text-lg">{town}, PA</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm italic text-slate-600 text-sm text-center">
                                Don't see your town? We occasionally travel beyond our primary radius for specialized remodeling projects.
                                <a href="tel:724-995-3320" className="text-primary font-bold ml-1 hover:underline">Inquire here →</a>
                            </div>
                        </div>

                        <div className="relative min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white group order-1 lg:order-2">
                            <div ref={mapRef} className="absolute inset-0 z-0 bg-slate-200" />
                            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-100 text-xs font-bold text-slate-600 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                Scroll to Zoom • Click Communities to Locate
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
                                Ready to transform your <span className="text-primary">local home?</span>
                            </h2>
                            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                                Join the hundreds of Westmoreland County families who trust BrownBoot for their most important remodeling needs.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a
                                    href="tel:724-995-3320"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
                                >
                                    Call Today: (724) 995-3320
                                </a>
                                <a
                                    href="/#contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                                >
                                    Online Estimate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationsPage;
