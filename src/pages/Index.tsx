import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wine, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cantine } from "@/data/cantine";
import { vini } from "@/data/vini";
import wineCellarImage from "@/assets/wine-cellar.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const { ref: cantineRef, isVisible: cantineVisible } = useScrollAnimation(0.2);
  const { ref: viniRef, isVisible: viniVisible } = useScrollAnimation(0.2);
  const { ref: territorioRef, isVisible: territorioVisible } = useScrollAnimation(0.2);
  const { ref: newsletterRef, isVisible: newsletterVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Cantine d'Eccellenza */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              ref={cantineRef as React.RefObject<HTMLHeadingElement>}
              className={`font-playfair text-4xl md:text-5xl font-bold text-wine mb-4 transition-all duration-1000 ${
                cantineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Cantine d'Eccellenza
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Le migliori cantine abruzzesi, custodi di tradizione e innovazione
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cantine.slice(0, 6).map((cantina, index) => (
              <Card
                key={cantina.id}
                className="overflow-hidden hover-lift bg-card group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={`/cantine/${cantina.id}`} className="block">
                  <div className="aspect-video bg-wine/10 relative overflow-hidden">
                    <img 
                      src={cantina.immagine} 
                      alt={cantina.nome}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine/80 to-transparent z-10" />
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-wine mb-2">
                    {cantina.nome}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-gold" />
                    <span className="text-sm">{cantina.località}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {cantina.descrizione}
                  </p>
                  <div className="flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
                    Scopri di più
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/cantine">
              <Button
                size="lg"
                className="bg-wine hover:bg-wine-dark text-cream"
              >
                Vedi Tutte le Cantine
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vini Iconici */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              ref={viniRef as React.RefObject<HTMLHeadingElement>}
              className={`font-playfair text-4xl md:text-5xl font-bold text-wine mb-4 transition-all duration-1000 ${
                viniVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Vini Iconici
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Le etichette che hanno fatto la storia dell'enologia abruzzese
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {vini.slice(0, 6).map((vino, index) => (
              <Card
                key={vino.id}
                className="overflow-hidden hover-lift bg-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to="/vini" className="block">
                  <div className="aspect-[3/4] bg-gradient-to-b from-wine/5 to-wine/10 relative overflow-hidden">
                    <img 
                      src={vino.immagine} 
                      alt={`${vino.nome} - ${vino.cantina}`}
                      className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        vino.tipologia === 'Rosso' ? 'bg-wine text-cream' :
                        vino.tipologia === 'Bianco' ? 'bg-gold text-wine' :
                        'bg-wine-light text-cream'
                      }`}>
                        {vino.tipologia}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-wine mb-1">
                    {vino.nome}
                  </h3>
                  <p className="text-sm text-gold font-semibold mb-3">
                    {vino.cantina}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {vino.vitigno}
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {vino.descrizione}
                  </p>
                  <div className="flex items-center text-gold font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    Scopri di più
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/vini">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-wine"
              >
                Esplora Tutti i Vini
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Territorio Section */}
      <section className="py-24 bg-wine text-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                ref={territorioRef as React.RefObject<HTMLHeadingElement>}
                className={`font-playfair text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
                  territorioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Il Territorio
              </h2>
              <p className="text-lg text-cream/90 mb-6 leading-relaxed">
                L'Abruzzo è una terra di contrasti: dalle vette del Gran Sasso alle dolci
                colline che degradano verso l'Adriatico. Qui il vino nasce da un equilibrio
                perfetto tra montagna e mare, tra tradizione millenaria e innovazione.
              </p>
              <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                I vitigni autoctoni - Montepulciano, Trebbiano, Pecorino - trovano in questo
                microclima le condizioni ideali per esprimere eleganza, struttura e carattere
                unico.
              </p>
              <Link to="/territorio">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-wine"
                >
                  Scopri il Territorio
                </Button>
              </Link>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={wineCellarImage}
                  alt="Cantina abruzzese"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gold/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 
              ref={newsletterRef as React.RefObject<HTMLHeadingElement>}
              className={`font-playfair text-4xl md:text-5xl font-bold text-wine mb-4 transition-all duration-1000 ${
                newsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Resta Aggiornato
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Iscriviti alla newsletter per ricevere news su eventi, degustazioni e nuove etichette
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-6 py-3 rounded-lg border-2 border-wine/20 focus:border-gold focus:outline-none"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-wine hover:bg-wine-dark text-cream"
              >
                Iscriviti
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
