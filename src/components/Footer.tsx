import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "Benson" && password === "benson@kingtrust26") {
      setShowLogin(false);
      setUsername("");
      setPassword("");
      setLoginError(false);
      navigate("/admin");
    } else {
      setLoginError(true);
    }
  };

  return (
    <footer className="bg-navy-900 text-gray-300 pt-16 pb-8 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="h-20 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium Ugandan real estate, vehicle, and business consultancy.
              Your vision, our expertise, infinite possibilities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/realconsultantslimited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@kingtrustrealconsultant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
                title="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.42-.14 1.01.23 2.1 1.01 2.73.65.57 1.54.88 2.39.81 1.03-.01 2.08-.55 2.58-1.45.19-.34.33-.72.33-1.11z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
                title="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
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
                  Kikaya Bahai road,
                  <br />
                  opposite Total Bahai
                  <br />
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={20} />
                <div className="flex flex-col">
                  <span>+256 775 275 716</span>
                  <span>+256 709 668 654</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={20} />
                <span>info@kingtrustconsultancy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © 2026 King Trust Real Consultancy Limited. Registered in Uganda.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <button
              onClick={() => setShowLogin(true)}
              className="text-gray-500 hover:text-gold-500 transition-colors"
            >
              Admin Login
            </button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] px-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none text-black"
                  placeholder="Enter username"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none text-black"
                  placeholder="Enter password"
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-sm font-medium">Invalid username or password.</p>
              )}
              <div className="flex justify-end gap-3 mt-8">
                <button 
                  type="button" 
                  onClick={() => setShowLogin(false)} 
                  className="px-5 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-navy-900 text-white rounded-xl font-bold hover:bg-navy-800 transition-colors"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}
