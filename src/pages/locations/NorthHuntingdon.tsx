
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Landmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/shared/ServiceFAQ';
import RelatedProjects from '../../components/locations/RelatedProjects';
import SEO from '../../components/SEO';

const NorthHuntingdon = () => {
    const city = "North Huntingdon";
    const fullCity = "North Huntingdon, PA";

    const faqs = [
        {
            question: `How does the building permit process work in ${city} Township?`,
            answer: `${city} Township requires zoning and building permits (PA UCC compliant) for most additions and major renovations. We handle all documentation for the township planning commission, ensuring your project meets local setback and drainage requirements.`
        },
        {
            question: `Do you specialize in patio home remodeling near Indian Lake?`,
            answer: `Yes, we have specific experience with custom transformations in developments like Indian Lake Point and the surrounding residential subdivisions. We understand the specific architectural styles and community standards of these newer North Huntingdon communities.`
        },
        {
            question: `How do you handle soil drainage in neighborhoods like Lincoln Hills or Penns Woods?`,
            answer: `Much of North Huntingdon sits on the Westmoreland series silt loam. In developments like Lincoln Hills or Penns Woods, managing runoff is critical for structural longevity. Our site preparation includes engineered drainage solutions tailored to this specific local soil terrain.`
        },
        {
            question: `Which Norwin area neighborhoods do you serve?`,
            answer: `We serve all of North Huntingdon, including Ardara, Sunset Valley, Circleville, Mountain Ridge Estates, and the residential areas surrounding the Route 30 corridor. No matter the neighborhood, we're your local expert choice.`
        }
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Expert Home Remodeling | BrownBoot`}
                description={`Premium home remodeling in ${fullCity}. From luxury kitchen transformations in Indian Lake Point to custom additions in Penns Woods and Lincoln Hills.`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Premier home remodeler serving ${fullCity}. Specialized in high-end renovations and custom additions across the Norwin area.`}
                image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                url={`https://brownbootrr.com/locations/north-huntingdon`}
                telephone="724-995-3320"
                address={{ streetAddress: "115 McMahon Dr.", addressLocality: "Manor", addressRegion: "PA", postalCode: "15665", addressCountry: "US" }}
                geo={{ latitude: 40.3262, longitude: -79.7423 }}
                areaServed={[{ name: city, wikidataId: "Q1017387" }]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48694.04018243644!2d-79.7423!3d40.3262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834e9e079391ab1%3A0x6337a5be893c52e1!2sNorth%20Huntingdon%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`From the waterfront beauty of Indian Lake Point to the established neighborhoods of Penns Woods and Kerber Farms, we serve the entire Norwin community.`}
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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The North Huntingdon Expert Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                                Building Value in the <span className="text-primary">Norwin Corridor</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                North Huntingdon's rapid growth has created a demand for high-quality, professional remodeling that respects the architectural integrity of our diverse neighborhoods. From the custom patio homes of <strong>Indian Lake Point</strong> to the established family homes in <strong>Penns Woods</strong>, we bring the expertise required to navigate local township codes and geological conditions.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Specialized Patio Home Customization</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Township Planning & Zoning Expert Coordination</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>Engineered Site Drainage (Westmoreland Soils)</span>
                                </div>
                            </div>

                            <p className="text-slate-600 italic border-l-4 border-primary pl-6 py-2">
                                "Serving the families of North Huntingdon isn't just business—it's about strengthening the communities where we live and work, from <strong>Circleville</strong> to the edges of <strong>Ardara</strong>."
                            </p>
                        </motion.div>

                        <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-display font-bold mb-6">N. Huntingdon Building Standards</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    We manage the entire permit process through the North Huntingdon Township offices, ensuring every project—from a finished basement to a custom kitchen—is built to code and with integrity.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <Landmark className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Code Compliance Knowledge</h4>
                                            <p className="text-sm text-slate-400">Deep familiarity with Route 30 corridor zoning.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Neighborhood Logistics</h4>
                                            <p className="text-sm text-slate-400">Efficient staging for <strong>Mountain Ridge</strong> & <strong>Sunset Valley</strong>.</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-4 rounded-xl font-bold hover:bg-red-700 transition-all font-display"
                                >
                                    Start Your N. Huntingdon Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48694.04018243644!2d-79.7423!3d40.3262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834e9e079391ab1%3A0x6337a5be893c52e1!2sNorth%20Huntingdon%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Indian Lake Park",
                        text: "We are frequently active at properties surrounding the lake and nearby custom patio home developments like Indian Lake Point."
                    },
                    {
                        from: "Norwin High School Area",
                        text: "Just minutes from the high school, we're the go-to contractor for premium updates in neighborhoods like Penns Woods and Circleville."
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
                            Don't start without the local data. Our <strong>North Huntingdon Homeowner's Guide</strong> includes current permit fee estimates and Norwin-area delivery logistics for 2025.
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

export default NorthHuntingdon;
