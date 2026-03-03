
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
            question: `What is the permit process for kitchen or bath remodels in the City of ${city}?`,
            answer: `The City of Greensburg Department of Planning & Development requires permits for major structural changes, plumbing extensions, or electrical circuit additions. We handle the submission of your certificate of insurance and detailed plans to the Planning and Development Office to expedite approval.`
        },
        {
            question: `How long does plan review typically take in ${city}?`,
            answer: `For residential projects, the City of Greensburg typically reviews and issues permits within 10-15 business days. Our established relationship with local code enforcement helps ensure our documentation meets all requirements on the first submission.`
        },
        {
            question: `Which water company serves ${city} homeowners?`,
            answer: `Greensburg is primarily served by the Municipal Authority of Westmoreland County (MAWC), which draws from the Youghiogheny River and Beaver Run. We coordinate all necessary inspections for projects involving primary line connections or major fixture upgrades.`
        },
        {
            question: `Are there specific foundation concerns for ${city} home additions?`,
            answer: `Greensburg's geology consists largely of Silty Clay Loam. This soil can retain significant moisture, so we emphasize robust drainage systems and specialized footer engineering for additions to prevent the common settling issues found in Central Westmoreland homes.`
        }
    ];

    const localPoints = [
        "City of Greensburg Planning & Development Expertise",
        "MAWC Water Infrastructure Coordination",
        "Downtown Historic District Design Adherence",
        "Silty Clay Loam Foundation Engineering",
        "Certified Pennsylvania UCC Compliance",
        "Landmark Proximity (Palace Theatre & Museum Area)"
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Custom Home Remodeling | BrownBoot`}
                description={`Elevate your ${fullCity} home with BrownBoot's premium remodeling services. Specializing in luxury kitchens, baths, and historic preservation in the heart of Westmoreland County.`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Premier home remodeler serving ${fullCity}. Expert kitchen, bath, and basement transformations near the Westmoreland Museum of American Art.`}
                image="https://images.unsplash.com/photo-1599809275671-b59421ac7b40?q=80&w=2070&auto=format&fit=crop"
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
                    latitude: 40.3015,
                    longitude: -79.5389
                }}
                areaServed={[
                    { name: city, wikidataId: "Q1017366" },
                    { name: "South Greensburg" },
                    { name: "Southwest Greensburg" }
                ]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24355.70018243644!2d-79.5389!3d40.3015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834db4f79391ab1%3A0x6337a5be893c52e1!2sGreensburg%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`From the historic charm of the Palace Theatre area to the modern developments of Twin Lakes, we're the premier choice for ${city} homeowners seeking quality.`}
                image="https://images.unsplash.com/photo-1599809275671-b59421ac7b40?q=80&w=2070&auto=format&fit=crop"
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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Proven Local Expert</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Custom Craftsmanship for {city} Families
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Building in the {city} area requires navigating a unique mix of mid-century architectural styles and the rigorous standards of the <strong>Greensburg Downtown Historic District</strong>. We specialize in updating these legacy homes while adhering to modern building codes.
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
                                    <h3 className="text-2xl font-display font-bold mb-6">Greensburg Building Codes</h3>
                                    <p className="text-slate-400 mb-8 leading-relaxed">
                                        Whether you're near <strong>Seton Hill</strong> or the <strong>Westmoreland Mall</strong>, we ensure every project meets the latest PA UCC requirements and local safety ordinances.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                                <Landmark className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Palace Theatre Corridor</h4>
                                                <p className="text-sm text-slate-400 font-medium italic">Expertise in urban remodeling constraints.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                                <MapPin className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Twin Lakes Expansion</h4>
                                                <p className="text-sm text-slate-400 font-medium italic">Specialized soil mitigation for clay-heavy lots.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-4 rounded-xl font-bold hover:bg-red-700 transition-all font-display"
                                    >
                                        Inquire About Your Project
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
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24355.70018243644!2d-79.5389!3d40.3015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834db4f79391ab1%3A0x6337a5be893c52e1!2sGreensburg%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Westmoreland County Courthouse",
                        text: "Located in the heart of the city, we serve all historic neighborhoods branching off Main Street and Otterman Street."
                    },
                    {
                        from: "Route 30 / Westmoreland Mall",
                        text: "We provide easy mobilization for projects throughout the retail corridor and surrounding residential subdivisions like Saybrook and Charter Oak."
                    }
                ]}
            />

            {/* Local Conversion Guide */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
                        <FileText className="w-16 h-16 text-primary mx-auto mb-8" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Building in {city}?</h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Navigate the City of Greensburg's permit requirements with confidence. Our <strong>Custom Home Guide</strong> includes local tap fee data and 2025 labor market estimates for Central Westmoreland.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20 font-display"
                        >
                            Download {city} Cost Guide
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title={`${city} Remodeling FAQ`} />
        </>
    );
};

export default Greensburg;
