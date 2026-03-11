import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";
  const isSolid = isScrolled || isMobileMenuOpen || !isHomePage;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
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
          <div className="hidden md:flex items-center space-x-8">
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
            <button
              onClick={() => setShowLogin(true)}
              className="text-sm font-medium tracking-wide transition-colors text-navy-800 hover:text-navy-700"
            >
              ADMIN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden bg-navy-900 border-t border-navy-800 absolute top-full left-0 w-full">
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
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setShowLogin(true);
              }}
              className="block w-full text-left px-3 py-3 text-base font-medium transition-colors text-navy-800 hover:text-navy-700 hover:bg-navy-800"
            >
              ADMIN
            </button>
          </div>
        </div>
      )}

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
    </nav>
  );
}
