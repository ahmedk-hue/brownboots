
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Landmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/shared/ServiceFAQ';
import RelatedProjects from '../../components/locations/RelatedProjects';
import SEO from '../../components/SEO';

const Murrysville = () => {
    const city = "Murrysville";
    const fullCity = "Murrysville, PA";

    const faqs = [
        {
            question: `How does the building permit process work in ${city} Municipality?`,
            answer: `Murrysville is a Home Rule Municipality with its own specific unified development code. We coordinate closely with the municipal building department to ensure all additions, basement finishing, and major structural changes meet their rigorous local standards.`
        },
        {
            question: `Which neighborhoods in Murrysville do you serve?`,
            answer: `We serve all of Murrysville, from established neighborhoods like Franklin Estates and Murrysville Heights to newer developments like Blackthorne Estates and Siena Ridge.`
        },
        {
            question: `How do you handle foundations on the hilly terrain of the Franklin Regional area?`,
            answer: `The terrain in neighborhoods like Sardis Road or the slopes near the Tree Sign requires specific engineering. We utilize debris-free backfill and engineered drainage to account for the local silt loam and the elevation changes common in Murrysville.`
        },
        {
            question: `Are you a registered contractor for WPJWA and MAWC?`,
            answer: `Yes. Depending on your location in Murrysville, you may be served by either the Western Pennsylvania Joint Water Authority (WPJWA) or MAWC. We coordinate all necessary plumbing segment approvals for your remodel regardless of the district.`
        }
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Expert Home Remodeling | BrownBoot`}
                description={`Premium home remodeling in ${fullCity}. Specializing in luxury kitchens, master baths, and custom home transformations throughout the Norwin area.`}
                keywords={`Murrysville PA Remodeling, Home Repair Murrysville, Kitchen Remodel Murrysville PA, Bathroom Renovation Murrysville, ${fullCity} Contractor`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Murrysville's local remodeling experts. Specializing in high-end transformations for Franklin Regional area homeowners.`}
                image="/logo-primary.png"
                url={`https://brownbootrr.com/locations/murrysville`}
                telephone="724-995-3320"
                address={{ streetAddress: "115 McMahon Dr.", addressLocality: "Manor", addressRegion: "PA", postalCode: "15665", addressCountry: "US" }}
                geo={{ latitude: 40.4212, longitude: -79.6875 }}
                areaServed={[{ name: city, wikidataId: "Q1017387" }]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24345.8436402434!2d-79.6875!3d40.4212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834db9f79391ab1%3A0x6337a5be893c52e1!2sMurrysville%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`From the iconic Tree Sign to the sprawling estates of Franklin Regional, we're building the future of ${city} one masterpiece at a time.`}
            />

            <RelatedProjects city={city} />

            {/* Hyper-Local Advantage Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Murrysville Expert Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Deep Roots in the <span className="text-primary">Franklin Regional Area</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Murrysville's unique "Home Rule" municipality status and hilly topography demand a contractor with specialized local knowledge. From the spacious plans of <strong>Franklin Estates</strong> to the wooded slopes of <strong>Murrysville Heights</strong>, we understand the specific engineering and zoning requirements of our community.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Hilly Topography & Slab Engineering Specialist</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Franklin Regional Community Partnership</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>WPJWA & MAWC District Coordination</span>
                                </div>
                            </div>

                            <p className="text-slate-600 italic border-l-4 border-primary pl-6 py-2">
                                "Whether we're finishing a luxury basement in <strong>Blackthorne Estates</strong> or transforming a kitchen in <strong>Siena Ridge</strong>, we treat every Murrysville home as a landmark of quality."
                            </p>
                        </motion.div>

                        <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-display font-bold mb-6">Murrysville Building Standards</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Our familiarity with Murrysville's Unified Development Code and our relationship with the local municipal planners ensures your high-end project moves smoothly from concept to completion.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <Landmark className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Home Rule Municipality Knowledge</h4>
                                            <p className="text-sm text-slate-400">Expertise in local zoning and development codes.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Neighborhood Mapping</h4>
                                            <p className="text-sm text-slate-400">Serving <strong>Sardis Road</strong>, <strong>Blackthorne</strong>, and beyond.</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-4 rounded-xl font-bold hover:bg-red-700 transition-all font-display"
                                >
                                    Start Your Murrysville Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24345.8436402434!2d-79.6875!3d40.4212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834db9f79391ab1%3A0x6337a5be893c52e1!2sMurrysville%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Murrysville Tree Sign / Route 22",
                        text: "Head East on Route 22. We serve all primary residential subdivisions branching off the William Penn Highway corridor."
                    },
                    {
                        from: "Franklin Regional High School Area",
                        text: "We are frequently active on-site in neighborhoods surrounding the school campus, including Franklin Estates and Settlers Ridge."
                    }
                ]}
            />

            <ServiceFAQ faqs={faqs} title={`${city} Remodeling FAQ`} />

            {/* Local Conversion Guide */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="bg-white rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
                        <FileText className="w-16 h-16 text-primary mx-auto mb-8" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Planning a Remodel in {city}?</h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Don't start without the local data. Our <strong>Murrysville Homeowner's Guide</strong> includes current permit fee estimates and Franklin Regional-area delivery costs for 2025.
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
        </>
    );
};

export default Murrysville;
