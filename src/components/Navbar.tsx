import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Wine } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cantine", label: "Cantine" },
    { to: "/vini", label: "Vini" },
    { to: "/territorio", label: "Territorio" },
    { to: "/eventi", label: "Eventi" },
    { to: "/about", label: "Chi Siamo" },
    { to: "/contatti", label: "Contatti" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Wine className={`h-8 w-8 transition-colors ${isScrolled ? 'text-wine' : 'text-gold'}`} />
            <span className={`font-playfair text-2xl font-bold transition-colors ${
              isScrolled ? 'text-wine' : 'text-gold'
            }`}>
              Abruzzo diVino
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-lato font-medium transition-colors hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left ${
                  isScrolled ? 'text-foreground' : 'text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-wine' : 'text-gold'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-wine' : 'text-gold'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-lato font-medium text-foreground hover:text-gold transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
