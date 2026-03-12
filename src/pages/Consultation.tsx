import { motion } from "motion/react";
import { Briefcase, TrendingUp, Users, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Briefcase className="w-8 h-8 text-gold-500" />,
    title: "Business Strategy",
    description: "Comprehensive business planning, market analysis, and strategic growth roadmaps."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-gold-500" />,
    title: "Financial Advisory",
    description: "Investment planning, risk management, and financial optimization for your enterprise."
  },
  {
    icon: <Users className="w-8 h-8 text-gold-500" />,
    title: "HR & Management",
    description: "Organizational structuring, talent acquisition strategies, and leadership development."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-gold-500" />,
    title: "Innovation Consulting",
    description: "Digital transformation, process optimization, and technology integration."
  }
];

export function ConsultationPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Hero */}
      <div className="bg-navy-900 text-white pt-32 pb-20 px-4 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Consultation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Business Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Strategic advisory and management solutions to accelerate your business growth.
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Schedule a Consultation</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss how we can help your business achieve its full potential.
            </p>
            <a 
              href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I would like to book a business consultation appointment.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-navy-900 px-8 py-4 rounded-full font-bold hover:bg-gold-400 transition-colors inline-flex items-center gap-2"
            >
              Book an Appointment <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
