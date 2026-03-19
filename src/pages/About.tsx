import { motion } from "motion/react";
import { Target, Eye, Shield, CheckCircle2 } from "lucide-react";
import bensonImg from "../assets/ceo_benson.png";
import stevenImg from "../assets/ceo_steven_koch.png";

export function AboutPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            About <span className="text-gold-500">King Trust</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            A legacy of excellence, integrity, and premium service in Uganda.
          </p>
        </div>
      </div>

      {/* Story & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-gold-500 mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              King Trust Real Consultancy Limited was founded with a singular
              vision: to elevate the standard of professional services in
              Uganda. We recognized a need for a unified, premium approach to
              real estate, vehicle management, and business consultancy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we stand as a beacon of trust and reliability, guiding our
              clients through their most important investments and business
              decisions with unmatched expertise and localized knowledge.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-500 translate-x-4 translate-y-4 rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
              alt="Business Meeting"
              className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>

      {/* Vision & Values */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 gold-glow-hover">
              <Eye className="text-gold-500 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the leading and most trusted consultancy firm in East
                Africa, setting the benchmark for excellence in real estate,
                automotive, and business services.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 gold-glow-hover">
              <Target className="text-gold-500 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To deliver bespoke, high-quality solutions that empower our
                clients to achieve their goals, fostering long-term
                relationships built on transparency and results.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 gold-glow-hover">
              <Shield className="text-gold-500 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                Core Values
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold-500 w-5 h-5" /> Integrity &
                  Trust
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold-500 w-5 h-5" /> Premium
                  Quality
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold-500 w-5 h-5" />{" "}
                  Client-Centricity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold-500 w-5 h-5" /> Innovation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Knowledge",
                desc: "Deep understanding of the Ugandan market and regulatory landscape.",
              },
              {
                title: "Premium Network",
                desc: "Exclusive access to high-end properties and luxury vehicles.",
              },
              {
                title: "End-to-End Service",
                desc: "We handle everything from initial consultation to final paperwork.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden fees. Honest, clear, and upfront cost structures.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center gold-glow-hover"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center text-gold-500 mx-auto mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
            Leadership Team
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div whileHover={{ y: -10 }} className="text-center group">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gold-500/20 group-hover:border-gold-500 transition-colors">
              <img
                src={bensonImg}
                alt="Namanya Benson"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold text-navy-900">
              Namanya Benson
            </h3>
            <p className="text-gold-600 font-medium uppercase tracking-wider text-sm mt-2">
              Director
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="text-center group">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gold-500/20 group-hover:border-gold-500 transition-colors">
              <img
                src={stevenImg}
                alt="Steven Koch"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold text-navy-900">
              Steven Koch
            </h3>
            <p className="text-gold-600 font-medium uppercase tracking-wider text-sm mt-2">
              Director
            </p>
          </motion.div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-gold-500 mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold mb-4">
            Certified & Registered
          </h2>
          <p className="text-gray-300 text-lg">
            King Trust Real Consultancy Limited is fully registered under the
            Uganda Companies Act 2012 and certified by the Uganda Registration
            Services Bureau (URSB).
          </p>
        </div>
      </div>
    </div>
  );
}
