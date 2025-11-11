import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin, Wine, ArrowRight } from "lucide-react";
import { cantine } from "@/data/cantine";

const Cantine = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Cantine d'Eccellenza
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto animate-fade-in-up">
            Le migliori cantine abruzzesi, custodi di tradizione millenaria e innovazione enologica
          </p>
        </div>
      </section>

      {/* Cantine Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cantine.map((cantina, index) => (
              <Card
                key={cantina.id}
                className="overflow-hidden hover-lift bg-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 aspect-square md:aspect-auto bg-wine/10 relative overflow-hidden flex items-center justify-center">
                    <Wine className="h-32 w-32 text-wine/20 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine/60 to-transparent" />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h2 className="font-playfair text-3xl font-bold text-wine mb-2">
                      {cantina.nome}
                    </h2>
                    <div className="flex items-center text-gold mb-4">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="font-semibold">{cantina.località}</span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cantina.descrizione}
                    </p>
                    <p className="text-foreground mb-4 text-sm leading-relaxed">
                      {cantina.storia}
                    </p>
                    <div className="mb-4">
                      <h3 className="font-playfair font-semibold text-wine mb-2">Vini principali:</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {cantina.vini.map((vino, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2" />
                            {vino}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
                      Visita il sito
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cantine;
