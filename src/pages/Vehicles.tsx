import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Settings, ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

const filters = ["All", "New", "Used", "SUV", "Sedan", "Trucks"];

export function VehiclesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const { data, error } = await supabase.from('vehicles').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        setVehicles(data || []);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  const filteredVehicles = vehicles.filter((v) =>
    activeFilter === "All"
      ? true
      : v.body_type === activeFilter || v.condition === activeFilter,
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
            Premium <span className="text-gold-500">Vehicles</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Discover our curated selection of luxury and utility vehicles. We also facilitate the high-quality import and export of vehicles to and from Uganda.
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
        ) : filteredVehicles.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            No vehicles found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-navy-900/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                    {vehicle.condition}
                  </div>
                  <img
                    src={vehicle.image_url}
                    alt={vehicle.make_model}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                      {vehicle.make_model}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-semibold tracking-wide border border-gray-100">
                        {vehicle.body_type}
                      </span>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-semibold tracking-wide border border-gray-100">
                        <Settings size={12} className="text-gold-500" />
                        {vehicle.transmission}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-50">
                    <div className="flex flex-col mb-6">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Price</span>
                      <span className="text-3xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                        {vehicle.price.includes('M') ? `${vehicle.price} UGX` : vehicle.price}
                      </span>
                    </div>

                    <a 
                      href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I am interested in the vehicle: ${vehicle.make_model} listed for ${vehicle.price}.`)}`}
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
