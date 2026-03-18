import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, ArrowRight, Loader2, Info } from "lucide-react";
import { supabase } from "../lib/supabase";

const filters = ["All", "For Sale", "For Rent", "Apartments"];

export function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [properties, setProperties] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data, error } = await supabase.from('properties').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        setProperties(data || []);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((p) =>
    activeFilter === "All" ? true : p.status === activeFilter || p.property_type === activeFilter,
  );

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-navy-900 text-white pt-32 pb-20 px-4 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Exclusive <span className="text-gold-500">Properties</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Find your perfect home, office, or investment property.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gold-500 text-navy-900 shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-gold-500" size={48} />
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            No properties found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 gold-glow-hover group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-navy-900/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                    {property.status}
                  </div>
                  <img
                    src={property.image_url}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <MapPin size={16} className="mr-1.5 text-gold-500" />
                      <span className="text-sm font-medium tracking-wide">{property.location}</span>
                    </div>
                    
                    {property.description && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                        <div className="flex items-start gap-2">
                          <Info size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600 leading-relaxed italic line-clamp-2">
                            {property.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-50">
                    <div className="flex flex-col mb-6">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Price</span>
                      <span className="text-3xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                        {property.price.includes('M') ? `${property.price} UGX` : property.price}
                      </span>
                    </div>

                    <a 
                      href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I am interested in the property: ${property.title} listed for ${property.price}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-navy-900 text-white py-4 rounded-2xl font-bold hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 shadow-lg shadow-navy-900/10 hover:shadow-gold-500/20 active:scale-95"
                    >
                      Inquire Now <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
