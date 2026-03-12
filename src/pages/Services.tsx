import { motion } from "motion/react";
import {
  Car,
  Building2,
  Home,
  Map,
  HardHat,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "vehicles",
    icon: Car,
    title: "Vehicle Sales & Management",
    desc: "Premium buying, selling, and management of vehicles. We source high-quality new and used cars, SUVs, and trucks, ensuring transparency and value in every transaction.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/vehicles",
  },
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate & Property Management",
    desc: "Discover your dream home, secure prime commercial properties, or invest in land. Our comprehensive property management services ensure your assets are well-maintained and profitable.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    link: "/properties",
  },
  {
    id: "apartments",
    icon: Home,
    title: "Apartments",
    desc: "Curated listings of luxury short and long-stay apartments. Whether you need a temporary executive suite or a permanent residence, we have the perfect space for you.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/properties",
  },
  {
    id: "tours",
    icon: Map,
    title: "Tours & Travel",
    desc: "Experience the Pearl of Africa. We offer exclusive destination packages across Uganda and beyond, handling everything from itineraries to accommodation and transport.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/tours",
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction",
    desc: "Expert residential and commercial construction services. From architectural design to final execution, we build structures that stand the test of time.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/contact",
  },
  {
    id: "consultancy",
    icon: Briefcase,
    title: "Business Consultancy",
    desc: "Strategic advisory for your business success. We provide feasibility studies, business setup assistance, and expert guidance to navigate the Ugandan market.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/contact",
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-navy-900 text-white pt-32 pb-20 px-4 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Our <span className="text-gold-500">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Comprehensive solutions tailored to your unique needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 shadow-lg">
                <service.icon size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
                {service.title}
              </h2>
              <div className="w-16 h-1 bg-gold-500"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.desc}
              </p>
              <div className="pt-4">
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-500 hover:text-navy-900 transition-all shadow-md"
                >
                  Explore {service.title.split(" ")[0]} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
