import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-vineyard.jpg";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 parallax-slow"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/70 via-wine/50 to-wine-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
          L'eleganza del vino abruzzese
          <span className="block text-gradient-gold mt-2">in ogni calice</span>
        </h1>
        
        <p className="font-lato text-xl md:text-2xl text-cream/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Scopri le eccellenze enogastronomiche del territorio più autentico d'Italia.
          Un viaggio tra cantine prestigiose, vini iconici e sapori indimenticabili.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/cantine">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-wine font-semibold px-8 py-6 text-lg transition-all hover:scale-105 shadow-lg"
            >
              Scopri le Cantine
            </Button>
          </Link>
          <Link to="/vini">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-wine font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
            >
              Esplora i Vini
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gold" />
      </div>
    </section>
  );
};
