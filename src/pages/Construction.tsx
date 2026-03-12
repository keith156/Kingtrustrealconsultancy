import { motion } from "motion/react";
import { HardHat, Ruler, Hammer, Building, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Building className="w-8 h-8 text-gold-500" />,
    title: "Commercial Construction",
    description: "State-of-the-art office buildings, retail spaces, and industrial facilities built to your exact specifications."
  },
  {
    icon: <HardHat className="w-8 h-8 text-gold-500" />,
    title: "Residential Development",
    description: "Custom homes, apartment complexes, and residential communities designed for modern living."
  },
  {
    icon: <Hammer className="w-8 h-8 text-gold-500" />,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our comprehensive renovation and modernization services."
  },
  {
    icon: <Ruler className="w-8 h-8 text-gold-500" />,
    title: "Project Management",
    description: "End-to-end project oversight ensuring on-time delivery and strict budget adherence."
  }
];

export function ConstructionPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Hero */}
      <div className="bg-navy-900 text-white pt-32 pb-20 px-4 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Construction"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Construction Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Building the future with precision, quality, and unmatched expertise.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-navy-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy-900 rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Contact our construction experts today to discuss your vision and get a comprehensive project estimate.
            </p>
            <a 
              href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I would like to request a quote for a construction project.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-navy-900 px-8 py-4 rounded-full font-bold hover:bg-gold-400 transition-colors inline-flex items-center gap-2"
            >
              Request a Quote <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
