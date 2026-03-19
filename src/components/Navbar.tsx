import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
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
    setActiveMobileDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Construction", path: "/construction" },
        { name: "Consultation", path: "/consultation" },
        { name: "Agri-Business", path: "/agriculture" },
        { name: "Import & Export", path: "/import-export" },
      ],
    },
    {
      name: "Listings",
      dropdown: [
        { name: "Properties", path: "/properties" },
        { name: "Vehicles", path: "/vehicles" },
        { name: "Tours", path: "/tours" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";
  const isSolid = isScrolled || isMobileMenuOpen || !isHomePage;

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 overflow-visible",
        isSolid
          ? "bg-navy-900 shadow-lg h-[88px]"
          : "bg-transparent h-[106px]",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center gap-4 group py-1">
            <div className="relative flex items-center justify-center w-28 h-28">
              {/* Elegant Glass Halo */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-colors duration-500" />
              <Logo className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif font-bold text-lg tracking-wider drop-shadow-md leading-none">
                KING TRUST
              </span>
              <span className="text-gold-500 font-sans text-[9px] tracking-[0.25em] font-medium mt-1.5 leading-none uppercase">
                REAL CONSULTANCY
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-4">
                {link.dropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer group-hover:text-gold-500 transition-colors">
                    {link.path ? (
                      <Link
                        to={link.path}
                        className={cn(
                          "text-sm font-medium tracking-wide transition-colors",
                          location.pathname === link.path || link.dropdown.some(d => location.pathname === d.path)
                            ? "text-gold-500"
                            : "text-gray-300",
                        )}
                      >
                        {link.name.toUpperCase()}
                      </Link>
                    ) : (
                      <span className={cn(
                        "text-sm font-medium tracking-wide transition-colors",
                        link.dropdown.some(d => location.pathname === d.path)
                          ? "text-gold-500"
                          : "text-gray-300",
                      )}>
                        {link.name.toUpperCase()}
                      </span>
                    )}
                    <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link
                    to={link.path!}
                    className={cn(
                      "text-sm font-medium tracking-wide transition-colors hover:text-gold-500 whitespace-nowrap",
                      location.pathname === link.path
                        ? "text-gold-500"
                        : "text-gray-300",
                    )}
                  >
                    {link.name.toUpperCase()}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-navy-900/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 overflow-hidden py-2 mt-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors hover:bg-gold-500/10 hover:text-gold-500",
                            location.pathname === item.path
                              ? "text-gold-500 bg-gold-500/5"
                              : "text-gray-300",
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

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
        <div className="lg:hidden bg-navy-900 border-t border-navy-800 absolute top-full left-0 w-full shadow-lg h-screen overflow-y-auto">
          <div className="px-4 pt-2 pb-24 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleMobileDropdown(link.name)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-3 text-base font-medium transition-colors rounded-lg",
                        activeMobileDropdown === link.name || link.dropdown.some(d => location.pathname === d.path)
                          ? "text-gold-500 bg-navy-800"
                          : "text-gray-300 hover:text-gold-500 hover:bg-navy-800",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {link.name.toUpperCase()}
                      </span>
                      <ChevronDown
                        size={18}
                        className={cn(
                          "transition-transform duration-300",
                          activeMobileDropdown === link.name && "rotate-180"
                        )}
                      />
                    </button>
                    {activeMobileDropdown === link.name && (
                      <div className="bg-navy-950/50 rounded-lg py-1 ml-4 border-l border-navy-800">
                        {link.path && (
                          <Link
                            to={link.path}
                            className={cn(
                              "block px-4 py-3 text-sm transition-colors",
                              location.pathname === link.path
                                ? "text-gold-500"
                                : "text-gray-400 hover:text-gold-500",
                            )}
                          >
                            All {link.name}
                          </Link>
                        )}
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={cn(
                              "block px-4 py-3 text-sm transition-colors",
                              location.pathname === item.path
                                ? "text-gold-500"
                                : "text-gray-400 hover:text-gold-500",
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path!}
                    className={cn(
                      "block px-3 py-3 text-base font-medium transition-colors rounded-lg",
                      location.pathname === link.path
                        ? "text-gold-500 bg-navy-800"
                        : "text-gray-300 hover:text-gold-500 hover:bg-navy-800",
                    )}
                  >
                    {link.name.toUpperCase()}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
