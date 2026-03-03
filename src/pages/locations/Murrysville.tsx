
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
            question: `What is the building permit process in ${city} Municipality?`,
            answer: `The Municipality of Murrysville requires a Zoning Certificate as a prerequisite for any building permit. We manage the entire application through the Community Development department, typically seeing plan reviews completed within 15-30 days for major remodeling projects.`
        },
        {
            question: `Who provides water service for new construction in ${city}?`,
            answer: `Most of Murrysville is served by the Municipal Authority of Westmoreland County (MAWC), primarily utilizing the Beaver Run Reservoir. Some perimeter areas may connect to the Wilkinsburg-Penn Joint Water Authority (WPJWA). We verify your specific district tap fees during the planning phase.`
        },
        {
            question: `How does the local soil impact foundation design in ${city}?`,
            answer: `Murrysville sits on a predominant layer of Silt Loam. While generally stable, Western PA's slope and runoff patterns require expert grading and drainage planning. We ensure every addition or renovation accounts for these specific regional drainage requirements.`
        },
        {
            question: `Are ADUs or Accessory Structures allowed in ${city}?`,
            answer: `Yes, but ${city} maintains strict zoning ordinances regarding the footprint and setbacks for accessory units. We conduct a preliminary feasibility study to ensure your guest house or detached workshop meets all municipal land use standards.`
        }
    ];

    const localPoints = [
        "Murrysville Community Development Expertise",
        "MAWC & WPJWA Utility Coordination",
        "Silt Loam Soil Management & Grading",
        "Haymaker Gas Well Setback Knowledge",
        "Norwin Historical Society Context",
        "Landmark Proximity (Murrysville Tree Sign Area)"
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Expert Home Remodeling | BrownBoot`}
                description={`Unlock your home's potential in ${fullCity} with BrownBoot Repairs & Remodeling. Quality craftsmanship for Murrysville's premier neighborhoods and historic properties.`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Premier home remodeler serving ${fullCity}. Expert kitchen, bath, and custom carpentry near the historic Murrysville Tree Sign.`}
                image="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070&auto=format&fit=crop"
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
                    latitude: 40.4212,
                    longitude: -79.6875
                }}
                areaServed={[
                    { name: city, wikidataId: "Q1017381" },
                    { name: "Export" },
                    { name: "Franklin Regional Area" }
                ]}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48684.04018243644!2d-79.6875!3d40.4212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834eecf79391ab1%3A0x6337a5be893c52e1!2sMurrysville%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city={city}
                subtitle={`From the hills of the Murrysville Tree Sign to the newer developments of the Franklin Regional area, we're building with integrity in the 'Gateway to Westmoreland County'.`}
                image="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070&auto=format&fit=crop"
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
                                Custom Craftsmanship for {city} Homeowners
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Operating in the {city} Municipality requires a deep understanding of the <strong>Franklin Regional</strong> school district's community standards and the specific zoning ordinances governing the sprawling residential and light-commercial zones of the area.
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
                                    <h3 className="text-2xl font-display font-bold mb-6">Murrysville Building Protocol</h3>
                                    <p className="text-slate-400 mb-8 leading-relaxed">
                                        We specialize in navigating the <strong>Municipality of Murrysville's</strong> unique permitting timeline and land preservation requirements to ensure your project stays on schedule.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                                <Landmark className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Tree Sign Conservation Area</h4>
                                                <p className="text-sm text-slate-400 font-medium italic">Respecting landmarks in our hillside projects.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                                <MapPin className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Beaver Run Watershed</h4>
                                                <p className="text-sm text-slate-400 font-medium italic">Strict adherence to environmental impact codes.</p>
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
                </div>
            </section>

            <RelatedProjects city={city} />

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48684.04018243644!2d-79.6875!3d40.4212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834eecf79391ab1%3A0x6337a5be893c52e1!2sMurrysville%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Murrysville Tree Sign / Route 22",
                        text: "We serve all neighborhoods along the Route 22 corridor, from 'The Gateway' near Monroeville to the Export border."
                    },
                    {
                        from: "Murrysville Community Park",
                        text: "We are active in the residential areas surrounding the Community Park and Sardis Road neighborhoods."
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
                            Our <strong>{city} Custom Build Guide</strong> includes current tap fee data for MAWC/WPJWA and 2025 Franklin Regional zoning updates.
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

export default Murrysville;
