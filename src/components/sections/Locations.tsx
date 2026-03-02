import { MapPin } from "lucide-react";

const locations = [
  "Irwin, PA",
  "Greensburg, PA",
  "Murrysville, PA",
  "Export, PA",
  "North Huntington, PA",
  "Jeanette, PA",
];

export function Locations() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Service Areas</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Serving Westmoreland County</h3>
            <p className="text-slate-600 mb-8 text-lg">
              We are proud to serve homeowners across Westmoreland County with reliable, high-quality remodeling services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-slate-800">{location}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
            {/* Placeholder for Map - In a real app, integrate Google Maps here */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50" />
            <div className="relative z-10 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-bold text-xl text-slate-900">Westmoreland County</p>
              <p className="text-slate-500">Pennsylvania</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
