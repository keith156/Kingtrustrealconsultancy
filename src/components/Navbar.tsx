import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Properties", path: "/properties" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "Tours", path: "/tours" },
    { name: "Construction", path: "/construction" },
    { name: "Consultation", path: "/consultation" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";
  const isSolid = isScrolled || isMobileMenuOpen || !isHomePage;

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isSolid
          ? "bg-navy-900 shadow-lg py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold-500 rounded flex items-center justify-center text-navy-900 font-serif font-bold text-xl group-hover:bg-gold-400 transition-colors">
              KT
            </div>
            <span className="text-white font-serif font-bold text-xl tracking-wider">
              KING TRUST
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-gold-500",
                  location.pathname === link.path
                    ? "text-gold-500"
                    : "text-gray-300",
                )}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-800 absolute top-full left-0 w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-3 text-base font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-gold-500 bg-navy-800"
                    : "text-gray-300 hover:text-gold-500 hover:bg-navy-800",
                )}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
