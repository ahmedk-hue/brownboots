
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Landmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/shared/ServiceFAQ';
import RelatedProjects from '../../components/locations/RelatedProjects';
import SEO from '../../components/SEO';

const Irwin = () => {
    const city = "Irwin";
    const fullCity = "Irwin, PA";

    const faqs = [
        {
            question: `What are the typical building permit timelines in ${city} Borough?`,
            answer: `Timelines vary by project type, but most residential remodeling permits in Irwin Borough are processed within 2-3 weeks. Major structural additions involve a more rigorous review by the Planning & Zoning Department (Shari Martino's office) to ensure local code compliance.`
        },
        {
            question: `Which water authority serves homeowners in ${city}?`,
            answer: `The majority of ${city} and North Irwin residences are served by the Municipal Authority of Westmoreland County (MAWC). We handle the necessary coordination for inspections if your remodeling project involves primary line adjustments or significant plumbing overhaul.`
        },
        {
            question: `Are there specific soil concerns for home additions in ${city}?`,
            answer: `Irwin's landscape features a mix of well-drained loams and heavier "Alfisols" clay layers. For home additions or deck footings, we ensure precise engineering to account for the freeze-thaw cycles common in the Westmoreland series silt loams, preventing future settling.`
        },
        {
            question: `Does BrownBoot handle historic home remodeling in ${city}?`,
            answer: `Absolutely. We take great pride in working on the historic "Biggest Little Town" homes near Main Street and Pennsylvania Avenue. We focus on maintaining the aesthetic integrity of 19th-century architecture while modernizing the systems and interiors.`
        }
    ];

    const localPoints = [
        "MAWC Water Infrastructure Coordination",
        "Irwin Borough Planning & Zoning Compliance",
        "Historic Landmark Preservation Standards",
        "Westmoreland Series Soil Mitigation",
        "PA UCC (Uniform Construction Code) Adherence",
        "Local Landmark Proximity (Lamp Theatre Area)"
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Remodeling & Repairs | BrownBoot`}
                description={`Expert home remodeling in ${fullCity}. From historic Main Street renovations to modern bathroom overhauls, trust Irwin's local choice—BrownBoot Repairs & Remodeling.`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Premier home remodeler serving ${fullCity}. Specializing in kitchen and bathroom transformations in the Norwin area.`}
                image="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2072&auto=format&fit=crop" // Generic for now, landmarks preferred
                url={`https://brownbootrr.com/locations/${city.toLowerCase()}`}
                telephone="724-995-3320"
                address={{
                    streetAddress: "115 McMahon Dr.",
                    addressLocality: "Manor",
                    addressRegion: "PA",
                    postalCode: "15665",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.3340,
                    longitude: -79.7028
                }}
                areaServed={[
                    { name: city, wikidataId: "Q2063858" },
                    { name: "North Irwin" },
                    { name: "Norwin" }
                ]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12173.8436402434!2d-79.713532!3d40.334032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834e94b7e19277f%3A0x6337a5be893c52e1!2sIrwin%2C%20PA%2015642!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`From the historic storefronts of Main Street to the quiet neighborhoods of Norwin, we're building the future of ${city} one home at a time.`}
                image="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2072&auto=format&fit=crop"
            />

            {/* Local Context Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Local Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Deep Roots in the {city} Community
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed italic border-l-4 border-primary pl-6">
                                "As a founder who grew up right here in Irwin, I know these neighborhoods better than anyone. We're not just contractors—we're your neighbors, committed to preserving the integrity of Norwin area homes."
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {localPoints.map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="relative">
                            <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-display font-bold mb-6">Irwin Building Standards</h3>
                                    <p className="text-slate-400 mb-8 leading-relaxed">
                                        Navigating the <strong>Pennsylvania UCC</strong> and local <strong>Irwin Borough</strong> amendments requires a partner who knows the regional inspectors and code requirements inside and out.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                                <Landmark className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Norwin Historical District</h4>
                                                <p className="text-sm text-slate-400 font-medium italic">Compliance with local preservation aesthetics.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                                <MapPin className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Soil & Grade Management</h4>
                                                <p className="text-sm text-slate-400 font-medium italic">Engineering for Westmoreland series silt loam.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-4 rounded-xl font-bold hover:bg-red-700 transition-all font-display"
                                    >
                                        Start Your Irwin Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects city={city} />

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12173.8436402434!2d-79.713532!3d40.334032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834e94b7e19277f%3A0x6337a5be893c52e1!2sIrwin%2C%20PA%2015642!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "The Lamp Theatre / Main St",
                        text: "We are active throughout the downtown area. If you're near Main Street, we're your local expert for historic interior remodeling."
                    },
                    {
                        from: "Hwy 30 / Norwin Town Center",
                        text: "Just south of the Norwin Town Center, we serve all residential neighborhoods along the Pennsylvania Ave and 4th St corridors."
                    }
                ]}
            />

            {/* Local Conversion Guide */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
                        <FileText className="w-16 h-16 text-primary mx-auto mb-8" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Planning a Remodel in {city}?</h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Don't start without the local data. Our <strong>{city} Homeowner's Guide</strong> includes current permit fee estimates and Norwin-area material delivery costs for 2025.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20 font-display"
                        >
                            Get the {city} Guide
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title={`${city} Remodeling FAQ`} />
        </>
    );
};

export default Irwin;
