import { motion } from "motion/react";
import { Settings, Printer, Monitor, Paperclip, Truck, ShieldCheck, ArrowRight } from "lucide-react";

const products = [
  {
    icon: <Monitor className="w-8 h-8 text-gold-500" />,
    title: "Computers & Laptops",
    description: "High-performance workstations, laptops, and servers from leading brands tailored for business and personal use."
  },
  {
    icon: <Printer className="w-8 h-8 text-gold-500" />,
    title: "Printers & Scanners",
    description: "Multi-function printers, high-speed scanners, and industrial printing solutions with full setup and maintenance support."
  },
  {
    icon: <Paperclip className="w-8 h-8 text-gold-500" />,
    title: "Office Stationery",
    description: "Comprehensive range of high-quality stationery, paper products, and general office consumables."
  },
  {
    icon: <Settings className="w-8 h-8 text-gold-500" />,
    title: "IT Accessories",
    description: "Networking gear, storage devices, peripherals, and all essential computer accessories."
  }
];

const features = [
  {
    icon: <Truck className="w-6 h-6 text-gold-500" />,
    title: "Timely Delivery",
    desc: "We understand business urgency and ensure your supplies reach you when you need them."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
    title: "Quality Guaranteed",
    desc: "All our products are sourced from reputable manufacturers and come with standard warranties."
  }
];

export function GeneralSuppliersPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Hero */}
      <div className="bg-navy-900 text-white pt-32 pb-20 px-4 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Office Supplies"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            General <span className="text-gold-500">Suppliers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Your one-stop destination for premium office materials, IT hardware, and essential business supplies.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-navy-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">{product.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">Why Partner with Us?</h2>
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[300px]">
             <img 
               src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
               alt="Warehouse" 
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-navy-900/40"></div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy-900 rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Bulk Orders & Pricing</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Need a custom quote for your organization? Contact our sales team for competitive bulk pricing and procurement assistance.
            </p>
            <a 
              href={`https://wa.me/256775275716?text=${encodeURIComponent(`Hi, I would like to inquire about general supplies (Computers/Stationery).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-navy-900 px-8 py-4 rounded-full font-bold hover:bg-gold-400 transition-colors inline-flex items-center gap-2"
            >
              Contact Sales <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
