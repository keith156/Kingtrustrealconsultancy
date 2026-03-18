import { motion } from "motion/react";
import { Globe, Ship, Truck, ShieldCheck, ArrowRight, Package, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Ship,
    title: "Global Sourcing",
    desc: "We source high-quality vehicles and machinery directly from Japan, the UK, and Dubai."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Every item is thoroughly inspected before shipment to ensure it meets our strict quality standards."
  },
  {
    icon: Truck,
    title: "Door-to-Door Delivery",
    desc: "Complete logistics management from the port of origin directly to your location in Uganda."
  },
  {
    icon: Package,
    title: "Customs Clearing",
    desc: "We handle all paperwork and customs documentation to ensure a smooth clearing process."
  }
];

const processSteps = [
  {
    title: "Consultation",
    desc: "Discuss your specific requirements for a vehicle or machinery with our expert team."
  },
  {
    title: "Sourcing",
    desc: "We identify the best options from our global network of verified suppliers."
  },
  {
    title: "Inspection & Payment",
    desc: "Detailed inspection reports are provided before you finalize the purchase."
  },
  {
    title: "Shipping & Clearing",
    desc: "We manage the entire transit and handle all customs duties and taxes."
  }
];

export function ImportExportPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-navy-900 text-white pt-32 pb-20 px-4 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Import Export Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-500 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-gold-500/20"
          >
            <Globe size={18} /> Global Sourcing & Logistics
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Import & <span className="text-gold-500">Export</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Reliable international trade solutions connecting Uganda to the world's best markets.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Bridging the Gap to <br />
                <span className="text-gold-500">Global Markets</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At King Trust, we handle the complexities of international trade so you don't have to. 
                Whether you are looking to import a specific vehicle from Japan, heavy earth-moving 
                machinery from the UK, or general merchandise from Dubai, our team ensures a seamless experience.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Certified supplier networks in Japan, UK, and UAE",
                "Real-time tracking of shipments",
                "Fixed pricing with no hidden charges",
                "Full assistance with URA customs and taxes"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Logistics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="text-4xl font-serif font-bold text-gold-500 mb-1">100%</div>
              <div className="text-navy-900 font-bold uppercase tracking-widest text-xs">Safe Delivery</div>
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <div className="bg-navy-900 rounded-[3rem] p-12 md:p-20 text-white mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Simple Process</h2>
            <p className="text-gray-400">How we get your assets from the port to your doorstep.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-serif font-bold text-gold-500/10 absolute -top-4 -left-2">
                  0{index + 1}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-bold mb-3 text-gold-500">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-gold-500/30">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Ready to Start a Request?</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Let us know what you are looking for, and we will provide a comprehensive quote including all shipping and clearing costs.
          </p>
          <a 
            href="https://wa.me/256775275716?text=Hi, I would like to inquire about your Import and Export services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold-500 text-navy-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gold-400 transition-all hover:scale-105 shadow-xl shadow-gold-500/20"
          >
            Request a Quote <ArrowRight size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}
