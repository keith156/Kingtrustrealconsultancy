import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Car,
  Map,
  Briefcase,
  Home,
  HardHat,
  Star,
  MapPin,
  Clock,
  Calendar,
  Gauge,
  Settings,
  Bed,
  Bath,
  Loader2,
  Leaf,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Counter } from "../components/Counter";
import { Typewriter } from "../components/Typewriter";
import { supabase } from "../lib/supabase";
import keithJoshImg from "../assets/keith_josh.jpeg";
import princeRobbyImg from "../assets/prince_robby.jpeg";

const services = [
  {
    icon: Car,
    title: "Vehicle Sales",
    desc: "Premium buying, selling, and management of vehicles.",
    link: "/vehicles"
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Homes, commercial properties, and prime land.",
    link: "/properties"
  },
  {
    icon: Home,
    title: "Apartments",
    desc: "Luxury short and long-stay apartment listings.",
    link: "/properties"
  },
  {
    icon: Map,
    title: "Tours & Travel",
    desc: "Exclusive destination packages across Uganda.",
    link: "/tours"
  },
  {
    icon: HardHat,
    title: "Construction",
    desc: "Expert residential and commercial construction.",
    link: "/construction"
  },
  {
    icon: Briefcase,
    title: "Consultancy",
    desc: "Strategic business setup and advisory services.",
    link: "/consultation"
  },
  {
    icon: Settings,
    title: "General Suppliers",
    desc: "Reliable supply of office materials, computers, and printers.",
    link: "/general-suppliers"
  },
  {
    icon: Leaf,
    title: "Agri-Business",
    desc: "Professional agricultural business management and advisory.",
    link: "/agriculture"
  },
  {
    icon: Globe,
    title: "Import & Export",
    desc: "Global sourcing and logistics for vehicles and machinery.",
    link: "/import-export"
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Properties Sold" },
  { value: 50, suffix: "+", label: "Vehicles Managed" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Kato Paul",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80",
    text: "King Trust made finding our dream home in Kampala an absolute breeze. Their professionalism is unmatched.",
  },
  {
    name: "Keith Josh",
    image: keithJoshImg,
    text: "Great experience! The company planned our trip to Kasese perfectly—everything from transport to activities was well organized. The team was friendly and made the whole journey smooth and enjoyable. Highly recommend! ",
  },
  {
    name: "Otim Emmanuel",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&q=80",
    text: "I've purchased two vehicles and a commercial property through them. Always transparent and reliable.",
  },
  {
    name: "Prince Robby",
    image: princeRobbyImg,
    text: "We used their business consulting services for our supply company and the results were excellent. They helped us improve our processes and gave very practical guidance. The team was professional, responsive, and easy to work with. Highly recommended!",
  },
  {
    name: "Mukasa James",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&q=80",
    text: "Their business consultancy services are top-notch. Highly recommend for anyone starting a business in Uganda.",
  },
];

export function HomePage() {
  const [featuredVehicles, setFeaturedVehicles] = useState<any[]>([]);
  const [featuredProperties, setFeaturedProperties] = useState<any[]>([]);
  const [featuredTours, setFeaturedTours] = useState<any[]>([]);
  const [dealsLoading, setDealsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const [v, p, t] = await Promise.all([
          supabase.from('vehicles').select('*').eq('featured', true).limit(3),
          supabase.from('properties').select('*').eq('featured', true).limit(3),
          supabase.from('tours').select('*').eq('featured', true).limit(3),
        ]);
        setFeaturedVehicles(v.data || []);
        setFeaturedProperties(p.data || []);
        setFeaturedTours(t.data || []);
      } catch (e) {
        console.error('Error fetching featured items:', e);
      } finally {
        setDealsLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  const hasDeals =
    featuredVehicles.length > 0 ||
    featuredProperties.length > 0 ||
    featuredTours.length > 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy-900/70 mix-blend-multiply z-10"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Your Vision.</span>
            <span className="flex justify-center items-center my-2 md:my-4 w-full">
              <span className="text-white italic pr-2 md:pr-4 text-right">
                Our
              </span>
              <span className="text-left text-gold-500 italic w-[280px] md:w-[480px] whitespace-nowrap">
                <Typewriter words={["Expertise.", "Promise.", "Dedication.", "Foundation.", "Excellence.", "Partnership.", "Legacy."]} />
              </span>
            </span>
            <span className="block">Infinite Possibilities.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 font-light"
          >
            Premium real estate, vehicle, and business consultancy in Uganda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-400 transition-all hover:scale-105"
            >
              Explore Our Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
              Welcome to King Trust
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a premier consultancy firm dedicated to delivering
              excellence across multiple sectors. From finding your dream home
              to securing the perfect vehicle, or guiding your business to
              success, our commitment to quality and integrity sets us apart.
            </p>
          </div>

          {/* Services Snapshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 gold-glow-hover group"
              >
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link
                  to={service.link}
                  className="text-gold-600 font-semibold flex items-center gap-2 hover:text-navy-900 transition-colors"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl font-serif font-bold text-gold-500 mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section - Dedicated Luxury Display */}
      {featuredProperties.length > 0 && (
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest">
                  <Home size={14} fill="currentColor" /> Exclusive Real Estate
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
                  Featured <span className="text-gold-500">Properties</span>
                </h2>
                <p className="text-lg text-gray-600 font-light">
                  Discover our hand-picked selection of premium homes, commercial spaces, and prime land across Uganda.
                </p>
              </div>
              <Link
                to="/properties"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 text-navy-900 font-bold border-b-2 border-gold-500 pb-1 hover:text-gold-600 hover:border-navy-900 transition-all uppercase tracking-wider text-sm"
              >
                View all listings <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/5 hover:shadow-gold-500/10 transition-all duration-500"
                >
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={property.image_url}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className="bg-gold-500/90 text-navy-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        {property.status}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-gold-500 mb-2">
                        <MapPin size={16} />
                        <span className="text-sm font-medium tracking-wide text-white/90">{property.location}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold-500 transition-colors">
                        {property.title}
                      </h3>
                      <div className="flex items-center justify-between items-end">
                        <div className="text-3xl font-bold text-gold-500">
                          {property.price}
                        </div>
                        <div className="flex gap-4 text-white/80 text-sm">
                          <div className="flex items-center gap-1.5">
                            <Bed size={18} className="text-gold-500" />
                            <span>{property.beds || 0}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Bath size={18} className="text-gold-500" />
                            <span>{property.baths || 0}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Link Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a
                        href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I am interested in the featured property: ${property.title} listed for ${property.price}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-navy-900 px-8 py-3 rounded-full font-bold hover:bg-gold-500 transition-colors shadow-2xl flex items-center gap-2"
                      >
                        Inquire Now <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deals of the Week Section - Simplified Vehicles & Tours */}
      {(dealsLoading || (featuredVehicles.length > 0 || featuredTours.length > 0)) && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Star size={14} fill="currentColor" /> Premium Deals
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
                Seasonal Highlights
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
            </div>

            {dealsLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-gold-500" size={48} />
              </div>
            ) : (
              <div className="space-y-20">
                {/* Featured Vehicles */}
                {featuredVehicles.length > 0 && (
                  <div>
                    {/* ... (keep existing vehicle code) ... */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center text-gold-500">
                          <Car size={20} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-navy-900">Deal Cars</h3>
                      </div>
                      <Link to="/vehicles" className="flex items-center gap-1 text-gold-600 font-semibold hover:text-navy-900 transition-colors text-sm">
                        View All <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {featuredVehicles.map((vehicle, index) => (
                        <motion.div
                          key={vehicle.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
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
                            <div className="absolute bottom-4 right-4 z-10 bg-white/90 p-1 rounded-full">
                              <Star size={14} fill="#D4A017" className="text-gold-500" />
                            </div>
                            <img
                              src={vehicle.image_url}
                              alt={vehicle.make_model}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <h4 className="text-xl font-serif font-bold text-navy-900 mb-1">{vehicle.make_model}</h4>
                            <p className="text-gray-500 text-sm mb-4">{vehicle.body_type}</p>
                            <div className="grid grid-cols-2 gap-3 mb-5 mt-auto text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar size={15} className="text-gold-500" />
                                <span>{vehicle.year}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Gauge size={15} className="text-gold-500" />
                                <span>{vehicle.mileage}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600 col-span-2">
                                <Settings size={15} className="text-gold-500" />
                                <span>{vehicle.transmission}</span>
                              </div>
                            </div>
                            <a
                              href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I am interested in the vehicle: ${vehicle.make_model} listed for ${vehicle.price}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-2 bg-gray-50 text-navy-900 py-3 rounded-xl font-semibold hover:bg-gold-500 transition-colors"
                            >
                              Inquire Now <ArrowRight size={16} />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <Link
                        to="/vehicles"
                        className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-500 hover:text-navy-900 transition-all"
                      >
                        View All Vehicles <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Featured Tours */}
                {featuredTours.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center text-gold-500">
                          <Map size={20} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-navy-900">Top Tours</h3>
                      </div>
                      <Link to="/tours" className="flex items-center gap-1 text-gold-600 font-semibold hover:text-navy-900 transition-colors text-sm">
                        View All <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {featuredTours.map((tour, index) => (
                        <motion.div
                          key={tour.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 gold-glow-hover group flex flex-col"
                        >
                          <div className="relative h-56 overflow-hidden">
                            <div className="absolute top-4 right-4 z-10 bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-sm font-bold">
                              {tour.price}
                            </div>
                            <div className="absolute bottom-4 right-4 z-10 bg-white/90 p-1 rounded-full">
                              <Star size={14} fill="#D4A017" className="text-gold-500" />
                            </div>
                            <img
                              src={tour.image_url}
                              alt={tour.package_name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <h4 className="text-xl font-serif font-bold text-navy-900 mb-3">{tour.package_name}</h4>
                            <div className="space-y-2 mb-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Clock size={15} className="text-gold-500" />
                                <span>{tour.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin size={15} className="text-gold-500" />
                                <span>{tour.location}</span>
                              </div>
                            </div>
                            <a
                              href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I would like to book the tour: ${tour.package_name}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto w-full flex items-center justify-center gap-2 bg-gold-500 text-navy-900 py-3 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
                            >
                              Book Now <ArrowRight size={16} />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <Link
                        to="/tours"
                        className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-500 hover:text-navy-900 transition-all"
                      >
                        View All Tours <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
        </div>

        <div className="relative w-full">
          <motion.div
            className="flex gap-6 w-max px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-[400px] min-h-[220px] shrink-0 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
                    {...(testimonial.image.startsWith('http') ? { referrerPolicy: "no-referrer" } : {})}
                  />
                  <div>
                    <h4 className="font-bold text-navy-900 text-base">
                      {testimonial.name}
                    </h4>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <Star size={14} fill="currentColor" className="text-yellow-400" />
                    <Star size={14} fill="currentColor" className="text-yellow-400" />
                    <Star size={14} fill="currentColor" className="text-yellow-400" />
                    <Star size={14} fill="currentColor" className="text-yellow-400" />
                    <Star size={14} fill="currentColor" className="text-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-600 text-base italic flex-1 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gold-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-8">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-navy-800 mb-10 font-medium">
            Let's turn your vision into reality. Contact our team today to
            discuss your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-navy-800 transition-all hover:scale-105 shadow-xl"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
