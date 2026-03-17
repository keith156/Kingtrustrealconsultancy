import { motion } from "motion/react";
import { Stethoscope, FileText, ShieldCheck, Globe, Zap, Clock } from "lucide-react";

const expressServices = [
  { title: "Yellow Fever Vaccination", time: "20 Minutes", icon: Stethoscope, category: "Health" },
  { title: "COVID Testing", time: "1 Hour", icon: Stethoscope, category: "Health" },
  { title: "Passport Processing", time: "3 Days", icon: FileText, category: "Documents" },
  { title: "Interpol Letter", time: "2 Days", icon: ShieldCheck, category: "Security" },
  { title: "Birth Certificate", time: "2 Days", icon: FileText, category: "Documents" },
  { title: "Death Certificate", time: "1 Day", icon: FileText, category: "Documents" },
  { title: "Canadian Visa", time: "Consultation", icon: Globe, category: "Visa" },
  { title: "Visa Extension", time: "2 Days", icon: Globe, category: "Visa" },
  { title: "Land Search & Title", time: "1 Week", icon: FileText, category: "Property" },
];

export function ExpressServices() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            >
              <Zap size={14} fill="currentColor" /> Express Fast-Track
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4"
            >
              Priority <span className="text-gold-500">Document & Health</span> Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              We handle the bureaucracy so you don't have to. Professional, verified, and guaranteed timelines.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center gap-4 bg-navy-50 p-4 rounded-2xl border border-navy-100"
          >
            <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 shadow-lg">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs text-navy-400 font-bold uppercase tracking-wider">Fastest TAT</p>
              <p className="text-lg font-bold text-navy-900">20 Minute Processing</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expressServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-200 transition-all cursor-default overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-50/50 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 shadow-lg group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
                    <service.icon size={28} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <span className="text-gray-500">Target Time:</span>
                  <span className="font-bold text-navy-700 bg-gold-50 px-3 py-1 rounded-lg border border-gold-100">
                    {service.time}
                  </span>
                </div>
              </div>
              
              {/* Progress Detail Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gold-500 w-0 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/256775275716?text=Hi%2C%20I%20am%20interested%20in%20your%20Express%20Document%20and%20Health%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-navy-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-500 hover:text-navy-900 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Request Instant Service <Zap size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
