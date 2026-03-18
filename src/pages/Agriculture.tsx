import React from "react";
import { motion } from "motion/react";
import { 
  Sprout, 
  Droplets, 
  BookOpen, 
  ChefHat, 
  ShoppingCart, 
  ArrowRight, 
  CheckCircle2,
  Users,
  GlassWater,
  Shovel,
  Wind
} from "lucide-react";
import { Link } from "react-router-dom";
import trainingImg from "../assets/agriculture/training.png";

const agriculturalPractices = [
  {
    title: "Modern Crop Management",
    desc: "Learn advanced techniques for soil preparation, planting, and harvesting to maximize yields.",
    icon: Sprout,
  },
  {
    title: "Irrigation Systems Training",
    desc: "Master the setup and maintenance of efficient watering systems, from drip to overhead irrigation.",
    icon: Droplets,
  },
  {
    title: "Organic Farming Methods",
    desc: "We teach sustainable, chemical-free farming practices that preserve soil health and produce high-quality yields.",
    icon: Wind,
  },
  {
    title: "Pest & Disease Control",
    desc: "Expert guidance on identifying and managing agricultural pests and diseases using integrated pest management.",
    icon: CheckCircle2,
  },
];

const supplies = [
  {
    name: "Precision Watering Cans",
    price: "Inquire for Pricing",
    desc: "Durable, ergonomic designs for efficient hand-watering in small to medium gardens.",
    image: "https://images.unsplash.com/photo-1599684871064-a099f7d08f43?auto=format&fit=crop&w=600&q=80",
    icon: GlassWater,
  },
  {
    name: "Premium Seeds & Seedlings",
    price: "Variety Available",
    desc: "High-germination rate seeds for vegetables, fruits, and commercial crops.",
    image: "https://images.unsplash.com/photo-1615826932727-ed9f182ac67e?auto=format&fit=crop&w=600&q=80",
    icon: Sprout,
  },
  {
    name: "Smart Irrigation Kits",
    price: "Custom Solutions",
    desc: "Complete drip and solar-powered irrigation packages for modern farms.",
    image: "https://images.unsplash.com/photo-1558449028-s54930be673b?auto=format&fit=crop&w=600&q=80",
    icon: Droplets,
  },
  {
    name: "Professional Farm Tools",
    price: "Bulk Deals Available",
    desc: "High-quality shovels, rakes, and specialized equipment for commercial use.",
    image: "https://images.unsplash.com/photo-1589052230711-2d46e3e793e4?auto=format&fit=crop&w=600&q=80",
    icon: Shovel,
  },
];

export function AgriculturePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
            alt="Agriculture Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply z-10"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Sowing Seeds of <span className="text-gold-500 italic">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 font-light"
          >
            Professional agricultural training, modern practices, and high-quality farming supplies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#training"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-400 transition-all hover:scale-105"
            >
              Learn Our Practices <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white" id="training">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Cultivating Knowledge
              </h2>
              <div className="w-20 h-1 bg-gold-500 mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At King Trust, we believe that the foundation of a successful agricultural business lies in modern education and sustainable practices. We offer comprehensive training programs designed for both emerging farmers and commercial practitioners.
              </p>
              <div className="space-y-4">
                {[
                  "On-site farm demonstrations",
                  "Soil testing and analysis consultancy",
                  "Climate-smart agriculture advisory",
                  "Harvesting and post-harvest management"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold-500" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border-8 border-gray-50 shadow-2xl relative z-10">
                <img 
                  src={trainingImg} 
                  alt="Agricultural Training in Uganda" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practices Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Core Agricultural Practices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Expertise that drives sustainable growth and optimizes your agricultural investments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agriculturalPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                  <practice.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy-900 mb-4">{practice.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{practice.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplies Section */}
      <section className="py-24 bg-white" id="supplies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4 block">Agricultural Inventory</span>
              <h2 className="text-4xl font-serif font-bold text-navy-900">Premium Supplies & Materials</h2>
            </div>
            <div className="hidden md:block">
              <Link to="/contact" className="text-navy-900 font-bold flex items-center gap-2 hover:text-gold-500 transition-colors">
                Contact for Bulk Orders <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supplies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif font-bold text-navy-900">{item.name}</h3>
                    <span className="text-gold-600 font-bold text-sm italic">{item.price}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-navy-900 font-bold hover:text-gold-500 transition-colors"
                  >
                    Send Inquiry <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Ready to Elevate Your Farming?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light max-w-2xl mx-auto">
            Whether you need expert training or high-quality agricultural materials, we are here to support your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-400 transition-all hover:scale-105"
            >
              Get a Free Consultation <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/256775275716"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-navy-900 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
