
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
            answer: `${city} Township requires zoning and building permits for most additions and major renovations. We handle all documentation for the township planning commission to ensure your project stays on track.`
        },
        {
            question: `Which neighborhoods in ${city} do you serve?`,
            answer: `We serve all of ${city}, including colonial estates, modern subdivisions near Indian Lake, and the residential areas surrounding Norwin High School.`
        }
    ];

    return (
        <>
            <SEO
                title={`${fullCity} Expert Home Remodeling | BrownBoot`}
                description={`Premium home remodeling in ${fullCity}. From custom kitchens to luxury bathroom renovations, trust North Huntingdon's local experts at BrownBoot.`}
            />

            <LocationSchema
                name={`BrownBoot Repairs & Remodeling - ${city}`}
                description={`Premier home remodeler serving ${fullCity}. Specialized in luxury renovations and custom cabinetry across the Norwin area.`}
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
                subtitle={`From the shores of Indian Lake to the sprawling estates of Norwin, we're the premier choice for custom home transformations in ${city}.`}
                image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
            />

            <RelatedProjects city={city} />

            <LocalMap
                city={city}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48694.04018243644!2d-79.7423!3d40.3262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834e9e079391ab1%3A0x6337a5be893c52e1!2sNorth%20Huntingdon%2C%20PA!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Indian Lake Park",
                        text: "We are frequently on-site at properties surrounding the lake and nearby residential subdivisions."
                    },
                    {
                        from: "Norwin High School Area",
                        text: "Just minutes from the high school, we're the go-to contractor for family home updates and expansions."
                    }
                ]}
            />

            <ServiceFAQ faqs={faqs} title={`${city} Remodeling FAQ`} />
        </>
    );
};

export default NorthHuntingdon;
