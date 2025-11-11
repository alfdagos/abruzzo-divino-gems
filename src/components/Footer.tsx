import { Wine, Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-wine text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo e Citazione */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Wine className="h-8 w-8 text-gold" />
              <span className="font-playfair text-2xl font-bold text-gold">
                Abruzzo diVino
              </span>
            </div>
            <p className="font-playfair italic text-lg text-gold-light mb-4">
              "Il vino è la poesia della terra"
            </p>
            <p className="text-cream/80 leading-relaxed">
              L'eleganza del vino abruzzese in ogni calice. Scopri le eccellenze
              enogastronomiche del territorio più autentico d'Italia.
            </p>
          </div>

          {/* Link Rapidi */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-gold mb-4">
              Esplora
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cantine" className="text-cream/80 hover:text-gold transition-colors">
                  Cantine d'Eccellenza
                </Link>
              </li>
              <li>
                <Link to="/vini" className="text-cream/80 hover:text-gold transition-colors">
                  Vini Iconici
                </Link>
              </li>
              <li>
                <Link to="/territorio" className="text-cream/80 hover:text-gold transition-colors">
                  Territorio e Sapori
                </Link>
              </li>
              <li>
                <Link to="/eventi" className="text-cream/80 hover:text-gold transition-colors">
                  Eventi
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-gold mb-4">
              Seguici
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@abruzzodiVino.it"
                className="text-cream/80 hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream/20 pt-8 text-center text-cream/60 text-sm">
          <p>© {new Date().getFullYear()} Abruzzo diVino. Tutti i diritti riservati.</p>
          <p className="mt-2">
            Bevi responsabilmente. La vendita di alcolici ai minori di 18 anni è vietata.
          </p>
        </div>
      </div>
    </footer>
  );
};
