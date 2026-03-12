import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Settings, Calendar, Gauge, ArrowRight, Loader2 } from "lucide-react";
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
            Discover our curated selection of luxury and utility vehicles.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 gold-glow-hover group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-navy-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.condition}
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-sm font-bold">
                    {vehicle.price}
                  </div>
                  <img
                    src={vehicle.image_url}
                    alt={vehicle.make_model}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-1">
                    {vehicle.make_model}
                  </h3>
                  <h4 className="text-lg text-gray-600 mb-6">{vehicle.body_type}</h4>

                  <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} className="text-gold-500" />
                      <span className="font-medium text-sm">{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Gauge size={18} className="text-gold-500" />
                      <span className="font-medium text-sm">
                        {vehicle.mileage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 col-span-2">
                      <Settings size={18} className="text-gold-500" />
                      <span className="font-medium text-sm">
                        {vehicle.transmission}
                      </span>
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I am interested in the vehicle: ${vehicle.make_model} listed for ${vehicle.price}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gray-50 text-navy-900 py-3 rounded-xl font-semibold hover:bg-gold-500 transition-colors mt-auto"
                  >
                    Inquire Now <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
