import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Users, CheckCircle2, ArrowRight, Loader2, Car, Building, Ticket, FileText } from "lucide-react";
import { supabase } from "../lib/supabase";
import { ExpressServices } from "../components/ExpressServices";

export function ToursPage() {
  const [destinations, setDestinations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data, error } = await supabase.from('tours').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        setDestinations(data || []);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTours();
  }, []);
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Uganda Landscape"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Explore the <span className="text-gold-500">Pearl of Africa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 font-light"
          >
            Unforgettable journeys, expertly crafted by King Trust.
          </motion.p>
        </div>
      </div>

      <ExpressServices />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
            Featured Destinations
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-gold-500" size={48} />
          </div>
        ) : destinations.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            No tours available at the moment. Please check back later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={dest.image_url}
                    alt={dest.package_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3">
                    {dest.package_name}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">{dest.description}</p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={18} className="text-gold-500" />
                      <span className="font-medium">{dest.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin size={18} className="text-gold-500" />
                      <span className="font-medium">{dest.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-navy-900">
                      {dest.price}
                    </span>
                    <a 
                      href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I would like to book the tour: ${dest.package_name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gold-500 text-navy-900 px-6 py-2 rounded-full font-semibold hover:bg-gold-400 transition-colors"
                    >
                      Book Now <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Travel Essentials Section Redesign */}
        <div className="mb-24 relative overflow-hidden bg-navy-900 rounded-[3rem] p-10 md:p-20 text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif font-bold mb-8"
              >
                Journey <span className="text-gold-500">Excellence</span>
              </motion.h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Beyond the destination, we ensure every detail of your journey is handled with precision. From premium fleet rentals to seamless ticketing, we are your travel logistics partner.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Safari Car Hire", desc: "Premium 4x4 Land Cruisers & Buses.", icon: Car },
                  { title: "Hotel Reservations", desc: "Top-tier accommodation booking.", icon: Building },
                  { title: "Air Ticketing", desc: "Domestic & global flight routes.", icon: Ticket },
                  { title: "Visa Assistance", desc: "Expert guidance on all travel docs.", icon: FileText }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-gold-500 transition-colors uppercase tracking-wider text-sm">{item.title}</h3>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Travel Logistics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-900/20"></div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-navy-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Plan Your Custom Safari
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              Don't see exactly what you're looking for? Let our travel experts
              design a bespoke itinerary tailored to your preferences.
            </p>

            <form className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-navy-800 border border-navy-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-navy-800 border border-navy-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Destination / Interests
                </label>
                <input
                  type="text"
                  className="w-full bg-navy-800 border border-navy-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="e.g. Gorilla Trekking, Safari, Honeymoon"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-navy-800 border border-navy-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Tell us about your ideal trip..."
                ></textarea>
              </div>
              <a
                href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I would like to plan a custom safari.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-gold-500 text-navy-900 py-4 rounded-xl font-bold text-lg hover:bg-gold-400 transition-colors"
              >
                Send Inquiry via WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
