import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Irwin, PA", lat: 40.3340, lng: -79.7028 },
  { name: "Greensburg, PA", lat: 40.3015, lng: -79.5389 },
  { name: "Murrysville, PA", lat: 40.4212, lng: -79.6875 },
  { name: "Export, PA", lat: 40.4187, lng: -79.6209 },
  { name: "North Huntington, PA", lat: 40.3473, lng: -79.7428 },
  { name: "Jeanette, PA", lat: 40.3281, lng: -79.6153 },
];

export function Locations() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<{ [key: string]: any }>({});

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).L && mapRef.current && !mapInstance.current) {
      const L = (window as any).L;

      // Initialize map centered in Westmoreland County area
      mapInstance.current = L.map(mapRef.current, {
        scrollWheelZoom: true // Enabled for better interactivity as requested
      }).setView([40.34, -79.63], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current);

      // Add a service area circle
      L.circle([40.34, -79.63], {
        color: '#FE0000',
        fillColor: '#FE0000',
        fillOpacity: 0.1,
        radius: 12000
      }).addTo(mapInstance.current);

      // Add markers for each location
      locations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng]).addTo(mapInstance.current);
        marker.bindPopup(`<b>${loc.name}</b><br>Expert Remodeling Service Area`);
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

      // Scroll map into view on mobile
      if (window.innerWidth < 1024) {
        mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section id="locations" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="flex-1 lg:max-w-xl">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Service Areas</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Serving Westmoreland County</h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Based in Manor, PA, we are proud to serve homeowners across Westmoreland County.
              Click on a location below to view it on our interactive map.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationClick(location)}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <MapPin className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-bold text-slate-800 group-hover:text-primary transition-colors">{location.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 relative min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <div ref={mapRef} className="absolute inset-0 z-0 bg-slate-200" />
            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-100 text-xs font-bold text-slate-600 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              Scroll to Zoom • Drag to Move
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10 bg-white/95 backdrop-blur shadow-xl p-4 rounded-2xl flex items-center gap-4 border border-slate-100 scale-90 md:scale-100 origin-bottom-left">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Local Manor Presence</p>
                <p className="text-sm text-slate-500">115 McMahon Dr. Manor, PA 15665</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
