import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Bed, Bath, Square, ArrowRight, Loader2 } from "lucide-react";
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
                  <div className="absolute top-4 left-4 z-10 bg-navy-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.status}
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-sm font-bold">
                    {property.price}
                  </div>
                  <img
                    src={property.image_url}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin size={16} className="mr-1 text-gold-500" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-b border-gray-100 py-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Bed size={18} className="text-navy-900" />
                      <span className="font-medium">{property.beds || 0}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Bath size={18} className="text-navy-900" />
                      <span className="font-medium">{property.baths || 0}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Square size={18} className="text-navy-900" />
                      <span className="font-medium">{property.sq_ft || 0} sqft</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-gray-50 text-navy-900 py-3 rounded-xl font-semibold hover:bg-gold-500 transition-colors">
                    View Details <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
