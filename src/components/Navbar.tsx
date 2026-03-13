import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Logo } from "./Logo";

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
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="h-20 w-auto -my-2 relative z-10" />
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
                    : isSolid ? "text-navy-900" : "text-gray-300",
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
              className={cn(
                "hover:text-gold-500 transition-colors",
                isSolid ? "text-navy-900" : "text-white"
              )}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-3 text-base font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-gold-500 bg-gray-50"
                    : "text-navy-900 hover:text-gold-500 hover:bg-gray-50",
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
