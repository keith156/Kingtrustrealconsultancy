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
} from "lucide-react";
import { Link } from "react-router-dom";
import { Counter } from "../components/Counter";
import { Typewriter } from "../components/Typewriter";

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
    image: "/keith_josh.jpeg",
    text: "Great experience! The company planned our trip to Kasese perfectly—everything from transport to activities was well organized. The team was friendly and made the whole journey smooth and enjoyable. Highly recommend! ",
  },
  {
    name: "Otim Emmanuel",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&q=80",
    text: "I've purchased two vehicles and a commercial property through them. Always transparent and reliable.",
  },
  {
    name: "Prince Robby",
    image: "/prince_robby.jpeg",
    text: "We used their business consulting services for our supply company and the results were excellent. They helped us improve our processes and gave very practical guidance. The team was professional, responsive, and easy to work with. Highly recommended!",
  },
  {
    name: "Mukasa James",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&q=80",
    text: "Their business consultancy services are top-notch. Highly recommend for anyone starting a business in Uganda.",
  },
];

export function HomePage() {
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
