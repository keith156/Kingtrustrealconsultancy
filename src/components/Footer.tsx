import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 pt-16 pb-8 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-500 rounded flex items-center justify-center text-navy-900 font-serif font-bold text-xl">
                KT
              </div>
              <span className="text-white font-serif font-bold text-xl tracking-wider">
                KING TRUST
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium Ugandan real estate, vehicle, and business consultancy.
              Your vision, our expertise, infinite possibilities.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Properties",
                "Vehicles",
                "Tours & Travel",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to={
                      link === "Home"
                        ? "/"
                        : `/${link.toLowerCase().replace(/ & | /g, "-")}`
                    }
                    className="hover:text-gold-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                "Real Estate",
                "Vehicle Sales",
                "Apartments",
                "Tours & Travel",
                "Construction",
                "Business Consultancy",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="hover:text-gold-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <span>
                  P.O Box 203910
                  <br />
                  Kampala GPO, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={20} />
                <span>+256 (0) 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={20} />
                <span>info@kingtrust.co.ug</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 text-center text-sm text-gray-500">
          <p>
            © 2026 King Trust Real Consultancy Limited. Registered in Uganda.
          </p>
        </div>
      </div>
    </footer>
  );
}
