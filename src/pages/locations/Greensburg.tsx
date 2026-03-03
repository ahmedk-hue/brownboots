
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Landmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/shared/ServiceFAQ';
import RelatedProjects from '../../components/locations/RelatedProjects';
import SEO from '../../components/SEO';

const Greensburg = () => {
    const city = "Greensburg";
    const fullCity = "Greensburg, PA";

    const faqs = [
        {
            question: `Do you handle historic preservation in Academy Hill?`,
            answer: `Yes, we are very familiar with the architectural standards of the Academy Hill Historic District. We specialize in interior remodeling that respects the historic character of these early 20th-century homes while providing modern efficiency.`
        },
        {
            question: `What are the permit requirements for the City of Greensburg?`,
            answer: `The City of Greensburg (and neighboring Southwest/South Greensburg) has specific zoning and building permit processes. We handle all documentation and coordination with the city's planning department to ensure your project complies with all local ordinances.`
        },
        {
            question: `How does the local silty clay loam soil affect my home addition?`,
            answer: `The Guernsey-Culleoka-Weikert soil association in the Greensburg area, particularly in hilly neighborhoods like Hilltop or near the Country Club, can be prone to specific drainage challenges. We design our footings and foundation water management to account for these silty clay compositions.`
        },
        {
            question: `Are you a registered contractor for the MAWC service area?`,
            answer: `Yes, we are a registered contractor within the Municipal Authority of Westmoreland County service area. We coordinate all necessary plumbing inspections and line segment approvals required for major kitchen or bathroom transformations in Greensburg.`
        }
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Quality Home Remodeling | BrownBoot`}
                description={`Premium home remodeling in ${fullCity}. From historic Academy Hill estates to modern transformations in Charter Oak and Saybrook Village.`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Greensburg's local remodeling experts. Specializing in high-end kitchen and bath transformations for homeowners in the County Seat.`}
                image="https://images.unsplash.com/photo-1576013551627-0cfde31682a1?q=80&w=2070&auto=format&fit=crop"
                url={`https://brownbootrr.com/locations/greensburg`}
                telephone="724-995-3320"
                address={{ streetAddress: "115 McMahon Dr.", addressLocality: "Manor", addressRegion: "PA", postalCode: "15665", addressCountry: "US" }}
                geo={{ latitude: 40.3015, longitude: -79.5389 }}
                areaServed={[{ name: city, wikidataId: "Q1017387" }]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24345.8436402434!2d-79.5389!3d40.3015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834db9f79391ab1%3A0x6337a5be893c52e1!2sGreensburg%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`In the historic County Seat of Westmoreland, we're blending classic Greensburg charm with modern luxury from Academy Hill to Charter Oak.`}
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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Greensburg Expert Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Crafting Excellence in the <span className="text-primary">County Seat</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Greensburg's diverse housing stock—from the century-old brick homes of <strong>Academy Hill</strong> to the mid-century plans in <strong>Maplewood Terrace</strong>—requires a contractor with deep regional knowledge. We understand the specific structural challenges of the hilly terrain and the silty clay loam soils that define our local geography.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Academy Hill Historic District Specialist</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Hilly Terrain Foundation Expertise</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>MAWC Plumbing Infrastructure Standards</span>
                                </div>
                            </div>

                            <p className="text-slate-600 italic border-l-4 border-primary pl-6 py-2">
                                "From the quiet streets of <strong>Charter Oak</strong> to the bustling neighborhoods surrounding the Courthouse, our goal is to build something that lasts for generations of Greensburg families."
                            </p>
                        </motion.div>

                        <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-display font-bold mb-6">Greensburg Building Standards</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Navigating the City of Greensburg's specific zoning requirements and PA UCC codes is what we do best. Our relationship with local code enforcement ensures your project is permitted correctly and efficiently.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <Landmark className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Historic Compliance</h4>
                                            <p className="text-sm text-slate-400">Preserving the integrity of downtown Greensburg's heritage.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Neighborhood Mapping</h4>
                                            <p className="text-sm text-slate-400">Serving <strong>Saybrook Village</strong> & <strong>Underwood</strong> neighborhoods.</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-4 rounded-xl font-bold hover:bg-red-700 transition-all font-display"
                                >
                                    Start Your Greensburg Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24345.8436402434!2d-79.5389!3d40.3015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834db9f79391ab1%3A0x6337a5be893c52e1!2sGreensburg%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Palace Theatre / Output",
                        text: "Head North toward Academy Hill. We are frequently active in the historic district, serving established Greensburg families."
                    },
                    {
                        from: "Seton Hill University Area",
                        text: "We serve the entire residential corridor branching out from the university, including Hilltop and the downtown surrounding areas."
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
                            Don't start without the local data. Our <strong>Greensburg Homeowner's Guide</strong> includes current permit fee estimates and County Seat material delivery costs for 2025.
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

export default Greensburg;
